import React, { useState, useEffect, useReducer } from "react";
import getBlockData from "../_getBlockData";
import getNodeData from "../_getNodeData";
import { Bar, Line, defaults } from "react-chartjs-2";

export default function Stats() {
  const ACTIONS = {
    SET_NODE_DATA: "set-node-data",
    SET_BLOCK_DATA: "set-block-data",
    SET_CURRENT_WEEK_DAY: "set-week-day",
    SET_WEEK_START: "set-week-start",
    SET_WEEK_END: "set-week-end",
    SET_BAR_DATA_BOOL: "set-bar-bool",
    SET_WEEK_BLOCKS_CHART: "set-week-blocks-chart",
    SET_WEEK_BLOCKS_TOTAL: "set-week-blocks-total",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_NODE_DATA:
        return { ...state, nodeData: action.payload.nodeData };
      case ACTIONS.SET_BLOCK_DATA:
        return { ...state, blockData: action.payload.blockData };
      case ACTIONS.SET_CURRENT_WEEK_DAY:
        return { ...state, currentWeekDay: action.payload.currentWeekDay };
      case ACTIONS.SET_WEEK_START:
        return { ...state, weekStart: action.payload.weekStart };
      case ACTIONS.SET_WEEK_END:
        return { ...state, weekEnd: action.payload.weekEnd };
      case ACTIONS.SET_BAR_DATA_BOOL:
        return { ...state, barDataBool: action.payload.barDataBool };
      case ACTIONS.SET_WEEK_BLOCKS_CHART:
        return { ...state, weekBlocksChart: action.payload.weekBlocksChart };
      case ACTIONS.SET_WEEK_BLOCKS_TOTAL:
        return { ...state, weekBlocksTotal: action.payload.weekBlocksTotal };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    nodeData: null,
    blockData: null,
    currentWeekDay: null,
    weekStart: new Date(),
    weekEnd: new Date(),
    barDataBool: false,
    weekBlocksChart: blocksChart,
    weekBlocksTotal: 0,
  });

  useEffect(() => {
    let mounted = true;
    getBlockData()
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_BLOCK_DATA,
          payload: { blockData: data },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    getNodeData()
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_NODE_DATA,
          payload: { nodeData: data[0].slice(790) },
        });
        dispatch({
          type: ACTIONS.SET_BAR_DATA_BOOL,
          payload: { barDataBool: true },
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  filterBlocksEarned(state, dispatch, ACTIONS);

  (defaults.global.defaultFontFamily = "SpaceMono"),
    "Arial",
    "Helvetica",
    "sans-serif";

  return (
    <div className="section__container">
      <header className="stats__header">
        <h2>Node Statistics</h2>
      </header>
      <div className="grid grid--2x6">
        <article className="stats__LTO-graph">
          <figure className="graph__container">{state.weekBlocksChart}</figure>
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
              Week of {state.weekStart.getMonth() + 1}/
              {state.weekStart.getDate()} - {state.weekEnd.getMonth() + 1}/
              {state.weekEnd.getDate()}
              <br></br>
              LTO Moonbase minted {state.weekBlocksTotal} blocks on the LTO Blockchain
            </p>
          </div>
        </aside>
        <aside className="stats__info-B">
          <div className="card card--primary">
            <header className="card__header">Verified Transactions</header>
            <p className="stats__text">
              Week of {state.weekStart.getMonth() + 1}/
              {state.weekStart.getDate()} - {state.weekEnd.getMonth() + 1}/
              {state.weekEnd.getDate()}
              <br></br>
              LTO Moonbase verified 2165 transactions on the LTO Blockchain
            </p>
          </div>
        </aside>
        <aside className="stats__info-C">
          <div className="card card--primary">
            <header className="card__header">LTO Earned</header>
            <p className="stats__text">
              Week of {state.weekStart.getMonth() + 1}/
              {state.weekStart.getDate()} - {state.weekEnd.getMonth() + 1}/
              {state.weekEnd.getDate()}
              <br></br>
              LTO Moonbase earned 503 LTO in transactions for its leasers
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function filterBlocksEarned(state, dispatch, ACTIONS) {
  let blocksEarned = [];
  let timeZoneDif = 14400000;
  if (state.barDataBool) {
    const currentWeekDay = new Date(
      Date.parse(state.nodeData[state.nodeData.length - 1].date) + timeZoneDif
    ).getDay();

    dispatch({
      type: ACTIONS.SET_CURRENT_WEEK_DAY,
      payload: {
        currentWeekDay: currentWeekDay,
      },
    });

    let weekEnd = Date.now() - 86400000 * (currentWeekDay + 1);
    const weekStart = new Date(weekEnd - 518400000);
    weekEnd = new Date(weekEnd);
    dispatch({
      type: ACTIONS.SET_WEEK_END,
      payload: {
        weekEnd: weekEnd,
      },
    });

    dispatch({
      type: ACTIONS.SET_WEEK_START,
      payload: {
        weekStart: weekStart,
      },
    });

    let sunNodeData = state.nodeData.length - (currentWeekDay + 8);
    let weekBlocksTotal = 0
    for (let i = sunNodeData; blocksEarned.length < 7; i++) {
      let blocks = state.nodeData[i].blocks;
      blocksEarned.push(blocks);
      weekBlocksTotal+= blocks;
    }

    dispatch({
      type: ACTIONS.SET_WEEK_BLOCKS_TOTAL,
      payload: {
        weekBlocksTotal: weekBlocksTotal,
      },
    });

    let weekNodeData = { ...state.weekBlocksChart.props.children.props.data };
    weekNodeData.datasets[0].data = blocksEarned;
    weekNodeData.datasets[0].label = "LTO Blocks Earned";

    dispatch({
      type: ACTIONS.SET_WEEK_BLOCKS_CHART,
      payload: {
        weekBlocksChart: (
          <div className="chart">
            <Bar
              data={weekNodeData}
              height={300}
              width={500}
              options={{
                title: {
                  display: true,
                  text: `LTO Blocks Earned Week of: ${
                    weekStart.getMonth() + 1
                  }/${weekStart.getDate()}`,
                  position: "bottom",
                  fontColor: "black",
                  fontSize: 30,
                },
                legendPositon: "bottom",
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        ),
      },
    });

    dispatch({
      type: ACTIONS.SET_BAR_DATA_BOOL,
      payload: { barDataBool: false },
    });
  }
}

const blocksChart = (
  <div className="chart">
    <Bar
      data={{
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [
          {
            data: [1, 1, 1, 1, 1, 1, 1],
            backgroundColor: "#692db8",
            fontColor: "black",
          },
        ],
      }}
      height={300}
      width={500}
      options={{
        title: {
          display: true,
          text: "LTO Earned week of",
        },
        legendPositon: "bottom",
        maintainAspectRatio: false,
      }}
    />
  </div>
);