import React, { Component } from "react";

export default class List extends Component {
  
  render() {
    const {id, name, department, role} = this.props;
    return (
      <div className="list-div">
       <p>Name: {name}</p>
       <p>Department: {department}</p>
       <p>Role: {role}</p>
      </div>
    );
  }
}
