import React from "react";

const Footer = ( { data, title } ) => {

  function mapDataToArray(data) {
    try {
      return Object.keys(data).map((key) => data[key]);
    } catch (error) {
      console.error("An error occurred while mapping data:", error);
      return [];
    }
  };

  const logos = mapDataToArray(data);
  const heading = mapDataToArray(title);

    return (
        <>  
         <section id="Contact" className="bg-[#156760] md:flex items-center justify-center mx-auto space-y-0">
            {/* <!-- send me a message --> */}
            {heading ? (
              <div className="py-12 md:pt-28 px-4 mx-auto max-w-3xl">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">{heading[5].title}</h2>
              <p className="mb-8 lg:mb-16 font-light text-white sm:text-xl">{heading[5].description}</p>
              <form action="#" className="space-y-8 max-w-xl">
                <div>
                  <input type="text" id="name" className="shadow-sm bg-[#008E82] border border-[#008E82] text-white text-sm rounded-lg focus:ring-[#008E82]/75 focus:border-[#008E82]/80 block w-full p-2.5" placeholder="Your name" required />
                </div>
                <div>
                  <input type="email" id="email" className="shadow-sm bg-[#008E82] border border-[#008E82] text-white text-sm rounded-lg focus:ring-[#008E82]/75 focus:border-[#008E82]/80 block w-full p-2.5" placeholder="Your Email" required />
                </div>
                <div>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-white bg-[#008E82] rounded-lg border border-[#008E82] shadow-sm focus:ring-[#008E82]/75 focus:border-[#008E82]/80" placeholder="Subject" required />
                </div>
                <div className="sm:col-span-2">
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-white bg-[#008E82] rounded-lg shadow-sm border border-[#008E82] focus:ring-[#008E82]/75 focus:border-[#008E82]/80" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#51CAC0] sm:w-fit hover:bg-[#008E82] focus:ring-4 focus:outline-none focus:ring-[#51CAC0]/75 ">Send</button>
              </form>

            </div>
            ) : (
              <p>Fetching Data...</p>
            )}
            

            {/* <!-- Contact Info --> */}
            <div className="py-12 md:py-0 px-4 mx-auto max-w-3xl">
              <div className="flex space-x-6 items-center justify-center mx-auto md:items-start md:flex-col md:space-x-0 md:space-y-10">
                {logos.map((item, index) => (
                  <a key={index} href={item.url} className="transition-transform hover:duration-300 hover:transform hover:translate-y-1">
                    <img src={item.logo.asset.url} alt={item.alt} className="w-full" />
                  </a>
                ))}
              </div>
            </div>

          </section>
          <section className="py-8 bg-[#156760] ">
            <hr className="my-6 border-tag/60 sm:mx-auto lg:my-8" />
              <div className="sm:flex mx-auto px-4 space-x-2 sm:items-center sm:justify-center max-w-screen-xl">
                  <span className="text-sm text-gray-300 sm:text-center">
                    &copy; <span>{new Date().getFullYear()}</span> 
                    <a className="hover:underline cursor-pointer"> BlessingIngyape™</a>
                      . All Rights Reserved.
                  </span>
              </div>
          </section>
        </>
    )
}

export default Footer;