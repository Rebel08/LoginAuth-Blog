import CenterComponents from "./CenterComponents";
import img1 from "../../src/assets/1.png";
import img2 from "../../src/assets/2.png";
import img3 from "../../src/assets/3.png";
import img4 from "../../src/assets/4.png";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const Center = () => {
  const describe =
    "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

  return (
    <>
      <div className="flex flex-col">
        <div className="shadow-lg text-2xl w-[550px] h-20 rounded-lg flex items-center">
          <div className="flex flex-1 items-center gap-1 text-base px-4">
            <MagnifyingGlassIcon className="h-4 w-4" />
            <input
              className="flex flex-1 outline-none"
              type="text"
              placeholder="search here..."
            />
          </div>
          <div className="flex items-center gap-1 text-base pr-4 cursor-pointer">
            <AdjustmentsHorizontalIcon className="w-4 h-4" />
            Filters
          </div>
        </div>
        <CenterComponents
          img1={img1}
          img2={img2}
          title="Lara Leones"
          tagline="@thewallart"
          description={describe}
          descTag="Read More"
        />
        <CenterComponents
          img1={img3}
          img2={img4}
          title="Thomas J."
          tagline="@thecustomcreater"
          description={describe}
          descTag="Read More"
        />
      </div>
    </>
  );
};
export default Center;
