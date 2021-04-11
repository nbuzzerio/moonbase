import React from "react";
import { Bar } from "react-chartjs-2";

export default function filterBlocksEarned(state, dispatch, ACTIONS) {
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
    let weekBlocksTotal = 0;
    for (let i = sunNodeData; blocksEarned.length < 7; i++) {
      let blocks = state.nodeData[i].blocks;
      blocksEarned.push(blocks);
      weekBlocksTotal += blocks;
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
                  }/${weekStart.getDate() + 1}`,
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