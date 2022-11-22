import React, {Component} from "react";

export default class Group extends Component{
    render(){
        return(
            
            <div> 
                <p className="qrup-student">Qrup: {this.props.group} </p>
            </div>
        )
    }
}