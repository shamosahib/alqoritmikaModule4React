import React, { Component } from "react";

export default class Wine extends Component {
  render() {
    const {title, description, rating, liked} = this.props;

    if(liked){
        return (
            <div className="wine">
              <p className="wineTitle"> {title} </p>
              <p className="wineDescription"> {description} </p>
              <p className="wineRating"> {rating} </p>
              <img className="heart" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/broken-heart_1f494.png"></img>
            </div>
          );
    }
    return (
      <div className="wine">
        <p className="wineTitle"> {title} </p>
        <p className="wineDescription"> {description} </p>
        <p className="wineRating"> {rating} </p>
      </div>
    );
  }
}
