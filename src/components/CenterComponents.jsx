import {
  EllipsisVerticalIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
const CenterComponents = ({
  title,
  tagline,
  description,
  descTag,
  img1,
  img2,
  img3,
  img4,
}) => {
  return (
    <div className="shadow-lg bg-white w-[550px] mt-6 p-6 rounded-lg">
      <div className="flex items-center">
        <div className="flex-1 flex">
          <img src={img1} alt="" />
          <div className="flex flex-col pl-3">
            <span className="text-xl">{title}</span>
            <span className="text-sm text-gray-400">{tagline}</span>
          </div>
        </div>
        <EllipsisVerticalIcon className="h-6" />
      </div>
      <p className="py-3 text-gray-700">
        {description} <span className="text-[#FF5E8A]">{descTag} </span>
      </p>
      <img className="w-full pb-6 border-b" src={img2} alt="" />
      <div className="flex h-6 gap-3 mt-4">
        <span className="flex gap-1">
          <HeartIcon /> 9.8k
        </span>
        <span className="flex gap-1">
          <ChatBubbleOvalLeftIcon /> 8.6k
        </span>
        <span className="flex gap-1">
          <ShareIcon /> 7.2k
        </span>
      </div>
    </div>
  );
};
export default CenterComponents;
