import React from "react";
import Products from "../Products/Products";
import TopProducts from "../TopProducts/TopProducts";
import Subscribe from "../Subscribe/Subscribe";
import Hero from "../Hero/Hero";



const HomePage = () => {
  return (
    <div className="homePage">
        <Hero/>
      <Products/>
      <TopProducts/>
      <Subscribe/>
    </div>
  );
};

export default HomePage;
