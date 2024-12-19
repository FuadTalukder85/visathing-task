import React from "react";
import Container from "./Container";
import Image from "next/image";
import solution01 from "../../public/images/solution01.png";
import solution02 from "../../public/images/solution02.png";
import ButtonPrimary from "./reusableComponents/Button/ButtonPrimary";
import ButtonOutline from "./reusableComponents/Button/ButtonOutline";
const Solutions = () => {
  return (
    <div>
      <Container>
        <div className="md:grid grid-cols-7 gap-24 items-center py-24">
          <div className="col-span-4 relative bg-gray-100 p-5">
            <div className="flex gap-5">
              <div>
                <Image
                  src={solution01}
                  alt="solution01"
                  width={350}
                  height={350}
                ></Image>
              </div>
              <div className="mt-20">
                <Image
                  src={solution02}
                  alt="solution02"
                  width={350}
                  height={350}
                ></Image>
              </div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center top-80">
              <div className="w-64 h-64 rounded-md bg-green-400 opacity-35"></div>
            </div>
          </div>
          <div className="col-span-3 mt-28">
            <div>
              <p className="text-green-800 font-normal text-xl">Solutions</p>
              <p className="text-black font-semibold text-[42px] mt-4">
                Our Finance Solutions
              </p>
            </div>
            <ul className="mt-8">
              <li className="border-y border-gray-200 pb-4">
                <p className="text-xl font-medium text-primary mt-4">
                  Business Expansion
                </p>
                <p className="font-normal text-sm text-gray-600 mt-2 pr-28">
                  Scale your business by adding new products, service or open
                  new branch
                </p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <p className="text-xl font-medium text-primary mt-4">
                  Business Expansion
                </p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <p className="text-xl font-medium text-primary mt-4">
                  Business Expansion
                </p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <p className="text-xl font-medium text-primary mt-4">
                  Business Expansion
                </p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <p className="text-xl font-medium text-primary mt-4">
                  Business Expansion
                </p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <p className="text-xl font-medium text-primary mt-4">
                  Business Expansion
                </p>
              </li>
            </ul>
            <div className="flex gap-8 mt-6">
              <ButtonPrimary>Get Started</ButtonPrimary>
              <ButtonOutline>Learn more</ButtonOutline>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Solutions;
