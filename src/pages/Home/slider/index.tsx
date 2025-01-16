import React, { useEffect } from "react";
import Slider from "react-slick";
import "./index.css";
import Slide1 from "../../../assets/images/Slide1.jpg";
import Slide2 from "../../../assets/images/Slide2.jpg";
import Slide3 from "../../../assets/images/Slide3.jpg";
import Slide4 from "../../../assets/images/Slide4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopping } from "../../../state/action/shopping.action";
import { AppDispatch } from "../../..";



const HomeSlider = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {dataReducer} = useSelector((state : any)=> state)

  useEffect(() => {
    dispatch(fetchShopping()); // Fetch data on component mount
  }, [dispatch]);



  
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    fade:true,
    arrows: true
  };
  return (
    <section className="homeSlider ">
      <div className="container-fluid">
       
      <Slider {...settings} className="home_slider_main">
        {dataReducer?.data?.banners && dataReducer.data.banners.length > 0  && 
        (dataReducer.data.banners.map((banner:any)=>(
          <div>
          <img src={banner.banner_img}/>
        </div>)))}
      
      
    </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
