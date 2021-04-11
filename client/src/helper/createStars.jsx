import React from 'react';

export default function () {
let stars = Array(200).fill(0);
stars = stars.map( (star, index) => {
    const top = `${Math.random()*100}%`;
    const left = `${Math.random()*100}%`;
    const size = `${Math.random()*3}px`;
    let starStyle = {
        position: 'absolute',
        top,
        left,
        height: size,
        width: size,
        backgroundColor: 'rgba(255, 255, 255, .71)',
        borderRadius: '100%',
        boxShadow:  
        `1px 1px 6px rgba(255,255,255,0.84),
        1px 1px 10px rgba(255,255,255,0.82),
        1px 1px 35px rgba(255,255,255,0.82),
        1px 1px 60px rgba(255,255,255,0.84)`,
      }
      
      return (
        <div className="star" key={index} style={starStyle}></div>
    )
  })

  return (
    <React.Fragment>
      {stars}
    </React.Fragment>
  )
} 