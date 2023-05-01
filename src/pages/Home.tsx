import { FC, useRef } from "react";
import Hero from "../components/screens/Hero";
import BrandsBar from "../components/screens/BrandsBar";
import Explore from "../components/screens/Explore";
import Products from "../components/screens/Products";
import Zara from "../components/screens/Zara";
import BestSellers from "../components/screens/BestSellers";
import Contact from "../components/screens/Contact";

const Home: FC = () => {
  const productsSectionRef = useRef<HTMLDivElement>(null!);

  const handleScrollToSection = (): void => {
    window.scrollTo({
      top: productsSectionRef.current?.offsetTop - 60,
      behavior: "smooth",
    });
  };

  return (
    <div className=" flex flex-col items-center gap-[100px]">
      <Hero onClick={handleScrollToSection} />
      <BrandsBar />
      <Explore />
      <Products productsSectionRef={productsSectionRef} />
      <Zara />
      <BestSellers />
      <Contact />
    </div>
  );
};

export default Home;
