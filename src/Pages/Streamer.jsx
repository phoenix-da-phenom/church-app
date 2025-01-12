import React, { useRef, useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("https://church-backend-58s3.onrender.com"); // Connect to the signaling server

const Streamer = () => {
  const videoRef = useRef(null);
  const peerRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    let localStream;
    
    async function startStreaming() {
      try {
        // Access the user's camera and microphone
        localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setStream(localStream);

        // Display the stream locally
        if (videoRef.current) {
          videoRef.current.srcObject = localStream;

          // Wait for the video element to be ready before calling play
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play().catch((error) => {
              console.error("Error playing video:", error);
            });
          };
        }

        // Set up WebRTC peer connection
        const peer = new RTCPeerConnection();
        localStream.getTracks().forEach((track) => peer.addTrack(track, localStream));

        peer.onicecandidate = (event) => {
          if (event.candidate) {
            socket.emit("signal", { candidate: event.candidate });
          }
        };

        peer.onnegotiationneeded = async () => {
          const offer = await peer.createOffer();
          await peer.setLocalDescription(offer);
          socket.emit("signal", { description: peer.localDescription });
        };

        peerRef.current = peer;
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    }

    startStreaming();

    socket.on("signal", async (data) => {
      if (data.description) {
        await peerRef.current.setRemoteDescription(data.description);
      } else if (data.candidate) {
        await peerRef.current.addIceCandidate(data.candidate);
      }
    });

    // Clean up on component unmount
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
      <video ref={videoRef} autoPlay muted style={{ width: "100%" }} />
    </div>
  );
};

export default Streamer;
