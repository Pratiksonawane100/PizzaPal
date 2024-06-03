// Orders.js
import React, { useEffect, useState } from "react";
import "../css/Orders.css";
import StatusPage from "./StatusPage";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleCancelOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handleViewStatus = (order) => {
    setSelectedOrder(order);
  };

  if (selectedOrder) {
    return <StatusPage order={selectedOrder} />;
  }

  if (orders.length === 0) {
    return <div>No orders found.</div>;
  }

  return (
    <div className="orders">
      <h2>Order History</h2>
      {orders.map((order, index) => (
        <div key={index} className="order">
          <h3>Order {index + 1}</h3>
          <p>Date: {order.date}</p>
          <p>Time: {order.time}</p>
          <div className="order-details">
            {/* Display other order details */}
          </div>
          <div className="order-details">
            {order.pizzas.map((pizza, idx) => (
              <div key={idx} className="pizza-item">
                <p>Name: {pizza.name}</p>
                <p>Price: ₹{parseFloat(pizza.price).toFixed(2)}</p>
                {pizza.customization && (
                  <p>Customization: {pizza.customization}</p>
                )}
                {pizza.customization1 && (
                  <p>Customization: {pizza.customization1}</p>
                )}
                {pizza.image && (
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="pizza-image"
                  />
                )}
              </div>
            ))}
            <p className="order-total">Total: ₹{order.total}</p>
            <div>
              <button
                className="cancel-button"
                onClick={() => handleCancelOrder(index)}
              >
                Cancel Order
              </button>
              <button
                className="view-status-button"
                onClick={() => handleViewStatus(order)}
              >
                View Status
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
