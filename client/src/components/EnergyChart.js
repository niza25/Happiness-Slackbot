import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../App.css'

export default class EnergyChart extends Component {


    render() {
        const data = [
            {
                name: 'Monday', energy: 4, happiness: 4, engagement: 4.5,
            },
            {
                name: 'Tuesday', energy: 4.4, happiness: 4.3, engagement: 3.5,
            },
            {
                name: 'Wednesday', energy: 4.6, happiness: 4.2, engagement: 4.5,
            },
            {
                name: 'Thursday', energy: 4.5, happiness: 5, engagement: 4.2,
            },
            {
                name: 'Friday', energy: 4.4, happiness: 4.5, engagement: 4.3,
            },
        ];

        const range= [1,2,3,4,5]

        return (
            <div className='chartDisplay red'>
                <BarChart
                    width={1000}
                    height={700}
                    data={data}
                    margin={{top: 120, right: 30, left: 30, bottom: 100}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number"
                    domain={[1,2,3,4,5]}/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="energy" fill="yellow" />
                    <Bar dataKey="happiness" fill="green" />
                    <Bar dataKey="engagement" fill="red" />
                </BarChart>
            </div>
        )
    }

}