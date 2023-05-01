import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Basket from "./pages/Basket";
import { cartItemsTotalPrice } from "./redux/features/cart-slice";
import { RootState } from "./redux/store/store";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(cartItemsTotalPrice())
  }, [dispatch, cartItems]);

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
