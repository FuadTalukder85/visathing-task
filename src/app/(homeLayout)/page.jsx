import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
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
      <Gallery></Gallery>
      <FAQ></FAQ>
    </div>
  );
};

export default page;
