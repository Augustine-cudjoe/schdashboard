
import React from 'react'
import MenuTop from '../../utils/MenuTop';
import Wrapper from '../wrapper/Wrapper';
import "./teachers.css"
function Teachers( ) {
    
  return (
    <div className=''  id='home'>
       <MenuTop/>
   <div className="flex flex-col md:flex-row">
      <div className='min-h-screen flex-none md:w-1/4'>
      <Wrapper/>
      </div>
       
     <div className="h-full w-full  md:w-3/4 md:flex-1 md:px-3  md:py-16 md:mt-4">
         <h1 className='text-4xl text-center text-blue-900 mb-3'> List of Teachers</h1>
        <div className="grid  gap-5 md:grid-cols-3 md:mx-5 ">
          <div className="card border border-green-950  rounded-md ">
            <img className='rounded-none w-100 h-100' src='https://images.pexels.com/photos/4260323/pexels-photo-4260323.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='ps-3 bg-blue-950 text-white'>
              <p className='font-bold '>Stephen Amangoah</p>
               <p><strong> Dept:</strong>  Languages</p>
               <div className="grid place-items-center">
               <button className='rounded-none outline outline-2  outline-offset-2 bg-white mt-5 mb-6  text-blue-950 px-10 py-2 hover:bg-blue-950  hover:text-white '> Read More</button>
            
               </div>
            </div>
          </div>
          <div className="card border border-green-950  h-100 w-100 rounded-md ">
            <img className='rounded-none' src='https://images.pexels.com/photos/3061458/pexels-photo-3061458.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='ps-3 bg-blue-950 text-white'>
              <p className='font-bold '>Stephen Amangoah</p>
               <p><strong> Dept:</strong>  Engineering</p>
               <div className="grid place-items-center">
               <button className='rounded-none outline outline-2  outline-offset-2 bg-white mt-5 mb-6  text-blue-950 px-10 py-2 hover:bg-blue-950  hover:text-white '> Read More</button>
            
               </div>
            </div>
          </div>
          <div className="card border border-green-950  rounded-md ">
            <img className='rounded-none w-100 h-100' src='https://images.pexels.com/photos/4260323/pexels-photo-4260323.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='ps-3 bg-blue-950 text-white'>
              <p className='font-bold '>Stephen Amangoah</p>
               <p><strong> Dept:</strong>  Languages</p>
               <div className="grid place-items-center">
               <button className='rounded-none outline outline-2  outline-offset-2 bg-white mt-5 mb-6  text-blue-950 px-10 py-2 hover:bg-blue-950  hover:text-white '> Read More</button>
            
               </div>
            </div>
          </div>
          <div className="card border border-green-950  h-100 w-100 rounded-md ">
            <img className='rounded-none' src='https://images.pexels.com/photos/3061458/pexels-photo-3061458.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='ps-3 bg-blue-950 text-white'>
              <p className='font-bold '>Stephen Amangoah</p>
               <p><strong> Dept:</strong>  Engineering</p>
               <div className="grid place-items-center">
               <button className='rounded-none outline outline-2  outline-offset-2 bg-white mt-5 mb-6  text-blue-950 px-10 py-2 hover:bg-blue-950  hover:text-white '> Read More</button>
            
               </div>
            </div>
          </div>
          <div className="card border border-green-950  rounded-md ">
            <img className='rounded-none w-100 h-100' src='https://images.pexels.com/photos/4260323/pexels-photo-4260323.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='ps-3 bg-blue-950 text-white'>
              <p className='font-bold '>Stephen Amangoah</p>
               <p><strong> Dept:</strong>  Languages</p>
               <div className="grid place-items-center">
               <button className='rounded-none outline outline-2  outline-offset-2 bg-white mt-5 mb-6  text-blue-950 px-10 py-2 hover:bg-blue-950  hover:text-white '> Read More</button>
            
               </div>
            </div>
          </div>
          <div className="card border border-green-950  h-100 w-100 rounded-md ">
            <img className='rounded-none' src='https://images.pexels.com/photos/3061458/pexels-photo-3061458.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='ps-3 bg-blue-950 text-white'>
              <p className='font-bold '>Stephen Amangoah</p>
               <p><strong> Dept:</strong>  Engineering</p>
               <div className="grid place-items-center">
               <button className='rounded-none outline outline-2  outline-offset-2 bg-white mt-5 mb-6  text-blue-950 px-10 py-2 hover:bg-blue-950  hover:text-white '> Read More</button>
            
               </div>
            </div>
          </div>
          
         
          
          
        </div>
    </div>
   </div>
    </div>
  )
}
export default Teachers;

