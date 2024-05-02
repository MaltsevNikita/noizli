'use client'
import Image from "next/image";
import React, { useRef } from 'react';


const Home = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  const rewindAudio = (seconds) => {
    audioRef.current.currentTime -= seconds;
  };

  const forwardAudio = (seconds) => {
    audioRef.current.currentTime += seconds;
  };

  return (
    <div>
      <div className="buttons">
        <button className="border w-full h-40 flex items-center justify-center" onClick={playAudio}>Play</button>
        <button className="border w-full h-40 flex items-center justify-center" onClick={pauseAudio}>Pause</button>
        <button className="border w-full h-40 flex items-center justify-center" onClick={() => rewindAudio(10)}>Rewind 10s</button>
        <button className="border w-full h-40 flex items-center justify-center" onClick={() => forwardAudio(10)}>Forward 10s</button>
      </div>
      
      <audio ref={audioRef} src="/music/001.mp3" preload="auto" />
    </div>
  );
};

export default Home;

