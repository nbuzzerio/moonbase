import React from "react";

export default function LTOPrice() {
  return (
    <React.Fragment>
      <svg className='eclipse'>
        <defs>
          <radialGradient id='radialGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='75%' stopColor='#fff' stopOpacity='1.0'/>
            <stop offset='100%' stopColor='#000' stopOpacity='.6'/>
          </radialGradient> 
        </defs>
        <circle r='50%' cx='50%' cy='50%' fill='url(#radialGrad)'/>
        <circle r='38%' cx='50%' cy='50%' fill='black' />
      </svg>
    </React.Fragment>
  );
}
