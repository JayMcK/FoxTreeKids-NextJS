import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CallToAction from "../src/ui/CallToAction";
import Quote from "../src/commonComponents/Quote";

const useStyles = makeStyles((theme) => ({
  tree: {
    height: "30em",
    width: "30em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "15em",
      width: "15em",
    },
    marginBottom: "2em",
  },
  ourSchoolBackground: {
    backgroundImage: `url("/assets/ourSchoolBackground.svg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  ourSchoolHeroBackground: {
    backgroundImage: `url("/assets/ourSchoolHeroBackground.jpg")`,
    backgroundRepeat: "no-repeat",
    height: "50em",
    [theme.breakpoints.down("md")]: {
      height: "40em",
    },
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "top",
  },
  paragraphText: {
    color: theme.palette.grey[700],
  },
  specialText: {
    fontFamily: "caveat brush",
    color: theme.palette.common.orange,
    fontSize: "1.5rem",
  },
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    padding: 7,
    fontSize: "0.9rem",
  },
  houseIcon: {
    [theme.breakpoints.down("sm")]: {
      height: "15em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "10em",
    },
  },
}));

export default function OurSchool({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item>
      <Head>
        <title key="title">Our School | Fox Tree Kids</title>
        <meta
          name="description"
          key="description"
          content="Based on Montessori pedagogy, our school aims to provide a rich Montessori educational experience to each child. Take a look at our curriculum, gallery or visit our school to find out more!"
        />
        <meta
          property="og:title"
          content="Making Montessori Education accessible for all children | Our School"
          key="og:title"
        />
        {/* --- ADD URL ONCE DEPLOYED --- */}
        <meta property="og:url" key="og:url" content="" />
        <link rel="canonical" key="canonical" href="" />
      </Head>
      <Grid container direction="column">
        <Grid item>
          {/*-----Our School Block -----*/}
          <Grid
            container
            className={classes.ourSchoolHeroBackground}
            justifyContent={matchesSM ? "center" : undefined}
          >
            <Grid
              item
              style={{
                marginTop: "3em",
                marginLeft: matchesSM ? 0 : "5em",
              }}
            >
              <Typography variant="h2">Our School</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/*-----Quote Block/Component -----*/}
        <Quote
          info="The land is where our roots are. The children must be taught to
      feel and live in harmony with the Earth."
        />
        <Grid item>
          {/*-----Curriculum/Children's House Block -----*/}
          <Grid
            container
            direction="row"
            style={{ height: "60em" }}
            alignItems="center"
            className={classes.ourSchoolBackground}
          >
            <Grid
              item
              container
              style={{
                textAlign: matchesXS ? "center" : "inherit",
              }}
              direction={matchesSM ? "column" : "row"}
            >
              <Grid
                item
                sm
                style={{
                  marginLeft: matchesXS ? "1em" : matchesSM ? "2em" : "5em",
                  marginRight: matchesXS ? "1em" : 0,
                  marginBottom: matchesXS ? "6em" : matchesSM ? "3em" : 0,
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h3">Curriculum</Typography>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    className={classes.paragraphText}
                  >
                    Practical Life, Sensorial, Maths, Language and Culture.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    className={classes.paragraphText}
                  >
                    These subjects create
                    <span className={classes.specialText}>
                      {" "}
                      the core of our curriculum.
                    </span>
                  </Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      onClick={() => {
                        setValue(1);
                        setSelectedIndex(2);
                      }}
                      component={Link}
                      
                      href="/curriculum"
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
                  marginLeft: matchesXS ? "1em" : 0,
                  textAlign: matchesXS ? "center" : "right",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h3">Gallery</Typography>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    className={classes.paragraphText}
                  >
                    For children ages 2.5 - 6.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    className={classes.paragraphText}
                  >
                    Our community prepares the child’s mind,{" "}
                    {matchesXS ? undefined : <br />} body and soul
                    <span className={classes.specialText}>
                      {" "}
                      for education and for life.
                    </span>
                  </Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      onClick={() => {
                        setValue(1);
                        setSelectedIndex(3);
                      }}
                      component={Link}
                      
                      href="/gallery"
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
        <Grid item>
          {/*-----Visit Us Block -----*/}

          <Grid
            container
            direction="column"
            alignItems="center"
            style={{
              marginTop: "5em",
              marginBottom: "5em",
            }}
          >
            <Grid item>
              <img
                src="/assets/house.svg"
                alt="house icon"
                className={classes.houseIcon}
              />
            </Grid>
            <Grid item container direction="column" alignItems="center">
              <Typography
                variant="h2"
                style={{ color: theme.palette.common.orange }}
              >
                Visit Us
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
                Come and experience a morning at our Children’s House with your
                child.
              </Typography>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => {
                    setValue(1);
                    setSelectedIndex(1);
                  }}
                  component={Link}
                  
                  href="/visit"
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
          {/*----- Call To Action Block -----*/}
          <CallToAction
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
