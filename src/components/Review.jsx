import React from "react";
import Container from "./Container";
import Image from "next/image";
import star from "../../public/icons/star.png";
import arrowLeft from "../../public/icons/arrow_Left.png";
import arrowRight from "../../public/icons/arrow_right.png";
import ReviewCard from "./reusableComponents/Card/ReviewCard";
export const reviews = [
  {
    id: 1,
    name: "Razu Sardar",
    role: "CEO of RSM",
    badge: "Fund Seeker",
    rating: 5,
    time: "2 days ago",
    message:
      "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
  },
  {
    id: 2,
    name: "Arlene McCoy",
    role: "CTO Of The Walt Disney Company",
    badge: "Investor",
    rating: 5,
    time: "2 days ago",
    message:
      "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
  },
  {
    id: 3,
    name: "Floyd Miles",
    role: "MD Of Starbucks",
    badge: "Investor",
    rating: 5,
    time: "2 days ago",
    message:
      "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
  },
  {
    id: 4,
    name: "Jane Cooper",
    role: "HR Of Gillette",
    badge: "Fund Seeker",
    rating: 5,
    time: "2 days ago",
    message:
      "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
  },
  {
    id: 5,
    name: "Darlene Robertson",
    role: "HDO Of McDonald's",
    badge: "Investor",
    rating: 5,
    time: "2 days ago",
    message:
      "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
  },
];

const Review = () => {
  return (
    <div className="bg-primary py-24">
      <Container>
        <div className="grid grid-cols-12 items-center text-white">
          <div className="col-span-4">
            <p className="text-green-300 font-normal text-xl">Testimonial</p>
            <p className="font-semibold text-[42px] leading-[60px] mt-4">
              For nearly 07 years, people have chosen VISAThing!
            </p>
          </div>
          <div className="col-span-8 flex justify-end">
            <div>
              <p className="flex items-center gap-1 font-normal text-[16px]">
                See our <b className="underline">2,000 reviews</b>{" "}
                <span className="pr-2">on</span>
                <Image src={star} alt="star"></Image>
                Trustpilot
              </p>
              <div className="flex gap-8 mt-12">
                <button className="py-4 px-4 bg-white rounded-2xl">
                  <Image src={arrowLeft} alt="arrowLeft"></Image>
                </button>
                <button className="py-4 px-4 bg-white rounded-2xl">
                  <Image src={arrowRight} alt="arrowRight"></Image>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* review card */}
        <div className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;
