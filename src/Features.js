import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

export default function Policy(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "50px",
        opacity: props.disableCheckBoxes ? "0" : "1"
      }}
    >
      <input
        onChange={(e) => props.featureSetting(e)}
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
        onChange={(e) => props.featureSetting(e)}
      />
      <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
        Feature 2
      </label>
      <input
        type="checkbox"
        name="toggleSwitch"
        id="tri"
        onChange={(e) => props.featureSetting(e)}
      />
      <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
        Feature 3
      </label>
      <input
        type="checkbox"
        name="toggleSwitch"
        id="cetiri"
        onChange={(e) => props.featureSetting(e)}
      />
      <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
        Feature 4
      </label>
    </div>
  );
}
