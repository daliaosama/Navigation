/* eslint-disable react/jsx-key */
import axios from "axios"
import { Link } from "react-router-dom";
import { useEffect, useState,useContext} from "react";
import "./AllProducts.css"
import { CartContext } from "../../App";
import Product from './../Product/Product';
function AllProducts(){
     const { addToCart}=useContext(CartContext)
      const [products, setProducts] = useState([]);   
  useEffect(() => {
    const fetchProducts = async () => {
      try {
    const categories=["mens-shoes","womens-shoes"]
    const productPromises =categories.map(category =>
      axios.get(`https://dummyjson.com/products/category/${category}`))
      const responses = await Promise.all(productPromises);
      const filteredProducts = responses.
      flatMap(response => response.data.products);
      setProducts(filteredProducts);}
      catch (error) {
        console.error("Error fetching products:", error);}
        
  }
  fetchProducts()}, [ products]);
  const handleAddToCart = (product) => {
    const productToAdd = {
      ...product,
      quantity: 1,
      subtotal: product.price,
    };

    addToCart(productToAdd);
  };
    return(
        <div id="Productswrapper">
      {products.map((product) => {
        return (
          <Link to={`/Product/${product.id}`} key={Product.id}>
            <div className="product">
              <div className="pro">
              <h4>{product.title}</h4>
              <img src={product.images[0]} className="image"/>
              </div>
           
           <p>Price: {product.price}</p>
           <button className="Add"onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </Link>
        );
      })}
      
      
      </div>
    )
}
export default AllProducts