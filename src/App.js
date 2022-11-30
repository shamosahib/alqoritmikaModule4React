import React from 'react';
import List from './List';

export default class App extends React.Component {
 
  state = {
    user: []
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

  render() {
    return (
      <div className='App'>
        {this.state.user.map((item) =>{
          return(<List{...item}/>)
          
        })}
      </div>
      
    );
  }
 }