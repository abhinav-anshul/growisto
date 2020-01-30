import React from "react";
import Section from "./Section";
import Card from "./Card";
import { data } from "./PROVIDED/data";
import Markdown from "./Markdown";
import Tag from "./Tag";

class Layout extends React.Component {
  cardDetail = {
    cardArrayZeroObjectZero: {
      title: data[0].props.children[0].props.children[0].props.title,
      link: data[0].props.children[0].props.children[0].props.link,
      text: data[0].props.children[0].props.children[0].props.text
    },
    cardArrayZeroObjectOne: {
      title: data[0].props.children[1].props.children[0].props.title,
      link: data[0].props.children[1].props.children[0].props.link,
      text: data[0].props.children[1].props.children[0].props.text
    },
    cardArrayZeroObjectTwo: {
      title: data[0].props.children[2].props.children[0].props.title,
      link: data[0].props.children[2].props.children[0].props.link,
      text: data[0].props.children[2].props.children[0].props.text
    },
    cardArrayTwoObjectZero: {
      title: data[2].props.children[0].props.children[0].props.title,
      link: data[2].props.children[0].props.children[0].props.link,
      text: data[2].props.children[0].props.children[0].props.text
    },
    cardArrayTwoObjectOne: {
      title: data[2].props.children[1].props.children[0].props.title,
      link: data[2].props.children[1].props.children[0].props.link,
      text: data[2].props.children[1].props.children[0].props.text
    },
    cardArrayTwoObjectTwo: {
      title: data[2].props.children[2].props.children[0].props.title,
      link: data[2].props.children[2].props.children[0].props.link,
      text: data[2].props.children[2].props.children[0].props.text
    }
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Section />
        {data[0].props.children[0].component ? (
          <div>
            <Card
              title={this.cardDetail.cardArrayZeroObjectZero.title}
              link={this.cardDetail.cardArrayZeroObjectZero.link}
              text={this.cardDetail.cardArrayZeroObjectZero.text}
            />
            <Card
              title={this.cardDetail.cardArrayZeroObjectOne.title}
              link={this.cardDetail.cardArrayZeroObjectOne.link}
              text={this.cardDetail.cardArrayZeroObjectOne.text}
            />
            <Card
              title={this.cardDetail.cardArrayZeroObjectTwo.title}
              link={this.cardDetail.cardArrayZeroObjectTwo.link}
              text={this.cardDetail.cardArrayZeroObjectTwo.text}
            />
            <Card
              title={this.cardDetail.cardArrayTwoObjectZero.title}
              link={this.cardDetail.cardArrayTwoObjectZero.link}
              text={this.cardDetail.cardArrayTwoObjectZero.text}
            />
            <Card
              title={this.cardDetail.cardArrayTwoObjectOne.title}
              link={this.cardDetail.cardArrayTwoObjectOne.link}
              text={this.cardDetail.cardArrayTwoObjectOne.text}
            />
            <Card
              title={this.cardDetail.cardArrayTwoObjectTwo.title}
              link={this.cardDetail.cardArrayTwoObjectTwo.link}
              text={this.cardDetail.cardArrayTwoObjectTwo.text}
            />
          </div>
        ) : null}
        <Markdown />
        <Tag />
      </div>
    );
  }
}

export default Layout;
