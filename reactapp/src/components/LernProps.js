import React from 'react'

const LernProps = (props)  => {
    console.log(props)
  return (
    <>
        <h1>Hello I am {props.name} - {props.lName}</h1>
        {props.children}
    </>
  )
}

export default LernProps