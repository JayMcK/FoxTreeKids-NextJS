import React, { useState, Fragment } from "react";
import Head from "next/head";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import CallToAction from "../src/ui/CallToAction";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  image: {
    height: "60em",
  },
  infoText: {
    color: theme.palette.common.blue,
  },
  infoIcon: {
    marginRight: "1em",
    width: "1.5em",
    height: "1.5em",
  },
  textField: {
    width: "20em",
    [theme.breakpoints.down("xs")]: {
      width: "18em",
    },
  },
  dialogTextField: {
    width: "20em",
    [theme.breakpoints.down("sm")]: {
      width: "30em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "17em",
    },
  },
  sendButton: {
    ...theme.typography.join,
    fontSize: "1.2em",
    height: 45,
    width: 245,
    color: "#000",
    backgroundColor: theme.palette.common.blue,
    borderRadius: 50,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    boxShadow: theme.shadows[6],
  },
  cancelButton: {
    ...theme.typography.h5,
    color: theme.palette.common.orange,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuText: {
    fontSize: "1rem",
    color: theme.palette.grey[700],
  },
  formLabel: {
    fontSize: "1.1rem",
    color: theme.palette.common.orange,
  },
  formControlLabel: {
    fontSize: "1rem",
    color: theme.palette.common.blue,
  },
  radio: {
    color: theme.palette.common.blue,
  },
}));

