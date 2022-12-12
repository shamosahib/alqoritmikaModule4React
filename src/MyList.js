import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {useState} from 'react'

function Mylist(){   
  
  let dispatch = useDispatch()

  let arr = useSelector(state => state.arr)
  let listName = useSelector(state => state.listName)

  let [flag,setFlag] = useState(false)
  
  const deleleteMovie = (id) => {
    dispatch({type: 'DELETE_MOVIE', payload: id})
  } 

  const getListName = (ev) => {
    dispatch({type: 'GET_LIST_MOVIE',payload:ev.target.value})
  } 

  const change = () => {
    setFlag(true)  
  }
        return(
          <div className='mylist'>         
            <p className='checkout'>Checkout👇🏻</p>
            <div className='list-div'>
              <input value={listName} type="text" onChange={getListName}/>
              {flag ? <Link to='/list'>Go to Movie Lists</Link> : <button onClick={change}>Save list</button>}
            </div>
            
            {arr.map((item) => {
              return(
                <div>
                <h1>{item.Title}</h1> 
                <button onClick={() => deleleteMovie(item.imdbID)}>Delete</button>
                </div>               
              ) 
            })}                       
          </div>
        ) 
}

export default Mylist