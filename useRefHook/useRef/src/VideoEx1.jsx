import monkeyVideo from "./assets/monkey.mp4";
import { useRef } from "react";

function Video() {
  const videoRef = useRef(null);

  function enter() {
    videoRef.current.play();
  }

  function leave() {
    videoRef.current.pause();
  }

  return (
    <video
      ref={videoRef}
      onMouseEnter={enter}
      onMouseLeave={leave}
      src={monkeyVideo}
    ></video>
  );
}

export default Video;
