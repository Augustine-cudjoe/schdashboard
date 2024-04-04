
import React from 'react'
import MenuTop from '../../utils/MenuTop';
import Wrapper from '../wrapper/Wrapper';
 import "./student.css"
function Students( ) {
    
  return (
    <div className=''  id='home'>
       <MenuTop/>
   <div className="flex flex-col md:flex-row">
      <div className='min-h-screen flex-none md:w-1/4'>
      <Wrapper/>
      </div>
       
     <div className="h-full w-full  md:w-3/4 md:flex-1 md:px-3  md:py-16 md:mt-4">
         <h1 className='text-4xl text-center text-blue-900 mb-3'> List of students</h1>
        <div className="grid  gap-5 md:grid-cols-3 md:mx-5  " id='card-holder'>
          <div className="card border border-green-950 sm:items-center  rounded-md ">
            <img className='w-full h-100' src=' https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk='/>
            <div className=' bg-blue-950 w-full text-white'>
              <p className='font-bold ps-3 '>Samuel Amangoah</p>
               <p className=' ps-3'> Bsc Statistics</p>
                <p className='py-2  ps-3'> <small> Level 400</small></p>
            </div>
          </div>
          <div className="card border border-green-950  rounded-md ">
            <img className='w-full h-100' src=' https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk='/>
            <div className='w-full bg-blue-950 text-white'>
              <p className='font-bold  ps-3'>Evans Amangoah</p>
               <p className=' ps-3'> Bsc Mathematics</p>
                <p className='py-2  ps-3'> <small> Level 100</small></p>
            </div>
          </div>
          <div className="card border border-green-950  rounded-md ">
            <img className='w-full h-100' src=' https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk='/>
            <div className='w-full bg-blue-950 text-white'>
              <p className='font-bold  ps-3 '>Samuel Aman</p>
               <p className=' ps-3'> Bsc Economics</p>
                <p className='py-2  ps-3'> <small> Level 300</small></p>
            </div>
          </div>
      
        
          <div className="card border border-green-950  rounded-md ">
            <img className='w-full h-100' src=' https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='w-full bg-blue-950 text-white'>
              <p className='font-bold  ps-3'>Samuel Aman</p>
               <p className=' ps-3'> Bsc Economics</p>
                <p className='py-2  ps-3'> <small> Level 300</small></p>
            </div>
          </div>
          <div className="card border border-green-950  rounded-md ">
            <img className='w-full h-100' src='https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='w-full bg-blue-950 text-white'>
              <p className='font-bold  ps-3 '>Samuel Aman</p>
               <p className=' ps-3'> Bsc Economics</p>
                <p className='py-2  ps-3'> <small> Level 300</small></p>
            </div>
          </div>
          <div className="card border border-green-950  rounded-md ">
            <img className='w-full h-100' src='https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg'/>
            <div className=' bg-blue-950 text-white w-full'>
              <p className='font-bold  ps-3 '>Esther Amina</p>
               <p className=' ps-3'> Bsc Economics</p>
                <p className='py-2  ps-3'> <small> Level 300</small></p>
            </div>
          </div>
          
        </div>
    </div>
   </div>
    </div>
  )
}
export default Students;

