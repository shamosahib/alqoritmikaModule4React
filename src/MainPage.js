import Search from './SearchBox'
import MyList from './MyList'
import './index.css'

function MainPage(){            
        return(
          <div className='main'>  
            <Search/>              
            <MyList/>                  
          </div>
        ) 
}

export default MainPage