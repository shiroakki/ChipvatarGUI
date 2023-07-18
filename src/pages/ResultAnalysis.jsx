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


const card = (
  <React.Fragment>
    <CardContent>
      <Grid container spacing={1} columns={12}>
        <Grid item xs={10}>
          <Typography variant="h5">Edit Parameters</Typography>
        </Grid>
        <Grid item xs={2}>
          {/* <Box sx={{ border: "1px solid #f1f1ff", borderRadius: "4px" }}> */}
          <EditOutlinedIcon color="primary"></EditOutlinedIcon>
          {/* </Box> */}
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2" color="text.secondary">
            Runtime
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField size="small"></TextField>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2" color="text.secondary">
            Parameter 3
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField size="small"></TextField>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2" color="text.secondary">
            Size
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField size="small"></TextField>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2" color="text.secondary">
            Parameter 4
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField size="small"></TextField>
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent>
      <StackedBarCharts></StackedBarCharts>
      <br />
      <br />
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
      <Grid item xs={7}>
        <Stack direction={"column"}>
          <Card variant="outlined">{card}</Card>
          <Card variant="outlined">{card2}</Card>
        </Stack>
      </Grid>
      <Grid item xs={7}>
        <Card variant="outlined">{card3}</Card>
      </Grid>
    </Grid>
  );
}
