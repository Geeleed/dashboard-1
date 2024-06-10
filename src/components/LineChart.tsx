import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  //   Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip
  //   Legend
);

export default function LineChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "App",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Orders",
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 40],
        fill: false,
        borderColor: "#fb3586",
        tension: 0.2,
      },
      {
        label: "Sales",
        data: [56, 40, 90, 60, 66, 44, 55, 70, 49, 60, 51, 67],
        fill: false,
        borderColor: "#5840ff",
        tension: 0.2,
      },
    ],
  };
  const options = {
    responsive: true,
    aspectRatio: 3.5,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: function (value: string | number) {
            return `${value}K`;
          },
          stepSize: 10,
        },
      },
    },
  };
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <Line data={data} options={options} className=" w-full h-full" />
    </div>
  );
}
