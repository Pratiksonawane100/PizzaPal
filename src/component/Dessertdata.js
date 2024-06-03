// Dessert.js
import imgd1 from "../Images/imgd1.jpg";
import imgd2 from "../Images/imgd2.avif";
import imgd3 from "../Images/id3.avif";
import imgd4 from "../Images/imgd4.jpg";
import imgd5 from "../Images/imgd5.jpg";
import imgd6 from "../Images/imgd6.jpg";
import imgd7 from "../Images/imgd7.jpg";
import imgd8 from "../Images/imgd8.jpg";
import imgd9 from "../Images/imgd9.jpg";
import imgd10 from "../Images/imgd10.jpg";

const DessertData = [

  {
    name: "Chocolate Cake",
    image: imgd1,
    price: 40,
  },
  {
    name: "Cheesecake",
    image: imgd2,
    price: 60,
  },
  {
    name: "Tiramisu",
    image: imgd3,
    price: 110,
  },
  {
    name: "Panna Cotta",
    image: imgd4,
    price: 150,
  },
  {
    name: "Fruit Tart",
    image: imgd5,
    price: 120,
  },
  {
    name: "Creme Brulee",
    image: imgd6,
    price: (Math.floor(Math.random() * 6) + 10) * 10,
  },
  {
    name: "Brownie Sundae",
    image: imgd7,   
    price: (Math.floor(Math.random() * 7) + 10) * 10,
  },
  {
    name: "Apple Pie",
     image: imgd8,
     price: (Math.floor(Math.random() * 8) + 10) * 10,
    },
  {
    name: "Banana Split",
    image: imgd9,
    price: (Math.floor(Math.random() * 9) + 10) * 10,
  },
  {
    name: "Key Lime Pie",
    image: imgd10,
    price: (Math.floor(Math.random() * 10) + 10) * 10,
  },
  //   {
  //     name: "Strawberry Shortcake",
  //     image: dessertImg11,
  //     price: 7.49,
  //   },
  //   {
  //     name: "Ice Cream Sandwich",
  //     image: dessertImg12,
  //     price: 5.99,
  //   },
  //   {
  //     name: "Molten Chocolate Lava Cake",
  //     image: dessertImg13,
  //     price: 9.99,
  //   },
  //   {
  //     name: "Red Velvet Cupcake",
  //     image: dessertImg14,
  //     price: 4.99,
  //   },
  //   {
  //     name: "Lemon Meringue Pie",
  //     image: dessertImg15,
  //     price: 6.99,
  //   },
  //   {
  //     name: "Cinnamon Roll",
  //     image: dessertImg16,
  //     price: 5.49,
  //   },
  //   {
  //     name: "Peach Cobbler",
  //     image: dessertImg17,
  //     price: 7.99,
  //   },
  //   {
  //     name: "Baklava",
  //     image: dessertImg18,
  //     price: 8.49,
  //   },
  //   {
  //     name: "Cannoli",
  //     image: dessertImg19,
  //     price: 6.49,
  //   },
  //   {
  //     name: "Raspberry Sorbet",
  //     image: dessertImg20,
  //     price: 4.99,
  //   },
  //   // Add more dessert objects as needed
];

export default DessertData;
