import React from "react";
import BtnTab from "./BtnTab";

interface Props {
  children: React.ReactNode;
}

export default function TopBar({ children }: Props) {
  return (
    <div className=" flex justify-between w-full">
      <span className=" font-bold">{children}</span>
      <BtnTab />
    </div>
  );
}
