// import React from 'react';

// class StateInClassComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       msg: "This is My LinkedIn Post",
//       buttonText: "Like",
//     };
//   }

//   toggleLikePost = () => {
//     this.setState((prevState) => ({
//       msg: prevState.msg === "This is My LinkedIn Post" ? "You liked this post" : "This is My LinkedIn Post",
//       buttonText: prevState.buttonText === "Like" ? "Unlike" : "Like",
//     }));
//   };

//   render() {
//     return (
//       <>
//         <h1>{this.state.msg}</h1>
//         <button onClick={this.toggleLikePost}>{this.state.buttonText}</button>
//       </>
//     );
//   }
// }

// export default StateInClassComponent;



import React from 'react'

class stateInClassComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            msg: "This is my Instgram Post,Please Like!!!",
            buttonText : "Like"
        }
    }
    toggleTheLikePost = ()=>{
        this.setState((prevState) => ({
            msg : prevState.msg === "This is my Instgram Post,Please Like!!!" ? "You Liked This post":"This is my Instgram Post,Please Like!!!",
            buttonText: prevState.buttonText === "Like" ? "Unlike" : "Like",

        }));
    }
 render(){
    return<>
      <h1>{this.state.msg}</h1>
      <button onClick={()=>{this.toggleTheLikePost()}}>{this.state.buttonText}</button>
    </>
      
    
 }
}

export default stateInClassComponent