export default function Visit({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const textfields = [
    {
      label: "Name",
      id: "name",
      onChange: (event) => setName(event.target.value),
      value: name,
    },
    {
      label: "Email",
      id: "email",
      onChange: (event) => onChange(event),
      value: email,
      error: emailHelper.length !== 0,
      helperText: emailHelper,
    },
    {
      label: "Phone",
      id: "phone",
      onChange: (event) => onChange(event),
      value: phone,
      error: phoneHelper.length !== 0,
      helperText: phoneHelper,
    },
  ];

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Please enter a valid email address");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\d{11}$/.test(event.target.value);

        if (!valid) {
          setPhoneHelper("Please enter a valid phone number");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const handleConfirm = () => {
    setIsLoading(true);

    const cors = "https://cors-anywhere.herokuapp.com/";
    axios
      .get(`${cors}https://us-central1-foxtreekids.cloudfunctions.net/sendMail`)
      .then((res) => {
        setIsLoading(false);
        setDialogOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

        setAlert({
          open: true,
          message: "Contact message sent successfully!",
          severity: "success",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong. Please try again!",
          severity: "error",
        });
      });
  };

  const buttonContent = (
    <Fragment>
      Send Message
      <img
        src="/assets/paperPlane.svg"
        alt="paper plane"
        style={{ height: "1em", marginLeft: "0.5em" }}
      />
    </Fragment>
  );

  return (
    <Grid
      container
      direction="row"
      style={{ marginTop: matchesMD ? 0 : "1em" }}
    >
      <Head>
        <title key="title">Contact Us | Fox Tree Kids</title>
        <meta
          name="description"
          key="description"
          content="Contact Us | For more information regarding admissions, visiting our school, career opportunities or anything else, contact us and we will be in touch!"
        />
        <meta
          property="og:title"
          content="Making Montessori Education accessible for all children | Contact Us"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="fox-tree-kids-nextjs.vercel.app/contact"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://fox-tree-kids-nextjs.vercel.app/contact"
        />
      </Head>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{ marginBottom: "5em", marginTop: matchesMD ? 0 : "2em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h3"
                align={matchesMD ? "center" : undefined}
                style={{ marginTop: "2em", lineHeight: 1 }}
                gutterBottom
              >
                Contact Us
              </Typography>
              <Typography
                variant="subtitle1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue }}
                gutterBottom
              >
                Let's talk!
              </Typography>
            </Grid>
            <Grid
              item
              container
              style={{ marginTop: "2em" }}
              justifyContent={matchesMD ? "center" : undefined}
            >
              <Grid item>
                <img
                  src="/assets/call.svg"
                  alt="telephone"
                  className={classes.infoIcon}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  className={classes.infoText}
                  style={{ fontSize: "1rem" }}
                >
                  <a
                    href="tel:02078272936"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    +44 (0) 207 827 2936
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={matchesMD ? "center" : undefined}
              style={{ marginBottom: "2em" }}
            >
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="envelope"
                  className={classes.infoIcon}
                  style={{ marginTop: "0.3em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  paragraph
                  variant="body1"
                  className={classes.infoText}
                  style={{
                    marginBottom: 0,
                  }}
                >
                  <a
                    href="mailto:visitus@foxtreekids.com"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontSize: "1rem",
                    }}
                  >
                    visitus@foxtreekids.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              {/* ----- Form Block One ------- */}
              {textfields.map((textfield) => (
                <Grid item style={{ marginBottom: "0.5em" }} key={textfield.id}>
                  <TextField
                    label={textfield.label}
                    id={textfield.id}
                    onChange={textfield.onChange}
                    value={textfield.value}
                    error={textfield.error}
                    helperText={textfield.helperText}
                    required
                    fullWidth
                    className={classes.textField}
                    size="small"
                  />
                </Grid>
              ))}
            </Grid>
            <Grid item style={{ maxWidth: "20em", marginTop: "2em" }}>
              {/* ----- Form Block Two ------- */}
              <TextField
                id="more"
                label="Tell us More!"
                multiline
                fullWidth
                className={classes.textField}
                rows={5}
                variant="outlined"
                size="small"
                onChange={(event) => setMessage(event.target.value)}
                value={message}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: "2.5em" }}>
          {/* ----- Send Button Block ------- */}
          <Button
            variant="contained"
            className={classes.sendButton}
            disabled={
              name.length === 0 ||
              email.length === 0 ||
              phone.length === 0 ||
              phoneHelper.length !== 0 ||
              emailHelper.length !== 0 ||
              message.length === 0
            }
            onClick={() => setDialogOpen(true)}
          >
            {buttonContent}
          </Button>
        </Grid>
      </Grid>
      <Hidden mdDown>
        {/* ----- Image Block - Hidden on Smaller Screens ------- */}
        <Grid item container lg={8}>
          <img
            src="/assets/contactPageBackground.jpg"
            alt="some of the class"
            className={classes.image}
          />
        </Grid>
      </Hidden>
      <Hidden lgUp>
        {/* ----- Call To Action Block - Hidden on Larger Screens ------- */}
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Hidden>
      {/* ----- Dialog Block ------- */}
      <Dialog
        fullWidth
        fullScreen={matchesSM}
        style={{ zIndex: 1302 }}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <DialogContent>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h3" align="center">
                Confirm Message
              </Typography>
            </Grid>
            <Grid
              item
              align="center"
              style={{
                maxWidth: matchesXS ? "20em" : matchesSM ? "40em" : "20em",
                marginTop: "2em",
              }}
            >
              <Typography
                variant="subtitle1"
                style={{ color: theme.palette.grey[700], fontSize: "1rem" }}
              >
                Once we receive your details, Jamila Frederick our Head of HR
                will be in touch in order to provide any useful information
                whilst also answering any questions you may have.
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: "3em" }}>
              <Grid item container direction="column" alignItems="center">
                {/* ----- Form Block One ------- */}
                {textfields.map((textfield) => (
                  <Grid
                    item
                    style={{ marginBottom: "0.5em" }}
                    key={textfield.id}
                  >
                    <TextField
                      label={textfield.label}
                      id={textfield.id}
                      onChange={textfield.onChange}
                      value={textfield.value}
                      error={textfield.error}
                      helperText={textfield.helperText}
                      required
                      fullWidth
                      className={classes.dialogTextField}
                      size="small"
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid item container direction="column" justifyContent="center">
                <Grid item style={{ maxWidth: "20em", marginTop: "2em" }}>
                  <TextField
                    id="more"
                    label="Tell us More!"
                    multiline
                    fullWidth
                    className={classes.dialogTextField}
                    rows={5}
                    variant="outlined"
                    size="small"
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                  />
                </Grid>
                <Grid item style={{ marginTop: "2.5em" }} align="center">
                  <Button
                    variant="contained"
                    className={classes.sendButton}
                    disabled={
                      name.length === 0 ||
                      email.length === 0 ||
                      phone.length === 0 ||
                      phoneHelper.length !== 0 ||
                      emailHelper.length !== 0 ||
                      message.length === 0
                    }
                    onClick={handleConfirm}
                  >
                    {isLoading ? (
                      <CircularProgress thickness={5} size={35} />
                    ) : (
                      buttonContent
                    )}
                  </Button>
                </Grid>
                <Grid item align="center">
                  <Button
                    className={classes.cancelButton}
                    onClick={() => {
                      setDialogOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
      {/* ----- SnackBar Block ------- */}
      <Snackbar
        open={alert.open}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={6000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.severity}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
