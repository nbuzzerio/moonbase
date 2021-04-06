import React from "react";

export default function Security() {
  return (
    <React.Fragment>
      <picture>
        {/* <source 
                            type="image/webp" 
                            srcSet="https://moonbase-demo.s3.amazonaws.com/moonbase.png 1x, ../moonbase.png 2x">
                        </source> */}
        <source
          type="image/png"
          srcSet="https://moonbase-demo.s3.amazonaws.com/eclipse.png"
        ></source>
        <img
          className="section__image"
          src="https://moonbase-demo.s3.amazonaws.com/eclipse.png"
          alt=""
        ></img>
      </picture>
    </React.Fragment>
  )
}
