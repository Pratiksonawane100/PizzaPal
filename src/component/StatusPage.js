import React from "react";
import { Link } from "react-router-dom";

import "../css/StatusPage.css";

const getRandomTime = (baseTime) => {
  const timeDifference = Math.random() < 0.5 ? 20 : 30;
  const newTime = baseTime + timeDifference;
  const hours = Math.floor(newTime / 60) % 24;
  const minutes = newTime % 60;
  const amPm = hours < 12 ? "AM" : "PM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  return `${formattedHours}:${String(minutes).padStart(2, "0")} ${amPm}`;
};

const StatusPage = ({ order = {} }) => {
  const { date = "N/A", time = "N/A", statusUpdates = [], pizzas = [] } = order;
  const baseTime = time
    ? parseInt(time.split(":")[0], 10) * 60 + parseInt(time.split(":")[1], 10)
    : 14 * 60; // Default to 2:00 PM

  const currentDate = new Date();
  const currentTime = currentDate.getHours() * 60 + currentDate.getMinutes();

  const getCurrentTimeFormatted = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const currentDay = now.getDate().toString().padStart(2, "0");
    const currentMonth = (now.getMonth() + 1).toString().padStart(2, "0");
    const currentYear = now.getFullYear().toString().slice(-2);
    return `${formattedHours}:${minutes} ${period} ${currentMonth}/${currentDay}/${currentYear}`;
  };

  const currentTimeFormatted = getCurrentTimeFormatted();

  const isStageComplete = (stageTime) => currentTime >= stageTime;

  const shippingTime = date !== "N/A" ? getRandomTime(baseTime - 5) : "N/A";
  const outForDeliveryTime =
    date !== "N/A" ? getRandomTime(baseTime + 5) : "N/A";
  const deliveryTime = date !== "N/A" ? getRandomTime(baseTime + 25) : "N/A";

  const compareTimes = (deliveryTime, currentTime1) => {
    const [deliveryTimeStr, deliveryDate] = deliveryTime.split(" ");
    const [currentTimeStr, currentDate] = currentTime1.split(" ");

    const [deliveryHours, deliveryMinutes, deliveryPeriod] =
      deliveryTimeStr.split(/:| /);
    const [currentHours, currentMinutes, currentPeriod] =
      currentTimeStr.split(/:| /);

    const deliveryHours24 =
      parseInt(deliveryHours, 10) + (deliveryPeriod === "PM" ? 12 : 0);
    const currentHours24 =
      parseInt(currentHours, 10) + (currentPeriod === "PM" ? 12 : 0);

    const [deliveryMonth, deliveryDay, deliveryYear] = deliveryDate.split("/");
    const [currentMonth, currentDay, currentYear] = currentDate.split("/");

    const formattedDeliveryDate = `${parseInt(deliveryMonth, 10) || 1}/${
      parseInt(deliveryDay, 10) || 1
    }/${deliveryYear?.slice(-2)}`;
    const formattedCurrentDate = `${parseInt(currentMonth, 10) || 1}/${
      parseInt(currentDay, 10) || 1
    }/${currentYear?.slice(-2)}`;

    if (formattedDeliveryDate !== formattedCurrentDate) {
      return "Pending";
    } else if (
      deliveryHours24 > currentHours24 ||
      (deliveryHours24 === currentHours24 &&
        parseInt(deliveryMinutes, 10) > parseInt(currentMinutes, 10))
    ) {
      return "Pending";
    } else {
      return "Delivered";
    }
  };

  const result = compareTimes(
    `${deliveryTime} ${date}`,
    `${currentTimeFormatted}`
  );

  return (
    <div className="status-page">
      <h2 style={{ fontFamily: "sans-serif" }}>Order Status</h2>
      <div className="order-details">
        <div className="disk1">
          <p>Date: {date}</p>
          <p>Time: {time}</p>
        </div>
        <div className="circle-container">
          <div
            className={`circle ${isStageComplete(baseTime) ? "green" : "red"}`}
          ></div>
        </div>
        <div className="disk2">
          <p>Shipping: {date}</p>
          <p>Time: {shippingTime}</p>
        </div>
        <div className="circle-container">
          <div
            className={`circle ${
              isStageComplete(baseTime + 34) ? "green" : "red"
            }`}
          ></div>
        </div>
        <div className="disk3">
          <p>Out for delivery: {date}</p>
          <p>Time: {outForDeliveryTime}</p>
        </div>
        <div className="circle-container">
          <div
            className={`circle ${
              isStageComplete(baseTime + 49) ? "green" : "red"
            }`}
          ></div>
        </div>
        <div className="disk4">
          <p>Delivery: {date}</p>
          <p>Time: {deliveryTime}</p>
        </div>
      </div>
      <div className="timeline">
        {statusUpdates.map((status, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <p>{status.status}</p>
              <p>Date: {status.date || "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="product-details">
        {pizzas.map((pizza, index) => (
          <div key={index} className="product-item">
            <div>
              <img src={pizza.image} alt={pizza.name} className="pizza-image" />
            </div>
            <div style={{ marginLeft: "60px" }}>
              <p>Name: {pizza.name}</p>
              <p>Price: {(pizza.price * 1.05).toFixed(2)} Rs</p>
              {result === "Pending" ? <p>Pending🔴</p> : <p>Delivered🟢</p>}
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
    </div>
  );
};

export default StatusPage;
