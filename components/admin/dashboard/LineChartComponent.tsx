import { ChartOptions } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

const LineChartComponent = () => {
  const data = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        font: {
          size: 14,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Day of the Week',
        font: {
          size: 14,
        },
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Value',
        font: {
          size: 14,
        },
      },
    },
  },
};


  return (
    <div className="grid justify-center">
      <div className="grid text-center mb-6">
        <h1 className="font-extrabold text-4xl text-orange-700 py-12">
          Line chart
        </h1>
      </div>

      <div className="w-[50rem] h-[40rem] flex justify-center">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChartComponent;
