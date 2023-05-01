import React from "react";
import logo from "../../public/logo/logo.png";
import facebook from "../../public/social-icons/icon.svg";
import twitter from "../../public/social-icons/icon-1.svg";
import linkedin from "../../public/social-icons/icon-2.svg";
import instagram from "../../public/social-icons/icon-3.svg";
import { footerAboutDB, footerCatalogDB } from "../database/footer-links";
import payment from "../../public/payment/icons_payment 1.png";
import { Link } from "react-router-dom";
import arrow from "../../public/icons/arrow.svg";

const Footer: React.FC = () => {
  const handleScrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className=" w-full">
      <div className=" w-full grid grid-cols-4 gap-8 px-[120px] py-[60px]">
        <div className=" flex flex-col gap-8">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <ul className=" flex items-center gap-4">
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={linkedin} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
          </ul>
        </div>
        <div className=" flex flex-col gap-4">
          <div>
            <p className=" text-xl font-medium uppercase">Catalog</p>
          </div>
          <ul className=" flex flex-col gap-2">
            {footerCatalogDB?.map((item, index: number) => {
              return (
                <li key={index}>
                  <Link to={item?.path}>{item?.pathname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" flex flex-col gap-4">
          <div>
            <p className=" text-xl font-medium uppercase">About Us</p>
          </div>
          <ul className=" flex flex-col gap-2">
            {footerAboutDB?.map((item, index: number) => {
              return (
                <li key={index}>
                  <Link to={item?.path}>{item?.pathname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" flex flex-col gap-4">
          <div>
            <p className=" text-xl font-medium uppercase">Customer Services</p>
          </div>
          <ul className=" flex flex-col gap-2">
            {footerAboutDB?.map((item, index: number) => {
              return (
                <li key={index}>
                  <Link to={item?.path}>{item?.pathname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className=" bg-[#1E2832] py-4 w-full px-[120px] grid grid-cols-3">
        <div className=" flex items-center">
          <p className=" text-white">&copy; 2023 Coral. inc</p>
        </div>
        <div className=" flex items-center justify-center">
          <img src={payment} alt="" />
        </div>
        <div className=" flex items-center justify-end">
          <p
            className=" cursor-pointer capitalize text-white flex items-center gap-2"
            onClick={handleScrollToTop}
          >
            Scroll to top <img src={arrow} alt="" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
