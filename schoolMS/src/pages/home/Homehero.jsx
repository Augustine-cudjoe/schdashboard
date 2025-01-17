import React from 'react'
import { MdGroups3,MdOutlineSubject  } from "react-icons/md";
import {Users,UserRound  , List ,LayoutGrid , Network , 
    SquarePen , GraduationCap,Star,MailOpen ,PieChart,CarTaxiFront,Book 
  ,CreditCard ,SquareCheckBig  } from 'lucide-react'
  import { Link } from 'react-router-dom';
function Homehero() {
  return (
    <div className='homehero'>
        <div className=" lg:flex lg:justify-center mt-7 md:mt-0 md:items-center flex-col md:grid md:grid-cols-2 md:gap-5 lg:flex-row px-4 md:px-0" id='hero-header'>
            <div className="sm:w-full mb-3 bg-orange-600 text-white md:mr-2 header py-7 px-20 md:p-0"> 
             <div className="flex flex-col ps-2 md:py-5">
                <h1 className='mb-1 ps-1'> 3</h1>
                <p className='items-center flex'> <span> <MdGroups3 className='me-2'/> </span> Total Students</p>
             </div>
            </div>
            <div className=" sm:w-full mb-3 bg-green-600 md:mr-2 header py-7 px-20 md:p-0"> 
            <div className="flex flex-col ps-2 md:py-5 text-white">
                <h1 className='mb-1 ps-1'> 3</h1>
                <p className='items-center flex'> <span> <Users  className='me-2'/> </span> Total Teachers</p>
             </div>
            </div>
            <div className=" sm:w-full mb-3  bg-sky-400 md:mr-2 header py-7 px-20 md:p-0">
            <div className="flex flex-col ps-2 md:py-5 text-white">
                <h1 className='mb-1 ps-1'> 1</h1>
                <p className='items-center flex'> <span> <UserRound className='me-2'/> </span> Total Parents</p>
             </div>
            </div>
            <div className=" sm:w-full mb-3 bg-blue-900 header py-7 px-20 md:p-0">
            <div className="flex flex-col ps-2 md:py-5 text-white">
                <h1 className='mb-1 ps-1'> 0</h1>
                <p className='items-center flex'> <span> <SquarePen className='me-2'/> </span> Today Present</p>
             </div>
            </div>
        </div>
        <div className="mt-2">
            <h3 className='md:font-semibold py-5 md:py-0 text-center md:text-start'> School Managements Quick Icons</h3>
            <div className=" bg-gray-100 border-2 border-gray-100 " id="icon-holder">
              <div className="grid lg:grid-cols-6 gap-2 md:grid-cols-3 grid-cols-2 mx-auto pe-2  ps-2 pt-2 md:pe-16 pb-5 ">
                 <Link to="/students">
                 <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <MdGroups3 size={20}/> </p>
                   <p > Students</p>
                </div>
                 </Link>
                <Link to="/teachers"  className='no-underline'>
                <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <Users size={20}/> </p>
                   <p> Teachers </p>
                </div>
                </Link>
                  <Link to="/parents">
                  <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <UserRound size={20}/> </p>
                   <p> Parents</p>
                </div>
                  </Link>
                  <Link to="/subject" className='no-underline'>
                  <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <MdOutlineSubject  size={20}/> </p>
                   <p> Subject</p>
                </div>
                  </Link>
                  <Link to="/section">
                  <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <List size={20}/> </p>
                   <p> Section</p>
                </div>
                  </Link>
                   <Link to="/division">
                   <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <LayoutGrid size={20}/> </p>
                   <p> Division</p>
                </div>
                   </Link> 

                  <Link to="/class">
                  <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <Network size={20}/> </p>
                   <p> Class</p>
                </div>
                  </Link>
                   <Link to="/attendance">
                   <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <SquareCheckBig  size={20}/> </p>
                   <p> Attendance</p>
                </div>
                   </Link>

                 <Link to="/exams">
                 <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <GraduationCap  size={20}/> </p>
                   <p> Exams</p>
                </div>
                 </Link>
                
                   <Link to="/marks">
                   <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <Star  size={20}/> </p>
                   <p> Exams Marks</p>
                </div>
                   </Link>
                  <Link to="/payment">
                  <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <CreditCard  size={20}/> </p>
                   <p> Payments</p>
                  </div>
                  </Link>
                 
                 <Link to="/message">
                 <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <MailOpen  size={20}/> </p>
                   <p> Messages</p>
                </div>
                 </Link>
                  <Link to="/account">
                  <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <PieChart size={20}/> </p>
                   <p> Accounting</p>
                </div>
                  </Link>
                 <Link to="/library">
                 <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <Book  size={20}/> </p>
                   <p> Library</p>
                </div>
                 </Link>
                 <Link to="/transport">
                 <div className="flex flex-col items-center  p-7 justify-center bg-white text-blue-950 md:p-5 ">
                   <p> <CarTaxiFront  size={20}/> </p>
                   <p> Transport</p>
                </div>
                 </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Homehero;