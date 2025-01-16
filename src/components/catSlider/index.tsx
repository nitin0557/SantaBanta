import React from "react";
import "./style.css";
import Slider from "react-slick";
import Cat1 from "../../assets/images/cat-1.png";
import Cat2 from "../../assets/images/cat-2.png";
import Cat3 from "../../assets/images/cat-3.png";
import Cat4 from "../../assets/images/cat-4.png";
import Cat5 from "../../assets/images/cat-5.png";
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
              <h5>Vegetables</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat2} /></div>
              <h5>Strawberries</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat3} /></div>
              <h5>Dried Products</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat4} /></div>
              <h5>Vegetables</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat5} /></div>
              <h5>Strawberries</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat1} /></div>
              <h5>Vegetables</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat2} /></div>
              <h5>Strawberries</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat3} /></div>
              <h5>Dried Products</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat4} /></div>
              <h5>Vegetables</h5>
            </div>
            <div className="item">
              <div className="info"> <img src={Cat5} /></div>
              <h5>Strawberries</h5>
            </div>
            
           
           
          </Slider>
        </div>
      </div>
    </>
  );
};
export default CatSlider;
