import React from "react";

export default function LTOPrice() {
  return (
    <React.Fragment>
      <picture>
        <source
          type="image/webp"
          srcSet="https://lto-moonbase.s3.amazonaws.com/eclipse.webp"
        ></source>
        <source
          type="image/jpg"
          srcSet="https://lto-moonbase.s3.amazonaws.com/eclipse.jpg"
        ></source>
        <img
          className="section__image lto-price__image"
          src="https://lto-moonbase.s3.amazonaws.com/eclipse.webp"
          alt="Image of a moon eclipse"
        ></img>
      </picture>
    </React.Fragment>
  );
}
