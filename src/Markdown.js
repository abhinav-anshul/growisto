import React from "react";
import { data } from "./PROVIDED/data.js";
import snarkdown from "snarkdown";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

class Markdown extends React.Component {
  render() {
    let full = data[1].props.children[0].props.children[0].props.text;

    let html = snarkdown(full);

    return (
      <div>
        <h1>Markdown component</h1>
        <div>{ReactHtmlParser(html)}</div>
      </div>
    );
  }
}

export default Markdown;
