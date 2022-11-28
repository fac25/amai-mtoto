import React from "react";
import Video from "./Video";

const Media = ({ mediaType, mediaSrc, height, width }) => {
  return mediaType === "video" ? (
    <Video mediaSrc={mediaSrc} height={height} width={width} />
  ) : (
    <img src={mediaSrc} height={height} width={width} />
  );
};

export default Media;
