import React, { useState, useEffect, useRef } from "react";
import cart from "../Images/cart.jpg";
import "./Cart.css";
import OrderConfirmationModal from "./OrderConfirmationModal";

function Cart({ pizzaObj, cartItems, removeFromCart }) {
  const [items, setItems] = useState(
    cartItems.map((item) => ({ ...item, quantity: 1, customization: "" }))
  );
  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const timeoutRef = useRef(null);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Update localStorage whenever cart items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  const handleOrderNow = (pizza) => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRemove = (itemName) => {
    const updatedItems = items.filter((item) => item.name !== itemName);
    setItems(updatedItems);
    removeFromCart(itemName);
    setNotification(`Remove to the cart ☹️`);
    setNotificationType("error");
    setTimeout(() => {
      setNotification(null);
      setNotificationType(""); // Reset notification type
    }, 2000);
  };

  const handleIncreaseQuantity = (itemName) => {
    const updatedItems = items.map((item) => {
      if (item.name === itemName) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleDecreaseQuantity = (itemName) => {
    const updatedItems = items.map((item) => {
      if (item.name === itemName && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleCustomizationChange = (itemName, value) => {
    const updatedItems = items.map((item) => {
      if (item.name === itemName) {
        let priceIncrement = 0;
        let newNotification = "";

        switch (value) {
          case "Regular":
            priceIncrement += 0;
            newNotification = "Regular size added to your pizza.";
            break;
          case "Medium":
            priceIncrement += 50;
            newNotification = "Medium size added to your pizza.";
            break;
          case "Large":
            priceIncrement += 70;
            newNotification = "Large size added to your pizza.";
            break;
          case "Regularc":
            priceIncrement += 0;
            newNotification = "Added normal cheese";
            break;
          case "Mozzarella":
            priceIncrement += 20;
            newNotification = "Added Mozzarella cheese";
            break;
          case "Cheddar":
            priceIncrement += 30;
            newNotification = "Added Cheddar cheese";
            break;
          default:
            break;
        }

        if (value !== "") {
          clearTimeout(timeoutRef.current);
          setNotification(newNotification);
          timeoutRef.current = setTimeout(() => {
            setNotification("");
          }, 2000);
        }

        item.customizationPrice = priceIncrement;
        item.customization = value;

        return { ...item };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleCustomizationChange1 = (itemName, value) => {
    const updatedItems = items.map((item1) => {
      if (item1.name === itemName) {
        let priceIncrement1 = 0;
        let newNotification = "";

        switch (value) {
          case "Regularc":
            priceIncrement1 += 0;
            newNotification = "Added normal cheese";
            break;
          case "Mozzarella":
            priceIncrement1 += 20;
            newNotification = "Added Mozzarella cheese";
            break;
          case "Cheddar":
            priceIncrement1 += 30;
            newNotification = "Added Cheddar cheese";
            break;
          default:
            break;
        }

        if (value !== "") {
          clearTimeout(timeoutRef.current);
          setNotification(newNotification);
          timeoutRef.current = setTimeout(() => {
            setNotification("");
          }, 2000);
        }

        item1.customizationPrice1 = priceIncrement1;
        item1.customization1 = value;

        return { ...item1 };
      }
      return item1;
    });
    setItems(updatedItems);
  };

  const getTotalPrice = () => {
    const baseTotalPrice = items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const customizationTotalPrice = items.reduce((total, item) => {
      return (item.customizationPrice || 0) * item.quantity;
    }, 0);
    const customizationTotalPrice1 = items.reduce((total, item1) => {
      return (item1.customizationPrice1 || 0) * item1.quantity;
    }, 0);
    return baseTotalPrice + customizationTotalPrice + customizationTotalPrice1;
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Your Cart</h2>
        {notification && (
          <div
            className={`notification ${
              notificationType === "error" ? "error" : ""
            }`}
          >
            {notification}
          </div>
        )}
        {cartItems.length === 0 ? (
          <div className="cart-p">
            <img src={cart} alt="" />
            <h4 className="empty-cart-message">Your cart is empty</h4>
            <p>Looks like you haven't made your choice yet....</p>
          </div>
        ) : (
          <div className="cartd">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  {item.ingredients ? (
                    <p>Ingredients: {item.ingredients.join(", ")}</p>
                  ) : (
                    ""
                  )}
                  <p>Price: ₹{item.price.toFixed(2)} each</p>
                  {item.ingredients ? (
                    <div className="select-container">
                      <select
                        value={item.customization}
                        onChange={(e) =>
                          handleCustomizationChange(item.name, e.target.value)
                        }
                      >
                        <option value="Regularc">Regular</option>
                        <option value="Medium">Medium (Extra 50₹)</option>
                        <option value="Large">Large (Extra 70₹)</option>
                      </select>
                      <select
                        value={item.customization1}
                        onChange={(e) =>
                          handleCustomizationChange1(item.name, e.target.value)
                        }
                      >
                        <option value="Regularc">Cheese</option>
                        <option value="Mozzarella">
                          Mozzarella (Extra 20₹)
                        </option>
                        <option value="Cheddar">Cheddar (Extra 30₹)</option>
                        <option value="Vegan cheese options">
                          Vegan cheese options (Extra 30₹)
                        </option>
                      </select>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="quantity">
                  <div className="remove">
                    <button
                      className="quantity-button"
                      onClick={() => handleDecreaseQuantity(item.name)}
                    >
                      -
                    </button>
                    <span className="quantity-count">{item.quantity}</span>
                    <button
                      className="quantity-button"
                      onClick={() => handleIncreaseQuantity(item.name)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => handleRemove(item.name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="total-price">
              <p>Total Price: ₹{getTotalPrice().toFixed(2)}</p>
              <button
                className="order-button"
                onClick={handleOrderNow}
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
      {showModal && (
        <OrderConfirmationModal
          pizzas={cartItems}
          onClose={handleCloseModal}
          total1={getTotalPrice()}
          handleCustomizationChange1={handleCustomizationChange1}
          handleCustomizationChange={handleCustomizationChange}
        />
      )}
    </div>
  );
}

export default Cart;
