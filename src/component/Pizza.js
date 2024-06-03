import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Notification from "./Notification";

function Pizza({ pizzaObj, onLike, onAddToCart, cartItems }) {
  const [liked, setLiked] = useState(false);
  const [notification, setNotification] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    onLike(pizzaObj, newLiked);
  };

  const addToCart = () => {
    const updatedCartItems = [...cartItems, pizzaObj];
    onAddToCart(pizzaObj);
    setAddedToCart(true);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Save to localStorage
    setNotification(`Added ${pizzaObj.name} to the cart 😀`);
    
  };

  const isInCart = cartItems.find((pizza) => pizza.name === pizzaObj.name);

  return (
    <div
      className="Container"
      style={{ position: "relative", minHeight: "200px" }}
    >
      {notification && <Notification message={notification} />}
      <img src={pizzaObj.image} alt="" className="PizzaImage" />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients.join(", ")}</p>
      <p>{pizzaObj.price}₹</p>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={toggleLike}
          style={{
            backgroundColor: "transparent",
            border: "none",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill={liked ? "red" : "black"}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span style={{ marginLeft: "5px" }}></span>
        </button>
        {!isInCart && !addedToCart ? (
          <button
            onClick={addToCart}
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        ) : (
          <button
            disabled
            style={{
              backgroundColor: "gray",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "not-allowed",
            }}
          >
            In Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Pizza;
