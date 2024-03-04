import React from "react";
import airbnb from "../Assets/Airbnb.svg";
import google from "../Assets/Google.svg";
import mallichimp from "../Assets/mallichimp.svg";
import mashable from "../Assets/Mashable.svg";
import microsoft from "../Assets/Microsoft.svg";
import spotify from "../Assets/Spotify.svg";

const Featured = () => {
  return (
    <>
      <div className="flex flex-col w-full my-[50px] lg:mx-[80px]">
        {/* Title */}
        <div className="mb-[60px] lg:mt-[4rem]">
          <h1 className="text-[#006273] font-extrabold text-4xl text-center lg:text-5xl lg:pr-[6rem]">
            Featured on
          </h1>
        </div>

        {/*Logos*/}
        <div className="grid grid-cols-2  mb-[2rem] px-[4rem] gap-4 justify-center lg:px-[3rem] md:mx-[90px] lg:grid-cols-6 lg:mr-[6rem] lg:mt-[2rem]">
          <span className="mb-[2rem] w-[200px] ">
            <img src={airbnb} alt="" />
          </span>
          <span className="w-[200px]">
            <img src={google} alt="" />
          </span>
          <span className="mb-[2rem] w-[200px]">
            <img src={microsoft} alt="" />
          </span>
          <span className="w-[200px]">
            <img src={spotify} alt="" />
          </span>
          <span className="w-[200px]">
            <img src={mallichimp} alt="" />
          </span>
          <span className="w-[200px]">
            <img src={mashable} alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Featured;
