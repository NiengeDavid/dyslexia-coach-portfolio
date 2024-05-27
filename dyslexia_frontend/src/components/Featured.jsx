import React from "react";

const Featured = ({ data, title }) => {
  function mapDataToArray(data) {
    try {
      return Object.keys(data).map((key) => data[key]);
    } catch (error) {
      //console.error("An error occurred while mapping data:", error);
      return [];
    }
  }

  const logos = mapDataToArray(data)
  const heading = mapDataToArray(title)


  return (
    <>
      <section className="bg-[#EDFAFC] my-10">
        {title ? (
          <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight font-[Segoe UI] leading-tight text-center text-[#006273] md:text-4xl">{heading[0].title}</h2>
            <div className="grid grid-cols-2 gap-8 text-[#73A4A0] md:gap-12 md:grid-cols-4 lg:grid-cols-4">
                {logos.map((item, index) => (
                  <a key={index} href={item.link} className="flex justify-center items-center transition-transform hover:duration-300 hover:transform hover:translate-y-1">
                    <img src={item.logo.asset.url} alt={item.alt} />                        
                </a>
                ))}
            </div>
          </div>
        ) : (
          <p>Fetching data...</p>
        )}
      </section>
    </>
  );
};

export default Featured;
