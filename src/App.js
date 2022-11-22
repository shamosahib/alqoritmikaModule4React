import React, {Component} from 'react';
import './App.css';
import Profile from './Profile';


class App extends Component {
  render(){
    return(
      <div className='App'>
         <Profile  firstName='Shamo' lastName='Naghiyev' email='example@gmail.com' personalNum='050 000 00 00' adress='Narimanov Ms'/>
         <Profile  firstName='Shamo' lastName='Naghiyev' email='example@gmail.com' personalNum='050 000 00 00' adress='Narimanov Ms'/>
      </div>
   
    )
  }
}

export default App;