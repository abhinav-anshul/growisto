import React from "react";
import ReactDOM from "react-dom";
import Section from "./Section";
import Card from "./Card";
import Markdown from "./Markdown";
import Tag from "./Tag";
import Col from "./Col";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
