import React from "react";


function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row space-x-20 my-10">
        
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-4 md:mt-24">
          <div className="space-y-6">
            <h1 className="text-4xl bold">
              Welcome to the Hive of Books - A Place to Explore, Read, and Learn
              Something <span className="text-yellow-400">New Every Day!!</span>
            </h1>
            <p className="text-xl">
              Welcome to the land of books where time disappears, coffee becomes
              essential, and bookmarks are always missing. Whether you&#39;re
              here to learn, escape reality, or pretend you love reading,
              we&#39;ve got something for you.
            </p>
            <label className="input validator outline-none">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="Enter Your mail to login"
                required
              />
            </label>
          </div>
        </div>
        
        <div className="order-1 w-full md:w-1/2">
          <div className="rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl mt-26">
            <img
              src="img.webp"
              className="w-full object-cover rounded-xl"
              alt="Books"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
