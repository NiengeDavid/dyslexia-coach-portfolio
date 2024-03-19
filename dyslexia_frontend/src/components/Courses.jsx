import React from "react";

const Courses = ( { data } ) => {
  function mapDataToArray(data) {
    try {
      return Object.keys(data).map((key) => data[key]);
    } catch (error) {
      console.error("An error occurred while mapping data:", error);
      return [];
    }
  }

  const feed = mapDataToArray(data);

  return (
    <>
      {feed && (
        <section className="bg-[#EDFAFC] mb-16">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto text-center md:text-left md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
              <div className="mr-auto place-self-center md:col-span-7">
                  <h1 className="max-w-2xl mb-4 pl-3 text-4xl text-[#184348] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">{feed[1].title}</h1>
                  <p className="max-w-2xl mb-3 pl-3 font-light text-[#020A0A] md:mb-4 md:text-lg lg:text-xl">{feed[1].description}</p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-5 md:flex">
              <div className="flex justify-center items-center mx-auto p-2 rounded-lg w-full">
              <div className="w-full flex justify-center items-center">
                <iframe 
                  className="rounded-lg aspect-video w-full h-full"
                  src={feed[1].url} 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                >
                  Your browser does not support the video tag.
                </iframe>
              </div>
            </div>
              </div>                
          </div>

          <div className="grid max-w-screen-xl items-center px-4 py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
              <div className="mb-10 w-full flex justify-center items-center mx-auto md:mt-0 md:col-span-5 md:flex">
                  <img src={feed[0].image.asset.url} className="w-full rounded-[35px]" alt="Course Thumbnail" />
              </div>
              <div className="ml-auto place-self-center text-center md:text-left md:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl text-[#184348] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">{feed[0].title}</h1>
                  <p className="max-w-2xl mb-6 font-light text-[#020A0A] md:mb-8 md:text-lg lg:text-xl">{feed[0].description}</p>
                  <a href={feed[0].url} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#006273] hover:bg-[#006273]/70 focus:ring-4 focus:ring-[#006273]/20">
                      Get started
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                  <a href={feed[0].whatsapp} className="inline-flex cursor-pointer items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-[#006273]/10 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      Speak to Sales
                  </a> 
              </div>             
          </div>
        </section>
      )}
      
    </>
  );
};

export default Courses;
