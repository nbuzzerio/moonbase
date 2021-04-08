import React, { useState, useEffect } from "react";
import getBlockData from "../_getBlockData";
import getNodeData from "../_getNodeData";
import { Bar, Line, defaults } from "react-chartjs-2";

export default function Stats() {
  const [nodeData, setNodeData] = useState(null);
  const [blockData, setBlockData] = useState(null);
  const [weekDay, setWeekDay] = useState(null);
  const [weekStart, setWeekStart] = useState(null);
  const [weeksStart, setWeeksStart] = useState(null);
  const [weekEnd, setWeekEnd] = useState(null);
  const [bar, setBar] = useState(false);
  const [weekBlocksChart, setWeekBlocksChart] = useState(blocksChart);

  useEffect(() => {
    setWeekDay(new Date().getDay());
    setWeekEnd(Date.now() - 86400000 * weekDay);
    setWeeksStart(weekEnd - 604800000);

    let mounted = true;
    getBlockData()
      .then((data) => {
        setBlockData(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    getNodeData()
      .then((data) => {
        setNodeData(data[0].slice(790));
        setBar(true)
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  filterBlocksEarned(bar, nodeData, weekDay, weekBlocksChart, weekStart, setWeekStart, setWeekBlocksChart, setBar, setWeekDay, setWeekEnd, setWeeksStart, weekEnd);


  defaults.global.defaultFontFamily = 'SpaceMono', 'Arial', 'Helvetica', 'sans-serif';

  return (
    <div className="section__container">
      <header className="stats__header">
        <h2>Node Statistics</h2>
      </header>
      <div className="grid grid--2x6">
        <article className="stats__LTO-graph">
          <figure className="graph__container">
            {weekBlocksChart}
          </figure>
        </article>
        <article className="stats__block-graph">
          <figure className="graph__container">
            <img
              className="graph"
              src="https://moonbase-demo.s3.amazonaws.com/nodeperformance.png"
              alt=""
            />
          </figure>
        </article>
        <aside className="stats__info-A">
          <div className="card card--primary">
            <header className="card__header">Blocks Earned</header>
            <p className="stats__text">
              Week of 3/28 - 4/3 <br></br>
              LTO Moonbase minted 31 blocks on the LTO Blockchain
            </p>
          </div>
        </aside>
        <aside className="stats__info-B">
          <div className="card card--primary">
            <header className="card__header">Verified Transactions</header>
            <p className="stats__text">
              Week of 3/28 - 4/3 <br></br>
              LTO Moonbase verified 2165 transactions on the LTO Blockchain
            </p>
          </div>
        </aside>
        <aside className="stats__info-C">
          <div className="card card--primary">
            <header className="card__header">LTO Earned</header>
            <p className="stats__text">
              Week of 3/28 - 4/3 <br></br>
              LTO Moonbase earned 503 LTO in transactions for its leasers
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function filterBlocksEarned(bar, nodeData, weekDay, weekBlocksChart, weekStart, setWeekStart, setWeekBlocksChart, setBar, setWeekDay, setWeekEnd, setWeeksStart, weekEnd) {
  
  let blocksEarned = [];
  if (bar) {
    weekDay = new Date(Date.parse(nodeData[nodeData.length-1].date)+14400000).getDay() 
    setWeekDay(weekDay);
    weekEnd = Date.now() - 86400000 * weekDay;
    setWeekEnd(weekEnd);
    setWeeksStart(weekEnd - 604800000);

    let ws = nodeData.length - (weekDay + 8);
    for (let i = ws; blocksEarned.length < 7; i++) {
      blocksEarned.push(nodeData[i].blocks);
      console.log(blocksEarned)
    }
    console.log(weekBlocksChart)
    let placeholder = { ...weekBlocksChart.props.children.props.data };
    placeholder.datasets[0].data = blocksEarned;
    const day = new Date(Date.parse(nodeData[ws].date)); //set this for weekstart
    //do the same for weekend
    placeholder.datasets[0].label = 'LTO Blocks Earned';
    setWeekBlocksChart(
        <div className="chart">
          <Bar 
            data={placeholder}
            height={300}
            width={500}
            options={{
              title: {
                display: true,
                text: `LTO Blocks Earned Week of: ${day.getMonth() + 1}/${day.getDate() + 1}`,
                position: "bottom",
                fontColor: "black",
                fontSize: 30
              },
              indexAxis: 'y',
              legendPositon: 'bottom',
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                  }
                }]
              }
            }}
          />
        </div>
    );
    setBar(false);
  }
}

const blocksChart = (
  <div className="chart">
    <Bar 
      data={{
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [
          {
            data: [1,1,1,1,1,1,1],
            backgroundColor: '#692db8',
            fontColor: "black",
          },
        ],
      }}
      height={300}
      width={500}
      options={{
        title: {
          display: true,
          text: 'LTO Earned week of'
        },
        legendPositon: 'bottom',
        maintainAspectRatio: false
      }}
    />
  </div>
);