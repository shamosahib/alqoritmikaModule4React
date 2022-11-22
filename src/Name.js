import React, {Component} from 'react';

class Name extends Component{
    render(){
        return(
            <div className='name'>
                <p className='first'>Name: {this.props.firstName}</p>
                <p className='last'>Surname: {this.props.lastName}</p>
            </div>
        )
    }
}

export default Name;