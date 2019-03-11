import React, {Component} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default class EnergyChart extends Component {


    render() {
        const data = [
            {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 600, pv: 3400, amt: 500},
            {name: 'Page c', uv: 560, pv: 3500, amt: 3000},
            {name: 'Page D', uv: 890, pv: 5600, amt: 5600},
            {name: 'Page E', uv: 340, pv: 7800, amt: 400},
            {name: 'Page F', uv: 590, pv: 9000, amt: 500},
            ];
        return (
            <div>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        );
    }

}