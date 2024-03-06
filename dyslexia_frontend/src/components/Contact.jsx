import React from "react";
import ellispegray from '../Assets/footer_ellipse_1.png';
import ellispegreen from '../Assets/footer_ellipse_2.png';


const Contact = () => {
    return (
        <>
           
        <section id="contact" className=" pt-[50px] bg-[#156760] mt-[50px] lg:relative   lg:flex lg:pt-[150px]">
          <div className="py-8 px-4 mx-auto max-w-3xl  lg:z-[]">
            <h2 className="mb-7 text-4xl tracking-tight font-extrabold text-white ">Send me a Message</h2>
            <p className="mb-12  font-light  text-[#D1D5DB]  sm:text-xl lg:mb-8 ">Got a message for me? Want to send feedback about a beta feature? Need details about our Business plan? Let me know. &darr;</p>
            
            <form action="#" className="space-y-8 max-w-xl">
              <div>
                <input type="text" id="name" className="shadow-3xl h-[55px]
                 bg-[#008E82]  text-white
                  text-sm rounded-lg  block w-full p-2.5 placeholder:text-white  lg:h-[50px] lg:w-[600px]" placeholder="Your name" required/>
              </div>
              <div>
                <input type="email" id="email" className=" h-[55px]
                 bg-[#008E82]  text-white shadow-3xl
                  text-sm rounded-lg  block w-full p-2.5 placeholder:text-white lg:h-[50px] lg:w-[600px]" placeholder="Your Email" required/>
              </div>
              <div>
                <input type="text" id="subject" className=" h-[55px]
                 bg-[#008E82]  text-white shadow-3xl
                  text-sm rounded-lg  block w-full p-2.5 placeholder:text-white lg:h-[50px] lg:w-[600px]" placeholder="Subject" required/>
              </div>
              <div className="sm:col-span-2">
                <textarea id="message" rows="6" className="block p-2.5 w-full shadow-3xl text-sm text-white
                 bg-[#008E82] rounded-lg  focus:ring-white lg:w-[600px] placeholder:text-white" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="py-3 px-6 text-sm font-medium text-center text-white rounded-lg bg-[#51CAC0] sm:w-fit hover:bg-[#006273] focus:ring-4 focus:outline-none focus:ring-gray-300">Send</button>
            </form>
          </div>

          
          <div className="py-2 px-4 mx-auto max-w-3xl lg:my-[100px] lg:ml-[-10px]">
            <div className="flex space-x-6 items-center justify-center mx-auto md:justify-start  lg:inline ">
            
              <a href="#" className="hover:text-[#51CAC0] ">
                <svg className="w-6 h-6 text-white  hover:text-[#51CAC0] lg:mb-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                  <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd"/>
                  <path d="M3 5.012H0V15h3V5.012Z"/>
                </svg>
                  
              </a>

              <a href="#" className="hover:text-[#51CAC0]">
                <svg className="w-6 h-6 text-white  hover:text-[#51CAC0] lg:mb-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
              </a>

              
              <a href="#" className="hover:text-[#51CAC0]">
                <svg className="w-6 h-6 text-white  hover:text-[#51CAC0] lg:mb-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                </svg>
              </a>

              
              <a href="#" className="hover:text-[#51CAC0]">
                <svg className="w-6 h-6 text-white  hover:text-[#51CAC0] lg:mb-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path>
                </svg>
              </a>

              
              <a href="#" className="hover:text-[#51CAC0]">
                <svg className="w-6 h-6 text-white  hover:text-[#51CAC0] lg:mb-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/>
                </svg>
              </a>

              
              <a href="#" className="hover:text-[#51CAC0]">
                <svg className="w-6 h-6 text-white  hover:text-[#51CAC0] lg:mb-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                  <path fillRule="evenodd" d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" clipRule="evenodd"/>
                </svg>
              </a>

            
              <a href="#">
                <svg className="w-6 h-6 text-white  hover:text-[#51CAC0] lg:mb-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                </svg>
              </a>

             
            </div>
            
          </div>
        </section>
        <div className="h-full pt-[50px] text-center bg-[#156760] lg:pt-[3px]">
              <hr className="w-full  p-0 m-0 " />
                <p className="text-[#D1D5DB] py-[27px]">
                &copy; BlessingIngyape™. All Rights Reserved.
                </p> 
          </div>

          <div className=" hidden lg:block lg:absolute lg:inset-0  z-[0] lg:mt-[5960px]  ">
                  <img src={ellispegreen} className="lg:absolute w-[400px] z-[1] lg:inset-0  lg:mt-[150px]" alt="Second Image"/>
                  <img src={ellispegray} className="lg:absolute lg:inset-0  w-[400px] " alt="First Image"/>
                   
                  </div>
               
       
        </>
    )
}

export default Contact;