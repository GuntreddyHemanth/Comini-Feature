import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReportChart = ({ focusedTime, distractedTime }) => {
  const data = {
    labels: ['Focused Time', 'Distracted Time'],
    datasets: [
      {
        label: 'Time (minutes)',
        data: [focusedTime, distractedTime],
        backgroundColor: ['green', 'red'],
      },
    ],
  };

  return <Bar data={data} />;
};

export default ReportChart;