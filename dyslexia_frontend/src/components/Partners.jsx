import React from "react";
import airbnb from "../Assets/Airbnb.svg";
import google from "../Assets/Google.svg";
import mallichimp from "../Assets/mallichimp.svg";
import mashable from "../Assets/Mashable.svg";
import microsoft from "../Assets/Microsoft.svg";
import spotify from "../Assets/Spotify.svg";


const Partners = () => {
    return (
        <>
           <div className="lg:bg-[#EDFAFC] lg:mx-[11rem]  rounded-[2rem]"> 
           <div className="text-center px-[50px] mt-[3rem] mb-[4rem] lg:mt-[-0.2px] lg:pt-[40px]  lg:mb-[0rem]">
                <h1 className="text-[#006273] font-extrabold text-4xl lg:text-5xl">
                    Partners
                </h1>
            </div>

             {/*Logos*/}
        <div className="grid grid-cols-2 md:grid-cols-6  mb-[2rem] px-[3rem] gap-4 justify-center lg:px-[3rem]  lg:grid-cols-6 lg:mr-[2rem]  lg:mt-[2rem]">
          <span className="mb-[2rem] w-[200px]">
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
    )
}

export default Partners;