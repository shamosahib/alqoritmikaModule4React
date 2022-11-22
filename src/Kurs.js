import React, {Component} from "react";

export default class Kurs extends Component{
    render(){
        return(
            
            <div> 
                <p className="kurs-student">Kurs: {this.props.kurs} </p>
                
            </div>
        )
    }
}