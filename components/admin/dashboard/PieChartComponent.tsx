import React from "react";
import { ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";

type PieChartProps = {
  totalEvents: number;
  totalOrganizers: number;
  totalGuests: number;
};

const PieChart: React.FC<PieChartProps> = ({
  totalEvents,
  totalOrganizers,
  totalGuests,
}) => {
  const data = {
    labels: ["Total Events", "Total Organizers", "Total Guests"],
    datasets: [
      {
        label: "My First Dataset",
        data: [totalEvents, totalOrganizers, totalGuests],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          font: {
            size: 14,
          },
          color: "black",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="justify-center ml-52 pt-44">
      <div className="grid text-center pb-12">
        <h1 className="font-extrabold text-2xl text-blue-700">
          Total Entity Stats
        </h1>
      </div>
      <div>
        <Pie width={400} height={400} data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
