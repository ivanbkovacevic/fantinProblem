import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

export default function Policy() {
  const [policy, setPolicy] = useState([
    {
      selected: false,
      ime: "pera",
      godiste: 99,
      features: [
        { jedan: true },
        { dva: false },
        { tri: true },
        { cetiri: false }
      ]
    },
    {
      selected: false,
      ime: "mika",
      godiste: 33,
      features: [
        { jedan: true },
        { dva: false },
        { tri: true },
        { cetiri: false }
      ]
    },
    {
      selected: false,
      ime: "zika",
      godiste: 22,
      features: [
        { jedan: true },
        { dva: false },
        { tri: true },
        { cetiri: false }
      ]
    }
  ]);

  const selectedPolicy = (idx) => {
    let policyCopy = [...policy];
    policyCopy[idx].selected = !policyCopy[idx].selected;
    setPolicy(policyCopy);
  };

  const featureSetting = (e) => {
    let policyCopy = [...policy];

    let featureName = e.target.id;

    for (const i in policyCopy) {
      if (policyCopy[i].selected === true) {
        for (const k in policyCopy[i].features) {
          //   console.log(typeof(policyCopy[i].features[k])+' object keyz');
          // console.log(Object.keys(policyCopy[i].features[k])+' kijevi');

          console.log(featureName);
          if (Object.keys(policyCopy[i].features[k]) == featureName) {
            console.log(Object.keys(policyCopy[i].features[k]) + " futureName");

            policyCopy[i].features[k][featureName] = !policyCopy[i].features[k][
              featureName
            ];
            //    console.log('ulayi' + Object.keys(policyCopy[i].features[k]));

            setPolicy(policyCopy);
          }
        }
      }
    }
  };

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
          {polc.ime}
        </button>
      </div>
    );
  });
  return (
    <div>
      {policyDrawing}
      <div style={{ marginBottom: "50px" }}>
        <input
          onChange={(e) => featureSetting(e)}
          type="checkbox"
          name="toggleSwitch"
          id="jedan"
        />
        <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
          Feature 1
        </label>
        <input
          type="checkbox"
          name="toggleSwitch"
          id="dva"
          onChange={(e) => featureSetting(e)}
        />
        <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
          Feature 2
        </label>
        <input
          type="checkbox"
          name="toggleSwitch"
          id="tri"
          onChange={(e) => featureSetting(e)}
        />
        <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
          Feature 3
        </label>
        <input
          type="checkbox"
          name="toggleSwitch"
          id="cetiri"
          onChange={(e) => featureSetting(e)}
        />
        <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
          Feature 4
        </label>
      </div>
      {JSON.stringify(policy)}
    </div>
  );
}
