import React, { useState } from "react";
import Notification from "./Notification"; // Import Notification component
import "../App.css";

function Dessert({ dessertObj, onLike, onAddToCart, cartItems }) {
  const [liked, setLiked] = useState(false);
  const [notification, setNotification] = useState(null); // State for notification
  const [addedToCart, setAddedToCart] = useState(false);

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    onLike(dessertObj, newLiked);
  };

  const addToCart = () => {
    onAddToCart(dessertObj);
    setAddedToCart(true);
    setNotification(`Added ${dessertObj.name} to the cart`); // Set notification message
    setTimeout(() => {
      setNotification(null); // Clear notification after 3 seconds
    }, 2000);
  };

  const isInCart = cartItems?.find((item) => item.name === dessertObj.name);

  return (
    <div
      className="Container"
      style={{ position: "relative", minHeight: "200px" }}
    >
      {notification && <Notification message={notification} />}{" "}
      {/* Render notification */}
      <img src={dessertObj.image} alt="" className="PizzaImage" />
      <h3>{dessertObj.name}</h3>
      <p>{dessertObj.price}₹</p>
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

export default Dessert;
