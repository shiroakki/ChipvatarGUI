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

const useStyles = makeStyles({
  table: {
    minWidth: 550,
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

const lowerrows = [
  { name: "Memory Access Speed", Speed: 50, Bandwidth: 30, Latency: 20 },
  { name: "DDR", Speed: 95, Bandwidth: 30, Latency: 20 },
  { name: "SRAM", Speed: 96, Bandwidth: 30, Latency: 95 },
  { name: "MSMC", Speed: 50, Bandwidth: 30, Latency: 20 },
  { name: "OCMC", Speed: 50, Bandwidth: 95, Latency: 20 },
  {
    name: "Communication between Cores",
    Speed: 50,
    Bandwidth: 30,
    Latency: 20,
  },
  { name: "Communication via Ethernet", Speed: 50, Bandwidth: 30, Latency: 20 },
];

const higherrows = [
  { name: "Arithmetic Performance", Acore: 50, Rcore: 30, Mcore: 20 },
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <div>

        <TableContainer
          component={Paper}
          style={{ position: "relative", 
          // top: 30, right: 0, 
          width: "100%" }}
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div>
        <TableContainer
          component={Paper}
          style={{ position: "relative",
          //  top: 135, right: 0, 
           width: "100%"}}
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
                    {row.name === "Communication between Cores" && (
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
