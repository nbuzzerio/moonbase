import React, {useState, useEffect} from "react";
import getBlockData from '../_getBlockData'
import getNodeData from '../_getNodeData'

export default function Stats() {
  const [nodeData, setNodeData] = useState(null);
  const [blockData, setBlockData] = useState(null);
  const [weekStart, setWeekStart] = useState(null);
  const [weekEnd, setWeekEnd] = useState(null);

  useEffect(() => {

    setWeekEnd(Date.now() - ( 86400000 * new Date().getDay() ));
    setWeekStart(weekEnd - 604800000);

      let mounted = true;
      getBlockData()
          .then(data => {
            setBlockData(data);
          })
          .catch(function (error) {
              console.log(error);
          });
      getNodeData()
          .then(data => {
            setNodeData(data[0].slice(790));
          })
          .catch(function (error) {
              console.log(error);
          });

      return () => {
          mounted = false;
      }
  }, [])


  return (
    <div className="section__container">
      <header className="stats__header">
        <h2>Node Statistics</h2>
      </header>
      <div className="grid grid--2x6">
        <article className="stats__LTO-graph">
          <figure className="graph__container">
            <img className="graph"
              src="https://moonbase-demo.s3.amazonaws.com/ltoearned.png"
              alt=""
            />
          </figure>
        </article>
        <article className="stats__block-graph">
          <figure className="graph__container">
            <img className="graph"
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
