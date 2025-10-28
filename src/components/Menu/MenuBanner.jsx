import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"; // 🔹 for fade effect

// Import required modules
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

const MenuBanner = () => {
  return (
    <div className="w-full max-w-full mx-auto py-8">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade" // 🔹 smooth fade transition
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper shadow-lg"
      >
        {/* 🥗 Salad Slide */}
        <SwiperSlide className="relative">
          <img
            src="https://ik.imagekit.io/2o23yla4n/food-delevery-project/salad-bg.jpg?updatedAt=1761610264604"
            alt="Salad Banner"
            className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold">
              Fresh & Healthy Salad
            </h2>
          </div>
        </SwiperSlide>

        {/* 🍕 Pizza Slide */}
        <SwiperSlide className="relative">
          <img
            src="https://ik.imagekit.io/2o23yla4n/food-delevery-project/pizza-bg.jpg?updatedAt=1761610263319"
            alt="Pizza Banner"
            className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold">
              Hot & Crispy Pizza
            </h2>
          </div>
        </SwiperSlide>

        {/* 🍰 Dessert Slide */}
        <SwiperSlide className="relative">
          <img
            src="https://ik.imagekit.io/2o23yla4n/food-delevery-project/dessert-bg.jpeg?updatedAt=1761610264839"
            alt="Dessert Banner"
            className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold">
              Sweet & Creamy Desserts
            </h2>
          </div>
        </SwiperSlide>

        {/* 🍲 Soup Slide */}
        <SwiperSlide className="relative">
          <img
            src="https://ik.imagekit.io/2o23yla4n/food-delevery-project/soup-bg.jpg?updatedAt=1761610264713"
            alt="Soup Banner"
            className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold">
              Warm & Tasty Soup
            </h2>
          </div>
        </SwiperSlide>

        {/* 🍕 Category Pizza Slide */}
        <SwiperSlide className="relative">
          <img
            src="https://ik.imagekit.io/2o23yla4n/food-delevery-project/category-pizza.jpg?updatedAt=1761610320839"
            alt="Category Pizza Banner"
            className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold">
              Our Special Pizza Menu
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MenuBanner;
