"use client"

import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Tooltip)

const data = {
  labels: ["Jun 12", "Jun 18", "Jun 24", "Jun 30", "July 6"],
  datasets: [
    {
      label: "Ratings",
      data: [3, 4, 3, 6, 2],
      backgroundColor: "#84bc00",
      borderColor: "#9bdb08",
      pointBorderColor: "#84bc00",
      borderWidth: 1,
      fill: true,
      tension: 0,
    },
  ],
}

const options = {
  plugins: {
    legend: true,
  },
  scales: {
    y: {
      min: 1,
      max: 7,
    },
  },
}

export default function LineChartComponent() {
  return (
    <Line
      data={data}
      // @ts-ignore
      options={options}
    ></Line>
  )
}
