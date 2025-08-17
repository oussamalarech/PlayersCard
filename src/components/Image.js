import React from "react";

function Image({ image, name }) {
  return <img src={image} alt={name} />;
}

export default Image;
