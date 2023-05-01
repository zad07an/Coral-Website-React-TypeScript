import React, { useState, useMemo } from "react";
import { TypeFilterCat } from "../../utilities/types/types";
import { BiFilterAlt } from "react-icons/all";
import Product from "../Product";
import { IProducts } from "../../utilities/interfaces/interfaces";
import MainContainer from "../ui/MainContainer";
import GridContainer from "../ui/GridContainer";
import { useAppSelector } from "../../redux/hooks/hooks";

const BestSellers: React.FC = () => {
  const [cat, setCat] = useState<string | null>();

  const { productItems } = useAppSelector((state) => state.products);

  const uniqueCats: string[] = [
    ...new Set(productItems?.slice(8, 16)?.map((item: IProducts) => item?.category)),
  ];

  const memoizedProduct: JSX.Element[] = useMemo(() => {
    return productItems
    ?.slice(8, 16)
    ?.filter((item: IProducts) => {
      return cat && item?.category !== cat
        ? item?.category === cat
        : item;
    })
    ?.map((item: IProducts) => {
      return <Product key={item?.id} {...item} />;
    })
  }, [productItems])

  const handleFilterCat: TypeFilterCat = (cat) =>
    cat ? setCat(cat) : setCat(null);

  return (
    <MainContainer title="Best sellers">
      <div className=" w-full flex flex-col items-center gap-4">
        <div className=" w-full flex justify-between">
          <ul className=" flex items-center gap-4">
            <li className=" cursor-pointer">
              <p onClick={() => handleFilterCat(null)}>All</p>
            </li>
            {uniqueCats?.map((cat: string, index: number) => {
              return (
                <li key={index} className=" cursor-pointer">
                  <p onClick={() => handleFilterCat(cat)}>
                    {cat[0].toUpperCase() + cat.slice(1)}
                  </p>
                </li>
              );
            })}
          </ul>
          <div>
            <button className=" flex items-center gap-2 py-1 px-10 text-white bg-[#1E2832]">
              <span className=" text-lg">
                <BiFilterAlt />
              </span>
              Filter
            </button>
          </div>
        </div>
        <GridContainer>
          {memoizedProduct}
        </GridContainer>
      </div>
    </MainContainer>
  );
};

export default BestSellers;
