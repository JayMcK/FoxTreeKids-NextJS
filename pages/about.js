import React, { useMemo, useState } from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";

import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  aboutText: {
    marginLeft: "10em",
    marginRight: "10em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "5em",
      marginRight: "5em",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2em",
      marginRight: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1em",
      marginRight: "1em",
    },
    fontStyle: "italic",
    color: theme.palette.common.blue,
  },
  foundationContainer: {
    marginBottom: "5em",
    marginTop: "5em",
  },
  scroll: {
    height: "30em",
    width: "30em",
    [theme.breakpoints.down("md")]: {
      height: "20em",
      width: "20em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "15em",
      width: "15em",
    },
  },
  bodyText: {
    color: theme.palette.grey[500],
  },
  bodyTextBold: {
    color: theme.palette.grey[500],
    fontWeight: 600,
  },
  profilePicture: {
    width: "20em",
    cursor: "pointer",
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down("xs")]: {
      width: "18em",
    },
  },
  teamContainer: {
    marginBottom: "5em",
  },
  cardContainer: {
    marginTop: "2em",
    marginLeft: "1em",
    marginRight: "1em",
  },
  teamBackground: {
    backgroundImage: `url("/assets/teamBackground.svg")`,
  },
  card: {
    borderRadius: 0,
    backgroundColor: "transparent",
    borderColor: theme.palette.common.blue,
    borderWidth: 2,
  },
  profileButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  teamDialogBackground: {
    backgroundImage: `url("/assets/teamDialogBackground.svg")`,
    backgroundColor: "#ffff",
  },
  backButton: {
    fontFamily: "Palanquin",
    color: theme.palette.common.orange,
    fontSize: "1rem",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  infoText: {
    fontFamily: "Palanquin",
    fontSize: "1.2rem",
  },
  profileImage: {
    [theme.breakpoints.down("sm")]: {
      width: "20em",
    },
    boxShadow: theme.shadows[3],
  },
}));

