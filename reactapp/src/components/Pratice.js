import React, { Component } from 'react'

export class Pratice extends Component {
    constructor(){
        super();
        this.state = {
         text: "Hello Surya"   
        }
    }
    ChangeHandler = () =>{
        this.setState({
            text: "Hello World"
        })
    }
  render() {
    return (
    <>
            {this.state.text}
            <button onClick={()=>{this.ChangeHandler()}}>Pratice</button>
    </>
    )
  }
}

export default Pratice