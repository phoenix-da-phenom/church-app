import React, { useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("https://church-backend-58s3.onrender.com");

export default function VideoComponent() {
  const videoRef = useRef(null);
  const peerRef = useRef(null);

  useEffect(() => {
    const peer = new RTCPeerConnection();

    // Handle receiving the remote stream
    peer.ontrack = (event) => {
      const [remoteStream] = event.streams;
      videoRef.current.srcObject = remoteStream;
      videoRef.current.play();
    };

    peer.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("signal", { candidate: event.candidate });
      }
    };

    socket.on("signal", async (data) => {
      if (data.description) {
        await peer.setRemoteDescription(data.description);
        if (data.description.type === "offer") {
          const answer = await peer.createAnswer();
          await peer.setLocalDescription(answer);
          socket.emit("signal", { description: peer.localDescription });
        }
      } else if (data.candidate) {
        await peer.addIceCandidate(data.candidate);
      }
    });

    peerRef.current = peer;
  }, []);

  function playVideo() {
    const videoElement = document.getElementById("videoElement"); // Adjust ID accordingly
    if (videoElement) {
        videoElement.play().catch((err) => {
            console.error("Failed to play video:", err.message);
        });
    }
}

  return (
    <div id="videoComponentWrapper" className="video-component">
      <div
        id="videoContainer"
        className="bg-black w-100 md:w-[100%] h-[70vh]"
      >
        <video ref={videoRef} autoPlay style={{ width: "100%" }} muted  controls/>
        {/* Add a user interaction trigger */}
<button onClick={playVideo} className="bg-green-500 p-3">Start Stream</button>
      </div>
    </div>
  );
}
