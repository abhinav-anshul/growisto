import React from "react";
import { data } from "./PROVIDED/data";
class Tag extends React.Component {
  render() {
    let baseOne =
      data[1].props.children[1].props.children[0].props.children[0].props
        .children[0];

    let baseTwo = data[1].props.children[2].props.children[0];

    let classNameOne =
      data[1].props.children[1].props.children[0].props.children[0].props
        .children[0].props.className;

    let tagnameOne =
      data[1].props.children[1].props.children[0].props.children[0].props
        .children[0].props.tag;

    let tag =
      data[1].props.children[1].props.children[0].props.children[0].props
        .children[0].props.children;

    const array1 = [tag];

    function rendering() {
      if (tagnameOne === "div") {
        return (
          <div className={classNameOne}>
            {array1.map(el => (
              <div>{el}</div>
            ))}
          </div>
        );
      } else {
        return (
          <h2 className={classNameOne}>
            {array1.map(el => (
              <div>{el}</div>
            ))}
          </h2>
        );
      }
    }

    return (
      <div
        style={{
          fontFamily: "sans-serif",
          backgroundColor: "#bbded6",
          marginLeft: "7rem",
          marginRight: "7rem",
          paddingTop: "1rem",
          marginTop: "1rem",
          marginBottom: "3rem",
          paddingBottom: "1rem",
          borderRadius: "0.5rem"
        }}
      >
        <h1>Tag Component</h1>
        <div style={{ fontStyle: "italic", fontWeight: "500", color: "black" }}>
          {rendering()}
        </div>
      </div>
    );
  }
}

export default Tag;
