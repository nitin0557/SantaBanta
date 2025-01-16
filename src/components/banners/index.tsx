import React from "react";
import Banner1 from "../../assets/images/banner-1.png";
import Banner2 from "../../assets/images/banner-2.png";
import Banner3 from "../../assets/images/banner-3.png";
import "./style.css"




const Banner: React.FC = () => {


    return(
        <div className="banner-section"> 
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="box">
                        <img src={Banner1} className="w-100"/>
                    </div>
                </div>
                <div className="col">
                    <div className="box">
                        <img src={Banner2} className="w-100"/>
                    </div>
                </div>   
                <div className="col">
                    <div className="box">
                        <img src={Banner3} className="w-100"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Banner;