import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";
import SideNav from "../SideNav/sidenav";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttons: {
    float: "right",
  },
}));
function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  let history = useHistory();
  function handleClick1() {
    history.push("/");
  }
  function handleClick2() {
    history.push("/option2");
  }

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          {matches ? (
            <div className={classes.buttons}>
              <Button color="inherit" onClick={handleClick1}>
                Option 1
              </Button>
              <Button color="inherit" onClick={handleClick2}>
                Option 2
              </Button>
            </div>
          ) : (
            <SideNav />
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default Header;
