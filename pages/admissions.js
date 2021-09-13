import React, { useState } from "react";
import Head from "next/head";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";

import CallToAction from "../src/ui/CallToAction";
import Fees from "../src/components/fees";
import TermDates from "../src/components/termdates";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "caveat brush",
    color: theme.palette.common.blue,
    fontSize: "1.5rem",
  },
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    padding: 7,
    fontSize: "0.9rem",
  },
  checklistIcon: {
    [theme.breakpoints.down("sm")]: {
      height: "15em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "10em",
    },
  },
  joinContainer: {
    paddingBottom: "5em",
    paddingTop: "5em",
    backgroundColor: theme.palette.grey[200],
    height: "60em",
  },
}));

export default function Admissions({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [dialogOpen, setDialogOpen] = useState({
    fees: false,
    dates: false,
  });

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Admissions - Join our Waiting List</title>
        <meta
          name="description"
          key="description"
          content="Admissions | We are currently accepting new pupils for the academic year 2021/22. Join our Waiting List in 3 minutes and check out our School Fees and Term Dates. Contact our Head of Admissions for further information."
        />
        <meta
          property="og:title"
          content="Making Montessori Education accessible for all children | Admissions"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="fox-tree-kids-nextjs.vercel.app/admissions"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://fox-tree-kids-nextjs.vercel.app/admissions"
        />
      </Head>
      <Grid item>
        {/*----- Join Block -----*/}
        <Grid
          item
          align={matchesSM ? "center" : undefined}
          style={{
            marginTop: "3.5em",
            marginBottom: "2em",
            marginLeft: matchesSM ? 0 : "5em",
          }}
        >
          <Typography
            variant="h1"
            style={{ color: theme.palette.common.blue, marginTop: "1em" }}
          >
            Admissions
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={classes.joinContainer}
        >
          <Grid item>
            <img
              src="/assets/checklist.svg"
              alt="house icon"
              className={classes.checklistIcon}
            />
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <Typography
              variant="h2"
              style={{ color: theme.palette.common.orange }}
            >
              Join waiting list
            </Typography>
            <Typography
              variant="subtitle1"
              paragraph
              className={classes.paragraphText}
              align="center"
              style={{
                marginLeft: matchesSM ? "1em" : 0,
                marginRight: matchesSM ? "1em" : 0,
              }}
            >
              We are now accepting applications for 2022/23. Join the{" "}
              <span className={classes.specialText}>waiting list.</span>
            </Typography>
            <Grid item>
              <Button
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  setValue(false);
                }}
                component={Link}
                href="/join"
                style={{
                  color: theme.palette.common.orange,
                  borderColor: theme.palette.common.orange,
                }}
              >
                Learn More <span style={{ marginRight: 10 }}></span>
                <img
                  src="/assets/buttonArrow.svg"
                  alt="right arrow"
                  width={15}
                  height={15}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----School Fees/Term Dates -----*/}
        <Grid
          container
          direction="row"
          style={{
            marginTop: "5em",
            marginBottom: "5em",
          }}
          alignItems="center"
        >
          <Grid
            item
            container
            justifyContent={matchesSM ? undefined : "space-between"}
            style={{
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesSM ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? "1em" : "2em",
                marginBottom: matchesXS ? "6em" : matchesSM ? "3em" : 0,
                marginLeft: matchesXS ? "1em" : matchesSM ? "2em" : "5em",
              }}
            >
              <Grid item>
                <Typography variant="h3">School Fees</Typography>
                <Typography
                  variant="subtitle1"
                  paragraph
                  className={classes.paragraphText}
                >
                  Priced monthly and with the flexibility to include or exclude
                  school meals and extended hours, we have different packages
                  <span className={classes.specialText}>
                    {" "}
                    to suit your schedule.
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    onClick={() => {
                      setValue(false);
                      setDialogOpen({ ...dialogOpen, fees: true });
                    }}
                    style={{
                      color: theme.palette.common.orange,
                      borderColor: theme.palette.common.orange,
                    }}
                  >
                    Learn More
                    <span style={{ marginRight: 10 }}></span>
                    <img
                      src="/assets/buttonArrow.svg"
                      alt="right arrow"
                      width={15}
                      height={15}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? "1em" : matchesSM ? "2em" : "5em",
                marginLeft: matchesXS ? "1em" : "2em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h3">Term Dates</Typography>
                <Typography
                  variant="subtitle1"
                  paragraph
                  className={classes.paragraphText}
                >
                  Open all year round, from 8am - 6:30pm.
                </Typography>
                <Typography
                  variant="subtitle1"
                  paragraph
                  className={classes.paragraphText}
                >
                  We offer the flexibility of full time or tailored part-time
                  places
                  <span className={classes.specialText}>
                    {" "}
                    to suit your needs.
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    onClick={() => {
                      setValue(false);
                      setDialogOpen({ ...dialogOpen, dates: true });
                    }}
                    style={{
                      color: theme.palette.common.orange,
                      borderColor: theme.palette.common.orange,
                    }}
                  >
                    Learn More <span style={{ marginRight: 10 }}></span>
                    <img
                      src="/assets/buttonArrow.svg"
                      alt="right arrow"
                      width={15}
                      height={15}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      <Dialog
        fullWidth
        fullScreen={matchesXS || dialogOpen.dates}
        open={dialogOpen.fees || dialogOpen.dates}
        onClose={() => setDialogOpen({ fees: false, dates: false })}
        style={{ zIndex: 1302 }}
      >
        {dialogOpen.fees === true && <Fees setDialogOpen={setDialogOpen} />}
        {dialogOpen.dates === true && (
          <TermDates setDialogOpen={setDialogOpen} />
        )}
      </Dialog>
    </Grid>
  );
}
