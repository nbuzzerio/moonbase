import React, { useEffect, useReducer } from "react";
import getBlockData from "../apiRequests/_getBlockData";
import getNodeData from "../apiRequests/_getNodeData";
import { Bar, Line, defaults, Radar, Bubble, Polar, HorizontalBar} from "react-chartjs-2";

import filterBlocksEarned from "../helper/filterBlocksEarned.jsx";
// import filterNodeTransactions from "../helper/filterNodeTransactions.jsx";

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

    SET_LINE_DATA_BOOL: "set-line-data-bool",
    SET_WEEK_TXS_CHART: "set-week-txs-chart",
    SET_WEEK_TXS_TOTAL: "set-week-txs-total",
    SET_WEEK_FEES_TOTAL: "set-week-fees-total",
    
    SET_LAST_WEEK_TXS_TOTAL: "set-last-week-txs-total",
    SET_LAST_WEEK_FEES_TOTAL: "set-last-week-fees-total",
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

      case ACTIONS.SET_LINE_DATA_BOOL:
        return { ...state, lineDataBool: action.payload.lineDataBool };
      case ACTIONS.SET_WEEK_TXS_CHART:
        return { ...state, weekTxsChart: action.payload.weekTxsChart };
      case ACTIONS.SET_WEEK_TXS_TOTAL:
        return { ...state, weekTxsTotal: action.payload.weekTxsTotal };
      case ACTIONS.SET_WEEK_FEES_TOTAL:
        return { ...state, weekFeesTotal: action.payload.weekFeesTotal };

      case ACTIONS.SET_LAST_WEEK_TXS_TOTAL:
        return { ...state, lastWeekTxsTotal: action.payload.lastWeekTxsTotal };
      case ACTIONS.SET_LAST_WEEK_FEES_TOTAL:
        return { ...state, lastWeekFeesTotal: action.payload.lastWeekFeesTotal };

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

    lineDataBool: false,
    weekTxsChart: blocksChart,
    weekTxsTotal: 0,
    weekFeesTotal: 0,

    lastWeekTxsTotal: 0,
    lastWeekFeesTotal: 0,
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

  defaults.global.defaultFontFamily = "SpaceMono", "Arial", "Helvetica", "sans-serif";

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
          <figure className="graph__container">{lineChart}</figure>
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
              LTO Moonbase verified {2165} transactions on the LTO Blockchain
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
              LTO Moonbase earned {503} LTO in transactions for its leasers
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
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

const lineChart = (
  <div className="chart">
    <Line
      data={{
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [
          {
            data: [8,1,7,4,2,7,4],
            label: 'fees',
            backgroundColor: "green",
            fontColor: "black",
          },
          {
            data: [15,33,21,11,12,25, 8],
            label: 'transactions',
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
          text: "LTO Transactions/Fees Week of: 11/11",
          position: "bottom",
          fontColor: "black",
          fontSize: 30,
        },
        legendPositon: "bottom",
        maintainAspectRatio: false,
      }}
    />
  </div>
);