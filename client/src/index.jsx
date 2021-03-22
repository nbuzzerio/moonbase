import ReactDOM from 'react-dom';
import React from 'react';
import '../styles/main.css';
import NodeAddress from './components/nodeAddress.jsx';
import Sharing from './components/sharing.jsx';

function App() {
    return (
        <article id='main'>
            <h1>LTO MOONBASE NODE</h1>
            <NodeAddress />
            <Sharing />
            {/* <Payout />
            <Telegram /> */}
        </article>
    )
}

ReactDOM.render(
    <App />, document.getElementById('home')
);