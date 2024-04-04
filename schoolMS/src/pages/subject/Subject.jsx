
import React from 'react'
import MenuTop from '../../utils/MenuTop';
import Wrapper from '../wrapper/Wrapper';
import "./subject.css"
function Subject( ) {
    
  return (
    <div   id='subject'>
       <MenuTop/>
   <div className="flex flex-col md:flex-row">
      <div className='min-h-screen flex-none md:w-1/4'>
      <Wrapper/>
      </div>
       
     <div className="h-full w-full md:w-3/4 md:flex-1 md:px-3  md:py-16 md:mt-4">
         <h1 className='text-4xl text-center text-blue-900 mb-3'> Available Courses </h1>
        <div className="grid  gap-5 md:grid-cols-2 md:mx-5 ">
          <div className="card border border-green-950  rounded-md ">
            <img className='rounded-none w-100 h-100' src='https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='ps-3 bg-blue-950 text-white'>
                <h6 className='font-semibold py-5 md:text-2xl'>Physics</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione ipsa consequatur quas delectus inventore animi sit libero ad deserunt ipsam, suscipit itaque quae laudantium rerum perspiciatis blanditiis optio quibusdam. </p>
            <div className="flex justify-center items-center">
            <button className='rounded-none outline outline-2 outline-offset-2 bg-white mt-5 mb-6  text-blue-950 px-10 py-2 hover:bg-blue-950  hover:text-white '> Read More</button>
           
            </div>
            </div>
          </div>
         
          <div className="card border border-green-950  rounded-md ">
            <img className='rounded-none w-100 h-100' src='https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='ps-3 bg-blue-950 text-white'>
                <h6 className='font-semibold py-5 md:text-2xl'>  Mathematics</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione ipsa consequatur quas delectus inventore animi sit libero ad deserunt ipsam, suscipit itaque quae laudantium rerum perspiciatis blanditiis optio quibusdam. </p>
            <div className="flex justify-center items-center">
            <button className='rounded-none outline outline-2 outline-offset-2 bg-white mt-5 mb-6  text-blue-950 px-10 py-2 hover:bg-blue-950  hover:text-white '> Read More</button>
           
            </div>
            </div>
          </div>
         
          
          
        </div>
    </div>
   </div>
    </div>
  )
}
export default Subject;

