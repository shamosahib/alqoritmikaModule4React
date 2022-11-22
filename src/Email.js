import React, {Component} from 'react';

class Email extends Component{
    render(){
        return(
            <div className='email'>
                <p>E-mail: {this.props.email}</p>
            </div>
        )
    }
}

export default Email;