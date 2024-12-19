import React from "react";
import Container from "../Container";
import Image from "next/image";
import ButtonPrimary from "../reusableComponents/Button/ButtonPrimary";
import logo from "../../../public/images/logo.png";
import downArrow from "../../../public/icons/downArrow.png";

const Header = () => {
  return (
    <div className="border-b border-gray-200">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div>
            <Image src={logo} alt="logo" width={150} height={150}></Image>
          </div>
          <div>
            <ul className="flex gap-8 pl-20">
              <li className="font-normal text-black pr-4">
                <span>Home</span>
              </li>
              <li className="font-normal text-black">
                <span>For Business</span>
              </li>
              <li className="font-normal text-black">
                <span>For Investors</span>
              </li>
              <li className="font-normal text-black">
                <span>Financing Rates</span>
              </li>
              <li className="font-normal text-black">
                <span className="flex items-center gap-2">
                  Others
                  <span>
                    <Image src={downArrow} alt="downArrow"></Image>
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <button className="py-4 px-8 bg-white font-semibold text-[16px] rounded-[42px] text-primary">
              Log In
            </button>
            <ButtonPrimary>Apply Now</ButtonPrimary>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
