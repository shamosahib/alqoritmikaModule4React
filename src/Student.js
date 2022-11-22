import React, {Component} from "react";
import Group from "./Group";
import Kurs from "./Kurs";
import Name from "./Name";

export default class Student extends Component{
    render(){
        const{firstName, lastName, kurs, group, checkLesson}= this.props
        if(checkLesson){
    
        return(
            
            <div className="block"> 
                <Name firstName={firstName} lastName={lastName}/>
                <Kurs kurs={kurs}/>
                <Group group={group}/>
            </div>
        )}
    }
}