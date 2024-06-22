import React, { Component } from 'react'

export class EventHandlingClass extends Component {
    constructor(){
        super();
        // this.hireMeFunction  = this.hireMeFunction.bind(this)
        this.state = {
            message: 'Hello',
            name : "Surya"
        } 
    }
     hireMeFunction = () => {
        console.log("hello",this.state.name)
        this.setState({
            message : "Namaste",
            name : "SunDia"
        })
        
    }
  render() {
    return (
    <>
          <button onClick={this.hireMeFunction}>Hire me</button>
          {this.state.name}
    </>
    )
  }
}

export default EventHandlingClass