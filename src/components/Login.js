import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [issigninform,setissigninform]=useState(true);

  const toggleSignInform=()=>{
    setissigninform(!issigninform); 
  }
    return (
    <div>
        <Header/>
        <div className='absolute' >
            <img 
            className=' '
            alt='bg'
            src='https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg'
            />
        </div>
     
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80'>
            <h1 className='text-3xl font-bold'>{issigninform ? "Sign In":"Sign Up"}</h1>
            {!issigninform && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-md'  />}
            <input type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-700 rounded-md'  />
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-md' />
            <button className='p-4 my-6 bg-red-700 w-full rounded-md'>{issigninform ? "Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInform} >{issigninform ? "New to Netflix? Sign Up now":"Already have an account? Sign In "}</p>
        </form>
    

    </div>
  )
}

export default Login