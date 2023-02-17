import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

import pkg from "chart.js";
const {
  Chart: Chart$1,
  LineController,
  BarController,
  RadarController,
  DoughnutController,
  PolarAreaController,
  BubbleController,
  PieController,
  ScatterController,
} = pkg;

const PieChart = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const data = {
    labels: ["Area 1", "Area 2", "Area 3"],
    datasets: [
      {
        data: [30, 30, 40],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const updateChartData = (value) => {
    const newData = [value / 2, value / 2, 100 - value];
    setData({
      labels: data.labels,
      datasets: [
        {
          data: newData,
          backgroundColor: data.datasets[0].backgroundColor,
          hoverBackgroundColor: data.datasets[0].hoverBackgroundColor,
        },
      ],
    });
  };

  return (
    <div>
      <Doughnut data={data} />
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => {
          setSliderValue(e.target.value);
          updateChartData(e.target.value);
        }}
      />
    </div>
  );
};

export default PieChart;
