import React from "react";
import NodeAddress from "../components/NodeAddress.jsx";
import NavigationBar from "../components/NavigationBar.jsx";

export default function Hero() {
  return (
    <React.Fragment>
      <NavigationBar />
      <h1>LTO MOONBASE NODE</h1>
      <NodeAddress />
      <picture>
        <source
          type="image/webp"
          srcSet="https://lto-moonbase.s3.amazonaws.com/moonbase-small.webp 960w, https://lto-moonbase.s3.amazonaws.com/moonbase-med.webp 1280w, https://lto-moonbase.s3.amazonaws.com/moonbase.webp 1920w"
        ></source>
        <source
          type="image/jpg"
          srcSet="https://lto-moonbase.s3.amazonaws.com/moonbase-small.jpg 960w, https://lto-moonbase.s3.amazonaws.com/moonbase-med.jpg 1280w, https://lto-moonbase.s3.amazonaws.com/moonbase.jpg 1920w"
        ></source>
        <img
          className="section__image hero__image"
          src="https://lto-moonbase.s3.amazonaws.com/moonbase.jpg"
          alt="Image of a base on the moon"
        ></img>
      </picture>
    </React.Fragment>
  );
}
