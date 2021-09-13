import React from "react";
import Link from "../Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  callToActionBackground: {
    backgroundImage: `url("/assets/callToActionBackground.svg")`,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    opacity: 1,
    [theme.breakpoints.down("md")]: {
      backgroundAttachment: "inherit",
    },
  },
  joinButton: {
    ...theme.typography.join,
    borderRadius: 50,
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.cream,
    height: 80,
    width: 220,
    fontSize: "1.7em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    marginRight: "3em",
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  title: {
    color: theme.palette.common.blue,
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.grey[700],
    },
  },
  text: {
    color: theme.palette.common.cream,
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.secondary.main,
    },
    marginBottom: "0.5em",
    fontWeight: 700,
  },
  learnButton: {
    ...theme.typography.learnButton,
    height: 45,
    width: 175,
    fontSize: "0.9rem",
    color: theme.palette.common.blue,
    borderColor: theme.palette.common.blue,
  },
}));

export default function CallToAction({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction={matchesSM ? "column" : "row"}
      style={{ height: "50em" }}
      justifyContent="space-between"
      alignItems="center"
      className={classes.callToActionBackground}
    >
      <Grid
        item
        style={{
          paddingLeft: matchesSM ? "1em" : 0,
          paddingRight: matchesSM ? "1em" : 0,
          marginLeft: matchesSM ? 0 : "5em",
        }}
      >
        <Grid
          container
          direction="column"
          alignItems={matchesSM ? "center" : undefined}
        >
          <Grid item align={matchesSM ? "center" : undefined}>
            <Typography variant="h2" className={classes.title}>
              Preparing Children for Life
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid item>
              <Typography variant="subtitle1" className={classes.text}>
                Ofsted rated Excellent (2017).
              </Typography>
            </Grid>
          </Hidden>
          <Grid item>
            <Button
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(3);
              }}
              component={Link}
              href="/about"
            >
              Learn More <span style={{ marginRight: 10 }}></span>
              <img
                src="/assets/buttonArrowBlue.svg"
                alt="right arrow"
                width={15}
                height={15}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          alignItems={matchesSM ? "center" : undefined}
          justifyContent={matchesSM ? "center" : undefined}
        >
          <Grid item>
            <Button
              variant="contained"
              className={classes.joinButton}
              onClick={() => setValue(false)}
              component={Link} 
              href="/join"
            >
              Join Waiting List
            </Button>
          </Grid>
          <Hidden mdUp>
            <Grid item>
              <Typography variant="subtitle1" className={classes.text}>
                Ofsted rated Excellent (2017).
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
}
