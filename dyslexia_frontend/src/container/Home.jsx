import React from 'react';
import { Navbar, Slider, About, Featured ,Services, Courses, Products,Partners,Followers,Contact} from '../components'

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden'>

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
     
      <div className="w-full">
        <Services />
      </div>

      <div className="w-full">
        <Courses />
      </div>

      <div className="w-full">
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