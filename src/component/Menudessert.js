import React, { useState } from "react";
import Dessert from "./Dessert"; // Import Dessert component
import Dessertdata from "./Dessertdata"; // Import Dessertdata
import "./Menu.css";
import Footer from "./Footer";

function MenuDessert({ onLike, onAddToCart, cartItems }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("all");
  const [notification, setNotification] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
  };

  const handleLike = (dessertItem, isLiked) => {
    console.log("Dessert item liked:", dessertItem.name);
  };

  const addToCart = (dessertItem) => {
    onAddToCart(dessertItem);
    setNotification(`Added ${dessertItem.name} to the cart`);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const filteredDessertItems = Dessertdata
    ? Dessertdata.filter((dessertItem) => {
        const matchName = dessertItem.name.toLowerCase().includes(searchQuery);
        return (
          (filterCriteria === "all" ||
            (filterCriteria === "veg" && dessertItem.vegetarian) ||
            (filterCriteria === "nonveg" && !dessertItem.vegetarian)) &&
          matchName
        );
      })
    : [];

  return (
    <>
      <main className="menu-container">
        <h2 className="menu-heading">Our Dessert Menu</h2>
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search dessert items"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="menu-list">
          {filteredDessertItems.map((dessertItem, index) => (
            <Dessert
              key={index}
              dessertObj={dessertItem}
              onAddToCart={addToCart}
              onLike={handleLike}
              cartItems={cartItems}
            />
          ))}
        </div>
        {notification && <div className="notification">{notification}</div>}
      </main>
      <Footer />
    </>
  );
}

export default MenuDessert;
