import React, { useState } from "react";

// import {BsFillPlayFill, BsPauseFill} from "react-icons/bs"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  function handleVideo() {
    setPlayVideo((prev) => !prev);

    // we could also say this below,
    // if we don't want to use the previous version of the state
    // setPlayVideo(true)
    // setPlayVideo(false)

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className="relative h-screen">
      <video
        src={meal}
        ref={vidRef}
        loop
        type="video/mp4"
        controls={false}
        muted
        className=" h-full w-full object-cover"
      />

      <div className="flex-center absolute inset-0 z-10 bg-black opacity-[.65] ">
        <div
          className="flex-center aspect-square w-[100px] cursor-pointer 
          rounded-full border-2 border-solid border-golden"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
