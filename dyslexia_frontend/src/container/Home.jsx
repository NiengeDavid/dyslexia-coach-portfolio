import React from 'react';
import { Navbar, Slider } from '../components'

const Home = () => {
  return (
    <div className='w-full'>

      <div className="w-full">
        <Navbar />
      </div>
      
      <div className="w-full">
        <Slider />
      </div>
    </div>
  )
}

export default Home