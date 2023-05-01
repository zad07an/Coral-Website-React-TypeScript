import React from "react";
import { useSelector } from "react-redux";
import CartBox from "../components/CartBox";
import { ICartItems } from "../utilities/interfaces/interfaces";
import { RootState } from "../redux/store/store";

const Basket: React.FC = () => {
  const { cartItems, cartAmount, cartTotal } = useSelector((state: RootState) => state.cart);

  if (cartAmount < 1) {
    return (
      <div className=" w-full h-screen flex items-center justify-center flex-col gap-4">
        <p className=" text-3xl font-medium">My Basket</p>
        <p>My Basket is Empty</p>
      </div>
    );
  }
  return (
    <section className=" w-full h-screen px-[120px] py-10 grid grid-cols-[3fr_1fr]">
      <div className=" h-full flex flex-col gap-10">
        <div>
          <p className=" text-3xl font-medium">My Basket</p>
        </div>
        <div className=" w-full max-h-[80vh] overflow-y-auto">
          {cartItems?.map((item: ICartItems) => {
            return <CartBox key={item?.id} {...item} />;
          })}
        </div>
      </div>
      <div className=" flex flex-col gap-8 px-6">
        <div>
          <p className=" text-3xl font-medium">Order Details</p>
        </div>
        <div className=" rounded-md w-full p-4 bg-[#1E2832] flex flex-col gap-4">
          <div>
            <p className=" text-xl text-white">Shipping</p>
          </div>
          <div className=" w-full">
            <select className=" w-full h-8 outline-0 border-2 border-gray-400 rounded-md cursor-pointer transition-all focus:border-red-500">
              <optgroup>
                <option value="" className=" h-10 bg-red-400 text-white">
                  Option 1
                </option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div className=" rounded-md w-full p-4 bg-[#1E2832] flex flex-col gap-4">
          <div>
            <p className=" text-xl text-white">Promo Code</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter promo code"
              className=" w-full h-8 outline-0 border-2 border-gray-400 rounded-md px-2 transition-all focus:border-red-500"
            />
          </div>
        </div>
        <div className=" border-t border-gray-300 py-4 flex justify-center">
          <div className=" text-center flex flex-col items-center gap-2">
            <p className=" text-xl text-gray-600">Total Cost</p>
            <p className=" text-xl text-gray-600 font-medium">${cartTotal?.toLocaleString()}</p>
          </div>
        </div>
        <div className=" flex justify-center">
          <button className=" py-2 w-full bg-[#1E2832] font-medium uppercase rounded-sm transition-all hover:bg-gray-600 text-white">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Basket;
