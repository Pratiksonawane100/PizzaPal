import { useState } from "react";
import "./Accordian.css";

const faqs = [
  {
    title: "Discover a World of Flavor",
    text: "Welcome to our Pizza App, your gateway to a world of delectable flavors and mouthwatering toppings! Dive into our extensive menu featuring classic favorites like Margherita and Pepperoni, or embark on a culinary adventure with our signature gourmet creations. With each bite, savor the perfect balance of cheese, sauce, and crust that will leave you craving for more.",
  },
  {
    title: "Customize Your Perfect Slice",
    text: "With our Pizza App, the power to create your perfect pie is at your fingertips. Choose from a variety of crust options, from thin and crispy to thick and chewy. Personalize your pizza with an array of premium toppings, from savory meats to fresh vegetables and artisan cheeses. Whether you're a traditionalist or an adventurous eater, our app ensures that every pizza is crafted to your exact specifications, delivering a taste sensation like no other.",
  },
  {
    title: "Convenience Redefined",
    text: "Say goodbye to long wait times and busy phone lines – our Pizza App brings convenience right to your doorstep. With just a few taps, you can place your order, track its progress in real-time, and have piping hot pizza delivered straight to your door. Whether you're hosting a game night with friends or enjoying a cozy night in, our app makes it easy to satisfy your pizza cravings without ever having to leave the comfort of your home.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
