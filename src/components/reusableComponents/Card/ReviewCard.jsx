import Image from "next/image";
import greenStar from "../../../../public/icons/greenStar.png";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 pb-20">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[16px] font-semibold text-gray-900">
          {review.name}
        </h3>
        <span className="bg-green-200 text-gray-900 text-[10px] font-semibold px-2 py-1 rounded">
          {review.badge}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-2">{review.role}</p>
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-1">
          {[...Array(review.rating)].map((_, index) => (
            <span key={index} className="text-green-500 text-xl">
              <Image src={greenStar} alt="greenStar" width={20}></Image>
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-400">{review.time}</p>
      </div>
      <p className="text-gray-900 font-normal text-sm">{review.message}</p>
    </div>
  );
};

export default ReviewCard;
