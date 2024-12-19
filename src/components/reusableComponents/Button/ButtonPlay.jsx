import Image from "next/image";
import playBtn from "../../../../public/icons/playBtn.png";
const ButtonPlay = ({ children }) => {
  return (
    <button className="flex items-center gap-3 py-4 px-8 border border-primary font-medium text-[16px] rounded-[42px] text-black hover:bg-gray-100 transition-all duration-500">
      <Image src={playBtn} alt="playBtn"></Image> {children}
    </button>
  );
};

export default ButtonPlay;
