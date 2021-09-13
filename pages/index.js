import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";

import CallToAction from "../src/ui/CallToAction";
import Quote from "../src/commonComponents/Quote";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    maxHeight: "30em",
    maxwidth: "30em",
    marginLeft: "2em",
    marginRight: "2em",
    [theme.breakpoints.down("md")]: {
      maxHeight: "25em",
      maxWidth: "25em",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "20em",
      maxWidth: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: "15em",
      maxWidth: "15em",
    },
  },
  heroTitle: {
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
  },
  joinButton: {
    ...theme.typography.join,
    borderRadius: 50,
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.cream,
    height: 45,
    width: 175,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    height: 45,
    width: 175,
    fontSize: "0.9rem",
  },
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    padding: 7,
    fontSize: "0.9rem",
  },
  buttonContainer: {
    marginTop: "1em",
  },
  mainContainer: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  icon: {
    maxHeight: "17em",
    maxwidth: "17em",
  },
  schoolContainer: {
    marginTop: "5em",
    marginBottom: "5em",
  },
  paragraphText: {
    color: theme.palette.grey[700],
  },
  specialText: {
    fontFamily: "caveat brush",
    color: theme.palette.common.orange,
    fontSize: "1.5rem",
  },
  cardBlockContainer: {
    minHeight: "60em",
    backgroundColor: theme.palette.grey[200],
  },
  cardTitle: {
    color: theme.palette.common.orange,
    fontFamily: "caveat brush",
  },
  card: {
    borderRadius: 0,
    boxShadow: "none",
    padding: "3em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: "1.5em",
      paddingBottom: "1.5em",
    },
  },
  infoBackground: {
    backgroundImage: `url("/assets/contactBackground.svg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  heroBackground: {
    backgroundImage: `url("/assets/heroBackground.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    height: "50em",
    [theme.breakpoints.down("md")]: {
      height: "40em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "30em",
    },
  },
}));

