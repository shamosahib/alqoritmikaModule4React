import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './index.css'
import ListPage from './ListPage';
import MainPage from './MainPage';

function App(){
    return (
      <div className="app">
       <header className="header">
                <h1 className="header__title">
                    Movie 
                </h1>
            </header>
      <Routes>
      <Route path='' element={ <MainPage/>}/>
      <Route path='/list' element={<ListPage />}/>
      </Routes>   
      </div>
    );
  
}

export default App;