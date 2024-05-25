import React from "react";
import top_companies from '../assets/top_companies.png'
import google from '../assets/icons/google_logo_24.svg'

const Homepage = () => {
  return (
    <div>
      <form action="" className="h-12 w-full flex items-center justify-center my-6">
        <div className="h-full w-[90%] flex rounded border-2 border-lightGrey">
          <div className="h-full w-[15%] flex items-center justify-center text-xl">
            <i className="ri-search-line text-zinc-500"></i>
          </div>
          <input
            type="text"
            className="w-[85%] border-none outline-none"
            placeholder="Search here..."
          />
        </div>
      </form>
      <h1 className="px-5 py-6 text-[7vw] leading-9 text-zinc-800 font-bold from-inherit">
        Make your <span className="text-primary underline">dream career</span>{" "}
        a reality
      </h1>
      <div className="w-full pl-5 py-6 flex flex-col gap-6">
        <h2 className="text-xl font-bold tracking-wide text-zinc-800">
          Trending On Internify 🔥
        </h2>
        <div className="cards_select flex overflow-x-scroll [&>*:nth-child(1)]:ml-0">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-[24vmax] w-[34vmax] bg-zinc-100 shadow-md mx-2 rounded-xl p-4"
              >
                <h2 className="text-lg font-semibold">Card {index + 1}</h2>
                <p className="text-gray-700 mt-2">Card content goes here.</p>
              </div>
            ))}
          </div>

        {/* <div className="w-full">
          <div className="">
            <div className="h-[22vh] w-[72vw] bg-zinc-400 rounded-xl"></div>
            <div className="h-[22vh] w-[72vw] bg-zinc-400 rounded-xl"></div>
            <div className="h-44 w-72 bg-zinc-400 rounded-xl"></div>
            <div className="h-44 w-72 bg-zinc-400 rounded-xl"></div>
          </div>
        </div> */}
      </div>
      <div className="w-full pl-5 mt-6 py-6 flex flex-col gap-3 bg-zinc-100">
        <h1 className="text-xl font-bold tracking-wide text-zinc-800">Latest Internships on Internify</h1>
        <h2 className="font-light tracking-wide text-zinc-800">POPULAR CATEGORIES :</h2>
        <div className="cards_select flex overflow-x-scroll [&>*:nth-child(1)]:ml-0">
            {["Big Brands", "Work From Home", "Part-time", "Design"].map((itm, idx) => (
              <div key={idx}
                className="flex-shrink-0 px-4 pb-3 bg-white mx-2 rounded-full"
              >
                <p className="text-gray-700 mt-2">{itm}</p>
              </div>
            ))}
          </div>
          <div className="cards_select flex overflow-x-scroll [&>*:nth-child(1)]:ml-0 mt-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-[24vmax] w-[34vmax] bg-white shadow-md mx-2 rounded-xl p-4"
              >
                <h2 className="text-lg font-semibold">Card {index + 1}</h2>
                <p className="text-gray-700 mt-2">Card content goes here.</p>
              </div>
            ))}
          </div>
      </div>
      <div className="w-full pl-5 py-6 flex flex-col gap-3 bg-zinc-100">
        <h1 className="text-xl font-bold tracking-wide text-zinc-800">Latest Jobs on Internify</h1>
        <h2 className="font-light tracking-wide text-zinc-800">POPULAR CATEGORIES :</h2>
        <div className="cards_select flex overflow-x-scroll [&>*:nth-child(1)]:ml-0">
            {["Big Brands", "Work From Home", "Part-time", "Design"].map((itm, idx) => (
              <div key={idx}
                className="flex-shrink-0 px-4 pb-3 bg-white mx-2 rounded-full"
              >
                <p className="text-gray-700 mt-2">{itm}</p>
              </div>
            ))}
          </div>
          <div className="cards_select flex overflow-x-scroll [&>*:nth-child(1)]:ml-0 mt-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-[24vmax] w-[34vmax] bg-white shadow-md mx-2 rounded-xl p-4"
              >
                <h2 className="text-lg font-semibold">Card {index + 1}</h2>
                <p className="text-gray-700 mt-2">Card content goes here.</p>
              </div>
            ))}
          </div>
      </div>
      <div className="h-[50vh] w-full">
        <div className="h-[40%] w-full flex flex-col gap-5 items-center justify-center border-b-2 border-zinc-100">
          <h1 className="h-[20%] text-xl font-bold pt-2 leading-none text-center">Top companies trust us</h1>
          <div className="h-[40%] w-full"><img src={top_companies} alt="" className="h-full object-cover" /></div>
        </div>
        <div className="h-[60%] w-full flex flex-col justify-center items-center">
          <div className="h-[40%] w-[94%] flex justify-center items-center gap-3 border-b-2 border-zinc-100">
            <div className="h-fit w-[40%] flex flex-col justify-center items-center gap-1 border-r-2 border-zinc-100">
              <h2 className="text-primary font-bold text-2xl">300K+</h2>
              <p className="text-sm">companies hiring</p>
            </div>
            <div className="h-fit w-[40%] flex flex-col justify-center items-center gap-1">
              <h2 className="text-primary font-bold text-2xl">10K+</h2>
              <p className="text-sm">new openings everyday</p>
            </div>
          </div>
          <div className="h-[40%] w-[94%] flex justify-center items-center gap-3">
            <div className="h-fit w-[40%] flex flex-col justify-center items-center gap-1">
              <h2 className="text-primary font-bold text-2xl">21Mn+</h2>
              <p className="text-sm">active students</p>
            </div>
            <div className="h-fit w-[40%] flex flex-col justify-center items-center gap-1">
              <h2 className="text-primary font-bold text-2xl">600K+</h2>
              <p className="text-sm">learners</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[32vmax] w-full bg-[#0565C8] flex flex-col items-center justify-center gap-5">
        <h1 className="text-2xl text-white font-bold">Empower your career with <br></br>Internify today</h1>
        <button className="h-[6vmax] w-[30vmax] flex items-center justify-center gap-3 font-medium bg-white text-zinc-800 rounded-md"><img src={google} alt="" /> Continue with Google</button>
        <button className="h-[6vmax] w-[30vmax] flex items-center justify-center gap-3 font-medium bg-[#00489A] text-white rounded-md">Register Now</button>
      </div>
    </div>
    // scrolling-touch
  );
};

export default Homepage;
