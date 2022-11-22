import React, {Component} from "react";

export default class Name extends Component{
    render(){
        return(
            
            <div> 
                <p className="names-student">Ad: {this.props.firstName} </p>
                <p className="names-student">Soyad: {this.props.lastName} </p>
            </div>
        )
    }
}