
import { BrowserRouter, Routes, Route } from "react-router-dom";
import{createContext,useState } from'react'
export const CartContext  = createContext();
import './App.css'

import Collections from "./Pages/Collections/Collections";
import Men from "./Pages/Men/Men";
import Women from "./Pages/Women/Women";
import HomePage from "./Pages/HomePage/HomePage";
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Product from './Pages/Product/Product';
import AllProducts from "./Pages/AllProducts/AllProducts";

function App() {
  const [Cart, setCart] = useState([]);
  const addToCart = (product) => {
    const existingProduct = Cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        Cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity,subtotal:item.subtotal+product.subtotal }
            : item
        )
      );
    } else {
      
      setCart([...Cart, product]);
    }
    };
    const removeFromCart = (id) => {
      setCart((prevItems) => prevItems.filter(item => item.id !== id));
    };
  return (
    <CartContext.Provider value={{Cart, addToCart,removeFromCart }}>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage/>} >
      
        <Route index element={<Collections/>}></Route>
        <Route path="/AllProducts" element={<AllProducts/>}></Route>
        <Route path="Men" element={<Men/>}></Route>
        <Route path="Women" element={<Women/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
        <Route path="/Product/:id" element={<Product/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      </CartContext.Provider>
  )
}

export default App
