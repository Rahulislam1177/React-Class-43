import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutBanner = () => {
  return (
    <div className=" w-auto lg:w-full pt-[100px] bg-[url('/public/assets/aboutbanner.png')] sm:pt-[150px] lg:pt-[230px] pb-[100px]">
      <div className="text-center">
        <div>
          <h1 className=" text-xl lg:text-8xl mt-20 text-white font-bold">
            About Us
          </h1>
        </div>
        <div className="flex justify-center mt-8 mb-10">
          <Link className="text-slate-300 " to="/">
            Home
          </Link>
          <img
            className="w-5 h-5 ml-2 mr-3 mt-1"
            src="/public/assets/right-arrow (1).png"
            alt=""
          />
          <p className="text-white">About Us</p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
