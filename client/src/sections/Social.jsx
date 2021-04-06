import React from "react";

export default function Social() {
  return (
    <React.Fragment>
      <nav className="social__media">
        <h2>Join Us</h2>
        <ul className="list list--inline">
          <li className="list__item">
            <a href="https://t.me/joinchat/ErUfY3Wek14xZDYx" target="_blank">
              <span className="icon-container">
                <svg className="icon">
                  <use href="./sprite.svg#logo-telegram"></use>
                </svg>
              </span>
            </a>
          </li>
          <li className="list__item">
            <a href="">
              <span className="icon-container">
                <svg className="icon">
                  <use href="./sprite.svg#logo-linkedin"></use>
                </svg>
              </span>
            </a>
          </li>
          <li className="list__item">
            <a href="">
              <span className="icon-container">
                <svg className="icon">
                  <use href="./sprite.svg#logo-facebook"></use>
                </svg>
              </span>
            </a>
          </li>
          <li className="list__item">
            <a href="">
              <span className="icon-container">
                <svg className="icon">
                  <use href="./sprite.svg#logo-discord"></use>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <picture>
        {/* <source 
                            type="image/webp" 
                            srcSet="https://moonbase-demo.s3.amazonaws.com/moonbase.png 1x, ../moonbase.png 2x">
                        </source> */}
        <source
          type="image/png"
          srcSet="https://moonbase-demo.s3.amazonaws.com/astronaut.png"
        ></source>
        <img
          className="section__image social__image"
          src="https://moonbase-demo.s3.amazonaws.com/astronaut.png"
          alt=""
        ></img>
      </picture>
    </React.Fragment>
  );
}
