
import React,{useEffect} from 'react'
import MenuTop from '../../utils/MenuTop';
import Wrapper from '../wrapper/Wrapper';
import "./transport.css"
function Transport( ) {
  useEffect(()=>{
    document.title="transport "
  })
  return (
    <div className=''  id='transport'>
       <MenuTop/>
   <div className="flex flex-col md:flex-row">
      <div className='md:min-h-screen flex-none md:w-1/4'>
      <Wrapper/>
      </div>
       
     <div className="h-full w-full md:w-3/4 md:flex-1 md:px-3  pt-20  md:py-16 md:mt-4">
         <h1 className='text-4xl text-center text-blue-900 mb-3'> Available Transport System</h1>
        <div className="grid  gap-5 md:grid-cols-2 md:mx-5 ">
          <div className="card border border-white shadow-lg rounded-md ">
            <img className='rounded-none w-100 h-100' src='https://images.pexels.com/photos/3427742/pexels-photo-3427742.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='ps-3 bg-blue-950 text-white'>
              <p className='font-bold py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde eius aliquid, adipisci veniam possimus! Tempora voluptas repudiandae iusto mollitia laudantium laboriosam facilis perspiciatis accusantium et, ullam architecto voluptatem id.</p>
               
                <div className="grid place-items-center">
                <button className='rounded-none outline outline-2 outline-offset-2 bg-white mt-5 mb-6  text-blue-950 px-10 py-2 hover:bg-blue-950  hover:text-white '> Read More</button>
           
                </div>
            </div>
          </div>
          <div className="card border border-white shadow-lg rounded-md ">
            <img className='rounded-none w-100 h-100' src='https://images.pexels.com/photos/3427742/pexels-photo-3427742.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='ps-3 bg-blue-950 text-white'>
              <p className='font-bold py-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde eius aliquid, adipisci veniam possimus! Tempora voluptas repudiandae iusto mollitia laudantium laboriosam facilis perspiciatis accusantium et, ullam architecto voluptatem id.</p>
                <div className="grid place-items-center">

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
export default Transport;

