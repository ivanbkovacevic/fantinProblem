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
        Jedan
      </label>
      <input
        type="checkbox"
        name="toggleSwitch"
        id="dva"
        onChange={(e) => props.featureSetting(e)}
      />
      <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
        Dva
      </label>
      <input
        type="checkbox"
        name="toggleSwitch"
        id="tri"
        onChange={(e) => props.featureSetting(e)}
      />
      <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
        Tri
      </label>
      <input
        type="checkbox"
        name="toggleSwitch"
        id="cetiri"
        onChange={(e) => props.featureSetting(e)}
      />
      <label htmlfor="toggleSwitch" style={{ fontSize: "20px" }}>
        Četiri
      </label>
    </div>
  );
}