export default function About({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [profile, setProfile] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const teamProfiles = useMemo(
    () => [
      {
        name: "Lexie Wu",
        position: "Founder",
        image: "/assets/teamEight.jpg",
        info: "Born in Italy, Lexie Wu was a Montessori Directress for 40 years before opening Fox Tree Kids. She has seen, first hand, how a Montessori education can aid a child's development through education and through life beyond academic education which has further fuelled her passion for the pedadogy.",
      },
      {
        name: "Daniele Arias",
        position: "Head of School",
        image: "/assets/teamOne.jpg",
        info: "Daniele was the Head Directress of Fox Tree Kids since it's opening in 2002, up until 2019. Seeing the school community grow over the years, Daniele enjoys her work as the Head of School tremendously.",
      },
      {
        name: "Mahi Mathews",
        position: "Admissions Officer",
        image: "/assets/teamTwo.jpg",
        info: "Having been in HR for over a decade alongside her bubbly personality, Mahi is a perfect fit for our school. As the first staff member that many of our prospective students and future staff members meet, she loves people and is passionate about Montessori education.",
      },
      {
        name: "Jamila Frederick",
        position: "Head of HR",
        image: "/assets/teamFive.jpg",
        info: "Working closer with Mahi, Jamila overseas all admissions to the school - both for places in the Children's House, and for open positions on our staff. Having worked in HR for 3 years since completing her Masters in Human Resources, Jamila keeps the school running smoothly!",
      },
      {
        name: "Shaurya Hines",
        position: "Head Directress",
        image: "/assets/teamThree.jpg",
        info: "Shaurya has been with us at Fox Tree Kids for 2 years, and has become a highly valued member of the team. With a deep understanding of Montessori pedagogy and a strong curiosity for consistent self-development, she has developed into a fantastic Assistant Directress for Daniele.",
      },
      {
        name: "Ira Mcfarland",
        position: "Assistant Directress",
        image: "/assets/teamSeven.jpg",
        info: "As Shaurya's Assistant Directress, Irfa has been an incredible support in the classroom over the past 2 years. Ira's passion for Montessori came from herself being educated in a Montessori school up until 12 years old.",
      },
      {
        name: "Stanislaw Barnes",
        position: "Safeguarding Officer",
        image: "/assets/teamNine.jpg",
        info: "As the most recent joiner of our community, Stanislaw has been with us for 6 months. With a 5-year career in Safeguaring prior to joining us, Stanislaw is extremeley knowledgeable and is a fantastic addition to our team.",
      },
      {
        name: "Keziah Snider",
        position: "Chef",
        image: "/assets/teamFour.jpg",
        info: "After 4 years as a Chef for a catering company, Keziah joined our team and has been cooking yummy meals for our pupils and staff members ever since joining us!",
      },
      {
        name: "Spencer Talbot",
        position: "Assistant",
        image: "/assets/teamSix.jpg",
        info: "Handy with some gloves for any garden maintence, and with a pair of scissors if resources are needed in the classroom, or even if one of our printers goes down and we need a hand in the office, Spencer is who we call!",
      },
    ],
    []
  );

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">About Us - History & Team | Fox Tree Kids</title>
        <meta
          name="description"
          key="description"
          content="Founded in 2002, our Montessori Nursery School for 2.5 - 6 years seeks to provide a solid educational and social foundation for children. Learn more about how our team fulfils this vision!"
        />
        <meta
          property="og:title"
          content="Making Montessori Education accessible for all children | About Us"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="fox-tree-kids-nextjs.vercel.app/about"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://fox-tree-kids-nextjs.vercel.app/about"
        />
      </Head>
      <Grid
        item
        align={matchesMD ? "center" : undefined}
        style={{
          marginTop: "1em",
          marginBottom: "2em",
          marginLeft: matchesSM ? 0 : "5em",
        }}
      >
        <Typography
          variant="h1"
          style={{ color: theme.palette.common.blue, marginTop: "1em" }}
        >
          About Us
        </Typography>
      </Grid>
      <Grid item>
        {/*-----About Us Block -----*/}
        <Grid container>
          <Grid item align="center" className={classes.aboutText}>
            <Typography variant="body1">
              Founded on the belief that adults do not teach, instead, their
              role is to remove barriers to the natural development of children.
              Through close observation of each child, Montessori Teachers are
              able to create a tailored educational path to suit the individual
              needs, interests and potentialities of each child.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Foundations Block -----*/}
        <Grid
          container
          direction="column"
          className={classes.foundationContainer}
          alignItems={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{ marginLeft: matchesSM ? 0 : "5em", marginBottom: "1em" }}
            align={matchesSM ? "center" : undefined}
          >
            <Typography variant="h3">Foundations of our Pedagogy</Typography>
          </Grid>
          <Grid container direction={matchesSM ? "column" : "row"}>
            <Grid
              item
              container
              justifyContent={matchesSM ? "center" : undefined}
              sm
              style={{ marginLeft: matchesSM ? 0 : "5em" }}
            >
              <Grid
                item
                align={matchesSM ? "center" : undefined}
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : 0,
                  marginBottom: matchesSM ? "2em" : 0,
                }}
              >
                <Typography
                  variant="body1"
                  paragraph
                  className={classes.bodyTextBold}
                >
                  Montessori Education for all
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  className={classes.bodyText}
                >
                  Based on Montessori pedagogy, Fox Tree Kids approach to
                  education was formed. We takes the core principles of
                  Montessori pedagogy; adapting our approach to account for the
                  advances and changes in modern society.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  className={classes.bodyText}
                >
                  It seeks unlock the innate love of learning in every child by
                  making learning experiences accessible, interesting and
                  enjoyable, with enough challenge to develop confidence and
                  ability.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container sm justifyContent="center" alignItems="center">
              <img
                src="/assets/scroll.svg"
                alt="ancient scroll"
                className={classes.scroll}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Our Team Block -----*/}
        <Grid container direction="column" className={classes.teamBackground}>
          <Grid
            item
            style={{ marginTop: "5em", marginLeft: matchesSM ? 0 : "5em" }}
            align={matchesMD ? "center" : undefined}
          >
            <Typography variant="h3">Our Team</Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              className={classes.teamContainer}
            >
              {teamProfiles.map((profile) => (
                <Grid
                  item
                  className={classes.cardContainer}
                  align="center"
                  key={profile.name}
                >
                  <Card variant="outlined" className={classes.card}>
                    <CardContent>
                      <Button
                        disableRipple
                        className={classes.profileButton}
                        onClick={() => {
                          setProfile(profile);
                          setDialogOpen(true);
                        }}
                      >
                        <img
                          src={profile.image}
                          alt="profile pictures"
                          className={classes.profilePicture}
                        />
                      </Button>
                      <Typography variant="h4">{profile.name}</Typography>
                      <Typography
                        variant="h5"
                        style={{ color: theme.palette.grey[700] }}
                      >
                        {profile.position}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----CallToAction Block -----*/}
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
      {/*-----Dialog Block -----*/}
      <Dialog
        fullScreen={matchesXS ? true : false}
        fullWidth
        maxWidth="lg"
        open={dialogOpen}
        style={{ zIndex: 1302 }}
        onClose={() => setDialogOpen(false)}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={classes.teamDialogBackground}
          style={{ height: "60em" }}
        >
          <Grid item style={{ marginTop: "5em" }}>
            <img
              src={profile.image}
              className={classes.profileImage}
              alt="profile"
            />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h3">
              {profile.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              variant="subtitle1"
              style={{ fontWeight: "bold" }}
            >
              {profile.position}
            </Typography>
          </Grid>
          <Grid item align="center" style={{ maxWidth: "30em" }}>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.infoText}
              style={{ marginLeft: "1em", marginRight: "1em" }}
            >
              {profile.info}
            </Typography>
          </Grid>
          <Button
            className={classes.backButton}
            onClick={() => setDialogOpen(false)}
            disableRipple
            style={{ marginBottom: "2em" }}
          >
            Back
          </Button>
        </Grid>
      </Dialog>
    </Grid>
  );
}
