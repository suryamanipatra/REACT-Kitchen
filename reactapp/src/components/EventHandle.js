import React from 'react'

function EventHandle() {
    const changeEvent = () =>{
        console.log("Button Clicked");
    }
  return (
    <button onClick={changeEvent}>click me</button>
  )
}

export default EventHandle