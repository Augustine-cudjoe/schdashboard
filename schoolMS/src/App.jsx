

import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Students from './pages/students/Students'
import Teachers from './pages/teachers/Teachers'
import Parents from './pages/parents/Parents'
import Subject from './pages/subject/Subject'
import Transport from './pages/transport/Transport'
import  Library from "./pages/library/Library"
import Section from './pages/section/Section'
import Division from './pages/division/Division'
import Classholder from './pages/class/Classholder'
import Attendance from './pages/attendance/Attendance'
import Exams from './pages/exam/Exams'
import Marks from './pages/marks/Marks'
import Payments from './pages/payment/Payments'
import Messages from './pages/message/Messages'
import Accounts from './pages/account/Account'
function App() {
 
  return (
    <div>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/teachers' element={<Teachers/>}/>
            <Route path='/parents' element={<Parents/>}/>
            <Route path='/subject' element={<Subject/>}/>
            <Route path='/transport' element={<Transport/>}/>
            <Route path='/library' element={<Library />} />
            <Route path='/section' element={<Section />} />
            <Route path='/division' element={<Division />} />
            <Route path='/class' element={< Classholder />} />
            <Route path='/attendance' element={< Attendance />} />
            <Route path='/exam' element={< Exams />} />
            <Route path='/marks' element={< Marks />} />
            <Route path='/payment' element={< Payments />} />
            <Route path='/message' element={< Messages />} />
            <Route path='/account' element={< Accounts />} />
        </Routes>
     </BrowserRouter>
     
    </div>
  )
}

export default App;
