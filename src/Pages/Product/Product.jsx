import { useParams } from "react-router-dom";
import { useState, useEffect ,useContext} from "react";
import "./Product.css"
import { CartContext } from "../../App";
import cart from "../../assets/images/icon-cart.svg";

function Product() {
  const [quantity,setQuantity] = useState(0);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((final) => {
        setProduct(final);
        console.log(final)
      });
  }, [id]);
  const { addToCart } = useContext(CartContext);
  function handleClick(){ 
    if (quantity > 0) { 
    const products= {
      ...product,
      quantity: quantity,
   
    };
    addToCart(products);
    }
  }
  function Increment() {
    setQuantity(quantity + 1);
  }
  function Decrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  return (
  
      <div key={product.id} className="productPage">
        <div className="productPageImg">
        <img src={product.thumbnail} className="image"/>
        </div>
        <div className="productpagedes">
        <h2>{product.title}</h2>
     
        <p>{product.description}</p>
        <label >Price:{product.price}</label>
        <div className="button">
            <div className="counter">
              <button className="btn" onClick={Decrement}>
                -
              </button>
              <label id="count">{quantity}</label>
              <button className="btn" onClick={Increment}>
                +
              </button>
            </div>
        <button className="Add" onClick={handleClick}>
              <img src={cart} className="car" /> Add to Cart
              </button>
              </div>
        </div>
        

      </div>

  );
}
export default Product;
