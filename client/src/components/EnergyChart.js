import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import '../App.css'

export default class EnergyChart extends Component {


    render() {
        const data = [
            { name: 'Week 1', range: 5, pv: 1, amt: 2400 },
            { name: 'Week 2', range: 4, pv: 2, amt: 500 },
            { name: 'Week 3', range: 3, pv: 3, amt: 3000 },
            { name: 'Week 4', range: 4, pv: 4, amt: 5600 },
            { name: 'Week 5', range: 5, pv: 7800, amt: 400 },
            { name: 'Week 6', range: 4, pv: 9000, amt: 500 },
            { name: 'Week 7', range: 4, pv: 9000, amt: 500 },
            { name: 'Week 8', range: 5, pv: 9000, amt: 500 },
            { name: 'Week 9', range: 4, pv: 9000, amt: 500 },
            { name: 'Week 10', range: 5, pv: 9000, amt: 500 },
        ];

        return (
            <div className='chartDisplay red'>
                <h3>Energy</h3>
                <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey='range'/>
                    <Tooltip />
                </LineChart>
            </div>
        );
    }

}