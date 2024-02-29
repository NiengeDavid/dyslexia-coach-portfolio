import React from 'react';
import { Navbar, Slider, About, Featured } from '../components'

const Home = () => {
  return (
    <div className='w-full'>

      <div className="w-full">
        <Navbar />
      </div>
      
      <div className="w-full">
        <Slider />
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