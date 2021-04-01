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
                        srcSet="../moonbase.png 1x, ../moonbase.png 2x">
                    </source> */}
                    <source 
                        type="image/png" 
                        srcSet="../moonbase.png">
                    </source>
                    <img className="hero__image" src="../moonbase.png" alt=""></img>
                </picture>
            </section>
            <section className='rates'>
                <img className="banner" src="./ltomoonbase-banner.png" alt="banner for lto moonbase"/>
                <header className="rates__header">
                    <h2>Leasing Information</h2>
                </header>
                <div className="rates__info grid grid--1x3">
                    <div className="card card--secondary">
                        <header className="card__header">Rates Title 1</header>
                        <div className="card_body">
                            <p className='rates__text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a deleniti distinctio labore facilis tempora, et ut molestias? Tempora, accusantium.
                            </p>
                        </div>
                    </div>
                    <div className="card card--secondary">
                        <header className="card__header">Rates Title 2</header>
                        <div className="card_body">
                            <p className='rates__text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a deleniti distinctio labore facilis tempora, et ut molestias? Tempora, accusantium.
                            </p>
                        </div>
                    </div>
                    <div className="card card--secondary">
                        <header className="card__header">Rates Title 3</header>
                        <div className="card_body">
                            <p className='rates__text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a deleniti distinctio labore facilis tempora, et ut molestias? Tempora, accusantium.
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
            <section className="security">

            </section>
        </React.Fragment>
    )
}


ReactDOM.render(
    <App />, document.getElementById('home')
);