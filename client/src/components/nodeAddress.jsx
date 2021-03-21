import ReactDOM from 'react-dom';
import React from 'react';
import '../../styles/nodeAddress.css';


function NodeAddress() {

    function onclick() {
        var copy = document.getElementById("nodeAddress");
            copy.select();
            document.execCommand("copy")
    }

    return (
        <div className='card'>
            <form className="nodeAddressBox">
                <label className='addressLabel' htmlFor="nodeAddress">Lease to:</label>
                <input type="text" id="nodeAddress" value="3Jp9rSY8BCk8DbfDRcqeULNrecWRRP7ShLr" readOnly></input>
                <button id="copyBtn" onClick={onclick}>Copy</button>
            </form>
        </div>
    )
}

export default NodeAddress;