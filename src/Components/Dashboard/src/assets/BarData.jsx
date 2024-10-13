// ChartData.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartData = ({ moods }) => {

  
  const dataBar = (arr) => {
    return {
      labels: ['Happy', 'Sad', 'Anxious', 'Angry'],
      datasets: [
        {
          label: 'Quantity',
          data: arr,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Emotional Analysis</h3>
      <Bar data={dataBar(moods)} />
    </div>
  );
};

export default ChartData;
