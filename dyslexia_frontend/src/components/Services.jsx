import React from "react";

const Services = ( {data, title} ) => {
  function mapDataToArray(data) {
    try {
      return Object.keys(data).map((key) => data[key]);
    } catch (error) {
      //console.error("An error occurred while mapping data:", error);
      return [];
    }
  }

  const card = mapDataToArray(data);
  const heading = mapDataToArray(title);

  return (
    <section className="bg-white" id="Services">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          {title ? (
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#006273]">{heading[1].title}</h2>
              <p className="font-light text-gray-500 lg:mb-16 md:text-xl">{heading[1].description}</p>
          </div>
          ) : (
            <p>Fetching data...</p>
          )}
          
          <div className="grid gap-8 mb-6 md:mb-16 md:grid-cols-3">
            {card.map((item, index) => (
              <div key={index} className="items-center bg-gray-50 rounded-lg shadow">
                <a href={item.link}>
                  <img className="w-full rounded-lg md:rounded-none md:rounded-l-lg" src={item.image.asset.url} alt={item.title} />
                </a>
                <div className="p-5 pb-7">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href={item.link}>{item.title}</a>
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500">{item.description}</p>
                  <a href={item.link} className="mb-4 text-white bg-[#006273] hover:bg-[#006273]/90 focus:ring-4 focus:ring-[#006273]/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                </div>
            </div>
            ))}  
          </div>
        </div>
    </section>
  );
};

export default Services;
