import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const WeightLossChart = ({ currentWeight, originalWeight }) => {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
        datasets: [
            {
                label: 'Weight',
                data: [originalWeight, 190, 185, 180, 178, 175, 173, currentWeight],
                fill: false,
                borderColor: '#007bff',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                    },
                },
            ],
        },
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default WeightLossChart;
