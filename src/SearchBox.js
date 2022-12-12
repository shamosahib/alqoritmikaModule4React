import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import {fetcher} from './redux/reducer'


function SearchBox(){  
  let dispatch = useDispatch()
  
  let movies = useSelector(state => state.movies)
  let value = useSelector(state => state.value)
  
  const add = (id) => {
    dispatch({type: 'ADD_MOVIE', payload: id})
  }
  const getSerchValue = (ev) => {
    dispatch({type: 'SEARCH_MOVIE',payload: ev.target.value})
  }
         
        return(
          <div className='search-box'>
              <h5 className='seacrh-title'>SEARCH MOVIE🍿</h5>
            <div className='search'>
              <input className='search-box-input' value={value} type="text" onChange={getSerchValue}  placeholder="Example, Harry Potter "/>
              <button className='search-box-button' onClick={() => dispatch(fetcher(value))}>Search</button>
            </div>
            
            {movies.map((item) => {
              return(
                <div>
                <h1>{item.Title} {`(${item.Year})`}</h1>
                <img src={item.Poster}/>
                <div>
                <button onClick={() => add(item.imdbID)}>Add a list</button>               
                </div>               
                </div>       
              ) 
            })}                      
          </div>
        ) 
}

export default SearchBox