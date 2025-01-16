import React, { useEffect, useState } from "react";
import HomeSlider from "./slider/index";
import "./slider/index.css";
import CatSlider from "../../components/catSlider";
import "./style.css";
import { Link } from "react-router-dom";
import Product from "../../components/product";
import Banner from "../../components/banners";
import SideBannerImg from "../../assets/images/SideBanner.png";
import Slider from "react-slick";
import "../../pages/Home/slider/index.css";
import { AppDispatch } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopping } from "../../state/action/shopping.action";

const Home = () => {
  const [activeTab, setActiveTab] = useState("All"); 
  const [activeFeatureTab, setActiveFeatureTab] = useState("Featured");// state to manage the active tab
  const dispatch = useDispatch<AppDispatch>();
  const { dataReducer } = useSelector((state: any) => state);
  console.log(dataReducer);

  useEffect(() => {
    dispatch(fetchShopping()); // Fetch data on component mount
  }, [dispatch]);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    fade: false,
    arrows: true,
  };

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const handleFeaturedTabClick = (tab: any) => {
    setActiveFeatureTab(tab);
  };

  console.log(activeFeatureTab);

  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banner />

      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center filterTabs">
            <h2 className="hd mb-0 mt-0 ">Popular Products</h2>

            <ul className="list list-inline ms-auto">
              <li className="list-inline-item">
                <Link to="/SantaBanta" onClick={() => handleTabClick("All")}>
                  All
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/SantaBanta" onClick={() => handleTabClick("Veg")}>
                  Veg
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/SantaBanta" onClick={() => handleTabClick("Non-Veg")}>
                  Non-Veg
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/SantaBanta" onClick={() => handleTabClick("Best-Sellers")}>
                  Best-Sellers
                </Link>
              </li>
            </ul>
          </div>

          <div className="productRow">
            {activeTab === "All" && dataReducer?.data?.food_categories && (
              <>
                {dataReducer.data.food_categories.map((category: any) =>
                  category.category_items.map((item: any) => (
                    <div className="item">
                      <Product url={item.category_img} />
                    </div>
                  ))
                )}
              </>
            )}

            {activeTab === "Veg" && dataReducer?.data?.food_categories && (
              <>
                {dataReducer.data.food_categories.map(
                  (category: any) =>
                    activeTab === category.category_name &&
                    category.category_items.map((item: any) => (
                      <div className="item">
                        <Product url={item.category_img} />
                      </div>
                    ))
                )}
              </>
            )}

            {activeTab === "Non-Veg" && dataReducer?.data?.food_categories && (
              <>
                {dataReducer.data.food_categories.map(
                  (category: any) =>
                    activeTab === category.category_name &&
                    category.category_items.map((item: any) => (
                      <div className="item">
                        <Product url={item.category_img} />
                      </div>
                    ))
                )}
              </>
            )}

            {activeTab === "Best-Sellers" &&
              dataReducer?.data?.food_categories && (
                <>
                  {dataReducer.data.food_categories.map(
                    (category: any) =>
                      activeTab === category.category_name &&
                      category.category_items.map((item: any) => (
                        <div className="item">
                          <Product url={item.category_img} />
                        </div>
                      ))
                  )}
                </>
              )}
          </div>
        </div>
      </section>

      <section className="homeProducts pt-0">
        <div className="container-fluid side-banner-img">
          <div className="d-flex align-items-center filterTabs">
            <h2 className="hd mb-0 mt-0 ">Daily Best Sales</h2>

            <ul className="list list-inline ms-auto">
              <li className="list-inline-item">
                <Link to="/SantaBanta" onClick={() => handleFeaturedTabClick("Featured")}>
                  Featured{" "}
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/SantaBanta" onClick={() => handleFeaturedTabClick("Popular")}>
                  Popular
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/SantaBanta" onClick={() => handleFeaturedTabClick("Newly-Added")}>
                  New Added
                </Link>
              </li>
            </ul>
          </div>
          <br />

          <div className="container">
            <div className="row homeProductsRow2">
              <div className="col-sm-3">
                <img src={SideBannerImg} className="w-100" />
              </div>
              <div className="col-sm-9">
                <div className="container">
                    <Slider {...settings} className="prodSlider">
                    {dataReducer?.data?.best_sales && (
                      dataReducer.data.best_sales.map(
                        (category: any) =>
                          activeFeatureTab === category.category_name ?
                          (category.category_items.map((item: any) => (
                            <div className="item">
                              <Product url={item.category_img} />
                            </div>
                          ))) : null))
                      
                   }
                   </Slider>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
