import React, { useEffect } from "react";

const useIsVisible = (ref) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) =>
        //   {
        setIntersecting(entry.isIntersecting)
      //   },
      //   {
      //     threshold: 0.5,
      //   }
    );

    const element = ref.current;
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

export default useIsVisible;
