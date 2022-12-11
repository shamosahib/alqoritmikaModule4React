let initState = {
    movies: [],    
    arr:[],
    value: '',
    listName:''
}

export const fetcher = (val) => { 
    return function(dispatch){      
        fetch(`https://www.omdbapi.com/?apikey=8e81bb0&s=${val}`)
        .then(res => res.json())
        .then((data) =>{ 
            dispatch({type:'FIND_MOVIE', payload:data.Search})
     })
    }
}

export const reducer = (state = initState,action) => {

if(action.type === 'ADD_MOVIE'){
    let newMovie = state.movies.find((item) => {return item.imdbID === action.payload})

    let arr = [...state.arr] 
    
    if(!state.arr.includes(newMovie)){
       arr = [...state.arr, newMovie]            
    }    
    return {...state,arr}
}

else if (action.type === 'DELETE_MOVIE') {
    return {...state, arr:state.arr.filter((item) => item.imdbID !== action.payload)}
}

else if (action.type === 'GET_LIST_MOVIE') {
    return  {...state,listName:action.payload} 
}

else if (action.type === 'SEARCH_MOVIE' ) {
    return  {...state,value:action.payload}
}

else if(action.type === 'FIND_MOVIE') {
    console.log(state.movies)
    return {...state, movies: [...action.payload]}
}
    return state
}