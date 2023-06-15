import React, { useState } from "react";
import sound from "../seeyouagain.mp3";
import "./box.css";

export default function Box(props) {
  const [audio, setAudio] = useState(new Audio(sound));
  if (props.clicked === true) {
    if (props.text === "Say hi") {
      props.setMessage("See you again!");
      audio.play();
    } else {
      props.setMessage("Hello world!");
      audio.pause();
    }
    return <div className="box">{props.message}</div>;
  }
}
