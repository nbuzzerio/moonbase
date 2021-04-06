import React from "react";

export default function NavigationBar() {
  const collapse = (e) => {
    e.preventDefault();
    console.log(e.target.parentNode);
    e.target.parentNode.classList.toggle("collapsible--expanded");
  };

  return (
    <React.Fragment>
      <nav className="nav hero__nav">
        <a className="nav__logo" href="/">
          <div className="logo__wrapper">
            <picture>
              {/* <source 
                      type="image/webp" 
                      srcSet="https://moonbase-demo.s3.amazonaws.com/moonbase.png 1x, ../moonbase.png 2x">
                  </source> */}
              <source type="image/png" srcSet="https://moonbase-demo.s3.amazonaws.com/moonbase-icon.png"></source>
              <img
                className="section__image logo__image"
                src="https://moonbase-demo.s3.amazonaws.com/moonbase-icon.png"
                alt=""
              ></img>
            </picture>
          </div>
        </a>
        <svg className="icon nav__toggler" onClick={collapse}>
          <use href="./sprite.svg#menu"></use>
        </svg>
        <ul className="list nav__list collapsible__content">
          <li className="nav__item">
            <a href="#rates">Leasing Rates</a>
          </li>
          <li className="nav__item">
            <a href="#stats">Node Statistics</a>
          </li>
          {/* <li className="nav__item">
            <a href="#security">Node Security</a>
          </li> */}
          <li className="nav__item">
            <a href="#about">About Us</a>
          </li>
          <li className="nav__item">
            <a href="#social">Social Media</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
