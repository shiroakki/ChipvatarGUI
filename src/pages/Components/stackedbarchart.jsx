import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import { Typography, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Grid from "@mui/material/Grid";
import axios from 'axios';
import {useState} from 'react';


    const useStyles = makeStyles({
        table: {
        minWidth: 450,
        },
    });
      
    const CPUData1 = [
        { name: 'Kernel processes', value: 0 },
        { name: 'User processes', value: 0 },
        { name: 'Idle', value: 0 },
    ];
    const CPUData2 = [
        { name: 'I/O wait', value: 0 },
        { name: 'Hardware interrupts', value: 0 },
        { name: 'Software interrupts', value: 0 },
    ];

    const CPU_Usage_Data = [
        { name: '', Kernel_processes: 50, User_processes: 19, Idle: 10, IO_wait:8, Hardware_interrupts:6, Software_interrupts:6 },
        // Add more data as needed
    ];


export default function StackedBarCharts(){
    const classes = useStyles();
        const [CPUUsageData1, setCPUUsageData1] = useState(CPUData1);
        const [CPUUsageData2, setCPUUsageData2] = useState(CPUData2);


    function getData() {
      axios({
        method: "GET",
        url: "http://127.0.0.1:5000/CPUUsageData",
      })
        .then((response) => {
          const res = response.data;
          setCPUUsageData1([
            { name: "Kernel processes", value: res.Kernel_Processes },
            { name: "User processes", value: res.User_Processes },
            { name: "Idle", value: res.Idle },
          ]);

          setCPUUsageData2([
            { name: "I/O wait", value: res.IO_wait },
            { name: "Hardware interrupts", value: res.Hardware_Interrupts },
            { name: "Software interrupts", value: res.Software_Interrupts },
          ]);
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

        <Typography
          variant="h6"
          className={classes.title}
          style={{
            position: "relative",
            //   top: 40,
            //   left: 50,
            height: "21%",
            width: "51%",
          }}
        >
          CPU Usage(%)
        </Typography>

        <Grid container width={"600px"}>
          <Grid item xs={12} sm={6}>
            {CPUUsageData1.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </Grid>
          <Grid item xs={12} sm={4}>
            {CPUUsageData2.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </Grid>
        </Grid>

        {/* <TableContainer
            component={Paper}
            style={{
              position: "fixed",
              top: 70,
              left: 50,
              height: "20%",
              width: "20%",
            }}
          >
            <Table className={classes.table} aria-label="CPU Usage Table">
              <TableBody>
                {CPUUsageData1.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}

        {/* Bar Chart percentage width = 450*/}
        <div
          style={{
            position: "relative",
            // bottom: 170,
            // left: 30,
            height: "50%",
            width: "50%",
          }}
        >
          <BarChart
            width={550}
            height={50}
            data={CPU_Usage_Data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="1 3" />
            <YAxis dataKey="name" type="category" hide />
            <XAxis type="number" hide />
            <Tooltip />
            <Bar
              dataKey="Kernel_processes"
              stackId="stack"
              fill="#0337C2"
              radius={[20, 0, 0, 20]}
            />
            <Bar dataKey="User_processes" stackId="stack" fill="#4072F6" />
            <Bar dataKey="Idle" stackId="stack" fill="#95B0FD" />
            <Bar dataKey="IO_wait" stackId="stack" fill="#BDC9EB" />
            <Bar dataKey="Hardware_interrupts" stackId="stack" fill="#D6DFF6" />
            <Bar
              dataKey="Software_interrupts"
              stackId="stack"
              fill="#f1be46"
              radius={[0, 20, 20, 0]}
            />
          </BarChart>
        </div>
      </div>
    );
};