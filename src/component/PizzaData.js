// Data.js

import img1 from "../Images/id1.jpg";
import img2 from "../Images/id2.png";
import img3 from "../Images/img3.avif";
import img4 from "../Images/img3.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img6.jpg";
import img7 from "../Images/img7.jpg";
import img8 from "../Images/img8.jpg";

const Data = [
  {
    name: "Margherita",
    image: img1,
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Basil"],
    price: 9.99,
    vegetarian: true,
  },
  {
    name: "Pepperoni",
    image: img2,
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni"],
    price: 11.99,
    vegetarian: false, // Changed to false
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
    price: 10.99,
    vegetarian: true,
  },
  {
    name: "Hawaiian",
    image: img4,
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Ham", "Pineapple"],
    price: 12.99,
    vegetarian: false, // Changed to false
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
    price: 13.99,
    vegetarian: true,
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
    price: 12.49,
    vegetarian: false, // Changed to false
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
    price: 14.49,
    vegetarian: true,
  },
  {
    name: "Buffalo Chicken",
    image: img8,
    ingredients: [
      "Buffalo Sauce",
      "Mozzarella Cheese",
      "Grilled Chicken",
      "Red Onions",
      "Ranch Drizzle",
    ],
    price: 12.99,
    vegetarian: false, // Changed to false
  },
  {
    name: "Four Cheese",
    image: "four_cheese.jpg",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Parmesan Cheese",
      "Ricotta Cheese",
      "Gorgonzola",
    ],
    price: 11.99,
    vegetarian: true,
  },
  {
    name: "Veggie Delight",
    image: "veggie_delight.jpg",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Mushrooms",
      "Bell Peppers",
      "Onions",
      "Olives",
      "Tomatoes",
    ],
    price: 11.49,
    vegetarian: false, // Changed to false
  },
];

export default Data;
