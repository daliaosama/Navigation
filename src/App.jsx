
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Collections from "./Pages/Collections/Collections";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import HomePage from "./Pages/HomePage/HomePage";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import AllProducts from "./Pages/AllProducts/AllProducts";

function App() {
  

  return (
   
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage/>} >
      
        <Route path="Collections" element={<Collections/>}></Route>
        <Route index element={<AllProducts/>}></Route>
        <Route path="Men" element={<Men/>}></Route>
        <Route path="Women" element={<Women/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
        <Route path="/Product/:id" element={<Product/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
