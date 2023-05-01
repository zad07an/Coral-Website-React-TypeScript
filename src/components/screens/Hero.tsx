import React from "react";
import image from "../../../public/hero/engin-akyurt-jaZoffxg1yc-unsplash 1.png";
import image1 from "../../../public/hero/Rectangle 124.png";
import { BsBag } from "react-icons/all";
import flower from "../../../public/hero/flower.png";

interface ISectionRef {
  onClick: () => void;
}

const Hero: React.FC<ISectionRef> = ({onClick}) => {
  return (
    <div className=" w-full h-[600px] px-[40px] lg-1024:px-[120px] relative grid grid-cols-2 place-items-center">
      <div className=" flex flex-col gap-10">
        <div className=" flex flex-col gap-4">
          <h1 className=" text-[74px] font-thin">Collections</h1>
          <p className=" capitalize text-[22px]">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
        </div>
        <div>
          <button className=" px-10 py-3 flex items-center gap-2 bg-[#1E2832] text-lg text-white" onClick={() => onClick()}>
            <span className=" text-white text-xl">
              <BsBag />
            </span>
            Shop Now
          </button>
        </div>
      </div>
      <div>
        <div
          className=" w-[374px] h-[492px] relative rounded-br-[120px]"
          style={{ background: `url('${image}') no-repeat center / cover` }}
        >
          <div className=" w-full absolute top-[40px] z-[-1] left-[30px]">
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
      <img src={flower} alt="" className=" absolute right-0 z-[-1]" />
    </div>
  );
};

export default Hero;
