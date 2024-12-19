"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import solution01 from "../../public/images/solution01.png";
import solution02 from "../../public/images/solution02.png";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(false);

  const tabData = [
    {
      title: "Business Expansion",
      description:
        "Scale your business by adding new products, services, or opening a new branch.",
      image: solution01,
    },
    {
      title: "Upgrade Your Premises",
      description:
        "Upgrade your office or workspace to boost efficiency and productivity.",
      image: solution02,
    },
  ];

  // Auto-switch tabs with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % tabData.length);
        setFade(false);
      }, 500); // Fade duration
    }, 6000); // Tab change interval
    return () => clearInterval(interval);
  }, [tabData.length]);

  return (
    <div className="bg-[#F3F7FB] md:pb-28">
      <div className="container mx-auto md:grid grid-cols-7 gap-24 items-center">
        {/* Left: Image Section */}
        <div className="col-span-4 relative p-5 bg-gray-100">
          <div
            className={`flex gap-5 transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={tabData[activeTab].image}
              alt={tabData[activeTab].title}
              width={350}
              height={350}
            />
          </div>
        </div>

        {/* Right: Tabs Section */}
        <div className="col-span-3">
          <div>
            <p className="text-green-800 font-normal text-xl">Solutions</p>
            <p className="text-black font-semibold text-[42px] mt-4">
              Our Finance Solutions
            </p>
          </div>
          <ul className="mt-8">
            {tabData.map((tab, index) => (
              <li
                key={index}
                className="relative pb-4 cursor-pointer"
                onClick={() => {
                  setFade(true);
                  setTimeout(() => {
                    setActiveTab(index);
                    setFade(false);
                  }, 500); // Fade duration
                }}
              >
                <div
                  className={`border-b-4 p-4 relative transition-all duration-700 ${
                    activeTab === index
                      ? "animate-border-fill"
                      : "border-[#DCDFEA]"
                  }`}
                >
                  {/* Overlay for Initial Deep Color */}
                  {activeTab === index && (
                    <div className="absolute left-0 top-0 h-full border-b-4 border-[#e06534] w-[50px]"></div>
                  )}
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
        </div>
      </div>
    </div>
  );
};

export default Solutions;
