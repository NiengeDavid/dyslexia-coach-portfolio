import React from 'react'
import background from '../Assets/pexels-pixabay-60013.jpg'

const About = () => {
  return (
    <div className='font-bold text-center text-red-500 text-2xl py-10'>
        About

        <div className='flex font-bold text-red-500 text-5xl'>
                Felix has an headache because of dyslexia
            
            <span> <img src={background} alt="" className='flex' /></span>
        </div>
    </div>
  )
}

export default About