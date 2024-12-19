"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Image from "next/image";
import solution01 from "../../public/images/solution01.png";
import solution02 from "../../public/images/solution02.png";
import solution03 from "../../public/images/solution03.png";
import solution04 from "../../public/images/solution04.png";
import solution05 from "../../public/images/solution05.png";
import solution06 from "../../public/images/solution06.png";
import solution07 from "../../public/images/solution07.png";
import solution08 from "../../public/images/solution08.png";
import ButtonPrimary from "./reusableComponents/Button/ButtonPrimary";
import ButtonOutline from "./reusableComponents/Button/ButtonOutline";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(false);

  const tabData = [
    {
      title: "Business Expansion",
      description:
        "Scale your business by adding new products, services, or opening a new branch.",
      image: solution01,
      image02: solution02,
      bgColor: "#26FC0326",
    },
    {
      title: "Upgrade Your Premises",
      description:
        "Renovate your premises, increase capacity or renew your shop",
      image: solution03,
      image02: solution04,
      bgColor: "#03B1FC26",
    },
    {
      title: "Marketing",
      description: "Finance marketing campaign to grow your customer base",
      image: solution05,
      image02: solution06,
      bgColor: "#F7FC0326",
    },
    {
      title: "Purchase Equipment",
      description: "Purchase equipment to increase production or add new line",
      image: solution07,
      image02: solution08,
      bgColor: "#6203FC26",
    },
    {
      title: "Increase Inventory",
      description:
        "Renovate your premises, increase capacity or renew your shop",
      image: solution03,
      image02: solution04,
      bgColor: "#03B1FC26",
    },
    {
      title: "Invoice Finance",
      description: "Finance marketing campaign to grow your customer base",
      image: solution05,
      image02: solution06,
      bgColor: "#F7FC0326",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % tabData.length);
        setFade(false);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, [tabData.length]);

  return (
    <div className="bg-[#F3F7FB] md:pb-36 p-3 md:p-0">
      <Container>
        <div className="container mx-auto md:grid grid-cols-7 gap-32">
          {/* left section */}
          <div className="col-span-4 relative md:px-5 md:py-16 bg-gray-200 rounded-2xl">
            <div
              className={`flex gap-5 transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <div>
                <Image
                  src={tabData[activeTab].image}
                  alt={tabData[activeTab].title}
                  width={350}
                  height={350}
                  className="rounded-md"
                />
              </div>
              <div>
                <Image
                  src={tabData[activeTab].image02}
                  alt={tabData[activeTab].title}
                  width={350}
                  height={350}
                  className="md:mt-28 rounded-md"
                />
              </div>
            </div>
            <div
              className="absolute top-32 md:top-72 left-16 md:left-52 w-32 md:w-[270px] md:h-[270px] h-32 rounded-md"
              style={{ backgroundColor: tabData[activeTab].bgColor }}
            ></div>
          </div>

          {/* right section */}
          <div className="col-span-3">
            <div>
              <p className="text-green-800 font-normal text-xl">Solutions</p>
              <p className="text-[#00233F] font-semibold text-xl md:text-[42px] mt-4">
                Our Finance Solutions
              </p>
            </div>
            <ul className="mt-8 border-t border-gray-200 pt-4">
              {tabData.map((tab, index) => (
                <li
                  key={index}
                  className="relative pb-4 cursor-pointer"
                  onClick={() => {
                    setFade(true);
                    setTimeout(() => {
                      setActiveTab(index);
                      setFade(false);
                    }, 500);
                  }}
                >
                  <div
                    className={`pb-4 pl-4 relative transition-all duration-700 ${
                      activeTab === index
                        ? "animate-border-fill text-primary"
                        : "border-b border-[#DCDFEA] text-gray-400"
                    }`}
                  >
                    <p className="text-xl font-medium">{tab.title}</p>
                    {activeTab === index && (
                      <p className="font-normal text-sm text-gray-600 mt-2 pr-28">
                        {tab.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 justify-center md:justify-start md:gap-8 mt-8">
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
