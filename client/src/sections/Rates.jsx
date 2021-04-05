import React from "react";

export default function Rates() {
  return (
    <div className="section__container">
      <img
        className="banner"
        src="https://moonbase-demo.s3.amazonaws.com/ltomoonbase-banner.png"
        alt="banner for lto moonbase"
      />
      <header className="rates__header">
        <h2>Leasing Information</h2>
      </header>
      <div className="rates__info grid grid--1x2">
        <div className="card card--secondary">
          <header className="card__header">Payout</header>
          <div className="card_body">
            <p className="rates__text">
              MoonBase Node pays 98% of earned LTO to it's leasers. Current node
              fee is 2% to cover server costs.
            </p>
          </div>
        </div>
        <div className="card card--secondary">
          <header className="card__header">Payout Schedule</header>
          <div className="card_body">
            <p className="rates__text">
              Every Saturday MoonBase Node pays out the LTO it's earned from
              blocks on the LTO Blockchain
            </p>
          </div>
        </div>
        <div className="card card--primary rates__vip">
          <header className="card__header">VIP</header>
          <div className="card_body">
            <p className="rates__text">
              Tier 1- Anyone who leases 50,000+ LTO will pay a node fee of 1.75%
            </p>
            <p className="rates__text">
              Tier 2- Anyone who leases 100,000+ LTO will pay a node fee of 1.5%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
