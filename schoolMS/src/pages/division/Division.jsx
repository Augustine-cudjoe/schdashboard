
import React from 'react'
import MenuTop from '../../utils/MenuTop';
import Wrapper from '../wrapper/Wrapper';
function Division( ) {
    
  return (
    <div className=''  id='division'>
       <MenuTop/>
   <div className="flex flex-col md:flex-row">
      <div className='min-h-screen flex-none md:w-1/4'>
      <Wrapper/>
      </div>
       
     <div className="h-full w-full  md:w-3/4 md:flex-1 md:px-3 py-3  md:py-16 md:mt-4">
         <h1 className='text-4xl text-center text-blue-900 mb-3 uppercase'> division </h1>
        <div className="flex md:mx-5 cursor-pointer " id='card-holder'>
          <div className="card border border-green-950 sm:items-center  rounded-md ">
            <img className='w-full h-100  hover:transition-all' src=' https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk='/>
            <div className=' bg-blue-950 w-full text-white'>
              <p className=' p-3 '>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, id nostrum. Odit expedita accusamus fugiat doloribus esse rerum incidunt totam assumenda impedit suscipit, nemo quibusdam hic dolores accusantium eligendi eum!
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus iure cupiditate, alias incidunt odit in non porro, facilis quisquam est dolore minus doloremque dignissimos assumenda accusamus libero sint error similique.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed labore fuga molestias expedita a quidem, aliquam eum ut! Quas magnam, adipisci ducimus nulla blanditiis exercitationem non aspernatur quidem dignissimos.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, dignissimos voluptate laborum voluptates ratione quibusdam maxime iste accusantium nam vero deserunt ut asperiores ullam alias, dolor harum placeat, molestias explicabo.
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus facere natus sunt similique dolore facilis deleniti necessitatibus culpa cumque! Ratione distinctio totam aspernatur mollitia sapiente eos officiis iusto ducimus optio.
              </p>
               
            </div>
          </div>
         
         
          
        </div>
    </div>
   </div>
    </div>
  )
}
export default Division;

