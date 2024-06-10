import React from "react";
import { Down, Up } from "../SVG";

interface Props {
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  icon?: React.JSX.Element;
  iconColor?: string;
  up?: string;
}

export default function SmallCard({
  text1,
  text2,
  text3,
  text4,
  icon,
  iconColor,
  up,
}: Props) {
  return (
    <div className=" rounded-xl bg-gray-50 p-8 w-full flex flex-col gap-3">
      <section className=" flex justify-between items-center">
        <aside>
          <h1 className=" font-bold text-black text-[1.5rem]">{text1}</h1>
          <p className=" text-[0.9rem] text-gray-800">{text2}</p>
        </aside>
        <aside
          style={{ backgroundColor: `${iconColor}22`, color: iconColor }}
          className=" rounded-xl flex justify-center items-center h-[3rem] aspect-square"
        >
          {icon}
        </aside>
      </section>
      <section className=" bg-gray-100 flex gap-2 rounded-xl p-3">
        <span
          style={{ color: `${up === "up" ? "green" : "red"}` }}
          className=" flex text-[0.9rem]"
        >
          <span>{up === "up" ? <Up /> : <Down />}</span>
          <span className=" font-bold">{text3}</span>
        </span>
        <span className=" text-gray-700 text-[0.9rem]">{text4}</span>
      </section>
    </div>
  );
}
