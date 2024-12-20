"use client";
import trustLogo01 from "../../public/images/trustLogo01.png";
import trustLogo02 from "../../public/images/trustLogo02.png";
import trustLogo03 from "../../public/images/trustLogo03.png";
import trustLogo04 from "../../public/images/trustLogo04.png";
import trustLogo05 from "../../public/images/trustLogo05.png";
import trustLogo06 from "../../public/images/trustLogo06.png";
import trustArrow from "../../public/icons/trustArrow.png";
import Container from "./Container";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TrustedLogo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="flex gap-2 items-center justify-center md:justify-start mt-10 md:mt-28 md:mb-8 p-3 md:p-0">
        <p className="text-[16px] text-gray-400">Feature in Trusted by</p>{" "}
        <div>
          <Image src={trustArrow} alt="trustArrow"></Image>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <Slider {...settings}>
          {/* slider */}
          <div>
            <Image src={trustLogo01} alt="trustLogo01"></Image>
          </div>
          <div>
            <Image src={trustLogo02} alt="trustLogo02"></Image>
          </div>
          <div>
            <Image src={trustLogo03} alt="trustLogo03"></Image>
          </div>
          <div>
            <Image src={trustLogo04} alt="trustLogo04"></Image>
          </div>
          <div>
            <Image src={trustLogo05} alt="trustLogo05"></Image>
          </div>
          <div>
            <Image src={trustLogo06} alt="trustLogo06"></Image>
          </div>
          <div>
            <Image src={trustLogo05} alt="trustLogo05"></Image>
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default TrustedLogo;
