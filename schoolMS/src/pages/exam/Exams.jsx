
import React from 'react'
import MenuTop from '../../utils/MenuTop';
import Wrapper from '../wrapper/Wrapper';
function Exams( ) {
    
  return (
    <div className=''  id='exam'>
       <MenuTop/>
   <div className="flex flex-col md:flex-row">
      <div className='min-h-screen flex-none md:w-1/4'>
      <Wrapper/>
      </div>
       
     <div className="h-full w-full  md:w-3/4 md:flex-1 md:px-3 py-3  md:py-16 md:mt-4">
         <h1 className='text-4xl text-center text-blue-900 mb-3 uppercase'>Exams </h1>
        <div className="grid  gap-5 md:grid-cols-3 md:mx-5 cursor-pointer " id='card-holder'>
          <div className="card border border-green-950 sm:items-center  rounded-md ">
            <img className='w-full h-100  hover:transition-all' src=' https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk='/>
            <div className=' bg-blue-950 w-full text-white'>
              <p className='font-bold ps-3 '>Samuel Amangoah</p>
               <p className=' ps-3'> Bsc Statistics</p>
                <p className='py-2  ps-3'> <small> Level 400</small></p>
            </div>
          </div>
        
          
        </div>
    </div>
   </div>
    </div>
  )
}
export default Exams;

