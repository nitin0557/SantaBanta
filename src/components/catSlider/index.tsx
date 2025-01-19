import React from "react";
import "./style.css";
import Slider from "react-slick";
import Cat1 from "../../assets/images/Hyderabadi.jpg";
import Cat2 from "../../assets/images/lucknowi.jpg";
import Cat3 from "../../assets/images/kolkata.jpg";
import Cat4 from "../../assets/images/paneer-nawabi.jpg";
import Cat5 from "../../assets/images/rolls.jpg";
import Cat6 from "../../assets/images/Rumaliroti.jpg";
import Cat7 from "../../assets/images/ChickenGheeRoast.jpg";


import { useSelector } from "react-redux";



const CatSlider: React.FC = () => {


  const { loading, dataReducer, error } = useSelector((state: any) => state.dataReducer);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="catSlider">
        <div className="container-fluid">
          <h4> Featured Categories</h4>
          <Slider {...settings} className="cat-slider-main">
            <div className="item">
              <div className="info"> <img src={Cat1} /></div>
              <h5>Hyderabadi Biryani</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat2} /></div>
              <h5>Lucknowi Biryani</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat3} /></div>
              <h5>Kolkata Biryani</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat4} /></div>
              <h5>Korma and Curries</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat5} /></div>
              <h5>Rolls</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat6} /></div>
              <h5>Breads and Extras</h5>
            </div>
          
            <div className="item">
              <div className="info"> <img src={Cat7} /></div>
              <h5>Kebas</h5>
            </div>
          
           
          </Slider>
        </div>
      </div>
    </>
  );
};
export default CatSlider;
