import React, { useRef, useEffect } from "react";
import io from "socket.io-client";

const socket = io("https://church-backend-58s3.onrender.com"); // Signaling server

const Streamer = () => {
  const videoRef = useRef(null);
  const peerRef = useRef(null);

  useEffect(() => {
    let localStream;

    async function startStreaming() {
      try {
        localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = localStream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play().catch((error) => {
              console.error("Error playing video:", error);
            });
          };
        }

        const peer = new RTCPeerConnection();
        localStream.getTracks().forEach((track) => peer.addTrack(track, localStream));

        peer.onicecandidate = (event) => {
          if (event.candidate) {
            console.log("Sending ICE candidate:", event.candidate);
            socket.emit("signal", { candidate: event.candidate });
          }
        };

        peer.onnegotiationneeded = async () => {
          console.log("Negotiation needed");
          const offer = await peer.createOffer();
          await peer.setLocalDescription(offer);
          console.log("Sending offer:", peer.localDescription);
          socket.emit("signal", { description: peer.localDescription });
        };

        peerRef.current = peer;
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    }

    startStreaming();

    socket.on("signal", async (data) => {
      console.log("Received signal:", data);
      if (data.description) {
        await peerRef.current.setRemoteDescription(data.description);
        console.log("Set remote description");
      } else if (data.candidate) {
        await peerRef.current.addIceCandidate(data.candidate);
        console.log("Added ICE candidate");
      }
    });

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
      if (peerRef.current) {
        peerRef.current.close();
      }
    };
  }, []);

  return (
    <div>
      <h1>Streamer</h1>
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{
          width: "100%",
          height: "auto",
          border: "1px solid black",
        }}
      />
    </div>
  );
};

export default Streamer;
