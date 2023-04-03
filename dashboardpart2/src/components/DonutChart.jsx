import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

// https://recharts.org/en-US/examples/TwoSimplePieChart

const DonutChart = () => {

  const data01 = [
    { name: 'California',   value: 912 },
    { name: 'Washington',   value: 472 },
    { name: 'Colorado',     value: 430 },
    { name: 'New York',     value: 418 },
    { name: 'Pennsylvania', value: 343 },
    { name: 'Oregon',       value: 295 },
  ];

  return (
    <div>
      <PieChart width={350} height={250}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            fill="#99d8c9"
            fontSize={18}
            fontWeight={700}
            label
          />

          <Tooltip />
        </PieChart>
    </div>
  )
}

export default DonutChart