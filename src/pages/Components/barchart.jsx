import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import Grid from "@mui/material/Grid";
import "@fontsource/roboto/300.css";
import Typography from "@mui/material/Typography";
import { useState } from 'react'
import axios from 'axios'

const Ddata = [
  { name: "Overall Capacity", value: 50 },
  { name: "Capacity Available", value: 50 },
  { name: "Cache", value: 50 },
  // Add more DDR_data objects as needed
];

const Sdata = [
  { name: "Overall Capacity", value: 50 },
  { name: "Capacity Available", value: 50 },
];

const Ctemp = [{ name: "CPU Temperatue", value: 50 }];

export default function HorizontalBarCharts(){
  const [DDRdata, setDDRdata] = useState(Ddata);
  const [SRAMdata, setSRAMdata] = useState(Sdata);
  const [CPUtemp, setCPUtemp] = useState(Ctemp);

function getData() {
  axios({
    method: "GET",
    url: "http://127.0.0.1:5000/RealTimeStatus",
  })
  .then((response) => {
    const res = response.data;
    setDDRdata(res.DDR_data);
    setSRAMdata(res.SRAM_data);
    setCPUtemp(res.CPU_temp);
  })
  .catch((error) => {
    if (error.response) {
      console.log(error.response);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  });
}

  return (
    <div>
      <button onClick={getData}>Refresh</button>
      <Grid container>
        <Grid item xs={3}>
          <Typography style={{ fontWeight: "bold", background: "#FFF1C0" }}>
            DDR Usage
          </Typography>
          <table>
            <tbody>
              <tr style={{ height: 35 }}>
                <td>{DDRdata[0].name}</td>
              </tr>
              <tr style={{ height: 35 }}>
                <td>{DDRdata[1].name}</td>
              </tr>
              <tr style={{ height: 35 }}>
                <td>{DDRdata[2].name}</td>
              </tr>
            </tbody>
          </table>
        </Grid>
        <Grid item xs={4} paddingTop={"18px"}>
          <BarChart
            width={400}
            height={130}
            data={DDRdata}
            layout="vertical"
            barCategoryGap={15}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              interval={40}
              tick={{
                textAnchor: "start",
                fontSize: 14,
                fontWeight: "bold",
                fill: "#000",
              }}
              tickFormatter={(name) =>
                name === "Overall Capacity" ? "" : name
              }
            />
            <CartesianGrid strokeDasharray="3 3" opacity={0} />
            <Tooltip />
            <Bar dataKey="value" fill="#4072F6" radius={[20, 20, 20, 20]} />
          </BarChart>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={3}>
          <Typography style={{ fontWeight: "bold", background: "#FFF1C0" }}>
            SRAM Usage
          </Typography>
          <table>
            <tbody>
              <tr style={{ height: 35 }}>
                <td>{SRAMdata[0].name}</td>
              </tr>
              <tr style={{ height: 35 }}>
                <td>{SRAMdata[1].name}</td>
              </tr>
            </tbody>
          </table>
        </Grid>
        <Grid item xs={4} paddingTop={"22px"}>
          <BarChart
            width={400}
            height={90}
            data={SRAMdata}
            layout="vertical"
            barCategoryGap={15}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              interval={50}
              tick={{
                textAnchor: "start",
                fontSize: 14,
                fontWeight: "bold",
                fill: "#000",
              }} // Adjust the tick style for left alignment and font properties
              tickFormatter={(name) =>
                name === "Overall Capacity" ? "" : name
              } // Hide "Overall Capacity" name
            />
            <CartesianGrid strokeDasharray="3 3" opacity={0} />
            <Tooltip />
            <Bar dataKey="value" fill="#4072F6" radius={[20, 20, 20, 20]} />
          </BarChart>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={3} paddingTop={"12px"}>
          <Typography style={{ fontWeight: "bold", background: "#FFF1C0" }}>
            CPU Temperatue
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <BarChart
            width={400}
            height={50}
            data={CPUtemp}
            layout="vertical"
            barCategoryGap={15}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              interval={50}
              tick={{
                textAnchor: "start",
                fontSize: 14,
                fontWeight: "bold",
                fill: "#000",
              }} // Adjust the tick style for left alignment and font properties
              tickFormatter={(name) => (name === "CPU Temperatue" ? "" : name)} // Hide "Overall Capacity" name
            />
            <CartesianGrid strokeDasharray="3 3" opacity={0} />
            <Tooltip />
            <Bar dataKey="value" fill="url(#color)" radius={[20, 20, 20, 20]} />
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4072F6" />
                <stop offset="20.31%" stopColor="#FAD67A" />
                <stop offset="85.94%" stopColor="#F69740" />
              </linearGradient>
            </defs>
          </BarChart>
        </Grid>
      </Grid>
    </div>
  );
}
