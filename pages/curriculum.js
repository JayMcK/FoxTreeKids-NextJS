import React, { useMemo } from "react";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  book: {
    height: "20em",
    width: "30em",
    [theme.breakpoints.down("md")]: {
      height: "15em",
      width: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "10em",
      width: "20em",
    },
  },
  icon: {
    height: "80%",
    width: "80%",
  },
  iconTitle: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  iconContainer: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5em",
    },
  },
  subjectIcon: {
    [theme.breakpoints.down("md")]: {
      height: "20em",
      width: "20em",
    },
  },
}));

export default function Curriculum({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const info = [
    "At 2.5 years old, the child is experiencing five Sensitive Periods: Order, Language, Social Behaviour, Coordination of movement and Refinement of the Senses",
    "These Sensitive Periods relate directly to different human characteristics the child is unconsciously incarnating within him, through the figurative ‘spotlight’ these Sensitive Periods shine on various aspects within his environment which pull him towards experiencing them and in so doing, extracting the development benefits within them.",
    "Further to the Sensitive Periods, the child is also still in possession of his Absorbent Mind; unconsciously absorbing all impressions and experiences he can perceive through his senses and beyond, with these impressions being stored in the Mneme – forever remaining unchanged and forming his mind, his ego.",
    "The Human Tendencies the child will possess for his entire human existence are also present; manifesting in different behaviours and characteristics which, if observed, can allow us to remove barriers to their full expression – physically, mentally and spiritually.",
    "At Fox Tree Kids,this observation and removal of barriers is what we seek to achieve of each and every child.",
  ];

  const icons = [
    {
      title: "Developing Focus",
      image: "/assets/focus.svg",
      alt: "focus icon",
    },
    {
      title: "Independent Thinking",
      image: "/assets/headPuzzle.svg",
      alt: "head with puzzle pieces as brain",
    },
    {
      title: "Prep for Education",
      image: "/assets/graduate.svg",
      alt: "graduation hat and scroll",
    },
  ];

  const subjects = useMemo(
    () => [
      {
        name: "Practical Life",
        info: "Practical Life is the first area of the Children’s House that the children interact with upon joining the school. This is for several reasons – one being that the children will already be relatively familiar with many of these items as they are often found in the home and therefore will attracted to interacting with them. The children have most probably watched a family member use adult-sized versions of many of these items and activities to complete household work, and as the child has the human tendency to imitate, many children are eager to copy what they see being done in the home, at school.",
        image: "/assets/practicalLife.svg",
        backgroundColor: "#C4C4C4",
      },
      {
        name: "Sensorial",
        info: "There are two main aims of the sensorial material. To classify impressions and to refine the senses. Children under the age of 6 are heavily reliant upon their senses to explore their external world, as their reasoning mind is not yet developed. Children of this age are also experiencing a sensitive period for the refinement of sensory perception, therefore offering them something that trains their senses whilst exploring their external environment is paramount to their development. This is the thought process that birthed sensorial activities.",
        image: "/assets/sensorial.svg",
        backgroundColor: "#F37B7B",
      },
      {
        name: "Language",
        info: "Upon arrival, at around 3 years old, the child is experiencing a peak in his Sensitive Period for language. The child is fast moving from being a Physical Embryo to a Spiritual Embryo and by this point, his oral language is near fully formed, yet there is often much to be done with regard to structure and grammar. The role of the Children’s House is to provide an environment in which he can build upon the language he has already incarnated in his first few years of life.",
        image: "/assets/language.svg",
        backgroundColor: "#85DB77",
      },
      {
        name: "Mathematics",
        info: "Although in the Montessori environment the child only begins work with the direct mathematical material around 4 years of age, there are many activities mathematical in nature that children can engage with in Practical Life and Sensorial; supporting the development of their mathematical minds – as they have been abstracting and calculating, instinctively, since birth. ",
        image: "/assets/mathematics.svg",
        backgroundColor: "#85DAE5",
      },
      {
        name: "Culture",
        info: "One of the child’s tasks in the first Plane of Development is therefore to adapt to his new realm, dimension, home – Earth. The only way to adapt is to make Earth part of her, by coming to know and understand it. As such, once the child has made her initial physical and psychological adaptions to her human race – between 0-3 - by coming to know himself in his new inner world and vessel – i.e. walking upright and human speech – she can now begin to understand himself in relation to his new outer world. This will allow her to complete her initial adaptions to his world, time and place; solidifying the core of his existence.",
        image: "/assets/culture.svg",
        backgroundColor: "#E580E7",
      },
    ],
    []
  );

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Curriculum | Fox Tree Kids</title>
        <meta
          name="description"
          key="description"
          content="Our Montessori Curriculum covers Practical Life, Sensorial, Mathematics, Language and Culture. Find out more about our the educational experiences we provide at our school!"
        />
        <meta
          property="og:title"
          content="Making Montessori Education accessible for all children | Curriculum"
          key="og:title"
        />
        {/* --- ADD URL ONCE DEPLOYED --- */}
        <meta property="og:url" key="og:url" content="" />
        <link rel="canonical" key="canonical" href="" />
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
          Our Curriculum
        </Typography>
      </Grid>
      <Grid item>
        {/*-----Foundations Block -----*/}
        <Grid
          container
          direction="column"
          className={classes.foundationContainer}
          alignItems={matchesSM ? "center" : undefined}
          style={{ marginBottom: "5em" }}
        >
          <Grid container direction={matchesSM ? "column" : "row"}>
            <Grid item container sm justifyContent="center" alignItems="center">
              <img
                src="/assets/book.svg"
                alt="ancient scroll"
                className={classes.book}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              justifyContent={matchesSM ? "center" : undefined}
              sm
              style={{ marginRight: matchesSM ? 0 : "5em" }}
            >
              <Grid
                item
                style={{
                  marginBottom: "1em",
                }}
                align={matchesSM ? "center" : undefined}
              >
                <Typography variant="h3">
                  Foundations of our Pedagogy
                </Typography>
              </Grid>
              <Grid
                item
                align={matchesSM ? "center" : undefined}
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : 0,
                  marginBottom: matchesSM ? "2em" : 0,
                }}
              >
                {info.map((i) => (
                  <Typography key={i} variant="body1" paragraph>
                    {i}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Icon Block -----*/}
        <Grid container direction={matchesSM ? "column" : "row"}>
          {icons.map((icon) => (
            <Grid
              key={icon.title}
              item
              container
              direction="column"
              sm
              justifyContent="center"
              alignItems="center"
              align={matchesSM ? "center" : undefined}
              className={classes.iconContainer}
            >
              <Grid item>
                <Typography variant="h3" className={classes.iconTitle}>
                  {icon.title}
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: "1em" }} align="center">
                <img src={icon.image} alt={icon.alt} className={classes.icon} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {subjects.map((subject) => (
        <Grid item key={subject.name}>
          {/*-----Subjects Block -----*/}
          <Grid
            container
            direction="column"
            style={{
              backgroundColor: subject.backgroundColor,
            }}
          >
            <Grid
              item
              style={{
                marginTop: "5em",
                marginLeft: matchesMD ? 0 : "5em",
                marginBottom: "1em",
              }}
            >
              <Typography
                variant="h3"
                style={{ color: "#000" }}
                align={matchesMD ? "center" : undefined}
              >
                {subject.name}
              </Typography>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"}>
              <Grid
                item
                lg
                style={{
                  marginLeft: matchesMD ? "1em" : "5em",
                  marginBottom: matchesMD ? "2em" : 0,
                  marginRight: matchesMD ? "1em" : 0,
                }}
              >
                <Typography
                  variant="body1"
                  style={{ color: "#fff" }}
                  align={matchesMD ? "center" : undefined}
                >
                  {subject.info}
                </Typography>
              </Grid>
              <Grid item lg style={{ marginBottom: "5em" }} align="center">
                <img
                  src={subject.image}
                  alt={subject.name}
                  className={classes.subjectIcon}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Grid item>
        {/*-----CallToAction Block -----*/}
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
