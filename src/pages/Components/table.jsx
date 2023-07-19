import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Typography } from "@material-ui/core";
import ParamPopup from "./ParamPopup";
import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";


const useStyles = makeStyles({
  table: {
    minWidth: 450,
    "& .MuiTableCell-root": {
      padding: "10px 8px 10px 8px", // <-- arbitrary value
    },
  },
  yellowBackground: {
    backgroundColor: "yellow",
  },
  tablerow: {
    height: "10px",
  },
  boldTableCell: {
    fontWeight: "bold",
  },
});

const lrs = [
  { name: "Memory Access Speed", Speed: 0, Bandwidth: 0, Latency: 0 },
  { name: "DDR", Speed: 0, Bandwidth: 0, Latency: 0 },
  { name: "SRAM", Speed: 0, Bandwidth: 0, Latency: 0 },
  { name: "MSMC", Speed: 0, Bandwidth: 0, Latency: 0 },
  { name: "OCMC", Speed: 0, Bandwidth: 0, Latency: 0 },
  {
    name: "Communication between Cores",
    Speed: 0,
    Bandwidth: 0,
    Latency: 0,
  },
  { name: "Communication via Ethernet", Speed: 0, Bandwidth: 0, Latency: 0 },
];

const hrs = [{ name: "Arithmetic Performance", Acore: 0, Rcore: 0, Mcore: 0 }];

export default function BasicTable() {
  const classes = useStyles();
  const [lowerrows, setLowerRows] = useState(lrs);
  const [higherrows, setHigherRows] = useState(hrs);

  function getData() {
    axios({
      method: "GET",
      url: "http://127.0.0.1:5000/Performance",
    })
      .then((response) => {
        const res = response.data;
        setLowerRows(res.lowerrows);
        setHigherRows(res.higherrows);
        // setData2();
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
      <div>
        <button onClick={getData}>Refresh</button>

        <TableContainer
          component={Paper}
          style={{
            position: "relative",
            // top: 30, right: 0,
            width: "100%",
          }}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell> </TableCell>
                <TableCell align="right" className={classes.boldTableCell}>
                  Acore
                </TableCell>
                <TableCell align="right" className={classes.boldTableCell}>
                  Rcore
                </TableCell>
                <TableCell align="right" className={classes.boldTableCell}>
                  Mcore
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {higherrows.map((row) => (
                <TableRow key={row.name} className={classes.tablerow}>
                  <TableCell component="th" scope="row">
                    {row.name === "Arithmetic Performance" && (
                      <FiberManualRecordIcon style={{ color: "#0337C2" }} />
                    )}
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.Acore}</TableCell>
                  <TableCell align="right">{row.Rcore}</TableCell>
                  <TableCell align="right">{row.Mcore}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined">Start</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div>
        <TableContainer
          component={Paper}
          style={{
            position: "relative",
            //  top: 135, right: 0,
            width: "100%",
          }}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell> </TableCell>
                <TableCell align="right" className={classes.boldTableCell}>
                  Speed
                </TableCell>
                <TableCell align="right" className={classes.boldTableCell}>
                  Bandwidth
                </TableCell>
                <TableCell align="right" className={classes.boldTableCell}>
                  Latency
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lowerrows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name === "Interruption Handling Capability" && (
                      <FiberManualRecordIcon style={{ color: "#95B0FD" }} />
                    )}
                    {row.name === "Communication via Ethernet" && (
                      <FiberManualRecordIcon style={{ color: "#BDC9EB" }} />
                    )}
                    {row.name === "Memory Access Speed" && (
                      <FiberManualRecordIcon style={{ color: "#4072F6" }} />
                    )}
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={row.Speed >= 95 ? classes.yellowBackground : ""}
                  >
                    {row.Speed}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={
                      row.Bandwidth >= 95 ? classes.yellowBackground : ""
                    }
                  >
                    {row.Bandwidth}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={
                      row.Latency >= 95 ? classes.yellowBackground : ""
                    }
                  >
                    {row.Latency}
                  </TableCell>
                  <TableCell align="right">
                    <ParamPopup></ParamPopup>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="outlined">Start</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
