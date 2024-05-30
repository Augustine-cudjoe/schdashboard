import React,{useContext,createContext, useState} from 'react'
import { X } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import {NavLink} from 'react-router-dom'
const HomeContext=createContext()
function MenuNav({children}) {
    const [expand, setExpand]=useState(true)
  return (

    <div className='menu hidden md:block'>
      <aside className=''>
        <nav className='h-full flex flex-col bg-gray-100 border-r-2 shadow-sm  sm:w-full '>
             <div className='p-4 pb-2 flex justify-end items-center'>
                <button  onClick={()=>setExpand(exp=>! exp)} className='p-1.5 rounded-lg  text-blue-950 hover: text-white justify-end' >
                {
                    expand? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                     </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                      </svg>
                }
                </button>
             </div>
             <HomeContext.Provider value={{expand}}>
             <ul className='flex-1 px-3'>
                  {children}
            
             </ul>
             </HomeContext.Provider>
             
            

        </nav>

    </aside>
    </div>
  )
}

export default MenuNav;

export function SidebarItem({icon,text,active,alert,link}){

    const {expand}=useContext(HomeContext)
    
    return(
        <nav>
          <ul>
            <li> 
          
          <NavLink  to={link}   className={({isActive})=>{
             return(
              'hidden  md:flex  items-center  font-medium rounded-md py-2 px-3 my-1 cursor-pointer transition-colors relative group' + 
              (isActive ? 'bg-gradient-to-tr bg-blue-950 w-50 text-white':' hover:bg-indigo-50 text-gray-600 w-48')
             
             )
           } }> 
           <span className='flex items-center'>
          {icon}
         <span className={` overflow-hidden transition-all text-ellipsis overflow-hidden  ${expand? "w-52 ml-3 text-base md:text-sm lg:text-base ":" w-0"}`}> {text} </span>
          {
            alert && (<div className={`absolute right-2 w-2 h-2 rounded g-indigo-400 ${expand ? " ": "top-2"}`} /> )}
            {
                expand && (<div  
                 className={` absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm visible opacity-20 -translate-x-3 transition-all group:hover:opacity-100 group-hover:translate-x-0`}
                />)
            }
            </span>
          </NavLink>
       
            </li>
          </ul>
       
        </nav>
    )
}

