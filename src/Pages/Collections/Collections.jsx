/* eslint-disable react/no-unknown-property */
import sneaker from "../../assets/images/image-product-1.jpg";
import sneaker2 from "../../assets/images/image-product-2.jpg";
import sneaker3 from "../../assets/images/image-product-3.jpg";
import sneaker4 from "../../assets/images/image-product-4.jpg";
import cart from "../../assets/images/icon-cart.svg";
import next from "../../assets/images/icon-next.svg";
import prev from "../../assets/images/icon-previous.svg";
import close from "../../assets/images/icon-close.svg";
import { useState } from "react";
import{ useContext } from 'react'
import { CartContext } from "../../App";
import "./Collections.css";
const Collections = () => {
  const [counter, setCounter] = useState(0);
  function Increment() {
    setCounter(counter + 1);
  }
  function Decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  const [value, setValue] = useState(1);
  const data = [
    { id: 1, src: sneaker },
    { id: 2, src: sneaker2 },
    { id: 3, src: sneaker3 },
    { id: 4, src: sneaker4 },
  ];
  const [images] = useState(data);
  const { src } = images[value];

  const nextImage = () => {
    setValue((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setValue((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const [show, setShow] = useState(false);
  function showImages() {
    setShow(true);
  }
  function closeImages() {
    setShow(false);
  }
  const product={
    title:'Fall Limited Edition Sneakers',
    price:'$125.00',
    thumbnail:sneaker
  }
  function AddtoCart(){
    addToCart(product)
  }
  const { addToCart}=useContext(CartContext)
  return (
    <>
      <div id="main">
        <div id="image">
          <img src={src} className="sneak" onClick={showImages} />

          <img src={src} className="slider-image" />
          <button id="next">
            <img src={next} id="ne" onClick={nextImage} />
          </button>
          <button id="prev">
            <img src={prev} id="pr" onClick={prevImage} />
          </button>
          <div id="images">
            <ul className="images">
              {images.map((item, index) => (
                <li
                  key={item.id}
                  className={`${index === value && "selected"}`}
                  onClick={() => setValue(index)}
                >
                  <img src={item.src} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="text">
          <label id="company"> Sneaker Company</label>
          <h1>{product.title}</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div id="pri">
            <div id="price">
              <label id="pr">{product.price}</label>
              <div id="discount">50%</div>
            </div>
            <label id="del">
              <del>$250.00</del>
            </label>
          </div>

          <div className="button">
            <div className="counter">
              <button className="btn" onClick={Decrement}>
                -
              </button>
              <label id="count">{counter}</label>
              <button className="btn" onClick={Increment}>
                +
              </button>
            </div>
            <button className="Add" onClick={ AddtoCart}>
              <img src={cart} className="car" /> Add to cart
            </button>
          </div>
        </div>
      </div>
      {show == true && (
        <div id="select">
          <div id="close">
            <img src={close} onClick={closeImages} />
          </div>
          <img src={src} className="sneak" />

          <img src={src} className="slider-image" />
          <button id="nextb">
            <img src={next} id="ne" onClick={nextImage} />
          </button>
          <button id="prevb">
            <img src={prev} id="pr" onClick={prevImage} />
          </button>
          <div>
            <ul className="images">
              {images.map((item, index) => (
                <li
                  key={item.id}
                  className={`${index === value && "selected"}`}
                  onClick={() => setValue(index)}
                >
                  <img src={item.src} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Collections;
