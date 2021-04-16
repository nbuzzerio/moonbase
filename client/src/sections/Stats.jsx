import React, { useEffect, useReducer } from "react";
import getNodeData from "../apiRequests/_getNodeData";
import { Bar, Line, defaults } from "react-chartjs-2";
import moment from 'moment';

import filterBlocksEarned from "../helper/filterBlocksEarned.jsx";

export default function Stats() {
  const ACTIONS = {
    SET_NODE_DATA: "set-node-data",
    SET_BLOCK_DATA: "set-block-data",
    SET_WEEK_PAGE: "set-week-page",
    SET_CURRENT_WEEK_DAY: "set-week-day",
    SET_WEEK_START: "set-week-start",
    SET_WEEK_END: "set-week-end",
    SET_CHART_DATA_BOOL: "set-chart-bool",
    SET_WEEK_CHARTS: "set-week-charts",

    SET_WEEK_BLOCKS_TOTAL: "set-week-blocks-total",
    SET_WEEK_TXS_TOTAL: "set-week-txs-total",
    SET_WEEK_FEES_TOTAL: "set-week-fees-total",

    SET_WEEK_TOTALS: "set-week-totals",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_NODE_DATA:
        return { ...state, nodeData: action.payload.nodeData };
      case ACTIONS.SET_BLOCK_DATA:
        return { ...state, blockData: action.payload.blockData };
      case ACTIONS.SET_WEEK_PAGE:
        return { ...state, weekPage: action.payload.weekPage };
      case ACTIONS.SET_CURRENT_WEEK_DAY:
        return { ...state, currentWeekDay: action.payload.currentWeekDay };
      case ACTIONS.SET_WEEK_START:
        return { ...state, weekStart: action.payload.weekStart };
      case ACTIONS.SET_WEEK_END:
        return { ...state, weekEnd: action.payload.weekEnd };
      case ACTIONS.SET_CHART_DATA_BOOL:
        return { ...state, chartDataBool: action.payload.chartDataBool };
      case ACTIONS.SET_WEEK_CHARTS:
        return {
          ...state,
          weekBlocksChart: action.payload.weekBlocksChart,
          weekTxsChart: action.payload.weekTxsChart,
        };

      case ACTIONS.SET_WEEK_TOTALS:
        return {
          ...state,
          weekBlocksTotal: action.payload.weekBlocksTotal,
          weekTxsTotal: action.payload.weekTxsTotal,
          weekFeesTotal: action.payload.weekFeesTotal,
        };

      case ACTIONS.SET_CURRENT_TOTALS:
        return {
          ...state,
          currentBlocksTotal: action.payload.currentBlocksTotal,
          currentTxsTotal: action.payload.currentTxsTotal,
          currentFeesTotal: action.payload.currentFeesTotal,
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    nodeData: null,
    currentWeekDay: null,
    weekPage: 0,
    weekStart: new Date(),
    weekEnd: new Date(),
    chartDataBool: false,
    weekBlocksChart: blocksChart,
    weekTxsChart: lineChart,

    weekBlocksTotal: 0,
    weekTxsTotal: 0,
    weekFeesTotal: 0,

    currentBlocksTotal: 0,
    currentTxsTotal: 0,
    currentFeesTotal: 0,
  });

  useEffect(() => {
    let mounted = true;
    getNodeData()
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_NODE_DATA,
          payload: { nodeData: data[0].slice(787) },
        });
        dispatch({
          type: ACTIONS.SET_CHART_DATA_BOOL,
          payload: { chartDataBool: true },
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (state.nodeData) {
      dispatch({
        type: ACTIONS.SET_CHART_DATA_BOOL,
        payload: { chartDataBool: true },
      });
    }
  }, [state.weekPage]);

  filterBlocksEarned(state, dispatch, ACTIONS);

  (defaults.global.defaultFontFamily = "SpaceMono"),
    "Arial",
    "Helvetica",
    "sans-serif";

  const handlePrev = () => {
    dispatch({
      type: ACTIONS.SET_WEEK_PAGE,
      payload: { weekPage: state.weekPage + 1 },
    });
  };

  const handleNext = () => {
    dispatch({
      type: ACTIONS.SET_WEEK_PAGE,
      payload: { weekPage: state.weekPage - 1 },
    });
  };

  let prevWeek;
  let nextWeek;
  let currentBlocksTotal;
  let currentTxsTotal;
  let currentFeesTotal;
  
  statsWeekView();

  return (
    <div className="section__container">
      <header className="stats__header">
        <h2>Node Statistics</h2>
      </header>
      <div className="stats__week">
        {prevWeek}
        <h3 className="stats__week-title">
          Week of {moment(new Date(state.weekStart)).format("MMMM Do")}
        </h3>
        {nextWeek}
      </div>
      <div className="grid grid--2x6">
        <article className="stats__LTO-graph">
          <figure className="graph__container">{state.weekBlocksChart}</figure>
        </article>
        <article className="stats__block-graph">
          <figure className="graph__container">{state.weekTxsChart}</figure>
        </article>
        <aside className="stats__info-A">
          <div className="card card--primary">
            <header className="card__header">Blocks Earned</header>
            <p className="stats__text">
              Week of {state.weekStart.getUTCMonth() + 1}/
              {state.weekStart.getUTCDate()} - {state.weekEnd.getUTCMonth() + 1}
              /{state.weekEnd.getUTCDate()}
              <br></br>
              LTO Moonbase minted{" "}
              <span className="stats__total">{state.weekBlocksTotal}</span>{" "}
              blocks on the LTO Blockchain.
              <br></br>
              <br></br>
              {currentBlocksTotal}
            </p>
          </div>
        </aside>
        <aside className="stats__info-B">
          <div className="card card--primary">
            <header className="card__header">Verified Transactions</header>
            <p className="stats__text">
              Week of {state.weekStart.getUTCMonth() + 1}/
              {state.weekStart.getUTCDate()} - {state.weekEnd.getUTCMonth() + 1}
              /{state.weekEnd.getUTCDate()}
              <br></br>
              LTO Moonbase verified{" "}
              <span className="stats__total">
                {Math.floor(state.weekTxsTotal)}
              </span>{" "}
              transactions on the LTO Blockchain.
              <br></br>
              <br></br>
              {currentTxsTotal}
            </p>
          </div>
        </aside>
        <aside className="stats__info-C">
          <div className="card card--primary">
            <header className="card__header">LTO Earned</header>
            <p className="stats__text">
              Week of {state.weekStart.getUTCMonth() + 1}/
              {state.weekStart.getUTCDate()} - {state.weekEnd.getUTCMonth() + 1}
              /{state.weekEnd.getUTCDate()}
              <br></br>
              LTO Moonbase earned{" "}
              <span className="stats__total">
                {Math.floor(state.weekFeesTotal)}
              </span>{" "}
              LTO in transactions for its leasers.
              <br></br>
              <br></br>
              {currentFeesTotal}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );

  function statsWeekView() {
    if (!state.nodeData ||
      Math.floor(state.nodeData.length / 7) - 2 > state.weekPage) {
      prevWeek = (
        <div className="stats__week-btn" onClick={handlePrev}>
          {"<- Last"}
        </div>
      );
    } else {
      prevWeek = <div className="stats__week-btn boundary">{"<- Last"}</div>;
    }


    if (state.weekPage > 0) {
      nextWeek = (
        <div className="stats__week-btn" onClick={handleNext}>
          {"Next ->"}
        </div>
      );
      currentBlocksTotal = (
        <span>
          <span className="stats__total">{state.currentBlocksTotal}</span> blocks
        were minted since {moment(new Date(state.weekStart)).format("MMMM Do")}.
        </span>
      );
      currentTxsTotal = (
        <span>
          <span className="stats__total">{state.currentTxsTotal}</span>{" "}
        transactions were verified since {moment(new Date(state.weekStart)).format("MMMM Do")}.
        </span>
      );
      currentFeesTotal = (
        <span>
          <span className="stats__total">
            {Math.floor(state.currentFeesTotal)}
          </span>{" "}
        LTO was earned since {moment(new Date(state.weekStart)).format("MMMM Do")}.
        </span>
      );
    } else {
      nextWeek = <div className="stats__week-btn boundary">{"Next ->"}</div>;
      currentBlocksTotal = (
        <span>
        So far <span className="stats__total">{state.currentBlocksTotal}</span>{" "}
        blocks were minted this week.
        </span>
      );
      currentTxsTotal = (
        <span>
        So far <span className="stats__total">{state.currentTxsTotal}</span>{" "}
        transactions were verified this week.
        </span>
      );
      currentFeesTotal = (
        <span>
        So far{" "}
          <span className="stats__total">
            {Math.floor(state.currentFeesTotal)}
          </span>{" "}
        LTO was earned this week.
        </span>
      );
    }
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
            backgroundColor: "#814bc9",
            fontColor: "black",
          },
        ],
      }}
      height={300}
      width={500}
      options={{
        title: {
          display: true,
          text: "LTO Transactions/Fees Week of: 4/4",
          position: "bottom",
          fontColor: "black",
          fontSize: 20,
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
);

const lineChart = (
  <div className="chart">
    <Line
      data={{
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [
          {
            data: [1, 1, 1, 1, 1, 1, 1],
            label: "Fees (LTO Earned)",
            backgroundColor: "#b0d4ff",
            fontColor: "black",
          },
          {
            data: [1, 1, 1, 1, 1, 1, 1],
            label: "Transactions",
            backgroundColor: "#814bc9",
            fontColor: "black",
          },
        ],
      }}
      height={300}
      width={500}
      options={{
        title: {
          display: true,
          text: "LTO Transactions/Fees Week of: 4/4",
          position: "bottom",
          fontColor: "black",
          fontSize: 20,
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
        layout: {
          padding: 10,
        },
      }}
    />
  </div>
);
