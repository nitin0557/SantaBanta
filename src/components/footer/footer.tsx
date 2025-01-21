import React, { useEffect, useState } from "react";
import "./footer.css";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import Icon4 from "../../assets/images/icon-4.svg";
import Icon5 from "../../assets/images/icon-5.svg";
import logo from "../../assets/images/download.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Newsletter from "../../components/newsletter/index";
import NewsletterImg from "../../assets/images/newsletter.png";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../..";
import { fetchShopping } from "../../state/action/shopping.action";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const {dataReducer} = useSelector((state : any)=> state)

  useEffect(() => {
    dispatch(fetchShopping()); // Fetch data on component mount
  }, [dispatch]);


  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top when clicking the button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <>


    <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>
                Stay home & get your daily <br />
                needs from our shop
              </h2>
              <p>Start You'r Daily Shopping with Santa Banta Mart</p>
              <br />
              <Newsletter />
            </div>

            <div className="img">
              <img src={NewsletterImg} className="w-100" />
            </div>
          </div>
        </div>
      </section>
    <div className="footerWrapper">
      <div className="footerBoxes">
        <div className="container-fluid">
          <div className="row">
            {dataReducer?.data?.offers && dataReducer.data.offers.length > 0 && (
              dataReducer.data.offers.map((offer:any)=>(
                <div className="col">
                <div className="box d-flex align-item-center">
                  <span>
                    <img src={offer.offer_icon} />
                  </span>
                  <div className="info">
                    <h4>{offer.offer_header_text}</h4>
                    <p>{offer.offer_sub_header_text}</p>
                  </div>
                </div>
              </div>

              ))
            ) }

            
          </div>
        </div>
      </div>

      <footer>
        <div className="container-fluid part1">
          <div className="row">
            <div className="col-sm-3">
              <Link to="/">
                {" "}
                <img src={logo} alt="image" />
              </Link>
              <br />
              <br />
              <p>Awesome grocery store website template</p>
              <br />

              <p>
                <LocationOnOutlinedIcon />
                Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United
                States
              </p>
              <p>
                <HeadphonesOutlinedIcon /> Call Us: (+91) - 540-025-124553
              </p>
              <p>
                <EmailOutlinedIcon /> Email: sale@SantaBanta.com
              </p>
              <p>
                {" "}
                <WatchLaterOutlinedIcon /> Hours: 10:00 - 18:00, Mon - Sat
              </p>
            </div>
            <div className="col-sm-9 part2">
              <div className="row">
                <div className="col">
                  <h4>Company</h4>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Delivery Information</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/">Support Center</Link>
                    </li>
                    <li>
                      <Link to="/">Careers</Link>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h4>Company</h4>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Delivery Information</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/">Support Center</Link>
                    </li>
                    <li>
                      <Link to="/">Careers</Link>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h4>Company</h4>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Delivery Information</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/">Support Center</Link>
                    </li>
                    <li>
                      <Link to="/">Careers</Link>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h4>Company</h4>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Delivery Information</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/">Support Center</Link>
                    </li>
                    <li>
                      <Link to="/">Careers</Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            
          </div>

          <hr/>

          <div className="row lastStrip">
              <div className="col-md-6 part_1 d-flex align-items-center">
                <p className="mb-0">
                  © 2025,SantaBanta All rights reserved
                </p>
              </div>

              <div className="col-md-6 part3 d-flex align-items-center justify-content-end  part_3">
                <div className="d-flex align-items-center">
                  <h5>Follow Us</h5>
                  <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Link to={""}>
                        <FacebookOutlinedIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <TwitterIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <InstagramIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <YouTubeIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

        </div>
      </footer>
      
    </div>
       {isVisible &&  <a className="scroll-to-top" onClick={scrollToTop}>
          <ArrowUpwardOutlinedIcon/>
        </a>}
    </>
  );
};

export default Footer;
