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
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import * as http from '@/utils/http';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        color: '#777777',
        borderColor: 'grey',
        tickColor: 'grey',
        lineWidth: 2,
      },
      ticks: {
        color: 'white',
        tickLength: 12,
      },
    },
    y: {
      display: false,
    },
  },
};

const labels = [
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
];

function BodyStatsGraph() {
  const [bodyStatsGraph, setBodyStatsGraph] = useState([]);
  console.log('bodyStatsGraph: ', bodyStatsGraph);
  useEffect(() => {
    const getBodyStatsGraph = async () => {
      try {
        const res = await http.get('/api/v1/body-stats-graphs');

        if (res.status === true) {
          setBodyStatsGraph(res.data);
          return true;
        }

        return false;
      } catch (e) {
        console.error(e);
        return [];
      }
    };

    getBodyStatsGraph();
  }, []);

  const dataFats =
    bodyStatsGraph && bodyStatsGraph.map((fat) => fat.fat_percent);
  const dataWeights =
    bodyStatsGraph && bodyStatsGraph.map((weight) => weight.weight_percent);

  const data = {
    labels,
    datasets: [
      {
        data: dataFats ?? labels.map(() => 0),
        borderColor: '#FFCC21',
        borderWidth: 3,
      },
      {
        data: dataWeights ?? labels.map(() => 0),
        borderColor: '#8FE9D0',
        borderWidth: 3,
      },
    ],
    hidden: true,
  };

  return <Line options={options} data={data} />;
}

export default BodyStatsGraph;
