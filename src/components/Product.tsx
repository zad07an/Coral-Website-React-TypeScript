import React, { memo } from "react";
import { ICartItems, IProducts } from "../utilities/interfaces/interfaces";
import { addToCart, removeFromCart } from "../redux/features/cart-slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { SlBasket } from "react-icons/all";

const Product: React.FC<IProducts> = (item) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);

  const handleAddToCart = () => {
    const itemIndex: number = cartItems.findIndex(
      (itemIdx: ICartItems) => itemIdx?.id === item?.id
    );
    itemIndex >= 0
      ? dispatch(removeFromCart(item?.id))
      : dispatch(addToCart(item));
  };

  const productIsAddedToCart = cartItems?.find(
    (productItem) => productItem?.id === item?.id
  );

  return (
    <div className=" bg-gray-100 shadow-sm relative shadow-gray-400 flex items-center flex-col gap-4 pb-4">
      {item?.hot ? (
        <div className=" uppercase absolute py-1 px-6 top-5 left-0 bg-red-500">
          <p className=" uppercase text-white">Hot</p>
        </div>
      ) : item?.sale ? (
        <div className=" uppercase absolute py-1 px-6 top-5 left-0 bg-[#1E2832]">
          <p className=" uppercase text-white">Sale</p>
        </div>
      ) : null}
      <div className=" w-full h-[300px] overflow-hidden">
        <img src={item?.image} alt="" className=" w-full object-cover" />
      </div>
      <div className=" w-full px-3">
        <p>{item?.title}</p>
      </div>
      <div className=" w-full flex justify-between px-3">
        <div>
          <p>
            {item?.category &&
              item?.category[0]?.toUpperCase() + item?.category?.slice(1)}
          </p>
        </div>
        <div>
          <p className=" flex items-center gap-4">
            {item?.oldPrice ? (
              <>
                <span className=" line-through text-red-500">
                  {" "}
                  ${item?.oldPrice}
                </span>
                <> ${item?.price}</>
              </>
            ) : (
              <> ${item?.price}</>
            )}
          </p>
        </div>
      </div>
      <div>
        <button
          className=" flex items-center gap-3 px-6 py-2 transition-all bg-[#1E2832] rounded-sm text-white"
          onClick={handleAddToCart}
          style={{
            background: productIsAddedToCart ? "#34B133" : "#1E2832",
          }}
        >
          <span className=" text-white text-xl">
            <SlBasket />
          </span>
          {productIsAddedToCart ? "Added to cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default memo(
  Product,
  (prevProps: Readonly<IProducts>, nextProps: Readonly<IProducts>) => {
    if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
      return true;
    }
    return false;
  }
);
