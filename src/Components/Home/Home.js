import React from "react";
import Feedbacks from "../Feedbacks/Feedbacks";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import News from "../News/News";
import Offering from "../Offering/Offering";
import ProductHome from "../ProductHome/ProductHome";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Slider></Slider>
      <Offering></Offering>
      <ProductHome></ProductHome>
      <News></News>
      <Feedbacks />
      <Footer></Footer>
    </div>
  );
};

export default Home;
