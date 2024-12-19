import React from "react";
import Container from "../Container";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import ButtonPrimary from "../reusableComponents/Button/ButtonPrimary";
import ButtonOutline from "../reusableComponents/Button/ButtonOutline";
import BottomFooter from "./BottomFooter";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-8 md:grid-cols-12 gap-5 md:gap-0 mt-10 md:mt-28 p-3 md:p-0">
          <div className="col-span-8 md:col-span-4 md:pr-10">
            <div>
              <Image src={logo} alt="logo" width={150} height={150}></Image>
            </div>
            <p className="text-gray-600 font-normal leading-6 text-sm pr-8 mt-8">
              <span className="font-medium">Disclaimer:</span> Due to the
              periodic changes of information/ requirement/ document, RSIN
              doesn’t provide any confirmation, guarantee or representation,
              express or implied, that the information contained or referenced
              herein is completely accurate or final. 
              <Link href="/" className="text-primary font-medium">
                click here
              </Link>
            </p>
          </div>
          {/*  */}
          <div className="col-span-4 md:col-span-2">
            <p className="text-black font-medium text-[16px]">Service</p>
            <ul>
              <li className="text-primarydeep font-normal text-[16px] mt-5">
                For Investors
              </li>
              <li className="text-primarydeep font-normal text-[16px] mt-5">
                For Business
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="col-span-4 md:col-span-2">
            <p className="text-black font-medium text-[16px]">Company</p>
            <ul>
              <li className="text-primarydeep font-normal text-[16px] mt-5">
                About Us
              </li>
              <li className="text-primarydeep font-normal text-[16px] mt-5">
                How it Works
              </li>
              <li className="text-primarydeep font-normal text-[16px] mt-5">
                Contact Us
              </li>
              <li className="text-primarydeep font-normal text-[16px] mt-5">
                FAQ
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="col-span-8 md:col-span-2">
            <p className="text-black font-medium text-[16px]">Information</p>
            <ul>
              <li className="text-primarydeep font-normal text-[16px] mt-5">
                Legal
              </li>
              <li className="text-primarydeep font-normal text-[16px] mt-5">
                Learn more as an Investor
              </li>
              <li className="text-primarydeep font-normal text-[16px] mt-5">
                Learn More as a Borrower
              </li>
              <li className="text-primarydeep font-normal text-[16px] mt-5">
                Key Principles & Rules
              </li>
              <li className="text-primarydeep font-normal text-[16px] mt-5">
                Complains and suggestions
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="col-span-8 md:col-span-2 md:pl-10">
            <p className="text-black font-medium text-[16px]">Action</p>
            <div className="mt-5">
              <ButtonPrimary>Start Investing</ButtonPrimary>
              <div className="md:flex justify-center mt-5">
                <ButtonOutline>Get Funded</ButtonOutline>
              </div>
            </div>
          </div>
        </div>
        <BottomFooter></BottomFooter>
      </Container>
      {/* copyright */}
      <div className="bg-gray-100 p-3 md:py-3">
        <Container>
          <div className="md:flex justify-between text-black">
            <p className="text-sm font-normal text-center md:text-base">
              Copyright RSIN@2024 . All rights reserved. V-0.1.14
            </p>
            <ul className="flex gap-5 text-sm font-normal mt-5 md:mt-0">
              <li>Terms and Conditions</li>
              <li>Privacy policy</li>
              <li>Cookie Settings</li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
