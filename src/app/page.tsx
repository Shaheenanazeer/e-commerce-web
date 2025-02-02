import React from "react";
import Carousel from "./components/carousel";
import Products from "./products/page";
import About from "./about/page";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Products />
      <About />
    </div>
  );
}
