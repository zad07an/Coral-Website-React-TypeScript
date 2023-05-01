import React from "react";
import { productsDB } from "../../database/products-db";

const Contact: React.FC = () => {
  return (
    <div className=" bg-gray-100 w-full px-[120px] py-10 mb-[100px]">
      <div className=" w-full flex items-center flex-col gap-10">
        <div>
          <p className=" text-4xl capitalize font-medium">
            Follow products and discounts on Instagram
          </p>
        </div>
        <div className=" grid grid-cols-6 gap-4">
          {productsDB?.slice(0, 6)?.map((item) => {
            return (
              <div key={item?.id} className=" max-h-[180px] overflow-hidden">
                <img src={item?.image} alt="" className=" w-full" />
              </div>
            );
          })}
        </div>
        <div className=" w-max flex items-center flex-col gap-10">
          <div>
            <p className=" text-4xl capitalize font-medium">
              Or subscribe to the newsletter
            </p>
          </div>
          <form className=" w-full flex justify-between items-center gap-2">
            <div className=" w-[80%] felx items-center justify-center h-[40px] ">
              <input type="text" className=" w-full h-full outline-0 border-b-2 border-black bg-transparent px-4 transition-all focus:border-red-500" placeholder="Email address..." />
            </div>
            <div className=" w-[20%] felx items-center justify-center border-b-2 border-black h-[40px]">
              <button className=" uppercase w-full h-full transition-all hover:bg-[#1E2832] hover:text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
