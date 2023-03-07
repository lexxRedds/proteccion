import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => index + 1),
    datasets: [
      {
        label: "My First Dataset",
        data: data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      }
    ]
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;