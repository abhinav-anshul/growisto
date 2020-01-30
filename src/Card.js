import React from "react";
import { data } from "./PROVIDED/data";

class Card extends React.Component {
  render() {
    return (
      <div>
        <h1>Title : {this.props.title}</h1>
        <p>Link : {this.props.link}</p>
        <p>Text : {this.props.text}</p>
      </div>
    );
  }
}

export default Card;
