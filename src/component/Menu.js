import React, { useState } from "react";
import Pizza from "./Pizza";
import "./Menu.css";
import Footer from "./Footer";

function Menu({ pizzas, onAddToCart }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("all"); // State for filter criteria
  const [cartItems, setCartItems] = useState([]); // Initialize cartItems as an empty array

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleFilterChange = (event) => {
    const criteria = event.target.value;
    setFilterCriteria(criteria);
  };

  const handleLike = (pizza, isLiked) => {
    console.log("Pizza liked:", pizza.name);
  };

  const filteredPizzas =
    filterCriteria === "all"
      ? pizzas
      : pizzas?.filter((pizza) =>
          filterCriteria === "veg" ? pizza.vegetarian : !pizza.vegetarian
        );

  const filteredData = filteredPizzas?.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <main className="menu-container">
        <h2 className="menu-heading">Our Menu</h2>
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search pizzas"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <select value={filterCriteria} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
          </select>
        </div>
        <div className="menu-list">
          {filteredData.map((pizza, index) => (
            <Pizza
              key={index}
              pizzaObj={pizza}
              onAddToCart={onAddToCart}
              onLike={handleLike} 
              cartItems={cartItems}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Menu;
