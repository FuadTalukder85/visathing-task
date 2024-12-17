import trustLogo01 from "../../public/images/trustLogo01.png";
import trustLogo02 from "../../public/images/trustLogo02.png";
import trustLogo03 from "../../public/images/trustLogo03.png";
import trustLogo04 from "../../public/images/trustLogo04.png";
import trustLogo05 from "../../public/images/trustLogo05.png";
import trustLogo06 from "../../public/images/trustLogo06.png";
import trustArrow from "../../public/icons/trustArrow.png";
import Container from "./Container";
import Image from "next/image";

const TrustedLogo = () => {
  return (
    <Container>
      <div className="flex gap-2 items-center mt-28">
        <p className="text-[16px] text-gray-400">Feature in Trusted by</p>{" "}
        <span>
          <Image src={trustArrow} alt="trustArrow"></Image>
        </span>
      </div>
      {/* slider */}
      <div className="flex justify-between items-center mt-8">
        <div>
          <Image src={trustLogo01} alt="trustLogo01"></Image>
        </div>
        <div>
          <Image src={trustLogo02} alt="trustLogo02"></Image>
        </div>
        <div>
          <Image src={trustLogo03} alt="trustLogo03"></Image>
        </div>
        <div>
          <Image src={trustLogo04} alt="trustLogo04"></Image>
        </div>
        <div>
          <Image src={trustLogo05} alt="trustLogo05"></Image>
        </div>
        <div>
          <Image src={trustLogo06} alt="trustLogo06"></Image>
        </div>
      </div>
    </Container>
  );
};

export default TrustedLogo;
