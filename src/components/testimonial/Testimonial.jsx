import React from "react";
import { testimonialData } from "../../dummy";
import Carousel from "../carousel/Carousel";

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-orange-500">customers</span> are
            saying
          </h2>

          {/* <div className="flex flex-wrap -m-4"> */}
          <div>
            {/* Testimonial 1 */}
            {/* <div className="lg:w-1/3 lg:mb-0 mb-6 p-4"> */}
            <div className="">
              <Carousel data={testimonialData} type="testimonialinfo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