export default function LandingPage({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Montessori School Ages 2.5 - 6 | Fox Tree Kids
        </title>
        <meta
          name="description"
          key="description"
          content="Fox Tree Kids is a Montessori Nursery School for children aged 2.5 - 6 years, located in Hampstead, Notting Hill and Walthamstow, London. Join our Waiting List now!"
        />
        <meta
          property="og:title"
          content="Making Montessori Education accessible for all children | Fox Tree Kids"
          key="og:title"
        />
        {/* --- ADD URL ONCE DEPLOYED --- */}
        <meta property="og:url" key="og:url" content="" />{" "}
        <link rel="canonical" key="canonical" href="" />
      </Head>
      <Grid item>
        {/*-----Hero Block -----*/}
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.heroBackground}
        >
          <Grid item>
            <Typography
              variant="h2"
              align="center"
              style={{ marginTop: matchesXS ? "0.5em" : "2em" }}
              className={classes.heroTitle}
            >
              Fox Tree Kids <br /> Montessori School <br /> 2.5 - 6 years
            </Typography>
            <Grid
              item
              container
              direction={"row"}
              justifyContent="center"
              alignItems={matchesSM ? "center" : undefined}
              spacing={matchesSM ? 0 : 2}
              className={classes.buttonContainer}
              style={{ marginBottom: matchesXS ? "1em" : 0 }}
            >
              <Hidden mdDown>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.joinButton}
                    onClick={() => setValue(false)}
                    component={Link}
                    
                    href="/join"
                    style={{ marginBottom: matchesXS ? "1em" : 0 }}
                  >
                    Join Waiting List
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                    onClick={() => {
                      setValue(1);
                      setSelectedIndex(0);
                    }}
                    component={Link}
                    
                    href="/school"
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
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*-----Quote Block/Component -----*/}
      <Quote info="The greatest sign of success for a teacher is to be able to say, 'The childen are now working as if I did not exist'" />
      <Grid item>
        {/*-----Our School Block -----*/}
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justifyContent={matchesSM ? "center" : "flex-start"}
          alignItems="center"
          className={classes.schoolContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? "1em" : "5em",
              marginRight: matchesSM ? "1em" : 0,
              maxWidth: "30em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h3">Our School</Typography>
            <Typography
              variant="subtitle1"
              paragraph
              className={classes.paragraphText}
            >
              Founded in 2002.
            </Typography>
            <Typography
              variant="subtitle1"
              paragraph
              className={classes.paragraphText}
            >
              Across 3 sites - located in Hampstead, Notting Hill and
              Walthamstow, London...
              <span className={classes.specialText}>Visit Us!</span>
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
              component={Link}
              
              href="/school"
              className={classes.learnButton}
              style={{ marginBottom: matchesSM ? "2em" : 0 }}
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
          <Grid item>
            <img
              src="/assets/jigsaw.svg"
              alt="four piece jigsaw"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Term Dates Block -----*/}
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justifyContent={matchesSM ? "center" : "flex-end"}
          alignItems="center"
          className={classes.schoolContainer}
        >
          <Grid
            item
            style={{
              maxWidth: "30em",
              textAlign: matchesSM ? "center" : undefined,
              marginRight: matchesSM ? "1em" : 0,
              marginLeft: matchesSM ? "1em" : 0,
            }}
          >
            <Typography variant="h3">Admissions</Typography>
            <Typography
              variant="subtitle1"
              paragraph
              className={classes.paragraphText}
            >
              We are now accepting applications for 2022/23.
            </Typography>
            <Typography
              variant="subtitle1"
              paragraph
              className={classes.paragraphText}
            >
              Join the
              <span className={classes.specialText}> waiting list.</span>
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setValue(2);
              }}
              component={Link}
              
              href="/admissions"
              className={classes.learnButton}
              style={{ marginBottom: matchesSM ? "2em" : 0 }}
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
          <Grid
            item
            style={{
              marginRight: matchesSM ? 0 : "5em",
            }}
          >
            <img
              src="/assets/schedule.svg"
              alt="wall calender"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Curriculum Block -----*/}
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justifyContent={matchesSM ? "center" : "flex-start"}
          alignItems="center"
          className={classes.schoolContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              marginRight: matchesSM ? 0 : "2em",
              maxWidth: "30em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
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
              style={{
                marginLeft: matchesXS ? "0.5em" : 0,
                marginRight: matchesXS ? "0.5em" : 0,
              }}
            >
              These subjects create the core of our
              <span className={classes.specialText}> curriculum.</span>
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              component={Link}
              
              href="/curriculum"
              style={{ marginBottom: matchesSM ? "2em" : 0 }}
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
          <Grid item>
            <img
              src="/assets/puzzleBulb.svg"
              alt="bulb made of four puzzle pieces"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Card Block -----*/}
        <Grid
          container
          className={classes.cardBlockContainer}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Card className={classes.card}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography
                      variant="h2"
                      className={classes.cardTitle}
                      gutterBottom
                    >
                      Our Approach to Education in Childhood
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Making Montessori Education accessible for all.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid container justifyContent="center">
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
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Information Block -----*/}
        <Grid
          container
          direction="row"
          style={{ height: "60em" }}
          alignItems="center"
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesXS ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{
                marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                marginBottom: matchesXS ? "6em" : 0,
              }}
            >
              <Grid container direction="column">
                <Typography variant="h3">About Us</Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: theme.palette.grey[700],
                    marginBottom: "0.5em",
                  }}
                >
                  Who are we?
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    onClick={() => {
                      setValue(3);
                    }}
                    component={Link}
                    
                    href="/about"
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
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h3">Contact Us</Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: theme.palette.grey[700],
                    marginBottom: "0.5em",
                  }}
                >
                  Get in touch!
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    onClick={() => {
                      setValue(4);
                    }}
                    component={Link}
                    
                    href="/contact"
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
        {/*-----Call To Action Block -----*/}
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
