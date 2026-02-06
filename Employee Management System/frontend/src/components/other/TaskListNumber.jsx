import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2 className='text-2xl font-bold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-400">
        <h2 className='text-2xl font-bold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>Completed</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-green-400 ">
        <h2 className='text-3xl text-black font-bold '>{data.taskCount.active}</h2>
        <h3 className='text-xl mt-0.5 text-black font-medium '>Accepted</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-400">
        <h2 className='text-2xl font-bold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
