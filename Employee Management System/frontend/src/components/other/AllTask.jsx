import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  
   const Authdata = useContext(AuthContext); 
   console.log(Authdata.employees)

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-60 overflow-auto'>
       <div className='bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 '>Employee Name</h2>
            <h3 className='w-1/5 '>New Task</h3>
            <h5 className='w-1/5 '>Active Task</h5>
            <h5 className='w-1/5 '>Completed</h5>
            <h5 className='w-1/5 '>Failed</h5>
        </div>
        <div className='h-[80%]'>
            {Authdata.employees.map((elem, idx)=>{       
           return <div key={idx} className='border border-emerald-300 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 '>{elem.firstName}</h2>
            <h3 className='w-1/5 !text-blue-500'>{elem.tasks.title}</h3>
            <h5 className='w-1/5 !text-yellow-500'>{elem.taskCount.active}</h5>
            <h5 className='w-1/5 !text-green-500'>{elem.taskCount.newTask}</h5>
            <h5 className='w-1/5 !text-green-500'>{elem.taskCount.completed}</h5>
            <h5 className='w-1/5 !text-red-500'>{elem.taskCount.failed}</h5>
        </div>
        })}
        
        </div>
        
        
    </div>
  )
}

export default AllTask
