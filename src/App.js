import React from 'react';

export default class App extends React.Component {
  state = { 
    value1: "" ,
    value2: "" ,
    value3: "" 

  };
  handleChange1 = event => this.setState({ value1: event.target.value });
  handleChange2= event => this.setState({ value2: event.target.value });
  handleChange3 = event => this.setState({ value3: event.target.value });
  handleClick1 = () => this.setState({ value1: "" });
  handleClick2 = () => this.setState({ value2: "" });
  handleClick3 = () => this.setState({ value3: "" });
  render() {
    return (
      <div className='container'>
        <label>
          Ad: <input className='inpt-name' value={this.state.value1} name="Name" onChange={this.handleChange1}/>
        </label>
        <button className='del-btn btn-name' onClick={this.handleClick1}>x</button> 
        <br></br>
        <label>
          Email: <input className='inpt-email' value={this.state.value2} name="Email" onChange={this.handleChange2}/>
        </label>
        <button className='del-btn btn-email' onClick={this.handleClick2}>x</button>
        <br></br>
        <label>
          Parol: <input className='inpt-pass' value={this.state.value3} name="Pass" onChange={this.handleChange3}/>
        </label>
        <button className='del-btn btn-pass' onClick={this.handleClick3}>x</button>
      </div>
    );
  }
 }