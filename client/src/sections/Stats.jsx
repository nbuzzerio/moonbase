import React from "react";

export default function Stats() {
  return (
    <React.Fragment>
      <header className="stats__header">
        <h2>Node Statistics</h2>
      </header>
      <div className="grid grid--1x2">
        <article className="stats__graph">
          <figure>
            <div
              style={{
                width: "50vw",
                height: "50vw",
                border: "solid 1px red",
                display: "inline-block",
              }}
            >
              <img
                src="https://moonbase-demo.s3.amazonaws.com/lto-earned.png"
                alt=""
              />
              <img
                src="https://moonbase-demo.s3.amazonaws.com/blocks-earned.png"
                alt=""
              />
            </div>
          </figure>
        </article>
        <aside className="stats__info">
          <div className="card card--primary">
            <header className="card__header">Stats Title 1</header>
            <p className="stats__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              aperiam.
            </p>
          </div>
        </aside>
        <aside className="stats__info">
          <div className="card card--primary">
            <header className="card__header">Stats Title 2</header>
            <p className="stats__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
              pariatur?
            </p>
          </div>
        </aside>
        <aside className="stats__info">
          <div className="card card--primary">
            <header className="card__header">Stats Title 3</header>
            <p className="stats__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, a.
            </p>
          </div>
        </aside>
      </div>
    </React.Fragment>
  );
}
