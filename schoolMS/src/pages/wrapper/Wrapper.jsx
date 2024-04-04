
import {Users,UserRound  , List ,LayoutGrid , Network , 
  SquarePen , GraduationCap,Star,MailOpen ,PieChart,CarTaxiFront,Book 
,CreditCard ,Settings } from 'lucide-react'
import { MdGroups3,MdOutlineSubject  } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import MenuNav,{SidebarItem} from '../../utils/MenuNav';


function Wrapper() {
 
  return (
    <div>
     
     <  MenuNav>
      
        <SidebarItem
        className={`bg-blue-950`}
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
        link="section"
        />
         <SidebarItem
        icon={<LayoutGrid size={20} />} 
        text="Division"
        link="division"
        />
         <SidebarItem
        icon={<Network size={20} />} 
        text="Class"
        link="class"
        />
         <SidebarItem
        icon={<SquarePen size={20} />} 
        text="Manage Attendance"
        link="attendance"
        />
         <SidebarItem
        icon={<GraduationCap size={20} />} 
        text="Exam"
        link="exam"
        />
         <SidebarItem
        icon={<Star size={20} />} 
        text="Manage Marks"
        link="marks"
        />
         <SidebarItem
        icon={<CreditCard size={20} />} 
        text="payments"
        link="payment"
        />
         <SidebarItem
        icon={<MailOpen  size={20} />} 
        text="Message"
        link="message"
        />
         <SidebarItem
        icon={<PieChart  size={20} />} 
        text="Accounting"
        link="account"
        />
         <SidebarItem
        icon={<CarTaxiFront  size={20} />} 
        text="Transport"
        link="transport"
        />
         <SidebarItem
        icon={<Book  size={20} />} 
        text="Library"
        link="library"
        />
         <SidebarItem
        icon={<Settings  size={20} />} 
        text="Configuration"
        />
     </MenuNav>
    </div>
  )
}

export default Wrapper;
