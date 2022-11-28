import React from "react";
// import ReactPlayer from "react-player";
import Image from "next/image";
// import ReactPlayer from "react-player/youtube";
import YouTube from "react-youtube";

{
  /* <div>
{mediaType === "video" ? (
  <Player />
) : (
  <img src={mediaSrc} alt={mediaAlt} width={500} height={500}></img>
)}
</div> */
  // { mediaType, mediaSrc, mediaAlt = "unknown media" }
}

const Media = () => {
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

export default Media;
