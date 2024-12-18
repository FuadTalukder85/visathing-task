import Image from "next/image";
import galleyImg01 from "../../public/images/galleyImg01.png";
import galleyImg02 from "../../public/images/galleyImg02.png";
import galleyImg03 from "../../public/images/galleyImg03.png";
import galleyImg04 from "../../public/images/galleyImg04.png";
import Container from "./Container";

const Gallery = () => {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-6">
        <div>
          <Image
            src={galleyImg01}
            alt="galleyImg01"
            width={350}
            height={350}
          ></Image>
        </div>
        <div className="p-6 relative">
          <p className="w-28 text-gray-600 font-normal text-[16px]">
            New investors last month
          </p>
          <h1 className="absolute bottom-0 text-[80px] font-medium">3,964</h1>
        </div>
        <div>
          <Image
            src={galleyImg02}
            alt="galleyImg02"
            width={350}
            height={350}
          ></Image>
        </div>
        <div className="p-6 relative bg-green-300 rounded-2xl">
          <p className="w-40 text-gray-600 font-normal text-[16px]">
            Unique investments last month
          </p>
          <h1 className="absolute bottom-0 text-[80px] font-medium">8,457</h1>
        </div>
        <div className="p-6 relative bg-green-300 rounded-2xl">
          <p className="w-28 text-gray-600 font-normal text-[16px]">
            Total invested last month
          </p>
          <h1 className="absolute bottom-0 text-[80px] font-medium">$7.5m</h1>
        </div>

        <div>
          <Image
            src={galleyImg03}
            alt="galleyImg03"
            width={350}
            height={350}
          ></Image>
        </div>
        <div className="p-6 relative">
          <p className="w-28 text-gray-600 font-normal text-[16px]">
            Site visitors last month
          </p>
          <h1 className="absolute bottom-0 text-[80px] font-medium">308k</h1>
        </div>
        <div>
          <Image
            src={galleyImg04}
            alt="galleyImg04"
            width={350}
            height={350}
          ></Image>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
