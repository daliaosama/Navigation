
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Collections from "./Pages/Collections/Collections";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import HomePage from "./Pages/HomePage/HomePage";
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  

  return (
   
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage/>} >
      
        <Route path="Collections" element={<Collections/>}></Route>
        <Route path="Men" element={<Men/>}></Route>
        <Route path="Women" element={<Women/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
