import React from "react";
import Container from "../Container";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import ButtonPrimary from "../reusableComponents/Button/ButtonPrimary";
import ButtonOutline from "../reusableComponents/Button/ButtonOutline";

const Footer = () => {
  return (
    <Container>
      <div className="grid grid-cols-8 mt-28">
        <div className="col-span-3">
          <div>
            <Image src={logo} alt="logo" width={150} height={150}></Image>
          </div>
          <p className="text-gray-600 font-normal text-sm pr-32 mt-8">
            <span className="font-medium">Disclaimer:</span> Due to the periodic
            changes of information/ requirement/ document, RSIN doesn’t provide
            any confirmation, guarantee or representation, express or implied,
            that the information contained or referenced herein is completely
            accurate or final. 
            <Link href="/" className="text-primary font-medium">
              click here
            </Link>
          </p>
        </div>
        {/*  */}
        <div className="col-span-1">
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
        <div className="col-span-1">
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
        <div className="col-span-2">
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
        <div className="col-span-1">
          <p className="text-black font-medium text-[16px]">Action</p>
          <div className="mt-5">
            <ButtonPrimary>Start Investing</ButtonPrimary>
            <div className="mt-5 flex justify-center">
              <ButtonOutline>Get Funded</ButtonOutline>
            </div>
          </div>
        </div>
      </div>
      {/* bottom footer todo */}
    </Container>
  );
};

export default Footer;
