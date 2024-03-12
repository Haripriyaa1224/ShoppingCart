import React, { useState } from "react";
import "./Cart.css";

import { PiCaretUp } from "react-icons/pi";
import { PiCaretDown } from "react-icons/pi";

const Cart = () => {
  const [mobileData, setMobileData] = useState([
    {
      name: "Samsung Galaxy",
      price: 399,
      quantity: 1,
    },
    {
      name: "Google Pixel",
      price: 499,
      quantity: 1,
    },
    {
      name: "Oppo A7",
      price: 199,
      quantity: 1,
    },
    {
      name: "Samsung Galaxy S7",
      price: 999,
      quantity: 1,
    },
  ]);

  // Function to remove an item from the cart
  const removeItem = (indexToRemove) => {
    const updatedData = [...mobileData];
    updatedData.splice(indexToRemove, 1);
    setMobileData(updatedData);
  };

  // Function to increase the quantity of an item
  const increaseQuantity = (index) => {
    const updatedData = [...mobileData];
    updatedData[index].quantity++;
    setMobileData(updatedData);
  };

  // Function to decrease the quantity of an item
  const decreaseQuantity = (index) => {
    const updatedData = [...mobileData];
    if (updatedData[index].quantity > 1) {
      updatedData[index].quantity--;
      setMobileData(updatedData);
    }
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return mobileData.reduce((total, mobile) => {
      return total + mobile.price * mobile.quantity;
    }, 0);
  };

  // Function to calculate the total number of items
  const calculateTotalItems = () => {
    return mobileData.reduce((total, mobile) => {
      return total + mobile.quantity;
    }, 0);
  };

  // Function to clear the cart
  const clearCart = () => {
    setMobileData([]);
  };

  return (
    <>
    <h1 style={{
                    textAlign:'center'
                }}>YOUR BAG</h1>
      {/* <p>No of Items: {calculateTotalItems()}</p> */}
      {mobileData.length === 0 ? (
        <p style={{
            textAlign:'center',
            fontSize:'3rem'
        }}>is empty</p>
      ) : (
        <>
        
          {mobileData.map((mobile, index) => (
            <div className="cart-item" key={index}>
                
              <div>
                
                <h1 style={{
                    color:'#334155'
                }}>{mobile.name}</h1>
                <p style={{
                    color:'#64748B'
                }}>${mobile.price}</p>
                <button onClick={() => removeItem(index)}>remove</button>
              </div>
              <div className="quan-container">
                <button onClick={() => increaseQuantity(index)}><PiCaretUp /></button>
                <p>{mobile.quantity}</p>
                <button onClick={() => decreaseQuantity(index)}><PiCaretDown /></button>
              </div>
            </div>
          ))}
          <div>
            <h2 id="total">Total: ${calculateTotal()}</h2>
            <button id="clear-cart" onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
