import React from "react";
import { data } from "./PROVIDED/data";

class Card extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#f1f9f9",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          marginBottom: "1rem",
          marginLeft: "8rem",
          marginRight: "8rem",
          fontFamily: "sans-serif"
        }}
      >
        <h1>Title : {this.props.title}</h1>
        <p>
          Link :{" "}
          <span style={{ color: "blue", fontWeight: "900" }}>
            {this.props.link}
          </span>
        </p>
        <p style={{ fontStyle: "italic" }}>Text : {this.props.text}</p>
      </div>
    );
  }
}

export default Card;
