import React from "react";
import Contact from "../Components/contact/Contact";
import Slider2 from "../Components/common/Slider2";
import Product from "../Components/product/Product";
import Question from "../Components/question/Question";
import About from "../Components/about/About";
import TopBar from "../Components/common/TopBar";
import Counter from "../Components/counter/Counter";
import Spacer2 from "../Components/common/Spacer2";

function HomePage() {
  return (
    <>
      <Slider2 />
      <Spacer2 />
      <About />
      <Counter/>
      <Product />
      <Contact />
    </>
  );
}

export default HomePage;
