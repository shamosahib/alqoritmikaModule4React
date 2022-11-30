import React from 'react';
import User from './User';

export default class App extends React.Component {
 
  state ={
    user: [
      {name:'User1', age: '19', position: 'Admin',},
      {name:'User1', age: '19', position: 'Admin',},
      {name:'User1', age: '19', position: 'Admin',},
      {name:'User1', age: '19', position: 'Admin',},
      {name:'User1', age: '19', position: 'Admin',}
      
    ]
  }

  userAdder = (index) =>{
    const copyUser = {...this.state.user}
    console.log(copyUser)
  }

  render() {
    return (
      <div className='container'>
          {this.state.user.map(item=>{
            return <User {...item}/>
          })}
      </div>
    );
  }
 }