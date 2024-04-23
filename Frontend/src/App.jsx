import Contacts from "./Contacts/Contacts"
import Courses from "./Courses/Courses"
import Signup from "./components/Signup"
import Home from "./home/Home"
import {Route,Routes} from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contacts/>}/>
     </Routes> 
    </>
  )
}

export default App
