import * as React from "react";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";


// import { TextField } from "@mui/material/TextField";
// import {Item} from "@mui/material/Grid";



export default function NavBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box>
      <Box sx={{ width: "100%", maxWidth: 120, bgcolor: "background.paper" }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <MemoryOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Data" />
          </ListItemButton>
        </List>
        <Divider />
      </Box>
      
    </Box>
  );
}
