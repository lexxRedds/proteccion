import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Representación Gráfica de la Serie Generada',
      },
    },
  };

  const chartData = {
    labels: data.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Fibonacci',
        data: data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3
      }
    ]
  };

  return (
    <Line options={options} data={chartData} />
  );
};

export default Chart;