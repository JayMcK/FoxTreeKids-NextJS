import React, { useState, useEffect } from "react";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Hidden from "@material-ui/core/Hidden";

import CallToAction from "../src/ui/CallToAction";

import { getImages, getHorizontalImages } from "../src/services/galleryService";

const useStyles = makeStyles((theme) => ({
  smallGalleryImage: {
    [theme.breakpoints.down("sm")]: {
      width: "30em",
      marginBottom: "1em",
      boxShadow: theme.shadows[5],
    },
    [theme.breakpoints.down("xs")]: {
      width: "20em",
      marginBottom: "1em",
      boxShadow: theme.shadows[5],
    },
  },
  mediumGalleryImage: {
    width: "25em",
    boxShadow: theme.shadows[5],
    cursor: "pointer",
  },
  button: {
    ...theme.typography.join,
    color: theme.palette.common.blue,
    fontSize: "1.5rem",
    borderColor: theme.palette.common.orange,
    borderWidth: 3,
    marginBottom: "1em",
  },
  dialogImage: {
    width: "50em",
  },
  imageButton: {
    "&:hover": {
      backgroundColor: theme.palette.common.orange,
    },
  },
}));

export default function Gallery({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const [images, setImages] = useState([]);
  const [smallTotal, setSmallTotal] = useState(5);
  const [mediumTotal, setMediumTotal] = useState(30);
  const [selectedImage, setSelectedImage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (matchesSM) {
      setImages(getImages(smallTotal));
    } else {
      setImages(getHorizontalImages(mediumTotal));
    }
  }, [smallTotal, mediumTotal, matchesSM]);

  const smallGallery = (
    <Grid container direction="column">
      <Grid item align="center">
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt="gallery"
            className={classes.smallGalleryImage}
          />
        ))}
      </Grid>
    </Grid>
  );

  const mediumGallery = (
    <Grid container direction="row" justifyContent="center">
      {images.map((image) => (
        <Grid item key={image}>
          <Button
            className={classes.imageButton}
            onClick={() => {
              setDialogOpen(true);
              setSelectedImage(image);
            }}
          >
            <img
              src={image}
              alt="gallery"
              className={classes.mediumGalleryImage}
            />
          </Button>
        </Grid>
      ))}
    </Grid>
  );

  const moreButton = (
    <Grid item align="center" style={{ marginLeft: "1em", marginRight: "1em" }}>
      <Button
        className={classes.button}
        variant="outlined"
        onClick={() => {
          const num = smallTotal + 5;
          setSmallTotal(num);
          setImages(getImages(smallTotal));
        }}
      >
        More Images from our Children's House
      </Button>
    </Grid>
  );

  const toTopButton = (
    <Grid item align="center" style={{ marginBottom: "5em" }}>
      <Button
        className={classes.button}
        style={{ marginTop: matchesSM ? undefined : "1em" }}
        variant="outlined"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Back to Top
      </Button>
    </Grid>
  );

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Gallery | Fox Tree Kids</title>
        <meta
          name="description"
          key="description"
          content="Our pupils are provided with rich, hands-on educational experiences, that cover the school's Montessori pedagogy curriculum and beyond. Here are some images of their time in our Children's House!"
        />
        <meta
          property="og:title"
          content="Making Montessori Education accessible for all children | Gallery"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="fox-tree-kids-nextjs.vercel.app/gallery"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://fox-tree-kids-nextjs.vercel.app/gallery"
        />
      </Head>
      <Grid
        item
        align={matchesMD ? "center" : undefined}
        style={{
          marginTop: "1em",
          marginBottom: "2em",
          marginLeft: matchesMD ? 0 : "5em",
        }}
      >
        <Typography
          variant="h1"
          style={{ color: theme.palette.common.blue, marginTop: "1em" }}
        >
          Gallery
        </Typography>
      </Grid>
      <Grid item>
        {/*-----Gallery Block -----*/}
        {matchesSM ? smallGallery : mediumGallery}
      </Grid>
      {smallTotal < 76 && matchesSM ? moreButton : null}
      {toTopButton}
      <Hidden smDown>
        <Dialog
          style={{ zIndex: 1302 }}
          maxWidth="lg"
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        >
          <img
            src={selectedImage}
            alt="pupil at nursery school"
            className={classes.dialogImage}
          />
        </Dialog>
      </Hidden>
      <Grid item>
        {/*----- CallToAction Block -----*/}
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
