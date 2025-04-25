import { useEffect, useMemo, useRef, useState } from "react";
interface Props {
  num: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UseMemo = ({ num }: Props) => {
  const [numberRef, setNumberRef] = useState(0);

  const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    return num * 2;
  };

  useEffect(() => {}, []);
  setTimeout(() => {
    setNumberRef(2);
  }, 4000);

  const memoizedValue = useMemo(
    () => expensiveCalculation(numberRef),
    [numberRef]
  );
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        backgroundColor: "lightblue",
      }}
    >
      <h1>useMemo (Alan)</h1>
      <h2>Result: {memoizedValue}</h2>
    </div>
  );
};

export default UseMemo;
