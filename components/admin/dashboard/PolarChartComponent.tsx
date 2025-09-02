import React from "react";
import { PolarArea } from "react-chartjs-2";

type PolarChartComponentProps = {
  totalTickets: number;
  totalRefund: number;
  totalTransfer: number;
  totalProfit: number;
};

const PolarChartComponent: React.FC<PolarChartComponentProps> = ({
  totalTickets,
  totalRefund,
  totalTransfer,
  totalProfit,
}) => {
  const data = {
    labels: ["Total Tickets", "Total Refund", "Total Transfer", "Total Profit"],
    datasets: [
      {
        label: "My First Dataset",
        data: [totalTickets, totalRefund, totalTransfer, totalProfit],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },
    },
    scales: {
      r: {
        ticks: {
          display: true,
        },
        pointLabels: {
          display: true,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="justify-center ml-52 pt-44">
      <div className="grid text-center">
        <h1 className="font-extrabold text-3xl text-blue-700">Gross data</h1>
      </div>

      <div>
        <PolarArea width={500} height={500} data={data} options={options} />
      </div>
    </div>
  );
};

export default PolarChartComponent;
