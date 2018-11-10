import React from "react";
import { createResource } from "./createResource";

const ImageResource = createResource(src => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = resolve;
    image.onerror = reject;
  });
});

const Img = props => {
  ImageResource.read(props.src);
  return <img {...props} />;
};

export default Img;
