import RightComponents from "./RightComponents";
import img5 from "../../src/assets/5.png";
import img6 from "../../src/assets/6.png";
import img7 from "../../src/assets/7.png";
import img8 from "../../src/assets/8.png";
import img9 from "../../src/assets/9.png";
import img10 from "../../src/assets/10.png";
import img11 from "../../src/assets/11.png";
import img12 from "../../src/assets/12.png";

const Right = () => {
  return (
    <div>
      <div className="bg-[#88C2BB] text-white text-base shadow-lg w-64 h-20 rounded-lg flex items-center justify-center">
        Become a Seller
      </div>
      <div className="mt-5 text-gray-700">
        <span className="font-medium text-black pr-5">Artists</span>
        Photographers
      </div>
      <RightComponents
        img={img5}
        img1={img6}
        title="Thomas Edward"
        tagline="@thewildwithyou"
      />
      <RightComponents
        img={img7}
        img1={img8}
        title="Chris Doe"
        tagline="@thewildwithyou"
      />
      <RightComponents
        img={img9}
        img1={img10}
        title="Emilie Jones"
        tagline="@thewildwithyou"
      />
      <RightComponents
        img={img11}
        img1={img12}
        title="Jessica Williams"
        tagline="@thewildwithyou"
      />
    </div>
  );
};
export default Right;
