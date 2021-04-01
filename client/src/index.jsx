import ReactDOM from 'react-dom';
import React from 'react';
import './styles.css';
import NodeAddress from './components/nodeAddress.jsx';
import Sharing from './components/sharing.jsx';
import Telegram from './components/telegram.jsx';
import Payout from './components/payout.jsx';

function App() {
    return (
        <section class='hero'>
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
    )
}


ReactDOM.render(
    <App />, document.getElementById('home')
);