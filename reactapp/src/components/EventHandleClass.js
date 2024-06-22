import React, { Component } from 'react'

export class EventHandleClass extends Component {
    EventHandleClass(){
        console.log("Button Clicked")
    }
  render() {
    return (
      <button onClick={this.EventHandleClass}>clicked me</button>
    )
  }
}

export default EventHandleClass