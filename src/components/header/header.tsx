import React, { useEffect, useState, useRef } from "react";
import "../header/header.css";
import Logo from "../../assets/images/download.png";
import SearchIcon from '@mui/icons-material/Search';
import Select from "../select/select";
import iconCompare from "../../assets/images/icon-compare.png";
import iconCart from "../../assets/images/icon-cart.png";
import iconUser from "../../assets/images/icon-user.png";
import iconHeart from "../../assets/images/icon-heart.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import TuneIcon from '@mui/icons-material/Tune';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button, ClickAwayListener } from "@mui/material";
import Navbar from "./navbar/navbar";

interface CountryResponse {
  data: { country: string }[];
}

const Header: React.FC = () => {
  const [categoryData, setCategoryData] = useState<string[]>([
    "Milks and Dairies",
    "Clothing & Beauty",
    "Pet Foods & Toy",
    "Baking Material",
    "Fresh Fruit",
    "Wines & Drinks",
    "Fresh",
    "Seafood",
    "Fast Food",
    "Vegetables",
    "Bread and Juice",
    "Fresh"
  ]);

  const [countryCode, setCountryCode] = useState<string[]>([]);
  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);

  // Specify the correct type for the ref, using HTMLDivElement
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleClickAway = () => {
    setIsOpenSelect(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const position = window.pageYOffset;
        if (position > 100) {
          headerRef.current.classList.add("fixed");
        } else {
          headerRef.current.classList.remove("fixed");
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries');
        const data: CountryResponse = await response.json();
        const countryList = data.data.map((item) => item.country);
        setCountryCode(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="headerWrapper" ref={headerRef}>
      <header>
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-sm-2 logo h-100">
              <img src={Logo} alt="logo" />
            </div>
            <div className="col-sm-5 h-100">
              <div className="headerSearch d-flex align-items-center">
                <Select data={categoryData} placeholder="All Categories" />
                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon className="searchIcon" />
                </div>
              </div>
            </div>
            
            <div className="col-sm-5 d-flex h-100">
              <div className="ml-auto d-flex ">
                <div className="countryWrapper">
                  <Select data={countryCode} placeholder="All locations" />
                </div>
              </div>
              <ClickAwayListener onClickAway={handleClickAway}>
                <div className="headerTabs" >
                  <div className="list-inline-item">
                    <span className="badge"><img src={iconCompare} alt="Compare" /></span>
                    <span className="inline-text">Compare</span>
                  </div>
                  <div className="list-inline-item">
                    <span className="badge"><img src={iconHeart} alt="WishList" /></span>
                    <span className="inline-text">WishList</span>
                  </div>
                  <div className="list-inline-item">
                    <span className="badge"><img src={iconCart} alt="Cart" /></span>
                    <span className="inline-text">Cart</span>
                  </div>
                  <div className="list-inline-item account">
                    <span className="badge" onClick={() => setIsOpenSelect(!isOpenSelect)}><img src={iconUser} alt="Account" /></span>
                    <span className="inline-text">Account</span>

                    {isOpenSelect && (
                      <ul className="account-info">
                        <li className="list-item">
                          <Button className="align-items-center"> 
                            <Person2OutlinedIcon className="list-icon" />My Account
                          </Button>
                        </li>
                        <li className="list-item">
                          <Button className="align-items-center"> 
                            <LocationOnIcon className="list-icon" /> Order Tracking
                          </Button>
                        </li>
                        <li className="list-item">
                          <Button className="align-items-center"> 
                            <FavoriteBorderIcon className="list-icon" /> My Wishlist
                          </Button>
                        </li>
                        <li className="list-item">
                          <Button className="align-items-center"> 
                            <TuneIcon className="list-icon" /> Setting
                          </Button>
                        </li>
                        <li className="list-item">
                          <Button className="align-items-center"> 
                            <LogoutIcon className="list-icon" /> Sign out
                          </Button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </ClickAwayListener>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </div>
    <div className="after-header"></div>
    </>
  );
};

export default Header;
