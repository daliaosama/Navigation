import { useEffect, useState,useContext} from "react";
import'./Women.css'
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import cart from "../../assets/images/icon-cart.svg";
const Women = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/category/womens-shoes')
      .then((res) => res.json())
      .then((final) => {
        setProducts(final.products);
        console.log(final)
      });
  }, [ products]);
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (product) => {
    const productToAdd = {
      ...product,
      quantity: 1,
      subtotal: product.price,
    };

    addToCart(productToAdd);
  };
  return (
    <div id="women">
      {products.map((product)=>{
        return(
          <Link to={`/Product/${product.id}`} key={product.id}>
          <div key={product.id} className="Product">
            <div className="pro">
            <h4>{product.title}</h4>
           
           <img src={product.images[0]} className="image"/>
            </div>
           
           <button className="Add" onClick={() => handleAddToCart(product)}>
              <img src={cart} className="car" /> Add to Cart
              </button>
          </div>
          
          </Link>
        )
      })}
    </div>
  )
};

export default Women;
