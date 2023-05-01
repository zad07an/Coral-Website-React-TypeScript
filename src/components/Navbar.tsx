import React, { useState } from "react";
import logo from "../../public/logo/logo.png";
import searchIcon from "../../public/icons/search.svg";
import { BiShoppingBag, BiUser } from "react-icons/all";
import { Link } from "react-router-dom";
import { NavlinksDB } from "../database/navlinks-db";
import useScrollDirection from "../hooks/UseScrollDirection";
import { Turn as Hamburger } from "hamburger-react";
import { useAppSelector } from "../redux/hooks/hooks";

const Navbar: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const { cartAmount } = useAppSelector((state) => state.cart);
  const handleOpenMenu = (): void => setMenuActive(!menuActive);

  const scrollDirection = useScrollDirection();

  return (
    <header
      className=" w-full sticky z-[999] px-[40px] transition-all bg-white shadow-sm shadow-gray-300 lg-1024:px-[120px] flex flex-col"
      style={{ top: scrollDirection === "down" ? "-130px" : "0px" }}
    >
      <div className=" w-full h-[70px] lg-1024:pt-4 grid grid-cols-2 lg-1024:grid-cols-3 lg-1024:border-b-2 border-gray-300">
        <div className=" hidden lg-1024:block">
          <div>
            <img src={searchIcon} alt="" />
          </div>
        </div>
        <div className=" flex items-center lg-1024:items-start lg-1024:justify-center">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className=" flex items-center lg-1024:items-start justify-end gap-4">
          <Link to="/account" className=" flex gap-2 items-center">
            <span className=" text-2xl text-gray-600">
              <BiUser />
            </span>
            <p>Account</p>
          </Link>
          <Link to="/basket" className=" flex gap-2 items-center">
            <div className=" text-2xl text-gray-600 relative">
              <BiShoppingBag />
              <div className=" w-4 h-4 rounded-full flex items-center justify-center bg-red-500 absolute top-[-5px] right-[-6px]">
                <p className=" text-white text-[12px]">{cartAmount}</p>
              </div>
            </div>
            <p>My Basket</p>
          </Link>
          <div className=" flex items-start lg-1024:hidden text-gray-700">
            <Hamburger
              size={30}
              onToggle={handleOpenMenu}
              toggled={menuActive}
            />
          </div>
        </div>
      </div>
      <nav
        className=" w-[300px] p-4 h-screen lg-1024:w-full lg-1024:h-[50px] lg-1024:flex flex-col absolute top-[70px] right-10 bg-white lg-1024:justify-center lg-1024:items-center lg-1024:flex-row lg-1024:static lg-1024:shadow-none transition-all duration-300 shadow-sm shadow-gray-400 z-[888]"
        style={{ right: menuActive ? "0" : "-100%" }}
      >
        <ul className=" w-full h-screen flex flex-col gap-2 bg-white lg-1024:h-full lg-1024:justify-between lg-1024:items-center lg-1024:flex-row">
          {NavlinksDB?.map((item, index: number) => {
            return (
              <li
                key={index}
                className=" lg-1024:h-max lg-1024:w-full h-[50px]"
              >
                <Link
                  to={item?.path}
                  className=" h-full w-full flex items-center"
                >
                  {item?.pathname}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
