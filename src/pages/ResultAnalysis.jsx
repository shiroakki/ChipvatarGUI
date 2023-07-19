import * as React from "react";

import Grid from "@mui/material/Grid";
import NavBar from "./Components/NavBar";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import BasicTable from "./Components/table";
import StackedBarCharts from "./Components/stackedbarchart";
import HorizontalBarCharts from "./Components/barchart";
import Stack from "@mui/material/Stack";
// import Grid from "@mui/material/Unstable_Grid2";



const card2 = (
  <React.Fragment>
    <CardContent>
      <StackedBarCharts></StackedBarCharts>
      <br/>
      <br/>
      <HorizontalBarCharts></HorizontalBarCharts>
    </CardContent>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardContent>
      <BasicTable></BasicTable>
    </CardContent>
  </React.Fragment>
);

export default function ResultAnalysis() {
  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={2}>
        <NavBar></NavBar>
      </Grid>
      <Grid item xs={6}>
        <Stack direction={"column"}>
          {/* <Card variant="outlined">{card}</Card> */}
          <Card variant="outlined">{card2}</Card>
        </Stack>
      </Grid>
      <Grid item xs={8}>
        <Card variant="outlined">{card3}</Card>
      </Grid>
    </Grid>
  );
}
