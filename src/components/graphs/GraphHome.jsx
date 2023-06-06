import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import './GraphHome.css';
import Map from './Map';
import CovidWidget from './CovidWidget';

// Chart.register(CategoryScale);
function GraphHome() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
                setData(response.data);

            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [])

    const setLineData = () => {
        const lineData = [];
        for (let date in data.cases) {
            lineData.push({
                date,
                cases: data.cases[date],
                recovered: data.recovered[date],
                deaths: data.deaths[date]
            })
        }
        return lineData;
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true,
        },
    }

    const dataVal = {
        labels: setLineData().map((entry) => entry.date),
        datasets: [
            {
                label: 'Total Cases',
                data: setLineData().map((entry) => entry.cases),
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderWidth: 1,
            },
            {
                label: 'Recovered',
                data: setLineData().map((entry) => entry.recovered),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 1,

            },
            {
                label: 'Deaths',
                data: setLineData().map((entry) => entry.deaths),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
            }
        ],
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Cases',
                },
            },
        }
    }

    return (
        <div className='p-4 sm:ml-64' >
            <CovidWidget />

            <h1 className='text-center'>Covid-19 Map</h1>

            <Map />
            <h1 className='text-center'>Covid-19 Daily Chart</h1>
            <Line options={options} data={dataVal} className='chart' />
        </div >
    )
}

export default GraphHome