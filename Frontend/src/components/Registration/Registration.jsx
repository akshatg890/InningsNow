import React, { useState } from 'react'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'

function Registration() {

    const [isLoginActive,setisLoginActive]=useState(true)
    const handleClick=()=>{
        setisLoginActive(!isLoginActive)
    }
  return (
    <div className='h-screen w-screen'> 
      {
        isLoginActive ? <Login  handleClick={handleClick}/> : <SignUp handleClick={handleClick}/>
      }
    </div>
  )
}

export default Registration
