/* eslint-disable react/jsx-key */
import { Link, Outlet } from "react-router-dom";
import "./HomePage.css";
import cart from "../../assets/images/icon-cart.svg";
import person from "../../assets/images/image-avatar.png";
import menu from "../../assets/images/icon-menu.svg";
import { useState } from "react";
import close from "../../assets/images/icon-close.svg";
import { useContext } from "react";
import { CartContext } from "../../App";

const HomePage = () => {
  const { Cart } = useContext(CartContext);

  const [cartitem, setCartItem] = useState(false);
  const [borderColor, setBorderColor] = useState("transparent");
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuitems, setMenuItems] = useState(false);
  function cartItem() {
    if (cartitem == false) {
      setCartItem(true);
      setBorderColor(
        borderColor === "transparent" ? "hsl(26, 100%, 55%)" : "transparent"
      );
    } else {
      setCartItem(false);
    }
  }
  const handleClick = (item) => {
    setSelectedItem(item);
  };
  function showmenuItems() {
    setMenuItems(true);
    console.log(menuitems);
  }
  function closeMenu() {
    setMenuItems(false);
  }

  return (
    <>
      <div id="collections">
        <nav>
          <img src={menu} id="menu" onClick={showmenuItems} />

          <div id="header">
            <h1>Sneakers</h1>
            <ul>
              <li
                className={selectedItem === "item1" ? "selecteditem" : ""}
                onClick={() => handleClick("item1")}
              >
                <Link to="/">Collections</Link>
              </li>
              <li
                className={selectedItem === "item2" ? "selecteditem" : ""}
                onClick={() => handleClick("item2")}
              >
                <Link to="/AllProducts">AllProducts</Link>
              </li>
              <li
                className={selectedItem === "item3" ? "selecteditem" : ""}
                onClick={() => handleClick("item3")}
              >
                <Link to="/Men">Men</Link>
              </li>
              <li
                className={selectedItem === "item4" ? "selecteditem" : ""}
                onClick={() => handleClick("item4")}
              >
                <Link to="/Women">Women</Link>
              </li>
              <li
                className={selectedItem === "item5" ? "selecteditem" : ""}
                onClick={() => handleClick("item5")}
              >
                <Link to="/About">About</Link>
              </li>
              <li
                className={selectedItem === "item6" ? "selecteditem" : ""}
                onClick={() => handleClick("item6")}
              >
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div id="shop">
            <img src={cart} id="cart" onClick={cartItem} />
            <img
              src={person}
              id="avt"
              onClick={cartItem}
              style={{ border: `2px solid ${borderColor}` }}
            />
            {cartitem == true ? (
              <div id="cartitem">
                <h3>Cart</h3>
                <hr id="hr" />
                <div id="items">
                  {Cart.map((item) => (
                    <div key={item.id} id="ite">
                      <img src={item.thumbnail} className="cartimg" />
                      <label className="label">{item.title} </label>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </nav>
        <hr />
      </div>

      <Outlet></Outlet>

      {menuitems == true ? (
        <div id="menuitems">
          <img src={close} id="closemenu" onClick={closeMenu} />
          <ul className="item">
            <li>
              <Link to="/">Collections</Link>
            </li>
            <li>
              <Link to="/AllProducts">AllProducts</Link>
            </li>
            <li>
              <Link to="/Men">Men</Link>
            </li>
            <li>
              <Link to="/Women">Women</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default HomePage;
