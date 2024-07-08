import React from "react";
import { Alert } from "flowbite-react";

import {
  NavFeed,
  SliderFeeds,
  AboutFeed,
  FeaturedFeed,
  ServicesFeed,
  CoursesFeed,
  ProductsFeed,
  PartnersFeed,
  NewsletterFeed,
  FooterFeed,
} from "../components";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden md:justify-center" id="Home">
      <div className="w-full fixed top-0 left-0 right-0 z-30 bg-red-500">
        <Alert
          color="success"
          className="bg-red-500 text-[10px] md:text-lg"
          onDismiss={() => alert("Just fill the form! - I'll be here for a little bit longer")}
        >
          <span className="font-semibold text-white">Dyslexia project 500:</span> We are out
          to create dyslexia awareness within 500 schools in Africa.
          <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScDMrvkIbeHcG-qpXfodFfPqzZ-mVW2E5hwB3gyBOBE1GuciQ/viewform?usp=pp_url"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg p-1.5 ml-2 text-sm font-medium bg-orange-300 text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700"
        >
          Join us
        </a>
        </Alert>
      </div>

      <div className="w-full">
        <NavFeed />
      </div>

      <div className="w-full mt-12">
        <SliderFeeds />
      </div>

      <div className="w-full mt-7 lg:mt-0">
        <AboutFeed />
      </div>

      <div className="w-full">
        <FeaturedFeed />
      </div>

      <div className="w-full">
        <ServicesFeed />
      </div>

      <div className="w-full">
        <CoursesFeed />
      </div>

      <div className="w-full ">
        <ProductsFeed />
      </div>

      <div className="w-full">
        <PartnersFeed />
      </div>

      <div className="w-full">
        <NewsletterFeed />
      </div>

      <div className="w-full">
        <FooterFeed />
      </div>
    </div>
  );
};

export default Home;
