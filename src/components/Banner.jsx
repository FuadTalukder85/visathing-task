import Image from "next/image";
import bannerImg01 from "../../public/images/bannerImg01.png";
import bannerImg02 from "../../public/images/bannerImg02.png";
import bannerImg03 from "../../public/images/bannerImg03.png";
import profile01 from "../../public/images/profile01.png";
import profile02 from "../../public/images/profile02.png";
import profile03 from "../../public/images/profile03.png";
import profile04 from "../../public/images/profile04.png";
import arabicFont from "../../public/images/arabicFont.png";
import Container from "./Container";
import ButtonOutline from "./reusableComponents/Button/ButtonOutline";
import ButtonPrimary from "./reusableComponents/Button/ButtonPrimary";
import star from "../../public/icons/star.png";

const Banner = () => {
  return (
    <Container>
      <div className="grid grid-cols-9 items-center gap-40 mt-28">
        <div className="col-span-4 flex items-center gap-3">
          <div>
            <div>
              <Image src={bannerImg01} alt="bannerImg01"></Image>
            </div>
            {/* profile images */}
            <div className="flex items-center gap-3 mt-4 bg-[#F3F7FB] shadow-xl shadow-[#90C0F042] rounded-2xl px-3 py-5">
              <div className="flex -space-x-4">
                <div className="">
                  <Image
                    src={profile01}
                    alt="profile01"
                    width={35}
                    height={35}
                  />
                </div>
                <div className="">
                  <Image
                    src={profile02}
                    alt="profile02"
                    width={35}
                    height={35}
                  />
                </div>
                <div className="">
                  <Image
                    src={profile03}
                    alt="profile03"
                    width={35}
                    height={35}
                  />
                </div>
                <div className="">
                  <Image
                    src={profile04}
                    alt="profile04"
                    width={35}
                    height={35}
                  />
                </div>
              </div>
              <span className="text-[11px] font-normal text-black">
                Trusted by 15k+ investors
              </span>
            </div>
          </div>
          <div>
            <div>
              <Image src={bannerImg02} alt="bannerImg02"></Image>
            </div>
            <div className="mt-3">
              <Image src={bannerImg03} alt="bannerImg03"></Image>
            </div>
          </div>
        </div>
        {/* right content */}
        <div className="col-span-5">
          <button className="flex items-center justify-center gap-2 p-2 rounded-2xl bg-[#00233F]">
            <div className="">
              <Image src={arabicFont} alt="arabicFont" width={30} height={30} />
            </div>
            <span
              className="text-lg font-medium bg-gradient-to-r from-[#1FE6C5] to-[#19EB4B] 
                   bg-clip-text text-transparent"
            >
              Islamic Finance, Shari’a Approved
            </span>
          </button>
          <h1 className="font-semibold text-[76px] leading-[90px] mt-2">
            Smart Investments for Verified SMEs
          </h1>
          <p className="text-gray-600 font-normal text-sm pr-32 mt-5">
            Smart Investments for Verified SMEs connects investors with vetted
            small businesses, promoting informed decisions and local economic
            growth
          </p>
          <div className="flex gap-8 mt-5">
            <ButtonPrimary>Start Investing</ButtonPrimary>
            <ButtonOutline>Get Funded</ButtonOutline>
          </div>
          <p className="flex items-center gap-1 font-normal text-gray-600 text-[16px] mt-14">
            See our <b className="underline text-black">2,000 reviews</b>{" "}
            <span className="pr-2">on</span>
            <Image src={star} alt="star"></Image>
            Trustpilot
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
