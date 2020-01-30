import React from "react";
import { data } from "./PROVIDED/data";

function Section() {
  return (
    <div>
      <h1>{data[0].props.h2}</h1>
      <h2>{data[0].props.text}</h2>
    </div>
  );
}

export default Section;
