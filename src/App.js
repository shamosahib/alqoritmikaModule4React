import React from 'react';
import User from './User';

export default class App extends React.Component {
 
  state ={
    user: [
      {id:'1', name:'Nikon', age: '19', position: 'Admin',},
      {id:'2', name:'Canon', age: '19', position: 'Admin',},
      {id:'3', name:'Sony', age: '19', position: 'Admin',},
      {id:'4', name:'Fuji', age: '19', position: 'Admin',},
      {id:'5', name:'Panasonic', age: '19', position: 'Admin',},
      
      
    ]
  }

  userAdder = (index) =>{
    const copyUser = this.state.user;
    const newArr = [
      ...copyUser.slice(0,index), {name: "Apple", age:'36', position:'CEO'},
      ...copyUser.slice(index)
    ]
    this.setState({user: [...newArr]})
  }

  deleteUser = (id) => {
    const copy = this.state.user;
    const newArr = copy.filter(item=> item.id !== id);
    this.setState({user: newArr});
  }
  render() {
    return (
      <div>
        <div className='container'>
          {this.state.user.map(item=>{
            return(
              <div className='userContainer'>
                <User {...item}/>
                <button type='button' onClick={() => this.deleteUser(item.id)}>Delete</button>
              </div>
               
            ) 
          })}
        </div>
        <button type='button' onClick={() => this.userAdder(2)}>Add</button>
      </div>
      
    );
  }
 }