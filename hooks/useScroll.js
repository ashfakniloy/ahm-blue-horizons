import { useEffect, useState } from "react";

function useScroll() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    changeBackground();

    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return { scroll };
}

export default useScroll;
