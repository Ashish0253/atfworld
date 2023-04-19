import { useEffect, useState } from "react";

export default function useScrollPosition(setIsSticky) {
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    // const position = window.pageYOffset;
    setPosition(window.pageYOffset);
    if (window.pageYOffset > 150) {
      //   console.log("ho gya");
      setIsSticky(true);
    } else {
      //   console.log("nhi hua");
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // if (scrollPosition == 0) {
    //   console.log(scrollPosition);

    //   setIsSticky(true);
    // } else {
    //   console.log(scrollPosition);

    //   setIsSticky(false);
    // }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return position;
}
