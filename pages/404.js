import React from "react";
import Link from "../src/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  foxImage: {
    height: "15em",
  },
  linkText: {
    textDecoration: "none",
    color: theme.palette.common.blue,
    fontWeight: "bold",
  },
  homeButton: {
    ...theme.typography.join,
    backgroundColor: theme.palette.common.orange,
    borderRadius: "50px",
    height: 60,
    width: 150,
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export default function NotFound() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const links = [
    { name: "Join Waiting List", to: "/join" },
    { name: "Visit Us", to: "/visit" },
    { name: "Contact Us", to: "/contact" },
    { name: "Admissions", to: "/admissions" },
    { name: "Our School", to: "/school" },
  ];

  return (
    <Grid item style={{ minHeight: "100vh" }}>
      <Grid container direction="column">
        <Grid
          item
          style={{
            marginTop: "5em",
            marginLeft: matchesMD ? "1em" : 0,
            marginRight: matchesMD ? "1em" : 0,
          }}
          align="center"
        >
          {/* ----- Info Block ----- */}
          <Typography variant="h2" style={{ fontSize: "5rem" }}>
            404
          </Typography>
          <Typography variant="h3">
            Sorry, we couldn't find that page...
          </Typography>
        </Grid>
        <Grid item align="center">
          <img src="/assets/fox.svg" alt="fox" className={classes.foxImage} />
        </Grid>
        <Grid
          item
          align="center"
          style={{
            marginLeft: matchesMD ? "1em" : 0,
            marginRight: matchesMD ? "1em" : 0,
          }}
        >
          <Typography variant="subtitle1">
            But we're here to help! Maybe one of these will point you in the
            right direction?
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        {/* ----- Links Block ----- */}
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justifyContent="center"
          style={{ marginTop: "2em" }}
        >
          {links.map((link) => (
            <Grid item sm align="center">
              <Typography
                className={classes.linkText}
                component={Link}
                href={link.to}
                variant="subtitle1"
              >
                {link.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        {/* ----- Home Button Block ----- */}
        <Grid container justifyContent="center">
          <Grid item style={{ marginTop: "2em", marginBottom: "3em" }}>
            <Button
              component={Link}
              href="/home"
              className={classes.homeButton}
              variant="contained"
            >
              Go Home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
