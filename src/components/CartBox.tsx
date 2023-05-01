import {
  cartItemDecrement,
  cartItemIncrement,
  removeFromCart,
} from "../redux/features/cart-slice";
import { ICartItems } from "../utilities/interfaces/interfaces";
import { useAppDispatch } from "../redux/hooks/hooks";

const CartBox: React.FC<ICartItems> = (item) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item?.id));
  };
  const handleCartItemIncrement = () => {
    dispatch(cartItemIncrement(item?.id));
  };
  const handleCartItemDecrement = () => {
    if (item?.quantity <= 1) {
      dispatch(removeFromCart(item?.id));
      return;
    } else {
      dispatch(cartItemDecrement(item?.id));
    }
  };

  return (
    <div className=" w-full h-[160px] grid grid-cols-5 place-items-center border-b border-gray-300 last:border-none">
      <div className=" w-[120px] h-[120px] flex items-center overflow-hidden">
        <img
          src={item?.image}
          className=" w-full h-full object-cover object-top"
          alt=""
        />
      </div>
      <div className=" flex flex-col gap-1">
        <p className=" text-xl">{item?.title}</p>
        <p className=" text-sm text-gray-500">{item?.description}</p>
      </div>
      <div className=" flex items-center gap-3">
        <button
          className=" w-[40px] h-[40px] text-lg bg-[#1E2832] text-white rounded-sm"
          onClick={handleCartItemDecrement}
        >
          -
        </button>
        <span className=" text-lg">{item?.quantity}</span>
        <button
          className=" w-[40px] h-[40px] text-lg bg-[#1E2832] text-white rounded-sm"
          onClick={handleCartItemIncrement}
        >
          +
        </button>
      </div>
      <div>
        <p className=" font-medium text-lg">${item?.price}</p>
      </div>
      <div>
        <button
          className=" px-10 py-1 bg-red-500 text-white rounded-sm"
          onClick={handleRemoveFromCart}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartBox;
