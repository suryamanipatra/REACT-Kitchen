import React from 'react'

class ClassComponents extends React.Component{
    render(){
        return  <>
            <h1>This is our class component</h1>
            {this.props.children}
        </>
    }
}

export default ClassComponents