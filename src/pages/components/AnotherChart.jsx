import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const AnotherChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Document Translation',
                data: [12, 19, 3, 5, 2, 3, 10],
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
            },
            {
                label: 'Transcription & Subtitling',
                data: [2, 3, 20, 5, 1, 4, 8],
                fill: false,
                backgroundColor: 'rgba(255, 159, 64, 1)',
                borderColor: 'rgba(255, 159, 64, 1)',
                tension: 0.1,
            },
            {
                label: 'Simultaneous Interpretation',
                data: [3, 10, 13, 15, 22, 30, 25],
                fill: false,
                backgroundColor: 'rgba(153, 102, 255, 1)',
                borderColor: 'rgba(153, 102, 255, 1)',
                tension: 0.1,
            },
            {
                label: 'Consecutive Interpretation',
                data: [5, 6, 7, 8, 9, 10, 11],
                fill: false,
                backgroundColor: 'rgba(54, 162, 235, 1)',
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.1,
            },
            {
                label: 'Proofreading & Editing',
                data: [7, 8, 9, 10, 11, 12, 13],
                fill: false,
                backgroundColor: 'rgba(255, 206, 86, 1)',
                borderColor: 'rgba(255, 206, 86, 1)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="flex flex-col mt-5">
            <h2 className="text-xl font-bold mb-4">Translation Services Over Time</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default AnotherChart;