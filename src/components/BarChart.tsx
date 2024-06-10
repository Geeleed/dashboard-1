import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale);
export default function BarChart({ data }: any) {
  return (
    <div className=" h-[15rem] max-2xl:h-[14rem] max-sm:h-[11rem] max-lg:w-[28rem]">
      <Bar data={data} />
    </div>
  );
}
