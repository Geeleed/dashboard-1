import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import BtnTab from "./BtnTab";

const data = {
  today: {
    labels: ["8AM", "9AM", "10AM", "11AM", "12AM"],
    datasets: [
      {
        data: [40, 50, 29, 59, 23, 38],
        backgroundColor: "#fb3586",
      },
      {
        data: [23, 38, 30, 20, 68, 10],
        backgroundColor: "#5840ff",
      },
    ],
  },
  week: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [20, 30, 20, 40, 50, 68, 38, 22],
        backgroundColor: "#fb3586",
      },
      {
        data: [23, 59, 59, 23, 29, 38, 10, 30],
        backgroundColor: "#5840ff",
      },
    ],
  },
  month: {
    labels: ["1-5", "6-10", "11-15", "16-20", "21-25", "26-30"],
    datasets: [
      {
        data: [20, 40, 50, 30, 20, 68, 38],
        backgroundColor: "#fb3586",
      },
      {
        data: [23, 38, 59, 29, 59, 23, 13],
        backgroundColor: "#5840ff",
      },
    ],
  },
};

export default function SalesGrowth() {
  const [sw, setSw] = useState(1);
  const [chartData, setChartData] = useState(data["today"]);
  useEffect(() => {
    sw === 1 && setChartData(data["today"]);
    sw === 2 && setChartData(data["week"]);
    sw === 3 && setChartData(data["month"]);
  }, [sw]);
  return (
    <aside className=" w-full p-6 rounded-xl bg-gray-50">
      <div className=" flex justify-between w-full">
        <span className=" font-bold">Sales Growth</span>
        <BtnTab setSw={setSw} />
      </div>
      <section className=" h-[5rem] flex justify-center gap-5">
        <span className=" flex gap-2 items-center">
          <div className=" size-[0.5rem] rounded-full bg-[#fb3586]"></div>
          <div>Orders</div>
          <strong className=" text-[1.5rem]">$8550</strong>
        </span>
        <span className=" flex gap-2 items-center">
          <div className=" size-[0.5rem] rounded-full bg-[#5840ff]"></div>
          <div>Sales</div>
          <strong className=" text-[1.5rem]">$550</strong>
        </span>
      </section>
      <div className=" flex justify-center items-center">
        <BarChart data={chartData} />
      </div>
    </aside>
  );
}
