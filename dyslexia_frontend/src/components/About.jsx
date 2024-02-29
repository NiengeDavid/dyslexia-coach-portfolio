import React from 'react'
import background from '../Assets/pexels-pixabay-60013.jpg'

const About = () => {
  return (
    <div className='flex flex-col w-full h-full md:flex md:flex-col lg:flex '>
      {/* Title */}
      <div className='flex flex-col justify-center align-center mt-[30px] mx-[30px] bg-gradient-to-r from-[#006273] to-[#006273] w-[440px] h-[100px] rounded-bl-[15px] rounded-r-[15px] lg:flex'>
        <h1 className='text-[#5FD5E4] text-2xl text-start font-bold py-[12px] px-[10px] leading-loose'>Dyslexia Coach & Founder of Dyslexia Help Africa</h1>
      </div>
      {/* paragraph */}
      <div className='  m-[30px] text-[18px] leading-relaxed lg:flex'>
        <p className= 'mb-[30px] font-extralight '>
          <span className='text-[#006273]'> Blessing Ingyape</span> sit amet consectetur adipisicing elit.
           Velit inventore eligendi, et dolorem culpa vitae perferendis
            vel iste voluptatum incidunt molestiae commodi numquam! Dolorem voluptatem,
           dignissimos quae maxime blanditiis aliquid?
        </p>
        

        <p  className= 'mb-[30px] font-extralight '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Ipsam accusantium ducimus illo numquam debitis
           . Non autem velit vel error rerum consequatur repudiandae,
           reprehenderit modi ex eveniet sint blanditiis ut. Illo.

        </p>

        <p  className= 'mb-[30px] font-extralight '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Ipsam accusantium ducimus illo numquam debitis
           . Non autem velit vel error rerum consequatur repudiandae,
           reprehenderit modi ex eveniet sint blanditiis ut. Illo.

        </p>

        <p  className= 'mb-[30px] font-extralight '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Ipsam accusantium ducimus illo numquam debitis
           . Non autem velit vel error rerum consequatur repudiandae,
           reprehenderit modi ex eveniet sint blanditiis ut. Illo.

        </p>

        <p  className= 'mb-[30px] font-extralight '>
        Blessing's Mantra is that <span className='text-[#006275] font-bold'>"there are no limits ,every child can learn"</span> 
        </p>
        
      </div>
    </div>
  )
}

export default About