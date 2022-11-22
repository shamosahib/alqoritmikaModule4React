import React, {Component} from 'react';

class Adress extends Component{
    render(){
        return(
            <div className='adress'>
                <p>Adress: {this.props.adress}</p>
            </div>
        )
    }
}

export default Adress;