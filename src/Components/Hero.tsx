import {
  AppBar,
  Button,
  ButtonGroup,
  makeStyles,
  SvgIcon,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import { ReactComponent as Logo } from "../coveologo.svg";

interface IHeroProps {
  welcome: string;
}

const useStyles = makeStyles({
  AppBar: {
    marginBottom: "4rem",
  },
  CoveoLogoButton: {
    marginRight: "4rem",
  },
  CoveoLogo: {
    width: "100px",
    height: "100px",
  },
  Button: {
    background: "white",
    borderRadius: "2px",
  },
});

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  const classes = useStyles(props);
  return (
    <AppBar position="sticky" color="secondary" className={classes.AppBar}>
      <Toolbar>
        <Button
          href="https://coveo.com"
          size="large"
          className={classes.CoveoLogoButton}
        >
          <SvgIcon className={classes.CoveoLogo}>
            <Logo />
          </SvgIcon>
        </Button>
        <ButtonGroup variant="contained" size="small">
          <Button
            href="https://docs.coveo.com/en/headless"
            className={classes.Button}
          >
            Coveo Headless
          </Button>
          <Button href="https://reactjs.org" className={classes.Button}>
            React
          </Button>
          <Button href="https://material-ui.com/" className={classes.Button}>
            Material-ui
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Hero;
