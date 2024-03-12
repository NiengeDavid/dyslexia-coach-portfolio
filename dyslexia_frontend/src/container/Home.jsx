import React from 'react';

import { NavFeed, SliderFeeds, AboutFeed, FeaturedFeed ,Services, Courses, Products, Partners, Followers, Contact} from '../components';


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
        <Services />
      </div>

      <div className="w-full">
        <Courses />
      </div>

      <div className="w-full ">
        <Products />
      </div>

      <div className="w-full">
        <Partners/>
      </div>

      <div className="w-full">
        <Followers/>
      </div>

      <div className="w-full">
        <Contact/>
      </div>

    </div>
  )
}

export default Home