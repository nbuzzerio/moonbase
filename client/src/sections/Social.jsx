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
            <a href="https://www.linkedin.com/company/lto-moonbase-node/" target="_blank">
              <span className="icon-container">
                <svg className="icon">
                  <use href="./sprite.svg#logo-linkedin"></use>
                </svg>
              </span>
            </a>
          </li>
          <li className="list__item">
            <a href="https://www.youtube.com/channel/UC3W2BBTfNc8Lv7Mj8BFaxUg"
            target="_blank">
              <span className="icon-container">
                <svg className="icon">
                  <use href="./sprite.svg#logo-youtube"></use>
                </svg>
              </span>
            </a>
          </li>
          <li className="list__item">
            <a href="https://discord.gg/Mg2Pq9c7" target="_blank">
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
        <source
          type="image/webp"
          srcSet="https://lto-moonbase.s3.amazonaws.com/astronaut-small.webp 960w, https://lto-moonbase.s3.amazonaws.com/astronaut-med.webp 1280w, https://lto-moonbase.s3.amazonaws.com/astronaut.webp 1920w"
        ></source>
        <source
          type="image/jpg"
          srcSet="https://lto-moonbase.s3.amazonaws.com/astronaut-small.jpg 960w, https://lto-moonbase.s3.amazonaws.com/astronaut-med.jpg 1280w, https://lto-moonbase.s3.amazonaws.com/astronaut.jpg 1920w"
        ></source>
        <img
          className="section__image social__image"
          src="https://lto-moonbase.s3.amazonaws.com/astronaut.jpg"
          alt="Image of a base on the moon"
        ></img>
      </picture>
    </React.Fragment>
  );
}
