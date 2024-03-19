import React from 'react';

import { NavFeed, SliderFeeds, AboutFeed, FeaturedFeed ,ServicesFeed, CoursesFeed, ProductsFeed, PartnersFeed, NewsletterFeed, FooterFeed} from '../components';


const Home = () => {
  return (
    <div className='w-full overflow-x-hidden md:justify-center' id='Home'>

      <div className="w-full">
        <NavFeed />
      </div>
      
      <div className="w-full">
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
        <PartnersFeed/>
      </div>

      <div className="w-full">
        <NewsletterFeed/>
      </div>

      <div className="w-full">
        <FooterFeed/>
      </div>

    </div>
  )
}

export default Home