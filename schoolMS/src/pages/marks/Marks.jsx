
import React,{useEffect} from 'react'
import MenuTop from '../../utils/MenuTop';
import Wrapper from '../wrapper/Wrapper';
function Marks( ) {
  useEffect(()=>{
    document.title="marks"
  })
  return (
    <div className=''  id='marks'>
       <MenuTop/>
   <div className="flex flex-col md:flex-row">
      <div className='md:min-h-screen flex-none md:w-1/4'>
      <Wrapper/>
      </div>
       
     <div className="h-full w-full  md:w-3/4 md:flex-1 md:px-3 pt-20  md:py-16 md:mt-4">
         <h1 className='text-4xl text-center text-blue-900 mb-3 uppercase'>Marks </h1>
        
    </div>
   </div>
    </div>
  )
}
export default Marks;

