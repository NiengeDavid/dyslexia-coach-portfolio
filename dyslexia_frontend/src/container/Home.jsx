import React, {useState} from "react";
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
  const [close, setClose] = useState(false)

  return (
    <div className="w-full overflow-x-hidden md:justify-center" id="Home">
      {!close && (
        <div className="w-full fixed top-0 left-0 right-0 z-30 bg-red-500 bg-opacity-80">
          <Alert
            color="success"
            className="bg-transparent text-[10px] md:text-lg"
            onDismiss={() => setClose(true)}
          >
            <span className="font-semibold text-white">New Book Alert:</span>{" "}
            Preorder <b>“dyslexia - a superpower unveiled”</b> now &rarr;
            <a
              href="https://selar.co/47vt40"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-1.5 ml-2 text-sm font-medium bg-orange-300 text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700"
            >
              Preorder
            </a>
          </Alert>
        </div>
      )}

      <div className="w-full">
        <NavFeed close={close} />
      </div>

      <div className={`w-full ${!close ? "mt-[52px] md:mt-[60px]" : ""}`}>
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
