import ReactDOM from 'react-dom';
import React from 'react';
import './styles.css';

import Hero from './sections/Hero.jsx';
import Rates from './sections/Rates.jsx';
import Stats from './sections/Stats.jsx';
import LTOPrice from './sections/LTOPrice.jsx';
import Security from './sections/Security.jsx';
import About from './sections/About.jsx';
import Social from './sections/Social.jsx';
import stars from './helper/createStars.jsx';

function App() {
    return (
        <React.Fragment>
            <section className='hero' id="hero">
               <Hero />
            </section>
            <section className='rates space top' id="rates">
                <Rates />
                {stars()}
            </section>
            <section className="stats" id="stats">
                <Stats />
            </section>
            <section className="lto-price space top bottom" id="LTOPrice">
                <LTOPrice />
                {stars()}
            </section>
            <section className="security" id="security">
                <Security />
            </section>
            <section className="about space bottom" id="about">
                <About />
                {stars()}
            </section>
            <section className="social" id="social">
                <Social />
            </section>
        </React.Fragment>
    )
}


ReactDOM.render(
    <App />, document.getElementById('home')
);