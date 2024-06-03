import React, { useState } from "react";
import "../css/OrderConfirmationModel.css";

const ConfirmOrder = ({
  pizzas,
  onClose,
  total1,
  handleCustomizationChange1,
  handleCustomizationChange,
}) => {
  const [notification, setNotification] = useState(null);

  const tot = parseFloat(total1).toFixed(2);
  const gstAmount = parseFloat(tot * 0.05).toFixed(2);
  const totalWithGST = parseFloat(tot) + parseFloat(gstAmount);

  const handleCloseModal = () => {
    onClose(); // Invoke onClose function to close the modal
  };

  const handleConfirmOrder = () => {
    const currentDate = new Date();
    const order = {
      date: currentDate.toLocaleDateString(),
      time: currentDate.toLocaleTimeString(),
      pizzas: pizzas.map((pizza) => ({
        name: pizza.name,
        price: pizza.price,
        customization: pizza.customization,
        customization1: pizza.customization1,
        image: pizza.image,
      })),
      total: totalWithGST,
    };

    // Retrieve existing orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Add the new order
    existingOrders.push(order);

    // Save back to localStorage
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    // Set the notification message
    setNotification(`Order placed successfully!🥳😍🎉 `);

    // Close the modal after 500ms
    setTimeout(() => {
      handleCloseModal();
    }, 2000);
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <button className="close-btn" onClick={handleCloseModal}>
            X
          </button>
          <h2 className="h">Order Receipt</h2>
          <div className="receipt">
            {pizzas.map((pizza, index) => (
              <div key={index} className="receipt-item">
                <p>{pizza.name}</p>
                <p>Price: ₹{parseFloat(pizza.price).toFixed(2)}</p>
                {pizza.customization && (
                  <p>Customization: {handleCustomizationChange1(pizza.name)}</p>
                )}
                {pizza.customization1 && (
                  <p>Customization: {handleCustomizationChange(pizza.name)}</p>
                )}
              </div>
            ))}
            <div className="receipt-total">
              <p>Total (without GST): ₹{tot}</p>
              <p>GST (5%): ₹{gstAmount}</p>
              <p>Total (with GST): ₹{totalWithGST.toFixed(2)}</p>
            </div>
          </div>
          <div className="cash-on-delivery">
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
              Cash on Delivery
            </p>
          </div>
          <button className="order-button" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </div>
      </div>

      <div>
        {notification && <div className="notification">{notification}</div>}
      </div>
    </>
  );
};

export default ConfirmOrder;
