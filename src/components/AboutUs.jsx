import React from "react";
import Container from "./Container";
import aboutUs from "../../public/images/aboutUs.png";
import about01 from "../../public/icons/about01.png";
import about02 from "../../public/icons/about02.png";
import about03 from "../../public/icons/about03.png";
import about04 from "../../public/icons/about04.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-24 mt-28">
      <Container>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl flex  justify-center items-center">
            <div>
              <p className="text-green-800 font-normal text-xl">About Us</p>
              <p className="text-gray-900 font-semibold text-[42px] leading-[60px] mt-4">
                Aspired To Build A Better Financial World
              </p>
              <p className="text-gray-600 font-normal text-sm pr-32 mt-8">
                Raqamyah is a Sharia-compliant crowdlending platform licensed by
                the Saudi Central Bank (SAMA). It connects SMEs seeking
                financing with investors looking for competitive returns. By
                directly funding SMEs, investors earn profits while supporting
                business growth and economic development. The platform’s mission
                is to simplify and accelerate funding for small businesses to
                help them thrive.
              </p>
              <ul>
                <li className="flex items-center gap-3 mt-6">
                  <div className="relative">
                    <div className="bg-green-500 h-3 w-3 rounded-full flex items-center justify-center">
                      <span className="bg-white h-[6px] w-[6px] rounded-full"></span>
                    </div>
                  </div>
                  <p className="text-[16px] text-gray-600 font-normal">
                    Sharia-Compliant Crowdlending
                  </p>
                </li>
                <li className="flex items-center gap-3 mt-6">
                  <div className="relative">
                    <div className="bg-green-500 h-3 w-3 rounded-full flex items-center justify-center">
                      <span className="bg-white h-[6px] w-[6px] rounded-full"></span>
                    </div>
                  </div>
                  <p className="text-[16px] text-gray-600 font-normal">
                    Empowering Business Growth
                  </p>
                </li>
                <li className="flex items-center gap-3 mt-6">
                  <div className="relative">
                    <div className="bg-green-500 h-3 w-3 rounded-full flex items-center justify-center">
                      <span className="bg-white h-[6px] w-[6px] rounded-full"></span>
                    </div>
                  </div>
                  <p className="text-[16px] text-gray-600 font-normal">
                    Direct Investment Opportunities
                  </p>
                </li>
                <li className="flex items-center gap-3 mt-6">
                  <div className="relative">
                    <div className="bg-green-500 h-3 w-3 rounded-full flex items-center justify-center">
                      <span className="bg-white h-[6px] w-[6px] rounded-full"></span>
                    </div>
                  </div>
                  <p className="text-[16px] text-gray-600 font-normal">
                    Regulated and Trusted
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="bg-white p-6 rounded-2xl">
              <Image
                src={aboutUs}
                alt="aboutUs"
                className="rounded-2xl"
              ></Image>
            </div>
            <div className="bg-white p-6 grid grid-cols-2 gap-6 rounded-2xl mt-5">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-green-100 w-20 h-20 flex items-center justify-center rounded-full">
                  <Image src={about01} alt="about01"></Image>
                </div>
                <p className="text-gray-900 font-medium text-xl mt-10">
                  Low Rates
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-green-100 w-20 h-20 flex items-center justify-center rounded-full">
                  <Image src={about02} alt="about02"></Image>
                </div>
                <p className="text-gray-900 font-medium text-xl mt-10">
                  Financing up to SAR 7.5M
                </p>
              </div>
              <div className="bg-gray-00 p-6 rounded-lg">
                <div className="bg-green-100 w-20 h-20 flex items-center justify-center rounded-full">
                  <Image src={about03} alt="about03"></Image>
                </div>
                <p className="text-gray-900 font-medium text-xl mt-10">
                  Faster Decision
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-green-100 w-20 h-20 flex items-center justify-center rounded-full">
                  <Image src={about04} alt="about04"></Image>
                </div>
                <p className="text-gray-900 font-medium text-xl mt-10">
                  Shari’a Compliant
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;