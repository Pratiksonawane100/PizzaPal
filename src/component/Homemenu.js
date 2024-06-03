import React, { useState } from "react";
import Homepizza from "./Homepizza";
import "./Homemenu.css";

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

  // Take only the first 6 pizzas
  const firstSixPizzas = filteredData?.slice(0, 6);

  return (
    <main className="menu-container">
      <div className="menu-list">
        {firstSixPizzas.map((pizza, index) => (
          <Homepizza
            key={index}
            pizzaObj={pizza}
            onAddToCart={onAddToCart}
            onLike={handleLike} // Pass onLike function to Pizza component
            cartItems={cartItems}
          />
        ))}
      </div>
    </main>
  );
}

export default Menu;
