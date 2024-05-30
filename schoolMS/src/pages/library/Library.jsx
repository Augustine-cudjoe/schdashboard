
import React,{useEffect} from 'react'
import MenuTop from '../../utils/MenuTop';
import Wrapper from '../wrapper/Wrapper';
import "./library.css"
function Library( ) {
    useEffect(()=>{
      document.title="library "
    })
  return (
    <div className=''  id='library'>
       <MenuTop/>
   <div className="flex flex-col md:flex-row">
      <div className='md:min-h-screen flex-none md:w-1/4'>
      <Wrapper/>
      </div>
       
     <div className="h-full w-full md:w-3/4 md:flex-1 md:px-3 pt-20  md:py-5  md:mt-4">
         <h1 className=' text-xl md:text-4xl text-center text-blue-900 uppercase py-3 md:py-0'> OUR LIBRARY </h1>
        <div className=" py-5  mx-5" id='library-content'>
            <h1 className='text-center md:text-start text-2xl md:text-3xl uppercase py-7 text-blue-950  md:capitalize '> Understanding school libraries</h1>
         <div className="flex flex-col mb-5 md:flex-row outline outline-offset-2  transition ease-in-out delay-150 bg-blue-950 hover:-translate-y-1 hover:scale-100 hover:bg-slate-500 duration-300 ring ring-white hover:ring-blue-500 outline-white-500 hover:text-blue-950">
           <div className="w-full  md:w-1/4 flex-none p-5">
             <img className=' w-full h-full  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 duration-300' 
             src='https://images.ctfassets.net/pwv49hug9jad/60uMIBbEK250d7xA9zB5Di/0336208ec58eed9c5116639271c10883/kakapo-6our1k4flx_boys_reading_17084.jpg?fm=webp'/>
            </div>
            <div className=" md:flex-1 md:w-3/4 ps-5">
            <h6 className='text-3xl font-semibold py-3 text-white'> Why school Library</h6>
             <p className=" text-white md:py-2 py-5  pb-3">
             The school library is part of your school’s teaching and learning environment. It provides resources and services that support students, staff, families and whānau. Your library’s resources, 
             physical space, and staff have tremendous potential to make a difference to students’ achievement, educational equity, and their social and emotional well-being.
            </p>   
            </div>    
        
         </div>   
         <div className="flex flex-col mb-5 md:flex-row outline outline-offset-2  transition ease-in-out delay-150 bg-blue-950 hover:-translate-y-1 hover:scale-100 hover:bg-slate-500 duration-300 ring ring-white hover:ring-blue-500 outline-white-500 hover:text-blue-950">
           <div className="w-full  md:w-1/4 flex-none p-5">
             <img className=' w-full h-full  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 duration-300' 
             src='https://images.ctfassets.net/pwv49hug9jad/3PGmWTdUQemUsuvigjWSGI/469430fefe45357faf56039ed2b869d1/kakapo-4m7b24c38n_IMG_1760.jpg?fm=webp'/>
            </div>
            <div className=" md:flex-1 md:w-3/4 ps-5">
            <h6 className='text-3xl font-semibold py-3 text-white capitalize'> Purpose of the  school Library</h6>
             <p className=" text-white  pb-3">
             The school library is part of your school’s teaching and learning environment. It provides resources and services that support students, staff, families and whānau. Your library’s resources, 
             physical space, and staff have tremendous potential to make a difference to students’ achievement, educational equity, and their social and emotional well-being.
            </p>   
            </div>    
        
         </div>
         <div className="flex flex-col mb-5 md:flex-row outline outline-offset-2  transition ease-in-out delay-150 bg-blue-950 hover:-translate-y-1 hover:scale-100 hover:bg-slate-500 duration-300 ring ring-white hover:ring-blue-500 outline-white-500 hover:text-blue-950">
           <div className="w-full  md:w-1/4 flex-none p-5">
             <img className=' w-full h-full  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 duration-300' 
             src='https://images.ctfassets.net/pwv49hug9jad/5RS73KKjL0LNDZyZbWHaMl/c19f737c50ff3944d2eb1f30b0a0a7a5/kakapo-62d2170hpk_SLDF_introduction_s2s_library_research.jpg?fm=webp'/>
            </div>
            <div className=" md:flex-1 md:w-3/4 ps-5">
            <h6 className='text-3xl font-semibold py-3 text-white capitalize'> The pedagory of the Library</h6>
             <p className=" text-white  pb-3">
             The school library is part of your school’s teaching and learning environment. It provides resources and services that support students, staff, families and whānau. Your library’s resources, 
             physical space, and staff have tremendous potential to make a difference to students’ achievement, educational equity, and their social and emotional well-being.
            </p>   
            </div>    
        
         </div>
          
          
        </div>
    </div>
   </div>
    </div>
  )
}
export default Library;

