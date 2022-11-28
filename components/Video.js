import React from "react";
import YouTube from "react-youtube";

const Video = ({ height, width, mediaSrc }) => {
  const opts = {
    height,
    width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return <YouTube videoId={mediaSrc} opts={opts} />;
};

export default Video;
