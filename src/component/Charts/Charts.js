import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import "./Charts.css";
const Charts = () => {
  const data = [
    {
      name: "2013-01",
      value: 52,
    },
    {
      name: "2013-02",
      value: 50,
    },
    {
      name: "2013-03",
      value: 30,
    },
    {
      name: "2013-04",
      value: 60,
    },
    {
      name: "2013-05",
      value: 32,
    },
    {
      name: "2013-06",
      value: 12,
    },
    {
      name: "2013-07",
      value: 57,
    },
  ];
  return (
    <div className="custom">
       

     
      <BarChart width={640} height={580} data={data}   >
        <XAxis
          height={60}
          ticks={[
            "2013-01",
            "2013-02",
            "2013-03",
            "2013-04",
            "2013-05",
            "2013-06",
            "2013-07",
          ]}
          textAnchor="end"
          angle={-90}
          tick={{ fontSize: 12 }}
          dataKey="name"
          stroke="#000"
        />
        {/* <YAxis  /> */}
        <YAxis    label={{ value: 'value ($)',angle:-90 ,fontSize:12}  }
          ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]}
          tick={{ fontSize: 12 }}
          dataKey="value"
          stroke="#000"
         
        />
        <Tooltip />

        {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
        <Bar dataKey="value" fill="#4682B4" barSize={65} />
      </BarChart>
    </div>
  );
};

export default Charts;
