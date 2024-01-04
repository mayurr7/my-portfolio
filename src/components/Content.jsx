import React from "react";

import Image from "../assets/images/bharat.jpg";

const Content = () => {
  return (
    <div className="flex-col flex-1 order-1 col-span-4 md:order-none">
      <div className="container max-w-full mx-auto 2xl:max-w-6xl">
        <section
          className="min-h-[calc(100vh*0.80)] w-full flex justify-center mb-52"
          id="landing-page"
        >
          <div className="flex flex-col items-center m-auto space-x-0 space-y-7 md:space-y-0 md:space-x-7 md:flex-row">
            <img
              className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-md transition-all motion-reduce:transition-none duration-500 delay-[400ms] translate-y-0 opacity-1 object-cover"
              src={Image}
              alt="Your Image Alt Text"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-lg lg:text-xl transition-all motion-reduce:transition-none duration-500 delay-[500ms] translate-y-0 opacity-1">
                Hello 👋, my name is
              </p>
              <h1 className="text-2xl lg:text-4xl font-bold transition-all motion-reduce:transition-none duration-500 delay-[550ms] translate-y-0 opacity-1">
                Bharat Bhandari
              </h1>
              <p className="text-sm lg:text-base text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-[600ms] translate-y-0 opacity-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                incidunt tenetur numquam blanditiis animi temporibus illum
                repellendus quas quibusdam quis!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;
