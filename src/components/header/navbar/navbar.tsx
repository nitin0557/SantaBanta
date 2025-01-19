import React, { useState } from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import GridViewIcon from "@mui/icons-material/GridView";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import Categort1 from "../../../assets/images/category-1.png";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav d-flex align-items-end">
      <div className="container-fluid ">
        <div className="row position-relative">
          <div className="col-sm-2 part1 d-flex align-items-center browse" onClick={handleClick}>
            <Button className="bg-g text-white catTab ">
              <span className="browse-text me-2" >
                <GridViewIcon />  Browse All Categories
                {isOpen ?  <KeyboardArrowUpOutlinedIcon/> : <KeyboardArrowDownIcon />}
              </span>
            </Button>

          
          </div>
          {isOpen && (
              <div className="container browse-categories">
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li className="d-flex align-items-center mb-2 category"><Link to="/SantaBanta"> <img src={Categort1} className="me-3"/>Milks and Dairies</Link> </li>
                      <li  className="d-flex align-items-center mb-2 category"><Link to="/SantaBanta"> <img src={Categort1} className="me-3"/>Clothing & beauty</Link> </li>
                      <li  className=" d-flex align-items-center mb-2 category" > <Link to="/SantaBanta"><img src={Categort1} className="me-3"/>Pet Foods & Toy</Link> </li>
                      <li  className=" d-flex align-items-center mb-2 category"> <Link to="/SantaBanta"><img src={Categort1} className="me-3"/>Baking material</Link> </li>
                      <li  className=" d-flex align-items-center mb-2 category "> <Link to="/SantaBanta"><img src={Categort1} className="me-3"/>Fresh Fruit</Link> </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                  <ul className="mb-0">
                      <li className="d-flex align-items-center mb-2 category"><Link to="/SantaBanta"> <img src={Categort1} className="me-3"/>Milks and Dairies</Link> </li>
                      <li  className="d-flex align-items-center mb-2 category"><Link to="/SantaBanta"> <img src={Categort1} className="me-3"/>Clothing & beauty</Link> </li>
                      <li  className=" d-flex align-items-center mb-2 category" > <Link to="/SantaBanta"><img src={Categort1} className="me-3"/>Pet Foods & Toy</Link> </li>
                      <li  className=" d-flex align-items-center mb-2 category"> <Link to="/SantaBanta"><img src={Categort1} className="me-3"/>Baking material</Link> </li>
                      <li  className=" d-flex align-items-center mb-2 category "> <Link to="/SantaBanta"><img src={Categort1} className="me-3"/>Fresh Fruit</Link> </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}



          <div className="col-sm-8 part2 d-flex justify-content-center position-static">
            <nav>
              <ul className="list list-inline mb-0">
                <li className="list-inline-item home">
                  <Button>
                    <Link to="/SantaBanta">Home</Link>
                  </Button>
                </li>
                <li className="list-inline-item about">
                  <Button>
                    <Link to="/about">About</Link>
                  </Button>
                </li>
                <li className="list-inline-item shop">
                  <Button>
                    <Link to="/SantaBanta">Shop</Link>
                  </Button>
                </li>
                <li className="list-inline-item vendors">
                  <Button>
                    <Link to="/SantaBanta">Vendors</Link>
                  </Button>
                </li>
                <li className="list-inline-item mega-menu position-static">
                  <Button>
                    <Link to="/SantaBanta">
                      Mega Menu <KeyboardArrowDownIcon />
                    </Link>
                  </Button>
                  <div className="megaDropdownMenu">
                    <div className="row">
                      <div className="col">
                        <h4>Fruit &amp; Vegetables</h4>
                        <ul>
                          <li>
                            <a href="shop-product-right.html">
                              Meat &amp; Poultry
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Fresh Vegetables
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Herbs &amp; Seasonings
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Cuts &amp; Sprouts
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Exotic Fruits &amp; Veggies
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Packaged Produce
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4> Breakfast &amp; Dairy</h4>
                        <ul>
                          <li>
                            <a href="shop-product-right.html">
                              Milk &amp; Flavoured Milk
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Butter and Margarine
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Eggs Substitutes
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Marmalades</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Sour Cream</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Cheese</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4>Meat &amp; Seafood</h4>
                        <ul>
                          <li>
                            <a href="shop-product-right.html">
                              Breakfast Sausage
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Dinner Sausage</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Chicken</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Sliced Deli Meat
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Wild Caught Fillets
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Crab and Shellfish
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <img src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-menu.png" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item blog">
                  <Button>
                    {" "}
                    <Link to="/SantaBanta">Blog</Link>
                  </Button>
                </li>
                <li className="list-inline-item pages">
                  <Button>
                    <Link to="/SantaBanta">
                      Pages <KeyboardArrowDownIcon />
                    </Link>
                  </Button>

                  <ul className="sub-menu">
                    <li className="list-item">
                      {" "}
                      <Button>
                        {" "}
                        <Link to="/SantaBanta">About Us</Link>
                      </Button>{" "}
                    </li>
                    <li className="list-item">
                      {" "}
                      <Button>
                        {" "}
                        <Link to="/SantaBanta">Contact</Link>
                      </Button>{" "}
                    </li>
                    <li className="list-item">
                      {" "}
                      <Button>
                        {" "}
                        <Link to="/SantaBanta">My Account</Link>
                      </Button>{" "}
                    </li>
                    <li className="list-item">
                      {" "}
                      <Button>
                        {" "}
                        <Link to="/SantaBanta">Login</Link>
                      </Button>{" "}
                    </li>
                    <li className="list-item">
                      {" "}
                      <Button>
                        {" "}
                        <Link to="/SantaBanta">Register</Link>
                      </Button>{" "}
                    </li>
                    <li className="list-item">
                      {" "}
                      <Button>
                        {" "}
                        <Link to="/SantaBanta">Forgot password</Link>
                      </Button>{" "}
                    </li>
                    <li className="list-item">
                      {" "}
                      <Button>
                        {" "}
                        <Link to="/SantaBanta">Reset password</Link>
                      </Button>{" "}
                    </li>
                    <li className="list-item">
                      {" "}
                      <Button>
                        {" "}
                        <Link to="/SantaBanta">Privacy Policy</Link>
                      </Button>{" "}
                    </li>
                    <li className="list-item">
                      {" "}
                      <Button>
                        {" "}
                        <Link to="/SantaBanta">Purchase Guide</Link>
                      </Button>{" "}
                    </li>
                    <li className="list-item">
                      {" "}
                      <Button>
                        {" "}
                        <Link to="/SantaBanta">Terms of Service</Link>
                      </Button>{" "}
                    </li>
                    <li className="list-item">
                      {" "}
                      <Button>
                        {" "}
                        <Link to="/SantaBanta">404 Page</Link>
                      </Button>{" "}
                    </li>
                  </ul>
                </li>
                <li className="list-inline-item contact">
                  <Button>
                    <Link to="/SantaBanta">Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-2 part3 d-flex align-items-center ms-auto ">
            <div className="phNo d-flex align-items-centerms-auto ms-auto">
              <span className="me-2">
                <HeadphonesIcon  />
              </span>
              <div className="info ml-3">
                <h3 className="text-g mb-0">1900 - 888</h3>
                <p className="mb-0 support-text">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
