import React from "react";
import { Bar, Line } from "react-chartjs-2";

export default function filterBlocksEarned(state, dispatch, ACTIONS) {
  let blocksEarned = [];
  let transactions = [];
  let ltoEarned = [];
  if (state.chartDataBool) {
    const currentWeekDayUTC = new Date().getUTCDay();

    dispatch({
      type: ACTIONS.SET_CURRENT_WEEK_DAY,
      payload: {
        currentWeekDay: currentWeekDayUTC,
      },
    });

    let weekEnd = Date.now() - 86400000 * (currentWeekDayUTC + 1);
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

    let sunNodeData = state.nodeData.length - (currentWeekDayUTC + 8);
    let weekBlocksTotal = 0;
    let weekTxsTotal = 0;
    let weekFeesTotal = 0;

    for (var i = sunNodeData; blocksEarned.length < 7; i++) {
      let blocks = state.nodeData[i].blocks;
      let txs = state.nodeData[i].txs;
      let fees = state.nodeData[i].fees;
      blocksEarned.push(blocks);
      transactions.push(txs);
      ltoEarned.push(fees);
      weekBlocksTotal += blocks;
      weekTxsTotal += txs;
      weekFeesTotal += fees;
    }
    
    dispatch({
      type: ACTIONS.SET_WEEK_TOTALS,
      payload: {
        weekBlocksTotal: weekBlocksTotal,
        weekTxsTotal: weekTxsTotal,
        weekFeesTotal: weekFeesTotal,
      },
    });

    let currentBlocksTotal = 0;
    let currentTxsTotal = 0;
    let currentFeesTotal = 0;

    while (state.nodeData[i]) {
      let blocks = state.nodeData[i].blocks;
      let txs = state.nodeData[i].txs;
      let fees = state.nodeData[i].fees;
      currentBlocksTotal += blocks;
      currentTxsTotal += txs;
      currentFeesTotal += fees;
      i++
    }

    dispatch({
      type: ACTIONS.SET_CURRENT_TOTALS,
      payload: {
        currentBlocksTotal: currentBlocksTotal,
        currentTxsTotal: currentTxsTotal,
        currentFeesTotal: currentFeesTotal,
      },
    });

    let weekBlockData = { ...state.weekBlocksChart.props.children.props.data };
    weekBlockData.datasets[0].data = blocksEarned;
    weekBlockData.datasets[0].label = "LTO Blocks Earned";

    let weekTxsFeesData = { ...state.weekTxsChart.props.children.props.data };
    weekTxsFeesData.datasets[0].data = ltoEarned;
    weekTxsFeesData.datasets[0].label = "Fees (LTO Earned)";
    weekTxsFeesData.datasets[1].data = transactions;
    weekTxsFeesData.datasets[1].label = "Transactions";

    dispatch({
      type: ACTIONS.SET_WEEK_CHARTS,
      payload: {
        weekBlocksChart: (
          <div className="chart">
            <Bar
              data={weekBlockData}
              height={300}
              width={500}
              options={{
                title: {
                  display: true,
                  text: `LTO Blocks Earned Week of: ${
                    weekStart.getMonth() + 1
                  }/${weekStart.getUTCDate()}`,
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
        weekTxsChart: (
          <div className="chart">
            <Line
              data={weekTxsFeesData}
              height={300}
              width={500}
              options={{
                title: {
                  display: true,
                  text: `LTO Transactions & Fees Week of: ${
                    weekStart.getMonth() + 1
                  }/${weekStart.getUTCDate()}`,
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
      type: ACTIONS.SET_CHART_DATA_BOOL,
      payload: { chartDataBool: false },
    });
  }
}