import React from "react";
import zaraLogo from "../../../public/zara/1024px-Zara_Logo 1.png";
import zaraImage from "../../../public/zara/andrey-zvyagintsev-EQj1ZMpq_VM-unsplash 1.png";
import zaraLogo2 from "../../../public/zara/1024px-Zara_Logo 2.png";

const Zara: React.FC = () => {
  return (
    <div
      className=" w-full h-[100vh] flex items-center justify-end object-cover object-right pr-[340px] relative"
      style={{ background: `url("${zaraImage}") no-repeat`}}
    >
      <div className=" w-[400px] flex flex-col gap-10">
        <div className=" absolute top-5 right-0">
          <img src={zaraLogo} alt="" />
        </div>
        <div>
          <img src={zaraLogo2} alt="" />
        </div>
        <div>
          <p className=" text-white ">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
        </div>
        <div>
          <button className=" capitalize text-black text-lg bg-white py-2 px-10">See collection</button>
        </div>
      </div>
    </div>
  );
};

export default Zara;
