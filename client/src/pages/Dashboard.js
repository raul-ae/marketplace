import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

const Dashboard = () => {

    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        });
    }

    useEffect(() => {
        chart();
    }, []);

    return (
        <div>
            <h4><strong>Dashboard</strong></h4>


            <div style={{ width: '50%' }}>
                <h5>Chart 1</h5>
                <Line
                    data={chartData}
                    options={
                        {
                            responsive: true
                        }
                    }
                />
            </div>


            <div style={{ width: '50%' }}>
                <h5>Chart 2</h5>
                <Bar
                    data={chartData}
                    options={
                        {
                            responsive: true
                        }
                    }
                />
            </div>
        </div>
    );
}

export default Dashboard;