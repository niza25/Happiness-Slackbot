import React, { Component } from 'react';
import { connect } from 'react-redux'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './dashboard.css'

const data = [
    {
        name: 'Monday', Energy:4 , Engagement: 4, Happiness: 3.9,
    },
    {
        name: 'Tuesday', Energy: 4.5, Engagement: 4.3, Happiness: 4.5,
    },
    {
        name: 'Wednesday', Energy: 3.6, Engagement: 4.2, Happiness: 4.6,
    },
    {
        name: 'Thursday', Energy: 5, Engagement: 3.8, Happiness: 4.2,
    },
    {
        name: 'Friday', Energy: 4.8, Engagement: 4, Happiness: 4.2,
    }
];


class CustomizedLabel extends Component {

    render() {
        const { x, y, stroke, value } = this.props;

        return <text x={x} y={y} dy={-8} fill={stroke}
            fontSize={10} textAnchor="middle">{value}</text>;
    }
}

class CustomizedAxisTick extends Component {

    render() {
        const { x, y, payload, } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={30} y={15} dy={16} textAnchor="end"
                    fill="black" transform="rotate(-25)">{payload.value}</text>
            </g>
        );
    }
}

class ChartDisplay extends Component {

    componentDidMount() {
        // fetch the data to display in the chart
    }

    

    render() {
        
        return (
            <div >
                <LineChart className='chartDisplay'
                    width={900}
                    height={500}
                    data={this.props.dataForClass}
                    margin={{ top: 50, right: 40, left: 20, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={90} tick={<CustomizedAxisTick />} />
                    <YAxis type="number" height={90}
                        domain={[1, 2, 3, 4, 5]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Energy" stroke="#990000" label={<CustomizedLabel />} />
                    <Line type="monotone" dataKey="Engagement" stroke="#ff9900" label={<CustomizedLabel />} />
                    <Line type="monotone" dataKey="Happiness" stroke="#0033cc" label={<CustomizedLabel />} />
                </LineChart>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    dataForClass: state.dataForClass
})

export default connect(mapStateToProps)(ChartDisplay)