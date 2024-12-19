"use client";
import React, { useEffect } from "react";
import Container from "../Container";
import Image from "next/image";
import ButtonPrimary from "../reusableComponents/Button/ButtonPrimary";
import logo from "../../../public/images/logo.png";
import menuIcon from "../../../public/icons/menuIcon.png";
import downArrow from "../../../public/icons/downArrow.png";
import gsap from "gsap";
import Link from "next/link";
const Header = () => {
  // gsap animation for menu
  useEffect(() => {
    const menuBtn = document.querySelector("#menu");
    const menuStyle = document.querySelector("#menuStyle");
    const closeMenuBtn = document.querySelector("#menuStyle #closeBtn");

    if (menuBtn && menuStyle) {
      const tl = gsap.timeline({ paused: true });
      tl.to("#menuStyle", {
        left: 0,
        duration: 0.5,
        opacity: 1,
        visibility: "visible",
      });
      tl.from("#menuStyle li", {
        x: 100,
        duration: 0.6,
        opacity: 0,
        stagger: 0.2,
      });
      // open menu
      menuBtn.addEventListener("click", () => {
        tl.play();
      });
      // close menu
      if (closeMenuBtn) {
        closeMenuBtn.addEventListener("click", () => {
          tl.reverse();
        });
      }
    }
  }, []);
  return (
    <div className="border-b border-gray-200">
      <Container>
        <div className="md:flex justify-between items-center py-3 md:py-6">
          {/* responsive start */}
          <div className="md:hidden flex gap-5 items-center justify-between p-3">
            <div
              id="menu"
              className="bg-primary p-2 rounded-md hover:bg-green-200 transition-all duration-500"
            >
              <Image
                src={menuIcon}
                alt="menuIcon"
                width={25}
                height={25}
              ></Image>
            </div>
            <div>
              <Image src={logo} alt="logo" width={100} height={100}></Image>
            </div>
            <div
              id="menuStyle"
              className="absolute h-full w-[320px] left-[-320px] p-5 top-0 bg-green-50 z-50"
            >
              <div className="flex justify-between items-center">
                <Image src={logo} alt="logo" width={100} height={100}></Image>
                <div
                  id="closeBtn"
                  className="px-2 bg-primary text-white rounded-md hover:bg-black transition-all duration-500"
                >
                  X
                </div>
              </div>
              <ul className="mt-5">
                <li className="font-normal text-black border-y border-gray-200 py-2">
                  <span>Home</span>
                </li>
                <li className="font-normal text-black border-b border-gray-200 py-2">
                  <span>For Business</span>
                </li>
                <li className="font-normal text-black border-b border-gray-200 py-2">
                  <span>For Investors</span>
                </li>
                <li className="font-normal text-black border-b border-gray-200 py-2">
                  <span>Financing Rates</span>
                </li>
                <li className="font-normal text-black border-b border-gray-200 py-2">
                  <span className="flex items-center gap-2">
                    Others
                    <span>
                      <Image src={downArrow} alt="downArrow"></Image>
                    </span>
                  </span>
                </li>
              </ul>
              <div className="md:hidden mt-10 flex gap-5 justify-center">
                <button className="py-4 px-8 bg-white font-semibold text-[16px] rounded-[42px] text-primary">
                  Log In
                </button>
                <div>
                  <ButtonPrimary>Apply Now</ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
          {/* responsive end */}
          <div className="hidden md:block">
            <Image src={logo} alt="logo" width={150} height={150}></Image>
          </div>
          <div>
            <ul className="hidden md:flex gap-8 pl-20">
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
          <div className="hidden md:block">
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
