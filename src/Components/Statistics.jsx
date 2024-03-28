/* eslint-disable react/prop-types */
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";

import { LiaAwardSolid, LiaCrownSolid, LiaCalendarAltSolid } from "react-icons/lia";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p className="label">{`${payload[0].payload.date}`}</p>
        <p className="label">{`${payload[0].payload.time} Hour`}</p>
      </div>
    );
  }
  return null;
};

const Statistics = () => {
  const data = [
    {
      name: "Mon",
      date: "21 March",
      time: 1,
    },
    {
      name: "Tue",
      date: "22 March",
      time: 2.59,
    },
    {
      name: "Wed",
      date: "23 March",
      time: 1.78,
    },
    {
      name: "Thu",
      date: "24 March",
      time: 3,
    },
    {
      name: "Fri",
      date: "25 March",
      time: 1.5,
    },
    {
      name: "Sat",
      date: "26 March",
      time: 0.8,
    },
    {
      name: "Sun",
      date: "27 March",
      time: 3,
    },
  ];
  return (
    <div className="flex flex-col md:justify-evenly md:flex-row gap-2 md:gap-6 h-[500px] md:w-full">
      <div className="flex flex-col items-center">
        <div className="flex w-full justify-around p-4">
          <h2 className="text-3xl font-bold">Tutoring Statistics</h2>
          <div className="flex items-center gap-3 border-2 rounded-xl px-2 py-1">
          <LiaCalendarAltSolid className="text-3xl font-bold"/>
          <select className="text-2xl bg-transparent font-bold" defaultValue={'default'}>
            <option value="">This week</option>
            <option value="">Last week</option>
          </select>
          </div>
        </div>
        <div className="flex w-[500px] md:w-[700px] items-center">   
        <AreaChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 0,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="Date & Time" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="time"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
        </div>
      </div>
      <div className=" flex justify-center flex-row md:flex-col bg-slate-100 shadow-sm">
        <div className="flex flex-col justify-center">
          <div>
            <h2 className="text-7xl text-white flex justify-center items-center">
              <LiaAwardSolid className="text-black" />
            </h2>
          </div>
          <div className=" text-center">
            <h2 className="text-2xl">Silver Award</h2>
            <p className="text-[#b99a9a]">Great job, keep it up!</p>
            <progress
              className="progress progress-success w-56 text-center"
              value="39"
              max="100"
            ></progress>
            <div className="flex justify-around">
              <h2 className="font-bold text-black">9 / 40</h2>Hours
              <div className="text-yellow-500 flex items-center gap-3 font-bold">
                <LiaCrownSolid className="font-extrabold text-2xl" />
                <p>Gold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
