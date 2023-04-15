import React, { useEffect } from "react";

const Countup = ({ number, begin }) => {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    let start = 0;

    if (start == number) return;

    const incrementTime = 10 / number;

    let timer = setInterval(() => {
      start++;
      setCount(start);
      if (start == number) clearInterval(timer);
    }, incrementTime);
  }, [number]);
  return <div>{count}</div>;
};

export default Countup;
