import React, { Component } from "react";
import Wine from "./Wine";

export default class App extends Component {
  render() {
    return (
      <>
        <Wine
          title="Hungarian Wine"
          description="10-year-old natural Hungarian cognac"
          rating="6.6"
          liked
        />
        <Wine
          title="Hungarian Wine"
          description="10-year-old natural Hungarian cognac"
          rating="6.6"
          liked={false}
        />
      </>
    );
  }
}
