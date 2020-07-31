import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function SideNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  let history = useHistory();
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function handleClick1() {
    history.push("/");
    setAnchorEl(null);
  }
  function handleClick2() {
    history.push("/option2");
    setAnchorEl(null);
  }
  return (
    <div>
      <Button onClick={openMenu} color="inherit">
        Open Menu
      </Button>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}>
        <MenuItem onClick={handleClick1}>Option 1</MenuItem>
        <MenuItem onClick={handleClick2}>Option 2</MenuItem>
      </Menu>
    </div>
  );
}
