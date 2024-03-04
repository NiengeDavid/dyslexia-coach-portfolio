import React from 'react';
import { Navbar, SliderFeeds, About, Featured } from '../components'

const Home = () => {
  return (
    <div className='w-full'>

      <div className="w-full">
        <Navbar />
      </div>
      
      <div className="w-full">
        <SliderFeeds />
      </div>

      <div className="w-full">
        <About />
      </div>

      <div className="w-full">
        <Featured />
      </div>

    </div>
  )
}

export default Home