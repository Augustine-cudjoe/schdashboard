
import React from 'react'
import MenuTop from '../../utils/MenuTop';
import Wrapper from '../wrapper/Wrapper';
function Attendance( ) {
    
  return (
    <div className=''  id='home'>
       <MenuTop/>
   <div className="flex flex-col md:flex-row">
      <div className='min-h-screen flex-none md:w-1/4'>
      <Wrapper/>
      </div>
       
     <div className="h-full w-full  md:w-3/4 md:flex-1 md:px-3 py-3  md:py-16 md:mt-4">
         <h1 className='text-4xl text-center text-blue-900 mb-3 uppercase'> Attendance </h1>
        <div className="md:mx-5 cursor-pointer " id='card-holder'>
         <div className="card">
         
         </div>
         
      
        
          
          
        </div>
    </div>
   </div>
    </div>
  )
}
export default Attendance;
