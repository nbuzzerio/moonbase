import ReactDOM from 'react-dom';
import React from 'react';
import './styles.css';
import NodeAddress from './components/nodeAddress.jsx';
import Sharing from './components/sharing.jsx';
import Telegram from './components/telegram.jsx';
import Payout from './components/payout.jsx';

function App() {
    return (
        <React.Fragment>
            <section className='hero'>
                <h1>LTO MOONBASE NODE</h1>
                <NodeAddress />
                <picture>
                    {/* <source 
                        type="image/webp" 
                        srcSet="https://moonbase-demo.s3.amazonaws.com/moonbase.png 1x, ../moonbase.png 2x">
                    </source> */}
                    <source 
                        type="image/png" 
                        srcSet="https://moonbase-demo.s3.amazonaws.com/moonbase.png">
                    </source>
                    <img className="section__image hero__image" src="https://moonbase-demo.s3.amazonaws.com/moonbase.png" alt=""></img>
                </picture>
            </section>
            <section className='rates'>
                <img className="banner" src="https://moonbase-demo.s3.amazonaws.com/ltomoonbase-banner.png" alt="banner for lto moonbase"/>
                <header className="rates__header">
                    <h2>Leasing Information</h2>
                </header>
                <div className="rates__info grid grid--1x2">
                    <div className="card card--secondary">
                        <header className="card__header">Payout</header>
                        <div className="card_body">
                            <p className='rates__text'>
                            MoonBase Node pays 98% of  earned LTO to it's leasers. Current node fee is 2% to cover server costs. 
                            </p>
                        </div>
                    </div>
                    <div className="card card--secondary">
                        <header className="card__header">Payout Schedule</header>
                        <div className="card_body">
                            <p className='rates__text'>
                                Every Saturday MoonBase Node pays out  the LTO it's earned from blocks on the LTO Blockchain
                            </p>
                        </div>
                    </div>
                    <div className="card card--primary rates__vip">
                        <header className="card__header">VIP</header>
                        <div className="card_body">
                            <p className='rates__text'>
                                Tier 1-  Anyone who leases 50,000+ LTO will pay a node fee of 1.75%
                            </p>
                            <p className='rates__text'>
                                Tier 2-  Anyone who leases 100,000+ LTO will pay a node fee of 1.5%
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="stats">
                <header className="stats__header">
                    <h2>Node Statistics</h2>
                </header>
                <div className="grid grid--1x2">
                    <article className="stats__graph">
                        <figure>
                            <div style={{width: '50vw', height: '50vw', border: 'solid 1px red', display: 'inline-block'}}>
                                <img src="https://moonbase-demo.s3.amazonaws.com/lto-earned.png" alt=""/>
                                <img src="https://moonbase-demo.s3.amazonaws.com/blocks-earned.png" alt=""/>
                            </div>
                        </figure>
                    </article>
                    <aside className="stats__info">
                        <div className="card card--primary">
                            <header className="card__header">Stats Title 1</header>
                            <p className="stats__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aperiam.</p>
                        </div>
                    </aside>
                    <aside className="stats__info">
                        <div className="card card--primary">
                            <header className="card__header">Stats Title 2</header>
                            <p className="stats__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, pariatur?</p>
                        </div>
                    </aside>
                    <aside className="stats__info">
                        <div className="card card--primary">
                            <header className="card__header">Stats Title 3</header>
                            <p className="stats__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, a.</p>
                        </div>
                    </aside>
                </div>
            </section>
            <section className="security">
                <div>CONTENT GOES HERE</div>
                <picture>
                        {/* <source 
                            type="image/webp" 
                            srcSet="https://moonbase-demo.s3.amazonaws.com/moonbase.png 1x, ../moonbase.png 2x">
                        </source> */}
                        <source 
                            type="image/png" 
                            srcSet="https://moonbase-demo.s3.amazonaws.com/eclipse.png">
                        </source>
                        <img className="section__image" src="https://moonbase-demo.s3.amazonaws.com/eclipse.png" alt=""></img>
                </picture>
            </section>
            <section className="stats">
                <header className="stats__header">
                    <h2>Node Statistics</h2>
                </header>
                <div className="grid grid--1x2">
                    <article className="stats__graph">
                        <figure>
                            <div style={{width: '50vw', height: '50vw', border: 'solid 1px red', display: 'inline-block'}}></div>
                        </figure>
                    </article>
                    <aside className="stats__info">
                        <div className="card card--primary">
                            <header className="card__header">Stats Title 1</header>
                            <p className="stats__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aperiam.</p>
                        </div>
                    </aside>
                    <aside className="stats__info">
                        <div className="card card--primary">
                            <header className="card__header">Stats Title 2</header>
                            <p className="stats__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, pariatur?</p>
                        </div>
                    </aside>
                    <aside className="stats__info">
                        <div className="card card--primary">
                            <header className="card__header">Stats Title 3</header>
                            <p className="stats__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, a.</p>
                        </div>
                    </aside>
                </div>
            </section>
            <section className="social">
                <nav className="social__media" >
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
                            <a href="" target="_blank">
                                <span className="icon-container">
                                    <svg className="icon">
                                        <use href="./sprite.svg#logo-linkedin"></use>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li className="list__item">
                            <a href="" target="_blank">
                                <span className="icon-container">
                                    <svg className="icon">
                                        <use href="./sprite.svg#logo-facebook"></use>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li className="list__item">
                            <a href="" target="_blank">
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
                            srcSet="https://moonbase-demo.s3.amazonaws.com/astronaut.png">
                        </source>
                        <img className="section__image social__image" src="https://moonbase-demo.s3.amazonaws.com/astronaut.png" alt=""></img>
                </picture>
            </section>
        </React.Fragment>
    )
}


ReactDOM.render(
    <App />, document.getElementById('home')
);