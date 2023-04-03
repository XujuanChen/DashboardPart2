import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data01 = [
  { name: 'California',   value: 912 },
  { name: 'Washington',   value: 472 },
  { name: 'Colorado',     value: 430 },
  { name: 'New York',     value: 418 },
  { name: 'Pennsylvania', value: 343 },
  { name: 'Oregon',       value: 295 },
];

const BarChartDemo = () => {
  const data = [
    {
      name: 'CA',
      uv: 1000,
      pv: 912,
      amt: 912,
    },
    {
      name: 'WA',
      uv: 750,
      pv: 472,
      amt: 472,
    },
    {
      name: 'CO',
      uv: 2000,
      pv: 430,
      amt: 430,
    },
    {
      name: 'NY',
      uv: 500,
      pv: 418,
      amt: 418,
    },
    {
      name: 'PA',
      uv: 250,
      pv: 343,
      amt: 343,
    },
    {
      name: 'OR',
      uv: 0,
      pv: 295,
      amt: 295,
    },

  ];
  

  return (
    <div>
      <BarChart
          width={350}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} fontSize={16} stroke="#e5f5e0" />
          <YAxis fontSize={16} stroke="#e5f5e0" />
          <Tooltip />
          <Legend  />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#99d8c9" background={{ fill: '#e5f5e0' }} />
        </BarChart>
    </div>
  )
}

export default BarChartDemo


