
import { useState } from "react";
import * as React from "react";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Button } from "@mui/material";
import useAutocomplete from "@mui/base/useAutocomplete";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#ffffff",
    },
  },
});

export default function Home() {

const [selectedOption, setSelectedOption] = useState(null);

const sendDataToFlask = () => {
  if (selectedOption) {
    const message = selectedOption.label; // Get the label of the selected option
    axios
      .post("http://127.0.0.1:5000/chip", { data: message })
      .then((response) => {
        console.log(response.data);
        // Handle the response data from Flask
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
};

  return (
    <Box
      sx={{
        backgroundImage: "url('../../public/img/bg_v1.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100VH",
        width: "100VW",
      }}
    >
      <Stack
        spacing={10}
        useFlexGap
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
      >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 2fr)",
            gap: 1,
            gridTemplateRows: "1",
            gridTemplateAreas: `
        "main main main main main main main main sidebar"`,
          }}
        >
          <ThemeProvider theme={theme}>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={dropDownLists}
                sx={{ width: 600 }}
                size="small"
                value={selectedOption}
                onChange={(event, value) => setSelectedOption(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Explore, analyze and optimize with chipvatar"
                    color="secondary"
                  />
                )}
              />
            </Box>
          </ThemeProvider>

          <ThemeProvider theme={theme}>
            <Box>
              <Button
                color="secondary"
                variant="contained"
                size="medium"
                href="/ra"
                onClick={sendDataToFlask}
                disabled={!selectedOption}
              >
                START
              </Button>
            </Box>
          </ThemeProvider>
        </Box>
      </Stack>
    </Box>
  );
}

const dropDownLists = [
  { label: "Chip1", id: 1 },
  { label: "Chip2", id: 2 },
  { label: "Chip3", id: 3 },
  { label: "Chip4", id: 4 },
  { label: "Chip5", id: 5 },
];
