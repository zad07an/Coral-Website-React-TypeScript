import React from "react";
import { brandsDB } from "../../database/brands-db";

const BrandsBar: React.FC = () => {
  return (
    <div className=" w-full h-[120px] px-[120px] flex items-center justify-between">
      {brandsDB?.map((item, index: number) => {
        return (
          <div key={index} className=" w-full">
            <img src={item?.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default BrandsBar;
