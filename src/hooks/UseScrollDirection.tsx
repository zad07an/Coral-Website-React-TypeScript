import { useEffect, useState } from "react";
import { TypeUseScrollDirection } from "../utilities/types/types";

const useScrollDirection: TypeUseScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY: number = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY: number = window.pageYOffset;
      const direction: string = scrollY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export default useScrollDirection;