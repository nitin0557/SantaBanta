import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import "../../App.css";
import { Button, Rating } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Tooltip from "../../utils/tooltip/tooltip";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../..";
import { fetchShopping } from "../../state/action/shopping.action";


interface imageURL {
  url: string
}

const Product: React.FC<imageURL> = ({url}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: any) => state);
    useEffect(() => {
      dispatch(fetchShopping()); // Fetch data on component mount
    }, [dispatch]);

  {loading && (
    <div className="loader-wrapper">
      {/* Custom Animated Loader */}
      <div className="spinner"></div>
    </div>
  )}
  return (
    <div className="productThumb">
      <Link to="/">
        <div className="imgWrapper">
        {loading ? (
            <div className="loader-wrapper">
              {/* Custom Animated Loader */}
              <div className="spinner"></div>
            </div>
          ) : (
            <img src={url} alt="Product" />
          )}

          {!loading && (
            <div className="overlay transition">
              <ul className="list list-inline mb-0 d-flex align-items-center">
                <Tooltip text="Add to Wishlist" position="top">
                  <li className="list-inline-item">
                    <a className="cursor">
                      <FavoriteBorderOutlinedIcon className="icon" />
                    </a>
                  </li>
                </Tooltip>
                <Tooltip text="Add to Compare" position="top">
                  <li className="list-inline-item">
                    <a className="cursor">
                      <CompareArrowsOutlinedIcon className="icon" />
                    </a>
                  </li>
                </Tooltip>
                <Tooltip text="Add to View" position="top">
                  <li className="list-inline-item">
                    <a className="cursor">
                      <RemoveRedEyeOutlinedIcon className="icon" />
                    </a>
                  </li>
                </Tooltip>
              </ul>
            </div>
          )}
        </div>
      </Link>
      {!loading && (
        <div className="info">
          <span className="info-text mb-1">Snack</span>
          <h4>Seeds of Change Organic Quinoa, Brown, & Red Rice</h4>
          <Rating
            name="half-rating-read rating"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <div className="d-flex align-items-center mb-1">
            <span className="refer-by me-1">By</span>
            <span className="text-g brand-name">NestFood</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="text-g new-price fw-bold me-2">$28.85</span>
            <span className="old-price">$32.8</span>
            <Button className="ms-auto btn">
              <ShoppingCartOutlinedIcon className="cart-icon" />
              Add
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
