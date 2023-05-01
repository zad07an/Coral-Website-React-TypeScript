import UseScrollToTop from "../hooks/UseScrollToTop";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <UseScrollToTop />
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
