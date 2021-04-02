import ReactDOM from 'react-dom';
import React from 'react';
import './styles.css';

import Hero from './sections/Hero.jsx';
import Rates from './sections/Rates.jsx';
import Stats from './sections/Stats.jsx';
import Security from './sections/Security.jsx';
import Social from './sections/Social.jsx';

function App() {
    return (
        <React.Fragment>
            <section className='hero'>
               <Hero />
            </section>
            <div className="tagline">
                <h2 >LTO MOONBASE IS A QUICKLY GROWING NODE BASED IN THE NYC METROPOLITAN AREA</h2>
            </div>            
            <section className='rates'>
                <Rates />
            </section>
            <section className="stats">
                <Stats />
            </section>
            <section className="security">
                <Security />
            </section>
            <section className="stats">
                <Stats />
            </section>
            <section className="social">
                <Social />
            </section>
        </React.Fragment>
    )
}


ReactDOM.render(
    <App />, document.getElementById('home')
);