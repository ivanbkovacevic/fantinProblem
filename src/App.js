import "./styles.css";
import Policy from "./Policy";
import { StrictMode, useState } from "react";

export default function App() {
  const [policy, setPolicy] = useState([
    {
      selected: false,
      ime: "pera",
      godiste: 99,
      features: [
        { jedan: false },
        { dva: false },
        { tri: false },
        { cetiri: false }
      ]
    },
    {
      selected: false,
      ime: "mika",
      godiste: 33,
      features: [
        { jedan: false },
        { dva: false },
        { tri: false },
        { cetiri: false }
      ]
    },
    {
      selected: false,
      ime: "zika",
      godiste: 22,
      features: [
        { jedan: false },
        { dva: false },
        { tri: false },
        { cetiri: false }
      ]
    }
  ]);

  const policyDrawing = policy.map((polc, idx) => {
    return (
      <div>
        <Policy setpolicy={setPolicy} policy={policy} polc={polc} idx={idx} />
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Evo Fanta</h1>
      Selektuj ime(polisu)
      <p>Pa onda chekiraj Features</p>
      <p>
        Provalices da se menja state za svaku features za selectovane polise
      </p>
      {policyDrawing}
      <p>Prva polisa</p>
      {JSON.stringify(policy[0], null, "\t")}
      <p>Druga polisa</p>
      {JSON.stringify(policy[1], null, "\t")}
      <p>Treca polisa</p>
      {JSON.stringify(policy[2], null, "\t")}
    </div>
  );
}
