import React from "react";
import email from '../Assets/Email.svg';
import facebook from '../Assets/facebook.svg';
import youtube from '../Assets/Youtube.svg';


const Followers = () => {
    return (
        <>
        <div className="flex flex-col">

            <div className="text-center px-[20px] mt-[8rem] lg: ">
              <h1 className="text-[#5FD5E4] font-extrabold text-4xl lg:text-5xl">
                Subscribe for daily tips
              </h1>

              <p className="pt-[45px] text-start  leading-loose text-[18px] lg:pt-[25px] lg:text-[20px] lg:text-center lg:px-[300px] lg:font-thin">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
                 facilis aliquam alias accusamus ad fugiat sequi non cupiditate, a
                 nulla officiis.
              </p>
            </div>


            <div className="px-[20px] mb-[20px] lg:px-[100px] lg:flex lg:justify-center lg:w-full lg:mb-[4px]">

              <div className="mt-3  py-7 flex lg:mt-7 ">
                <img src={email} alt="" className="absolute py-[18px] px-[20px] w-[65px]"/>
                <input type="email " placeholder="Enter you Email" className="
                 w-full px-[53px]  h-[60px] rounded-[8px] bg-[#30D5C84D] border border-[#15676099] border-[2px] focus:ring-[#15676099] lg:w-[420px] lg:rounded-l-[15px] lg:rounded-r-none" />
              </div> 

              <a
                href="#"
                className="inline-flex items-center w-full h-[60px] px-[190px] py-4 text-sm font-medium text-center text-white bg-[#30D5C8] rounded-[15px] shadow-lg border border-[#30D5C8] lg:pl-[-5rem] lg:mt-[56px] lg:rounded-r-[15px] lg:rounded-l-none lg:w-[130px] lg:px-[30px]">
                <span className="tracking-loose">Subscribe </span>
              </a>
            </div>

            <p className="font-light mt-[30px] mx-[20px] text-start lg:text-center lg:mt-[1px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, expedita?
              </p>

           <div className="flex space-x-6 mt-[50px] lg:justify-center lg:mt-[40px]">
           <div className=" mb-[30px] flex  mx-[20px]">
              {/* FaceBook */}
            <img src={facebook} alt="" className="absolute pt-[25px] pl-[20px] w-[40px] lg:w-[35px] lg:mt-[-9px] lg:ml-[14px]"/>
              <a
                href="#"
                className="inline-flex items-center w-[200px] h-[77px]  px-[40px] py-4 text-sm font-medium text-center text-white bg-[#3B5998] rounded-[15px] shadow-lg border border-[#30D5C8] lg:pl-[-5rem] lg:w-[300px] lg:h-[60px] lg:text-center lg:px-[70px]"
              >
                <span className="tracking-loose">Subscribe on faceBook </span>
              </a>
            </div>

            <div className="flex">
                
              {/* Youtube */}
              <img src={youtube} alt="" className="absolute py-[20px] w-[40px] pl-[20px] lg:w-[50px] lg:mt-[-10px]"/>
              <a
                href="#"
                className="inline-flex items-center w-[200px] h-[77px]  px-[40px] py-4 text-sm font-medium text-center text-white bg-[#C81E1E] rounded-[15px] shadow-lg border border-[#30D5C8] lg:pl-[-5rem] lg:w-[300px] lg:h-[60px] lg:text-center lg:px-[70px]"
              >
                <span className="tracking-loose">Subscribe on Youtube </span>
              </a>
            </div>
           </div>
        </div>
        </>
    )
}

export default Followers;