import React, {Component} from 'react';
import './App.css';
import Profile from './Profile';


class App extends Component {
  render(){
    return(
    <Profile  firstName='Shamo' lastName='Naghiyev' email='example@gmail.com' personalNum='050 000 00 00' adress='Narimanov Ms'/>
    )
  }
}

export default App;