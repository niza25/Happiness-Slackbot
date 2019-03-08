import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../App.css'

const data = [
    {
        name: 'Monday', energy: 4, engagement: 4, happiness: 3.9,
    },
    {
        name: 'Tuesday', energy: 4.5, engagement: 4.3, happiness: 4.5,
    },
    {
        name: 'Wednesday', energy: 3.6, engagement: 4.2, happiness: 4.6,
    },
    {
        name: 'Thursday', energy: 5, engagement: 3.8, happiness: 4.2,
    },
    {
        name: 'Friday', energy: 4.8, engagement: 4, happiness: 4.2,
    }
];


class CustomizedLabel extends Component {
    
    render() {
        const {x, y, stroke, value} = this.props;

        return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>;
    }
}

class CustomizedAxisTick extends Component {
    
    render() {
        const { x, y, payload, } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="black" transform="rotate(-35)">{payload.value}</text>
            </g>
        );
    }
}

export default class ChartDisplay extends Component {


    render() {

        return (
            <div >
                <LineChart className='chartDisplay'
                    width={900}
                    height={500}
                    data={data}
                    margin={{ top: 50, right: 40, left: 20, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={90} tick={<CustomizedAxisTick />} />
                    <YAxis type="number" height={90}
                        domain={[1, 2, 3, 4, 5]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="energy" stroke="#990000" label={<CustomizedLabel />} />
                    <Line type="monotone" dataKey="engagement" stroke="#ff9900" label={<CustomizedLabel />} />
                    <Line type="monotone" dataKey="happiness" stroke="#0033cc" label={<CustomizedLabel />} />
                </LineChart>
            </div>
        )
    }

}