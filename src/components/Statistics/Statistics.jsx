import React,{PureComponent} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const assignments = [
        { name: "Assign1", result: 55 },
        { name: "Assign2", result: 57 },
        { name: "Assign3", result: 55 },
        { name: "Assign4", result: 60 },
        { name: "Assign5", result: 60 },
        { name: "Assign6", result: 43 },
        { name: "Assign7", result: 60 },
        { name: "Assign8", result: 56 }
      ];

    return (
        <div className=''>
            <h1 className='font-bold text-3xl text-center my-8'>Assignment marks chart</h1>

            <AreaChart
            width={1000}
            height={500}
            data={assignments}
            >
                <Area dataKey="result"></Area>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </AreaChart>
           
        </div>
    );
};

export default Statistics;