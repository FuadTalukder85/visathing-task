"use client";
import Image from "next/image";
import greenStar from "../../../../public/icons/greenStar.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arrowLeft from "../../../../public/icons/arrow_Left.png";
import arrowRight from "../../../../public/icons/arrow_right.png";
import "./ReviewCard.css";
const NextArrow = ({ onClick }) => {
  return (
    <div className="flex justify-end absolute -top-40 right-[165px] px-6 md:px-0">
      <div
        className="py-4 px-4 bg-white border-2 border-white rounded-2xl hover:bg-green-100 hover:border-2 hover:border-white transition-all duration-500 cursor-pointer"
        onClick={onClick}
      >
        <Image src={arrowRight} alt="arrowRight" />
      </div>
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute -top-40 right-0 md:mr-64 px-5 md:px-0 z-10">
      <div
        className="py-4 px-4 bg-white border-2 border-white rounded-2xl hover:bg-green-100 hover:border-2 hover:border-white transition-all duration-500 cursor-pointer"
        onClick={onClick}
      >
        <Image src={arrowLeft} alt="arrowLeft" />
      </div>
    </div>
  );
};

const ReviewCard = ({ reviews }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.04,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white shadow-lg rounded-2xl p-4 pb-20"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[16px] font-semibold text-black">
              {review.name}
            </h3>
            <span className="bg-green-200 text-black text-[10px] font-semibold px-2 py-1 rounded">
              {review.badge}
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-2">{review.role}</p>
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-1">
              {[...Array(review.rating)].map((_, index) => (
                <span key={index} className="text-green-500 text-xl">
                  <Image src={greenStar} alt="greenStar" width={20}></Image>
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400">{review.time}</p>
          </div>
          <p className="text-black font-normal text-sm">{review.message}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ReviewCard;
