import React,{useEffect} from 'react'
import "./home.css"

import Homehero from './Homehero';
import MenuTop from '../../utils/MenuTop';
import Wrapper from '../wrapper/Wrapper';

function Home( ) {
  useEffect(()=>{
    document.title="home "
  })
  return (
    <div className=' '  id='home'>
       <MenuTop/>
      <div className="flex flex-col md:flex-row">
      <div className='h-full flex-none md:w-1/4'>
      <Wrapper/>
      </div>
       
     <div className="h-full w-full  md:w-3/4 md:flex-1 md:px-3 py-20  md:py-16 md:mt-4">
        <Homehero/>
    </div>
   </div>
    </div>
  )
}
export default Home;

