import React from "react";
import NodeAddress from "../components/NodeAddress.jsx";

export default function Hero() {
  return (
    <React.Fragment>
      <h1>LTO MOONBASE NODE</h1>
      <NodeAddress />
      <picture>
        {/* <source 
                    type="image/webp" 
                    srcSet="https://moonbase-demo.s3.amazonaws.com/moonbase.png 1x, ../moonbase.png 2x">
                </source> */}
        <source
          type="image/png"
          srcSet="https://moonbase-demo.s3.amazonaws.com/moonbase.png"
        ></source>
        <img
          className="section__image hero__image"
          src="https://moonbase-demo.s3.amazonaws.com/moonbase.png"
          alt=""
        ></img>
      </picture>
    </React.Fragment>
  );
}
