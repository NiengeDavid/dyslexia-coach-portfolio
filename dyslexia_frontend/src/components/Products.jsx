import React from "react";
import Fatti_Book from '../Assets/FatimaBook.jpg';
import YellowShirt from '../Assets/yellow shirt.jpg';
import bible from '../Assets/Bible.jpg';
import pink from '../Assets/Pink-bg.jpg';
import star from '../Assets/Star.jpg';
import ellispegray from '../Assets/product_ellipse_1.png';
import ellispegreen from '../Assets/product_ellipse_2.png';

const Products = () => {
    return (
        <>
            <div className="text-center px-[50px] mb-[8rem] lg:mt-[-15px] ">
                <h1 className="text-[#006273] font-extrabold text-4xl lg:text-5xl">
                    Our products
                </h1>
            </div>

            <div className="">
                {/* Card */}
                {/* Fatima's Book */}
                <div className="mx-[1rem] my-[3rem] lg:relative z-[1] lg:grid lg:grid-cols-4 lg:gap-2 lg:my-[4rem] lg:mx-0 ">
                  {[...Array(4).keys()].map((index) => (
                    <div className="max-w-md mb-[2.5rem] mx-[1rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                className="object-fit rounded-t-lg max-h-[19rem] w-[28rem]"
                                src={Fatti_Book}
                                alt="Fatima's Book"
                            />
                        </a>

                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Fatima's Book
                                </h5>
                            </a>
                            <p className="flex w-[25px] h-[25px] mb-7 font-normal text-[#006273]">
                                <img src={star} alt="Star" /> 1.0
                            </p>

                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold">N5,999</span>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-[#006273] rounded-lg lg:text-[#006273]  lg:text-[18px]  lg:border lg:border-[#006273] lg:bg-white"
                                >
                                    <span className="lg:text-bold">Buy <span className="lg:hidden">  here </span></span>
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}

                   <div class=" hidden lg:block lg:absolute lg:inset-0 z-[-1] lg:mt-[-180px]  lg:left-[1100px]">
                     <img src={ellispegreen} className="lg:absolute w-[550px] z-[1] lg:inset-0  lg:mt-[60px]" alt="Second Image"/>
                      <img src={ellispegray} className="lg:absolute lg:inset-0  w-[550px] lg:mt-[-80px]" alt="First Image"/>
                    </div>
                </div>

                
            </div>
        </>
    );
};

export default Products;
