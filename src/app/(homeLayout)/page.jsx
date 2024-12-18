import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import Review from "@/components/Review";
import Solutions from "@/components/Solutions";
import TrustedLogo from "@/components/TrustedLogo";

const page = () => {
  return (
    <div className="">
      <TrustedLogo></TrustedLogo>
      <AboutUs></AboutUs>
      <Solutions></Solutions>
      <Review></Review>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default page;
