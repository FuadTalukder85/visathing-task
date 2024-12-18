import Image from "next/image";
import footerIcon01 from "../../../public/icons/footerIcon01.png";
import footerIcon02 from "../../../public/icons/footerIcon02.png";
import footerIcon03 from "../../../public/icons/footerIcon03.png";
import footerIcon04 from "../../../public/icons/footerIcon04.png";
import location from "../../../public/icons/location.png";
import apple from "../../../public/images/apple.png";
import android from "../../../public/images/android.png";
import scan from "../../../public/images/scan.png";

const BottomFooter = () => {
  return (
    <div className="grid grid-cols-3 mt-10 justify-between py-24">
      <div className="">
        <p className="text-black font-medium text-[16px]">Contact Us</p>
        <ul>
          <li className="text-gray-600 font-medium text-[14px] mt-3">
            Email: <span className="text-primary">contactus@rsin.com</span>
          </li>
          <li className="text-gray-600 font-medium text-[14px] mt-3">
            Phone: <span className="text-primary">8001000265</span>
          </li>
          <li className="mt-5 flex gap-6">
            <Image src={footerIcon01} alt="footerIcon01"></Image>
            <Image src={footerIcon02} alt="footerIcon02"></Image>
            <Image src={footerIcon03} alt="footerIcon03"></Image>
            <Image src={footerIcon04} alt="footerIcon04"></Image>
          </li>
        </ul>
      </div>
      <div className="">
        <p className="text-black font-medium text-[16px]">Office Address</p>
        <ul>
          <li className="w-[380px] text-gray-600 font-medium text-[14px] mt-3">
            Address: 1st Floor, Homestead Gulshan Link Tower, DCC TA-99,
            Gulshan-Badda link Road, Gulshan-1, Dhaka-1212
          </li>
          <li className="flex items-center gap-3 text-gray-600 font-medium text-[14px] mt-3">
            <Image src={location} alt="location"></Image>{" "}
            <span className="text-primary">View Location</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-end gap-6">
        <div>
          <div>
            <Image src={apple} alt="apple" width={100} height={100}></Image>
          </div>
          <div className="mt-7">
            <Image src={android} alt="android" width={100} height={100}></Image>
          </div>
          <p className="mt-3 text-xs font-light">Get the app now</p>
        </div>
        <div className="">
          <Image src={scan} alt="scan"></Image>
          <p className="mt-3 text-xs font-light">Scan to downlaod</p>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
