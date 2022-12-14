import React from "react";
import Media from "../../components/Media";

export async function getServerSideProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}

const Article = () => {
  return (
    <div>
      <Media
        // mediaType="video"
        // mediaSrc="vWXrFetSH8w"
        height="400"
        width="600"
        mediaType="image"
        mediaSrc="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      />
    </div>
  );
};

export default Article;
