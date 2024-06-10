import { useEffect, useState } from "react";

export default function BtnTab({ setSw }: any) {
  const [select, setSelect] = useState(1);
  const btnCss = " rounded-md text-[0.9rem] px-2 py-1";
  const btnStyle = (sw: number) => ({
    color: select === sw ? "#fb3586" : "black",
    backgroundColor: select === sw ? "#fb358611" : "#00000000",
    transition: "all",
    transitionDuration: "100ms",
  });
  useEffect(() => {
    setSw(select);
  }, [select]);
  return (
    <div>
      <button
        onClick={() => setSelect(1)}
        style={btnStyle(1)}
        className={btnCss}
      >
        Today
      </button>
      <button
        onClick={() => setSelect(2)}
        style={btnStyle(2)}
        className={btnCss}
      >
        Week
      </button>
      <button
        onClick={() => setSelect(3)}
        style={btnStyle(3)}
        className={btnCss}
      >
        Month
      </button>
    </div>
  );
}
