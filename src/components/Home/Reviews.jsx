import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import {
  MdOutlineStar,
  MdOutlineStarHalf,
  MdOutlineStarBorder,
} from "react-icons/md";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/data/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error loading reviews:", err));
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <MdOutlineStar key={`full-${i}`} className="text-orange-400" />
          ))}
        {halfStar === 1 && <MdOutlineStarHalf className="text-orange-400" />}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <MdOutlineStarBorder
              key={`empty-${i}`}
              className="text-orange-400"
            />
          ))}
      </>
    );
  };

  return (
    <section className="max-w-[1500px] mx-auto my-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Customer Reviews
      </h2>

      {reviews.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full">
                <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {renderStars(review.rating)}
                  <span className="text-gray-600 ml-1">
                    ({review.rating.toFixed(1)})
                  </span>
                </div>
                <p className="text-gray-500">{review.details.slice(0, 150)}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">No reviews found.</p>
      )}
    </section>
  );
};

export default Reviews;
