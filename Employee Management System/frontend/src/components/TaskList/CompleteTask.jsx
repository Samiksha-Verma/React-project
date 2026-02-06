import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=" shrink-0 h-full w-[300px] p-5 bg-purple-400 rounded-xl">
         <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm font-semibold'> {data.date}</h4>
         </div>
         <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
         <p className='text-sm mt-2'>{data.description}</p>
         <div className='mt-25'>
            <button className='bg-green-700 rounded py-1 px-2 text-sm w-full'>Complete</button>
         </div>
      </div>
  )
}

export default CompleteTask
