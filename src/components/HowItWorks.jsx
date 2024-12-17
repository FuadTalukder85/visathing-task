import Image from "next/image";
import logo from "../../public/images/logo.png";
import howItWorksIcon01 from "../../public/icons/howItWorksIcon01.png";
import howItWorksIcon02 from "../../public/icons/howItWorksIcon02.png";
import howItWorksIcon03 from "../../public/icons/howItWorksIcon03.png";
import howItWorksIcon04 from "../../public/icons/howItWorksIcon04.png";
import howItWorksIcon05 from "../../public/icons/howItWorksIcon05.png";
import howItWorksIcon06 from "../../public/icons/howItWorksIcon06.png";
import howItWorksIcon07 from "../../public/icons/howItWorksIcon07.png";
import howItWorksIcon08 from "../../public/icons/howItWorksIcon08.png";
import Container from "./Container";
import ButtonPrimary from "./reusableComponents/Button/ButtonPrimary";
import ButtonOutline from "./reusableComponents/Button/ButtonOutline";
import ButtonPlay from "./reusableComponents/Button/ButtonPlay";

const HowItWorks = () => {
  return (
    <div className="bg-[#F3F7FB] py-24">
      <Container>
        <div className="bg-white p-6 rounded-2xl mt-28">
          <p className="text-green-800 font-normal text-xl">How It Works</p>
          <p className="w-80 text-gray-900 font-semibold text-[42px] leading-[60px] mt-4">
            Our Process for Investors and Businesses
          </p>
        </div>
        {/*  */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-2xl">
            <p className="text-gray-900 font-medium text-2xl">For Investors</p>
            <div className="flex justify-center mt-10">
              <button className="border border-gray-200 px-3 py-6 rounded-2xl">
                <Image src={logo} alt="logo" width={40} height={40}></Image>
              </button>
            </div>
            <ul className="mt-8">
              {/* 01 */}
              <li className="mt-6 flex items-center gap-3 p-4 border border-gray-200 rounded-2xl">
                <div className="bg-green-50 p-3 rounded-lg">
                  <Image
                    src={howItWorksIcon01}
                    alt="howItWorksIcon01"
                    width={40}
                    height={40}
                  ></Image>
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-lg">
                    Explore Opportunities
                  </p>
                  <p className="text-gray-600 text-sm font-normal">
                    Browse verified businesses seeking investment.
                  </p>
                </div>
              </li>
              {/* 02 */}
              <li className="mt-6 flex items-center gap-3 p-4 border border-gray-200 rounded-2xl">
                <div className="bg-green-50 p-3 rounded-lg">
                  <Image
                    src={howItWorksIcon02}
                    alt="howItWorksIcon02"
                    width={40}
                    height={40}
                  ></Image>
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-lg">Invest</p>
                  <p className="text-gray-600 text-sm font-normal">
                    Choose and invest in a business that fits your goals.
                  </p>
                </div>
              </li>
              {/* 03 */}
              <li className="mt-6 flex items-center gap-3 p-4 border border-gray-200 rounded-2xl">
                <div className="bg-green-50 p-3 rounded-lg">
                  <Image
                    src={howItWorksIcon03}
                    alt="howItWorksIcon03"
                    width={40}
                    height={40}
                  ></Image>
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-lg">
                    Track Progress
                  </p>
                  <p className="text-gray-600 text-sm font-normal">
                    Monitor your investment’s performance on our platform.
                  </p>
                </div>
              </li>
              {/* 04 */}
              <li className="mt-6 flex items-center gap-3 p-4 border border-gray-200 rounded-2xl">
                <div className="bg-green-50 p-3 rounded-lg">
                  <Image
                    src={howItWorksIcon04}
                    alt="howItWorksIcon04"
                    width={40}
                    height={40}
                  ></Image>
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-lg">
                    Receive Returns
                  </p>
                  <p className="text-gray-600 text-sm font-normal">
                    Get monthly repayments and profits directly.
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex justify-end gap-8 mt-6">
              <ButtonPrimary>Start Investing</ButtonPrimary>
              <ButtonPlay>Tutorial</ButtonPlay>
            </div>
          </div>
          {/* right part */}
          <div className="bg-white p-6 rounded-2xl">
            <p className="text-gray-900 font-medium text-2xl">For Businesses</p>
            <div className="flex justify-center mt-10">
              <button className="border border-gray-200 px-3 py-6 rounded-2xl">
                <Image src={logo} alt="logo" width={40} height={40}></Image>
              </button>
            </div>
            <ul className="mt-8">
              {/* 01 */}
              <li className="mt-6 flex items-center gap-3 p-4 border border-gray-200 rounded-2xl">
                <div className="bg-green-50 p-3 rounded-lg">
                  <Image
                    src={howItWorksIcon04}
                    alt="howItWorksIcon04"
                    width={40}
                    height={40}
                  ></Image>
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-lg">
                    Apply Online
                  </p>
                  <p className="text-gray-600 text-sm font-normal">
                    Submit your financing application online.
                  </p>
                </div>
              </li>
              {/* 02 */}
              <li className="mt-6 flex items-center gap-3 p-4 border border-gray-200 rounded-2xl">
                <div className="bg-green-50 p-3 rounded-lg">
                  <Image
                    src={howItWorksIcon06}
                    alt="howItWorksIcon06"
                    width={40}
                    height={40}
                  ></Image>
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-lg">
                    Get Verified
                  </p>
                  <p className="text-gray-600 text-sm font-normal">
                    Our team reviews and approves your application.Choose and
                    invest in a business that fits your goals.
                  </p>
                </div>
              </li>
              {/* 03 */}
              <li className="mt-6 flex items-center gap-3 p-4 border border-gray-200 rounded-2xl">
                <div className="bg-green-50 p-3 rounded-lg">
                  <Image
                    src={howItWorksIcon07}
                    alt="howItWorksIcon07"
                    width={40}
                    height={40}
                  ></Image>
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-lg">
                    Listed for Funding
                  </p>
                  <p className="text-gray-600 text-sm font-normal">
                    Approved businesses are listed for investors.
                  </p>
                </div>
              </li>
              {/* 04 */}
              <li className="mt-6 flex items-center gap-3 p-4 border border-gray-200 rounded-2xl">
                <div className="bg-green-50 p-3 rounded-lg">
                  <Image
                    src={howItWorksIcon08}
                    alt="howItWorksIcon08"
                    width={40}
                    height={40}
                  ></Image>
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-lg">
                    Receive Funding
                  </p>
                  <p className="text-gray-600 text-sm font-normal">
                    Get the capital needed to grow your business.
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex justify-end gap-8 mt-6">
              <ButtonPrimary>Get Funded</ButtonPrimary>
              <ButtonPlay>Tutorial</ButtonPlay>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
