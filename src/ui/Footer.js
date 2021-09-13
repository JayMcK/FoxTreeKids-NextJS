import React from "react";
import Link from "../Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.orange,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  link: {
    ...theme.typography.tab,
    color: theme.palette.common.cream,
    opacity: 1,
    fontSize: "0.8rem",
    textDecoration: "none",
  },
  gridItem: {
    marginRight: "3em",
    marginLeft: "3em",
    marginTop: "1em",
    marginBottom: 0,
  },
  icon: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("md")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    paddingTop: "1em",
    paddingBottom: "0.5em",
    width: "100%",
  },
}));

export default function Footer({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          direction="row"
          justifyContent="center"
          style={{ margin: 0 }}
        >
          <Grid item className={classes.gridItem}>
            <Grid item container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/"
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid item container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/school"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
              >
                Our School
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/visit"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                Visit Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/curriculum"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                Curriculum
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/gallery"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Gallery
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid item container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/admissions"
                onClick={() => setValue(2)}
              >
                Admissions
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/join"
                onClick={() => setValue(false)}
              >
                Join Waiting List
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/admissions"
                onClick={() => setValue(2)}
              >
                School Fees
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/admissions"
                onClick={() => setValue(2)}
              >
                Term Dates
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid item container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid item container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/contact"
                onClick={() => setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        container
        alignItems="center"
        justifyContent={matchesMD ? "center" : "flex-end"}
        spacing={matchesMD ? 1 : 2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.linkedin.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/linkedin.svg"
            alt="linkedin logo"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/twitter.svg"
            alt="twitter logo"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/facebook.svg"
            alt="facebook logo"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com/"
          rel="noopener noreferrer"
          target="_blank"
          style={{ marginRight: matchesMD ? undefined : "1.2em" }}
        >
          <img
            src="/assets/instagram.svg"
            alt="instagram logo"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
}
