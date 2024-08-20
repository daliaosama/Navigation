/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import "./AllProducts.css"
function AllProducts(){
    const arrayofProducts = [
        { id: 1 ,name:"product1"},
        { id: 2 ,name:"product2"},
        { id: 3 ,name:"product3"},
        { id: 4,name:"product4" },
        { id: 5,name:"product5" },
        { id: 6,name:"product6" },
        { id: 7,name:"product7" },
        { id: 8,name:"product8" },
      ];
    return(
        <div id="Productswrapper">
      {arrayofProducts.map((product) => {
        return (
          <Link to={`/Product/${product.id}`}>
            <div className="product">
              <label>{product.name}</label>
            </div>
          </Link>
        );
      })}
      </div>
    )
}
export default AllProducts