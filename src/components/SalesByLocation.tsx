import { useEffect, useState } from "react";
import BtnTab from "./BtnTab";
import SalesByLocationRow from "./SalesByLocationRow";

const data = {
  today: [
    {
      id: 1,
      topRegion: "United states",
      order: "90",
      revenue: "$536",
    },
    {
      id: 2,
      topRegion: "United kingdom",
      order: "70",
      revenue: "$573",
    },
    {
      id: 3,
      topRegion: "Canada",
      order: "75",
      revenue: "$457",
    },
    {
      id: 4,
      topRegion: "Japan",
      order: "30",
      revenue: "$524",
    },
    {
      id: 5,
      topRegion: "Bangladesh",
      order: "50",
      revenue: "$354",
    },
    {
      id: 6,
      topRegion: "India",
      order: "60",
      revenue: "$654",
    },
  ],
  week: [
    {
      id: 1,
      topRegion: "Canada",
      order: "90",
      revenue: "$536",
    },
    {
      id: 2,
      topRegion: "United kingdom",
      order: "70",
      revenue: "$573",
    },
    {
      id: 3,
      topRegion: "Canada",
      order: "75",
      revenue: "$457",
    },
    {
      id: 4,
      topRegion: "Japan",
      order: "40",
      revenue: "$524",
    },
    {
      id: 5,
      topRegion: "Japan",
      order: "50",
      revenue: "$454",
    },
    {
      id: 6,
      topRegion: "India",
      order: "60",
      revenue: "$654",
    },
  ],
  month: [
    {
      id: 1,
      topRegion: "Canada",
      order: "100",
      revenue: "$1536",
    },
    {
      id: 2,
      topRegion: "United kingdom",
      order: "90",
      revenue: "$950",
    },
    {
      id: 3,
      topRegion: "Japan",
      order: "175",
      revenue: "$457",
    },
    {
      id: 4,
      topRegion: "Japan",
      order: "420",
      revenue: "$524",
    },
    {
      id: 5,
      topRegion: "Japan",
      order: "500",
      revenue: "$454",
    },
    {
      id: 6,
      topRegion: "India",
      order: "300",
      revenue: "$954",
    },
  ],
};

export default function SalesByLocation() {
  const [sw, setSw] = useState(1);
  const [tableData, setTableData] = useState(data["today"]);
  useEffect(() => {
    sw === 1 && setTableData(data["today"]);
    sw === 2 && setTableData(data["week"]);
    sw === 3 && setTableData(data["month"]);
  }, [sw]);
  return (
    <aside className=" p-6 rounded-xl bg-gray-50 flex flex-col gap-5 overflow-y-auto">
      <div className=" flex justify-between w-full">
        <span className=" font-bold">Sales by Location</span>
        <BtnTab setSw={setSw} />
      </div>
      <section className=" border border-gray-200 rounded-lg">
        <section className=" grid grid-cols-3 bg-gray-100 p-3 rounded-lg">
          <div>TOP REGION</div>
          <div className=" text-end">ORDER</div>
          <div className=" text-end">REVENUE</div>
        </section>
        <section className=" p-3">
          {tableData.map(({ id, topRegion, order, revenue }) => (
            <SalesByLocationRow
              key={id}
              topRegion={topRegion}
              order={order}
              revenue={revenue}
            />
          ))}
        </section>
      </section>
    </aside>
  );
}
