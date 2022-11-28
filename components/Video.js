import React from "react";
import YouTube from "react-youtube";

const Video = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return <YouTube videoId="2g811Eo7K8U" opts={opts} />;
};

export default Video;
