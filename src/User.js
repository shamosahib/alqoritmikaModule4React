import React from 'react';

export default class User extends React.Component {
    render(){
        const {name, age, position} = this.props;
        return(
            <div className='Users'>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Position: {position}</p>
            </div>
        )
    }
}