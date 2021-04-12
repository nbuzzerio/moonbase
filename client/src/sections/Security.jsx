import React from "react";

export default function Security() {
  return (
    <div className="section__container">
      <header className="security__header">
        <h2>Cloud Security Engineering</h2>
      </header>
      <div className="grid grid--2x6">
        <article className="stats__LTO-graph">
        <figure >
            <picture className="graph__container">
              <source
                type="image/webp"
                srcSet="https://lto-moonbase.s3.amazonaws.com/wazuh.webp"
              ></source>
              <source
                type="image/png"
                srcSet="https://lto-moonbase.s3.amazonaws.com/wazuh.png"
              ></source>
              <img
                className="graph"
                src="https://lto-moonbase.s3.amazonaws.com/wazuh.png"
                alt="Logo for AlienVault open-source security software"
              />
            </picture>
          </figure>
        </article>
        <article className="stats__block-graph">
          <figure >
            <picture className="graph__container">
              <source
                type="image/webp"
                srcSet="https://lto-moonbase.s3.amazonaws.com/avotx.webp"
              ></source>
              <source
                type="image/png"
                srcSet="https://lto-moonbase.s3.amazonaws.com/avotx.png"
              ></source>
              <img
                className="graph"
                src="https://lto-moonbase.s3.amazonaws.com/avotx.png"
                alt="Logo for AlienVault open-source security software"
              />
            </picture>
          </figure>
        </article>
        <aside className="stats__info-A">
          <div className="card card--primary">
            <header className="card__header">Security Operations</header>
            <p className="security__text">
              We monitor LTO Moonbase network traffic 24/7 with seasoned
              professionals in security operations. Fully equipped with cloud
              SIEM solution Wuzah built on the ELK stack engineered to detect
              threats.
            </p>
          </div>
        </aside>
        <aside className="stats__info-B">
          <div className="card card--primary">
            <header className="card__header">Cloud Security</header>
            <p className="security__text">
              Best practice cloud cyber security engineering. Equipped with
              firewall engineering, Fail2ban IP logging, PKI encryption and
              more. We keep LTO Moonbase safe by using the latest cutting-edge
              technology.
            </p>
          </div>
        </aside>
        <aside className="stats__info-C">
          <div className="card card--primary">
            <header className="card__header">Threat Intelligence</header>
            <p className="security__text">
              We keep up to date with the newest Threat Intelligence feeds using
              AlienVault OTX integrations. Equipped with host scanning
              capabilities for threat hunting advanced attacks, IOC's and APT’s.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
