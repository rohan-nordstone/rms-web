"use client"

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"
import { Pie } from "react-chartjs-2"

const data = {
  datasets: [
    {
      data: [30, 10, 25, 35],
      backgroundColor: ["#9bdb08", "#89c400", "#2b6ca2", "#194d79"],
      hoverOffset: 4,
      datalabels: {
        color: "#ffffff",
      },
    },
  ],
}

const options = {
  font: {
    weight: "bold",
  },
}

ChartJS.register(ArcElement, Legend, Tooltip)

export default function PieChartComponent() {
  return (
    <div className="max-w-[376px]">
      <Pie
        // @ts-ignore
        plugins={[ChartDataLabels]}
        data={data}
        options={options}
      ></Pie>
    </div>
  )
}
