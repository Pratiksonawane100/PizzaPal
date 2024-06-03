import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "../src/component/Feedback.css";
import "../src/component/Banner.css";
import img1 from "./Images/id1.jpg";
import img2 from "./Images/id2.png";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img3.avif";
import img5 from "./Images/img5.jpg";
import img6 from "./Images/img6.jpg";
import img7 from "./Images/img7.jpg";
import img8 from "./Images/img8.jpg";
import img10 from "./Images/img10.jpg";
import bur from "./Images/burger.jpg";
import Menu from "./component/Menu";
import Navbar from "./component/Navbar";
import banner from "./Images/banner.jpg";
import Cart from "./component/Cart";
import PizzaData from "./component/PizzaData";
import Footer from "./component/Footer";
import Homemenu from "./component/Homemenu";
import Accordian from "./component/Accordian";
import Loader from "./component/Loader";
import Menudessert from "./component/Menudessert";
import DessertData from "./component/Dessertdata";
import Feedback from "./component/Feedback";
import Orders from "./component/Orders";
import CookieMessage from "./component/CookieMessage";
import Status from "./component/Status";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import AuthLayout from "./component/AuthLayout";

// Define your pizza data
const Data = [
  {
    name: "Margherita",
    image: img1,
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Basil"],
    price: (Math.floor(Math.random() * 31) + 10) * 10,
    vegetarian: true,
  },
  {
    name: "Pepperoni",
    image: img2,
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni"],
    price: (Math.floor(Math.random() * 31) + 10) * 10,
  },
  {
    name: "Vegetarian",
    image: img3,
    ingredients: [
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Mushrooms",
      "Bell Peppers",
      "Onions",
      "Olives",
    ],
    price: (Math.floor(Math.random() * 31) + 10) * 10,
  },
  {
    name: "Hawaiian",
    image: img4,
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Ham", "Pineapple"],
    price: (Math.floor(Math.random() * 31) + 10) * 10,
    vegetarian: true,
  },
  {
    name: "Supreme",
    image: img5,
    ingredients: [
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Pepperoni",
      "Sausage",
      "Mushrooms",
      "Bell Peppers",
      "Onions",
      "Olives",
    ],
    price: (Math.floor(Math.random() * 31) + 10) * 10,
  },
  {
    name: "BBQ Chicken",
    image: img6,
    ingredients: [
      "BBQ Sauce",
      "Mozzarella Cheese",
      "Grilled Chicken",
      "Red Onions",
      "Cilantro",
    ],
    price: (Math.floor(Math.random() * 31) + 10) * 10,
  },
  {
    name: "Meat Lovers",
    image: img7,
    ingredients: [
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Pepperoni",
      "Sausage",
      "Ham",
      "Bacon",
    ],
    price: (Math.floor(Math.random() * 31) + 10) * 10,
  },
  {
    name: "Chicken Crispy",
    image: img8,
    ingredients: [
      "Buffalo Sauce",
      "Mozzarella Cheese",
      "Grilled Chicken",
      "Red Onions",
      "Ranch Drizzle",
    ],
    price: (Math.floor(Math.random() * 31) + 10) * 10,
  },
  {
    name: "Four Cheese",
    image: img10,
    ingredients: [
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Parmesan Cheese",
      "Ricotta Cheese",
      "Gorgonzola",
    ],
    price: (Math.floor(Math.random() * 31) + 10) * 10,
  },
];
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// const usersArray = [];

export default reviews;
function App() {
  const [filteredPizzas, setFilteredPizzas] = useState(Data);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  if (loading) {
    return <Loader />;
  }

  const handleAddToCart = (pizza) => {
    setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
  };

  const handleAddToCartd = (dessert) => {
    setCartItems([...cartItems, { ...dessert, quantity: 1 }]);
  };

  const removeFromCart = (itemName) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (itemName) => {
    setCartItems(
      cartItems.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemName) => {
    const itemToDecrease = cartItems.find((item) => item.name === itemName);
    if (itemToDecrease.quantity === 1) {
      removeFromCart(itemName);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar cartSize={cartItems.length} />
          <Routes>
            {/* <Route path="/" exact element={<Login />} /> */}
            <Route
              path="/login"
              element={
                <AuthLayout showBackground={true}>
                  <Login users={users} />
                </AuthLayout>
              }
            />
            <Route
              path="/"
              element={
                <AuthLayout showBackground={true}>
                  <SignUp addUser={addUser} />
                </AuthLayout>
              }
            />
            <Route path="/home" exact element={<Home />} />
            <Route
              path="/menu"
              element={
                <Menu
                  pizzas={filteredPizzas}
                  pizzaData={PizzaData}
                  onAddToCart={handleAddToCart}
                />
              }
            />
            {/* Route for PersonalizePizza */}
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              }
            />
            <Route
              path="/menudessert"
              element={
                <Menudessert
                  dessertdata={DessertData}
                  onAddToCart={handleAddToCartd}
                />
              }
            />{" "}
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
function Home({ pizzaData, onAddToCart }) {
  const [filteredPizzas, setFilteredPizzas] = useState(Data);
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (pizza) => {
    setCartItems([...cartItems, pizza]);
  };
  return (
    <div className="home" style={{ backgroundcolor: "#22303C" }}>
      <Banner content="From Order To" imageUrl={banner} />
      <Status />
      <Homemenu pizzas={filteredPizzas} pizzaData={PizzaData} />
      <Accordian />
      <section className="review1">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Feedback />
      </section>
      <CookieMessage />

      <Footer />
    </div>
  );
}

function Banner({ content, leftImageUrl, rightImageUrl }) {
  const bannerStyle = {
    width: "100%",
    margin: "0 auto",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "35rem",
    marginleft: "25px",
  };

  const imageStyle = {
    position: "absolute",
    width: "50%",
    height: "100%",
    backgroundSize: "cover",
    top: "0",
  };

  const doorstepStyle = {
    fontFamily: "sans-serif",
    fontSize: "35px",
    color: "#0ff1e2",
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="banner-content" style={{ height: "25rem" }}>
        <h2 style={{ fontSize: "50px" }}>{content}</h2>
        <h2 style={doorstepStyle}>Doorstep In</h2>
        <h2 style={{ fontSize: "50px" }}>Minutes</h2>
        <p>Order now and enjoy our delicious pizzas!</p>
        <button
          style={{
            width: "40%",
            backgroundColor: "#1E90FF",
            position: "relative", // Ensure relative positioning for pseudo-elements
          }}
          className="btnm custom-btn btn-13"
          onClick={() => (window.location.href = "/menu")}
        >
          Order Now
        </button>
      </div>
      <div className="burger">
        <img src={bur} alt="" />
      </div>
    </div>
  );
}

// function Footer() {
//   const hour = new Date().getHours();
//   const openhour = 9;
//   const closehour = 10;
//   const ispoen = hour >= closehour;
//   // const ispoen = hour >= openhour && hour <= closehour;
//   console.log(ispoen);
//   return (
//     <footer>
//       {ispoen ? (
//         <div>
//           <p style={{ color: "black" }}>
//             We're Open Until {closehour}:00 Pm. Come Visit Us or Order Online
//           </p>
//         </div>
//       ) : (
//         <p>
//           We're Happy To Welcome You Between {openhour}:00 AM and {closehour}:00
//           PM.
//         </p>
//       )}
//     </footer>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
