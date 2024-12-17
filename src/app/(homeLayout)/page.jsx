import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import Review from "@/components/Review";
import TrustedLogo from "@/components/TrustedLogo";

const page = () => {
  return (
    <div className="">
      <TrustedLogo></TrustedLogo>
      <AboutUs></AboutUs>
      <Review></Review>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default page;
