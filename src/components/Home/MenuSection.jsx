import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const MenuSection = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("/data/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populerMenu = data.filter((item) => item.category === "popular");
        setMenus(populerMenu);
      })
      .catch((error) => console.error("Error loading menu:", error));
  }, []);

  return (
    <section className="max-w-[1500px] mx-auto my-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Our Popular Menu
      </h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {menus.map((menu, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center">
              <img
                src={menu.image}
                alt={menu.name || "menu item"}
                className="w-[250px] h-[250px] object-cover rounded-full shadow-md hover:scale-105 transition-transform duration-300"
              />
              <h3 className="mt-4 text-lg font-medium">{menu.name}</h3>
              <p className="text-gray-500 text-sm">{menu.category}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MenuSection;
