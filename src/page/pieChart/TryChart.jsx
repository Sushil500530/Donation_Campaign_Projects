import React, { useEffect, useState } from "react";
// import { PieChart, Pie, Cell,ResponsiveContainer } from "recharts";
import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const TryChart = () => {
    const [dataId, setDataId] = useState([]);
    const [notfound, setNotFound] = useState(true);
    useEffect(() => {
        const getItems = JSON.parse(localStorage.getItem("donations"));
        
        if (getItems) {
            setDataId(getItems)
        }
        else {
            setNotFound("No Data Found")
        }
    }, [])


    const total = (dataId.length * 100) / 12;
    const totalLength = 100 - total;
    console.log(total);
    const data = [
        { name: "Group A", value: total },
        { name: "Group B", value: totalLength },
    ];

    const COLORS = ["#FF8042", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;
    var options = { width: 400, height: 300 };
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    console.log(dataId.length);
    return (
        <div>
            {
                notfound ? '' :(<p className="h-[50vh] text-3xl font-bold flex justify-center items-center">{notfound}</p>)
            }
            <ResponsiveContainer width={800} height={800}>
                <PieChart width={800} height={800} >
                    <Pie
                        data={data}
                        fontSize={20}
                        cx={250}
                        cy={250}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        <div style="position: relative; height:40vh; width:80vw">
                            <canvas id="chart"></canvas>
                        </div>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
           
        </div>
    );
};

export default TryChart;