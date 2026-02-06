import React, { useState } from 'react'

const Header = (props) => {

  // const [ username, setUserName ] = useState('');
  // if(!data){
  //   setUserName('Admin');
  // }else{
  //   setUserName(data.firstName)
  // }
  console.log("hii", props.changeUser);

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='flex items-center justify-between '>
      <h1 className='text-2xl font-medium'> Hello <br /> <span className='text-3xl font-semibold'> 👋</span> </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
