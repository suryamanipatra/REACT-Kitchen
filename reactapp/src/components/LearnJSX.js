import React from 'react'
const getUserInfo = function (user){
    return user.firstName +  user.lastName

}
const user =  {
    firstName : "Surya",
    lastName : "Patra"
}
const getGreeting = (user)=>{
    if(user) {
       return  <h1>Hello {getUserInfo(user)}</h1>
    }
    return <h1>Hello Strainger. </h1>
}
function LearnJSX() {
  return (
   <>
     <div>Hello Mr.{getUserInfo(user)}</div>
     <div>Hello {getGreeting(user)}</div>
   </>
  )
}

export default LearnJSX