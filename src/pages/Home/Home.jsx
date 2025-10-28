import React from "react";
import HomeBanner from "../../components/Home/HomeBanner";
import MenuSection from "../../components/Home/MenuSection";
import Categorys from "../../components/Home/Categorys";
import Reviews from "../../components/Home/Reviews";

const Home = () => {
  return (
    <div className="mt-6">
      <HomeBanner />
      <MenuSection />
      <Categorys />
      <Reviews />
    </div>
  );
};

export default Home;
