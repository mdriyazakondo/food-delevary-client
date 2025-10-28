// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // 🔹 autoplay style (optional)

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const HomeBanner = () => {
  return (
    <div className="w-full max-w-full mx-auto py-8">
      {/* Swiper Banner Section */}
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        modules={[Pagination, Autoplay]} // 🔹 added Autoplay
        className="mySwiper shadow-lg"
      >
        {/* Slides */}
        <SwiperSlide>
          <img
            src="https://ik.imagekit.io/2o23yla4n/food-delevery-project/06.png?updatedAt=1761610291926"
            alt="Banner image"
            className="w-full h-96 md:h-[500px] lg:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ik.imagekit.io/2o23yla4n/food-delevery-project/05.png?updatedAt=1761610291812"
            alt="Banner image"
            className="w-full h-96 md:h-[500px] lg:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ik.imagekit.io/2o23yla4n/food-delevery-project/02.jpg?updatedAt=1761610295782"
            alt="Banner image"
            className="w-full h-96 md:h-[500px] lg:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ik.imagekit.io/2o23yla4n/food-delevery-project/04.jpg?updatedAt=1761610292131"
            alt="Banner image"
            className="w-full h-96 md:h-[500px] lg:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ik.imagekit.io/2o23yla4n/food-delevery-project/03.png?updatedAt=1761610293168"
            alt="Banner image"
            className="w-full h-96 md:h-[500px] lg:h-[600px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
