import React, { useState } from 'react'

const Login = ({handleLogin}) => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

//two way binding
    const submitHandler = (e)=>{
      e.preventDefault();
      //  console.log("form submited email is" , email, 'password is', password);
        handleLogin(email,password)
       setEmail("");
       setPassword("");
    }


  return (
    <div className=' flex h-screen w-screen items-center justify-center '>
      <div className='border-2 rounded-xl border-emerald-400 p-20'>
          <form onSubmit={(e)=>{
              submitHandler(e)
          }} className='flex flex-col items-center justify-center'>
             <input value={email}
             onChange={(e)=>{
              setEmail(e.target.value)
             }}
             required 
             autoComplete='email' 
             className='text-black outline-none border-2 border-emerald-600 rounded-full py-3 px-3 text-xl' type="email" placeholder='Enter your email' />

             <input value={password}
             onChange={(e)=>{
              setPassword(e.target.value)
             }}
             required 
             autoComplete='current-password' 
             className='text-black outline-none border-2 border-emerald-600 rounded-full mt-4 py-3 px-3 text-xl' type="password" placeholder='Enter your password' />
             <button className='text-white border-none outline-none border-2 bg-emerald-600 rounded-full mt-4 py-3 px-5 text-xl'>Log in</button>
          </form> 
      </div>
    </div>
  )
}

export default Login
