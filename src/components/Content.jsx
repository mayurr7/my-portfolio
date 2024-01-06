import React from "react";

import Image from "../assets/images/bharat.jpg";
import MyInfo from "./MyInfo";

const Content = () => {
  return (
    <div className="flex-col flex-1 order-1 col-span-4 md:order-none">
      <div className="container max-w-full mx-auto 2xl:max-w-6xl">
        {/*End of profile section */}
        <section
          className="min-h-[calc(100vh*0.80)] w-full flex justify-center mb-52"
          id="about"
        >
          <div className="flex flex-col items-center m-auto space-x-0 space-y-7 md:space-y-0 md:space-x-7 lg:flex-row">
            <img
              className="w-64 md:mb-6 h-64 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-full shadow-md transition-all motion-reduce:transition-none duration-500 delay-[400ms] translate-y-0 opacity-1 object-cover"
              src={Image}
              alt="Your Image Alt Text"
            />
            <MyInfo />
          </div>
        </section>
        {/* End of profile section */}

        {/*  */}
      </div>
    </div>
  );
};

export default Content;
