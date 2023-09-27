import { Pie, PieChart, Tooltip, Cell } from "recharts";
import PropTypes, { bool } from 'prop-types'
// import { useState } from "react";


const LineChart = ({ data }) => {

  let percentage = (data.length / 12) * 100;

  const COLORS = ['#FF444A', '#00C49F'];
  return (

    <div>
      <div className="flex justify-center items-center">
        <PieChart width={300} height={300}>
        
          <Pie data={data}
            cx="50%"
            cy="50%"
            legendType="bottom"
            overlinePosition="bottom"
            outerRadius={150}
            labelLine={false}
            // color="#00C49F"
            fill='#00C49F'
            dataKey="id">
            {data.map((totatId, id) => (
              <Cell key={`cell-${id}`} fill={COLORS[id % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <text
            
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="20"
            
            
          >

            {percentage.toFixed(2)}%

          </text>
          
        </PieChart>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-14">
        <div className="flex gap-2 items-center justify-center">
          <h2 className="text-xl font-semibold">Your Donation</h2>
          <p className="bg-[#00C49F] w-28 h-3 rounded"></p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <h2 className="text-xl font-semibold">Your Donation</h2>
          <p className="bg-[#FF444A] w-28 h-3 rounded"></p>
        </div>
      </div>

    </div>
  )

};

export default LineChart;
