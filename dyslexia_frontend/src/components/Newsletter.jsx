import React from "react";


const Newsletter = ( { title } ) => {
    return (
        <>
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div class="mx-auto max-w-screen-md sm:text-center">
                  <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-[#5FD5E4] md:text-4xl">Sign up for my newsletter</h2>
                  <p class="mx-auto mb-8 max-w-2xl font-light text-[#6B7280] text-sm md:text-lg md:mb-12">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                  <form action="#">
                      <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                          <div class="relative w-full">
                              <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                              </div>
                              <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                          </div>
                          <div>
                              <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-[#30D5C8]/95 border-[#30D5C8] sm:rounded-none sm:rounded-r-lg hover:bg-[#30D5C8]/70 focus:ring-4 focus:ring-[#30D5C8]/20">Subscribe</button>
                          </div>
                      </div>
                      <div class="mx-auto max-w-screen-sm text-sm text-left text-[#6B7280] newsletter-form-footer">We care about the protection of your data. <span class="font-medium text-[#30D5C8]">It will be used only for the intended purpose</span>.</div>
                  </form>
              </div>
          </div>
        </section>
        </>
    )
}

export default Newsletter;