import React from 'react';

export default function NodeAddress() {

    function onclick(e) {
        e.preventDefault();
        var copy = document.getElementById("nodeAddress");
            copy.select();
            document.execCommand("copy");
    }

    return (
        <div className="input-group nodeAddress">
                    <input className='input' type="text" id="nodeAddress" value="3Jp9rSY8BCk8DbfDRcqeULNrecWRRP7ShLr" readOnly></input>
                    <button className="btn btn--primary" id="copyBtn" onClick={onclick}>Copy</button>
        </div>
    )
}