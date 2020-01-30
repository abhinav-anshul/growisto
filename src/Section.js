import React from "react";
import { data } from "./PROVIDED/data";

function Section() {
  return (
    <div
      style={{
        backgroundColor: "#6a8caf",
        marginLeft: "7rem",
        marginRight: "7rem",
        color: "white",
        fontFamily: "sans-serif",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginBottom: "2rem"
      }}
    >
      <h1>{data[0].props.h2}</h1>
      <h2>{data[0].props.text}</h2>
    </div>
  );
}

export default Section;
