import ReactDOM from 'react-dom';
import React from 'react';
import '../styles/main.css';
import NodeAddress from './components/nodeAddress.jsx';

function App() {
    return (
        <article id='main'>
            <h1>LTO MOONBASE NODE: 98/2_MOONBASE</h1>
            <NodeAddress />
        </article>
    )
}

ReactDOM.render(
    <App />, document.getElementById('home')
);