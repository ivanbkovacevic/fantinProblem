import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import Features from "./Features";

export default function Policy(props) {
  const [disableCheckBoxes, setDisableCheckBoxes] = useState(true);

  const selectedPolicy = (idx) => {
    let policyCopy = [...props.policy];
    policyCopy[idx].selected = !policyCopy[idx].selected;

    props.setpolicy(policyCopy);
    setDisableCheckBoxes(!disableCheckBoxes);
  };

  const featureSetting = (e) => {
    let policyCopy = [...props.policy];

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

            props.setpolicy(policyCopy);
          }
        }
      }
    }
  };

  return (
    <div>
      <button
        onClick={() => selectedPolicy(props.idx)}
        key={props.idx}
        style={
          props.polc.selected
            ? { backgroundColor: "red" }
            : { backgroundColor: "yellow" }
        }
      >
        {props.polc.ime}
      </button>
      <Features
        featureSetting={featureSetting}
        disableCheckBoxes={disableCheckBoxes}
      />
    </div>
  );
}
