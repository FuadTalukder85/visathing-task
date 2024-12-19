import React from "react";
import Container from "./Container";
import Image from "next/image";
import star from "../../public/icons/star.png";
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
    <div className="bg-primary py-8 md:py-24 p-3 md:p-0">
      <Container>
        <div className="md:grid grid-cols-12 items-center text-white">
          <div className="col-span-4">
            <p className="text-green-300 font-normal text-xl">Testimonial</p>
            <p className="font-semibold text-xl md:text-[42px] md:leading-[60px] mt-4">
              For nearly 07 years, people have chosen VISAThing!
            </p>
          </div>
          <div className="col-span-8 flex md:justify-end mt-3 md:mt-0">
            <div className="pb-20">
              <p className="flex items-center gap-1 font-normal text-white text-sm md:text-[16px]">
                See our <b className="underline">2,000 reviews</b>{" "}
                <span className="pr-2">on</span>
                <Image src={star} alt="star"></Image>
                Trustpilot
              </p>
            </div>
          </div>
        </div>
        {/* review card */}
        <div className="mt-14">
          <ReviewCard reviews={reviews} />
        </div>
      </Container>
    </div>
  );
};

export default Review;
