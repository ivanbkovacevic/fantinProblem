import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

export default function Policy() {
  const [policy, setPolicy] = useState([
    {
      selected: false,
      ime: "pera",
      godiste: 99,
      features: {
        jedan: true,
        dva: false,
        tri: true,
        cetiri: false
      }
    },
    {
      selected: false,
      ime: "mika",
      godiste: 33,
      features: {
        jedan: true,
        dva: false,
        tri: true,
        cetiri: false
      }
    },
    {
      selected: false,
      ime: "zika",
      godiste: 22,
      features: {
        jedan: true,
        dva: false,
        tri: true,
        cetiri: false
      }
    }
  ]);

  const selectedPolicy = (idx) => {
    let policyCopy = [...policy];
    policyCopy[idx].selected = !policyCopy[idx].selected;
    setPolicy(policyCopy);
  };

  const featureSetting = () => {};

  const policyDrawing = policy.map((polc, idx) => {
    return (
      <div>
        <button
          onClick={() => selectedPolicy(idx)}
          key={{ idx }}
          style={
            polc.selected
              ? { backgroundColor: "red" }
              : { backgroundColor: "yellow" }
          }
        >
          {polc.ime}-{polc.godiste}
        </button>
      </div>
    );
  });
  return (
    <div>
      {policyDrawing}
      <div style={{ marginBottom: "50px" }}>
        <input
          onChange={() => featureSetting()}
          type="checkbox"
          name="toggleSwitch"
          id="feature_1"
        />
        <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
          Feature 1
        </label>
        <input type="checkbox" name="toggleSwitch" id="feature_2" />
        <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
          Feature 2
        </label>
        <input type="checkbox" name="toggleSwitch" id="feature_3" />
        <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
          Feature 3
        </label>
      </div>
      {JSON.stringify(policy)}
    </div>
  );
}
