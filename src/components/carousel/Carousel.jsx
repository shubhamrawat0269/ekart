import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const Carousel = ({ type, data }) => {
  const getCarouselData = (type, data) => {
    switch (type) {
      case "heroData": {
        return (
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 1500 }}
            modules={[Navigation, Autoplay]}
            pagination={{ clickable: true }}
            className="swiper"
          >
            {data.map((cur) => {
              return (
                <SwiperSlide>
                  <div className="bg-white rounded-xl shadow-3xl">
                    <img
                      className="md:h-[30rem] md:w-[50rem] p-[1.25rem]"
                      src={cur.image}
                      alt={cur.id}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        );
      }
      case "testimonialinfo": {
        return (
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 1500 }}
            modules={[Navigation, Autoplay]}
            pagination={{ clickable: true }}
            className="swiper"
          >
            {data.map((cur) => {
              return (
                <SwiperSlide>
                  <div key={cur.id} className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={cur.imageSrc}
                    />
                    <p className="leading-relaxed">{cur.title}</p>
                    <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4" />
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                      {cur.author}
                    </h2>
                    <p className="text-gray-500">{cur.profession}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        );
      }

      default:
        break;
    }
  };

  return getCarouselData(type, data);
};

export default Carousel;
