import React, {useEffect} from "react";

export default function Rates() {

  useEffect(() => {
    const containers = document.querySelectorAll('.rates');

    const selectorsOptions = {
        rootMargin: '0px 0px -400px 0px',
        threshold: 0
    }
    const appearOnScroll = new IntersectionObserver( (selectors, appearOnScroll) => {
        selectors.forEach( selector => {
            
            if (selector.isIntersecting) {
                selector.target.classList.add('appear');
                appearOnScroll.unobserve(selector.target);
                console.log('APPEAR')
            }
            return
        })
    }, selectorsOptions);

    containers.forEach(container => {
        appearOnScroll.observe(container);
    })
}, [])

  return (
    <div className="section__container">
      <picture>
        <source
          type="image/webp"
          srcSet="https://lto-moonbase.s3.amazonaws.com/moonbase-banner-logo.webp"
        ></source>
        <source
          type="image/png"
          srcSet="https://lto-moonbase.s3.amazonaws.com/moonbase-banner-logo.png"
        ></source>
        <img
          className="banner"
          src="https://lto-moonbase.s3.amazonaws.com/moonbase-banner-logo.png"
          alt="banner for lto moonbase"
        />
      </picture>
      <header className="rates__header">
        <h2>Leasing Information</h2>
      </header>
      <div className="rates__info grid grid--1x2">
        <div className="card card--secondary">
          <header className="card__header">Payout</header>
          <div className="card_body">
            <p className="rates__text">
              MoonBase Node pays 98% of earned LTO to its leasers. Current node
              fee is 2% to cover server costs.
            </p>
          </div>
        </div>
        <div className="card card--secondary">
          <header className="card__header">Payout Schedule</header>
          <div className="card_body">
            <p className="rates__text">
              Every Saturday MoonBase Node pays out the LTO it's earned from
              blocks on the LTO Blockchain.
            </p>
          </div>
        </div>
        <div className="card card--secondary rates__vip">
          <header className="card__header">
            <div className="vip__header">VIP</div>
          </header>
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
