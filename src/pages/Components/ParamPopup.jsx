import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { StackItem } from "@chakra-ui/react";
import Dropdown from "./Dropdown";
export default function ParamPopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const card_param = (
    <React.Fragment>
      <Card>
        <CardContent>
          <Stack direction={"column"}>
            <StackItem>
              <Typography variant="body2" color="text.secondary">
                Dataset Size
              </Typography>
              <TextField size="small"></TextField>
            </StackItem>
            <StackItem>
              <Typography variant="body2" color="text.secondary">
                Runtime
              </Typography>
              <TextField size="small"></TextField>
            </StackItem>
            <StackItem>
              <Typography variant="body2" color="text.secondary">
                Protocol
              </Typography>
              <Dropdown></Dropdown>
            </StackItem>
          </Stack>
        </CardContent>
      </Card>
    </React.Fragment>
  );

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Customize Testcase</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Card>{card_param}</Card>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" size="small">Cancel</Button>
          <Button onClick={handleClose} variant="contained" size="small">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
