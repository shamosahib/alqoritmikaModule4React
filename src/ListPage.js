import React from 'react';
import { useSelector } from 'react-redux'

function ListPage(){

  let state = useSelector(state => state)

    return (
      <div className="list">
        <h1>{state.listName}</h1>
       {state.arr.map((item) => {
              return(
                <div>
                <a href={`https://www.imdb.com/title/${item.imdbID}/?ref_=adv_li_tt`}>{item.Title}</a>             
                </div>               
              ) 
            })} 
      </div>
    );
  
    
  
}

export default ListPage