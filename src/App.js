import React from 'react';
import List from './List';

export default class App extends React.Component {
 
  state = {
    user: [],
    findUser: []
  };
  
  getData = () => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ user: data });
      });
  };
  componentDidMount() {
    this.getData();
  }



  searchList = () => {
    const inputText = document.querySelector(".inpt").value;
    const copyUsers = this.state.user;
  }
  

  render() {
    
    return (
      <div className='Main-app'>
        <div className='App'>
         {this.state.user.map((item) =>{
          return(<List{...item}/>)
          
         })}
        </div>
        <input className='inpt' type={"text"}></input> 
        <button type='button' onClick={this.searchList}> Axtarish et</button>
      </div>
    );
  }
 }