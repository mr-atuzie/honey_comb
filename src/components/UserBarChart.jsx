import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const UserBarChart = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
    },

    {
      name: "Aug",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Sep",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
    },
    {
      name: "Nov",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <div>
      <div className=" p-5 mb-4">
        <p className="  text-gray-500  ">Profit Earned</p>
        <h2 className=" text-3xl font-semibold "> &#8358; 7,233,000</h2>
      </div>
      <BarChart width={630} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default UserBarChart;
