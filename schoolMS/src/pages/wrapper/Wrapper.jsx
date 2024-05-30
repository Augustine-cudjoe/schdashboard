
import {Users,UserRound  , List ,LayoutGrid , Network , 
  SquarePen , GraduationCap,Star,MailOpen ,PieChart,CarTaxiFront,Book 
,CreditCard ,Settings } from 'lucide-react'
import { MdGroups3,MdOutlineSubject  } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import MenuNav,{SidebarItem} from '../../utils/MenuNav';
import { X } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';



function Wrapper() {
  const [open,setOpen]=useState(false)
  const menu=[{
      id:0,
     text:"Teachers",
      link:"/teachers",
      icon:Users 
  } ,
{
  id:1,
  icon:MdGroups3 ,
  text:" Students",
  link:"/students"
  
},
{
  id:2,
  icon: UserRound  ,
  text:" Parents",
  link:"/parents"
},
{
  id:3,
  icon:MdOutlineSubject ,
        text:"Subject",
        link:"/subject"

},
{
  id:4,
  icon:List ,
  text:"Sections",
  link:"/section"

},
{
id:5,
icon:LayoutGrid ,
text:"Division",
link:"/division"
},
{
  id:6,
  icon:Network ,
  text:"Class",
  link:"/class"

},
{
  id:7,
  icon:SquarePen , 
  text:"Manage Attendance",
  link:"/attendance"
},
{
  id:8,
  icon:Star ,
  text:"Manage Marks",
  link:"/marks"

},
{
  id:9,
  icon:GraduationCap ,
  text:"Exam",
  link:"/exam"
},
{
  id:10,
  icon:CreditCard,
  text:"payments",
  link:"/payment"

},
{
  id:11,
  icon:PieChart  ,
  text:"Accounting",
  link:"/account"

},{
  id:12,
  icon: CarTaxiFront ,
  text:"Transport",
  link:"/transport"
},
{
  id:13,
  icon:Book   ,
  text:"Library",
  link:"/library"
},
{
  id:14,
  icon: Settings  ,
  text:"/Configuration"

}
] 
   
  return (
    <div>
     
     <  MenuNav>
      
        <SidebarItem
       
        icon={<FaHome size={20} />} 
        text=" Home"
        link="/"
        active/>
        <SidebarItem
        icon={<MdGroups3 size={20} />} 
        text=" Students"
        link="/students"
        />
       
       
        <SidebarItem
        icon={<Users size={20} />} 
        text=" Teachers"
        link="/teachers"
        />
          <SidebarItem
        icon={<UserRound size={20} />} 
        text=" Parents"
        link="/parents"
        />
         <SidebarItem
        icon={<MdOutlineSubject  size={20} />} 
        text="Subject"
        link="/subject"
        />
        <SidebarItem
        icon={<List size={20} />} 
        text="Sections"
        link="/section"
        />
         <SidebarItem
        icon={<LayoutGrid size={20} />} 
        text="Division"
        link="/division"
        />
         <SidebarItem
        icon={<Network size={20} />} 
        text="Class"
        link="/class"
        />
         <SidebarItem
        icon={<SquarePen size={20} />} 
        text="Manage Attendance"
        link="/attendance"
        />
         <SidebarItem
        icon={<GraduationCap size={20} />} 
        text="Exam"
        link="/exam"
        />
         <SidebarItem
        icon={<Star size={20} />} 
        text="Manage Marks"
        link="/marks"
        />
         <SidebarItem
        icon={<CreditCard size={20} />} 
        text="payments"
        link="/payment"
        />
         <SidebarItem
        icon={<MailOpen  size={20} />} 
        text="Message"
        link="/message"
        />
         <SidebarItem
        icon={<PieChart  size={20} />} 
        text="Accounting"
        link="/account"
        />
         <SidebarItem
        icon={<CarTaxiFront  size={20} />} 
        text="Transport"
        link="/transport"
        />
         <SidebarItem
        icon={<Book  size={20} />} 
        text="Library"
        link="/library"
        />
         <SidebarItem
        icon={<Settings  size={20} />} 
        text="Configuration"
        link="/config"
        />
     </MenuNav>
    
      <div className=' md:hidden fixed z-[100] h-auto w-full'>

        <div className="flex items-center justify-between bg-blue-950 ">
        <h1 className='flex items-center justify-start align-middle ps-5 py-3 text-white'> 
        <span>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
          className="bi bi-house mr-3" viewBox="0 0 16 16">
      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
   </svg>
   </span> 
     School Management System
   </h1>
            <div onClick={()=>setOpen(!open)} className='text-white text-2xl pr-3'>
             {
            open?(<X/>):(< AlignJustify />)
             }
            </div>
        </div>
           {
            open?( <div className='flex flex-col pt-5 pl-3 bg-white transition-all duration-300 fixed right-0 left-100 w-full'>
            <nav className='flex flex-col text-xl space-y-3'>
            {
            menu.map(item=>{
                 const Icon=item.icon
                   return(
                    <div className=' ' key={item.id}>
                    
                    <ul className='transition-all duration-300'>
                      <li className='flex items-center'> 
                      <NavLink  to={item.link} className={({isActive})=>{
                        return(
                          (isActive?('text-base font-nomal   text-white bg-blue-950 w-56 '):(''))
                          
                        )
                      }}>
                        <span className='flex items-center'>
                        <span> <Icon size={20} className=' me-2'/>  </span> {item.text}
                          </span> </NavLink>
                   
                      </li>
                    </ul>
                    </div>
                   )
                 } )
          }
            </nav>
          </div>):(null)
           }
       
      </div>
    </div>
  )
}

export default Wrapper;
