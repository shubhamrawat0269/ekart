import { heroSectionData } from "../../dummy";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="bg-yellow-50">
      <div className="lg:px-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
          {/* hero section contenthere  */}
          <div className="p-[1rem] order-2 md:order-1 text-center md:text-left my-[2rem] md:my-0">
            <h1 className="font-bold text-3xl md:text-5xl">
              READY WHEN YOU NEED IT
            </h1>
            <p className="text-neutral-400">
              Find the perfect essentials in a better place at cheaper rate.
            </p>

            <div className="flex gap-[1rem] flex-col md:flex-row my-[1rem]">
              <button className="bg-red-500 text-white p-2 hover:bg-red-900">
                Shop Now
              </button>
              <button className="bg-orange-700 text-white p-2 hover:bg-orange-900">
                Explore More
              </button>
            </div>
          </div>
          {/* hero Image section here  */}

          <div className="flex order-1 md:order-2 justify-center items-center md:p-[2.5rem]">
            <Swiper
              slidesPerView={1}
              autoplay={{ delay: 1500 }}
              modules={[Navigation, Autoplay]}
              pagination={{ clickable: true }}
              className="swiper"
            >
              {heroSectionData.map((cur) => {
                return (
                  <SwiperSlide>
                    <div className="bg-white rounded-xl shadow-3xl">
                      <img
                        className="md:h-[30rem] md:w-[50rem] p-[1.25rem]"
                        src={cur.image}
                        alt={`heroImg${cur.id}`}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
