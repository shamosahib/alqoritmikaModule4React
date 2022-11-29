import React, { Component } from 'react';

export default class Employees extends Component{

    state ={
        employess: [
            {"id":1,"name":"Frodo Baggins","department":"Management","role":"CEO"},
            {"id":2,"name":"Samwise Gamgee","department":"Management","role":"CTO"},
            {"id":3,"name":"Gandalf the Gray","department":"Recruitment","role":"Lead-recruiter"},
            {"id":4,"name":"Aragorn","department":"Security","role":"Security officer"},
            {"id":5,"name":"Legolas","department":"Management","role":"Office manager"}
        ]
    }


    render(){
        return this.state.employess.map( user => {
            return(
                <div className='div-employees'>
                    <p>ID: {user.id} | Name: {user.name} | Department: {user.department} | Role: {user.role}</p>
                </div>
            )
        })
       
    }
}