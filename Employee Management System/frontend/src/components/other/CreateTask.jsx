import React, { useState } from 'react'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');
    const [newTask, setNewTask] = useState({})
    
    const submitHandler = (e)=>{
      e.preventDefault();
        
      setNewTask({taskTitle, taskDescription, taskDate, category, active:false,newTask:true,completed:false,failed:true})
      
      const Data = JSON.parse(localStorage.getItem('employees'))
      
      Data.forEach((elem)=>{
        if(asignTo == elem.firstName){
            elem.tasks.push(newTask) 
            console.log(elem);
        }
      })

      localStorage.setItem('employee', JSON.stringify(Data))
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
        setTaskTitle('')

      
    }
  return (

    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form  onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between '>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input onChange={(e)=>{
                        setTaskTitle(e.target.value);}} className='text-sm py-1 px-2 w-4/5 rounded outline-1 bg-transparent border-[1] border-gray-400 mb-4' value={taskTitle} type="text" placeholder='Make a design'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input onChange={(e)=>{
                        setTaskDate(e.target.value);}} className='text-sm py-1 px-2 w-4/5 rounded outline-1 bg-transparent border-[1] border-gray-400 mb-4' value={taskDate} type="date" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input onChange={(e)=>{
                        setAsignTo(e.target.value);}} className='text-sm py-1 px-2 w-4/5 rounded outline-1 bg-transparent border-[1] border-gray-400 mb-4' value={asignTo} type="text" placeholder='Employee name' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input onChange={(e)=>{
                        setCategory(e.target.value);}} className='text-sm py-1 px-2 w-4/5 rounded outline-1 bg-transparent mb-4 border-[1] border-gray-400' value={category} type="text" placeholder='design, dev etc..'/>
                </div>
            </div>
            
            <div className='w-2/5 flex flex-col items-start'>
               <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
               <textarea onChange={(e)=>{
                        setTaskDescription(e.target.value);}} className='w-full h-44 text-sm py-2 px-4 rounded outline-1 bg-transparent border-[1] border-gray-400' value={taskDescription} name="" id="" cols={30} rows={5} ></textarea>
               <button className=' bg-emerald-500 py-2 hover:bg-emerald-600 rounded px-5 text-sm mt-4 w-full'>Create Task</button>
            </div>
            
        </form>
      </div>
  )
}

export default CreateTask
