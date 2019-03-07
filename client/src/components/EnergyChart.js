import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../App.css'

export default class EnergyChart extends Component {


    render() {
        const data = [
            {
                name: 'Monday', energy: 4000, happiness: 2400, engagement: 2400,
            },
            {
                name: 'Tuesday', energy: 3000, happiness: 1398, engagement: 2210,
            },
            {
                name: 'Wednesday', energy: 2000, happiness: 9800, engagement: 2290,
            },
            {
                name: 'Thursday', energy: 2780, happiness: 3908, engagement: 2000,
            },
            {
                name: 'Friday', energy: 1890, happiness: 4800, engagement: 2181,
            },
        ];

        return (
            <div className='chartDisplay red'>
                <BarChart
                    width={900}
                    height={500}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="energy" fill="yellow" />
                    <Bar dataKey="happiness" fill="green" />
                    <Bar dataKey="engagement" fill="red" />
                </BarChart>
            </div>
        );
    }

}