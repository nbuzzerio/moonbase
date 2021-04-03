import React from "react";

export default function Stats() {
  return (
    <div className="section__container">
      <header className="stats__header">
        <h2>Node Statistics</h2>
      </header>
      <div className="grid grid--2x6">
        <article className="stats__LTO-graph">
          <figure className="graph__container">
            <img className="graph"
              src="https://moonbase-demo.s3.amazonaws.com/lto-earned.png"
              alt=""
            />
          </figure>
        </article>
        <article className="stats__block-graph">
          <figure className="graph__container">
            <img className="graph"
              src="https://moonbase-demo.s3.amazonaws.com/blocks-earned.png"
              alt=""
            />
          </figure>
        </article>
        <aside className="stats__info-A">
          <div className="card card--primary">
            <header className="card__header">Stats Title 1</header>
            <p className="stats__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              aperiam.
            </p>
          </div>
        </aside>
        <aside className="stats__info-B">
          <div className="card card--primary">
            <header className="card__header">Stats Title 2</header>
            <p className="stats__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
              pariatur?
            </p>
          </div>
        </aside>
        <aside className="stats__info-C">
          <div className="card card--primary">
            <header className="card__header">Stats Title 3</header>
            <p className="stats__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, a.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
