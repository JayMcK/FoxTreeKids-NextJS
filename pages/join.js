import React, { useState, Fragment } from "react";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  datePickerText: {
    lineHeight: 2.5,
    fontSize: "1rem",
    color: theme.palette.common.blue,
  },
  checkboxText: {
    fontSize: "1rem",
    color: theme.palette.common.orange,
  },
  checkBoxStyle: {
    color: theme.palette.common.orange,
  },
  nextButton: {
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
  subtitle: {
    fontSize: "1rem",
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
  editButton: {
    borderColor: theme.palette.common.orange,
    borderWidth: 1,
    height: 30,
    width: "100%",
    fontSize: "1rem",
    color: theme.palette.common.cream,
    fontWeight: "bold",
    backgroundColor: theme.palette.common.orange,
  },
}));

export default function Join({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [DOB, setDOB] = useState(new Date());

  const [date, setDate] = useState(new Date());

  const [checkedDays, setCheckedDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
  });

  const [checkedHours, setCheckedHours] = useState({
    morning: false,
    afternoon: false,
    full: false,
    extraMorning: false,
    extraAfternoon: false,
  });

  const handleDaysChange = (event) => {
    setCheckedDays({
      ...checkedDays,
      [event.target.name]: event.target.checked,
    });
  };

  const handleHoursChange = (event) => {
    setCheckedHours({
      ...checkedHours,
      [event.target.name]: event.target.checked,
    });
  };

  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [address, setAddress] = useState("");

  const [postCode, setPostCode] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });

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
          setPhoneHelper("Please enter a valid UK phone number");
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
        console("sent");
        setIsLoading(false);
        setDialogOpen(false);
        setParentName("");
        setChildName("");
        setEmail("");
        setAddress("");
        setPostCode("");
        setPhone("");
        setDOB("");
        setDate("");
        setCheckedDays({
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
        });
        setCheckedHours({
          morning: false,
          afternoon: false,
          full: false,
          extraMorning: false,
          extraAfternoon: false,
        });
        setAlert({
          open: true,
          message: "Visit request sent successfully!",
          severity: "success",
        });
      })
      .catch((error) => {
        console.log("error");
        setIsLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong. Please try again!",
          severity: "error",
        });
      });
  };

  const textfields = [
    {
      label: "Full Name",
      id: "parent-name",
      onChange: (event) => setParentName(event.target.value),
      value: parentName,
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
    {
      label: "Address",
      id: "address",
      onChange: (event) => setAddress(event.target.value),
      value: address,
    },
    {
      label: "PostCode",
      id: "postcode",
      onChange: (event) => setPostCode(event.target.value),
      value: postCode,
    },
  ];

  const days = [
    { label: "Mondays", name: "monday", checked: checkedDays.monday },
    { label: "Tuesdays", name: "tuesday", checked: checkedDays.tuesday },
    { label: "Wednesdays", name: "wednesday", checked: checkedDays.wednesday },
    { label: "Thursdays", name: "thursday", checked: checkedDays.thursday },
    { label: "Fridays", name: "friday", checked: checkedDays.friday },
  ];

  const hours = [
    {
      name: "morning",
      label: "Core Morning (8:45am - 12:00pm)",
      checked: checkedHours.morning,
    },
    {
      name: "afternoon",
      label: "Core Afternoon (1:00pm - 3:30pm)",
      checked: checkedHours.afternoon,
    },
    {
      name: "full",
      label: "Core Full Day (8:45am - 3:30pm)",
      checked: checkedHours.full,
    },
    {
      name: "extraMorning",
      label: "Additional Hours - Morning (7:45am - 8:45am)",
      checked: checkedHours.extraMorning,
    },
    {
      name: "extraAfternoon",
      label: "Additional Hours - Afternoon (3:45pm - 6:30pm)",
      checked: checkedHours.extraAfternoon,
    },
  ];

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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Head>
        <title key="title">Join Waiting List | Fox Tree Kids</title>
        <meta
          name="description"
          key="description"
          content="Currently accepting new pupils in our Children's House classroom, our waiting list form only takes 3 minutes long to complete and starts the application process. Join now!"
        />
        <meta
          property="og:title"
          content="Making Montessori Education accessible for all children | Join Waiting List"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="fox-tree-kids-nextjs.vercel.app/join"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://fox-tree-kids-nextjs.vercel.app/join"
        />
      </Head>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            {/*-----Title Block -----*/}
            <Grid container direction="column">
              <Grid
                item
                style={{ marginTop: "3em", marginLeft: matchesMD ? 0 : "5em" }}
              >
                <Typography
                  variant="h2"
                  align={matchesMD ? "center" : undefined}
                >
                  Join our Waiting List
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? "2em" : matchesMD ? "3em" : "5em",
                  marginRight: matchesMD ? "2em" : matchesMD ? "3em" : "5em",
                  marginBottom: "2em",
                }}
              >
                <Typography
                  variant="subtitle1"
                  align={matchesMD ? "center" : undefined}
                  className={classes.subtitle}
                >
                  Please fill the below form and our Admissions Officer, Mahi
                  Mathews will be in touch within 5 working days.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              marginBottom: "2em",
              marginLeft: matchesSM ? "2em" : matchesMD ? "3em" : "5em",
              marginRight: matchesMD ? "2em" : matchesMD ? "3em" : "5em",
            }}
          >
            {/*-----Parent/Guardian Info Block -----*/}
            <Grid container direction="column">
              <Grid item>
                <Typography
                  variant="subtitle1"
                  align={matchesMD ? "center" : undefined}
                >
                  Parent/Guardian Information
                </Typography>
              </Grid>
              <Grid item container direction="column">
                {textfields.map((textfield) => (
                  <Grid item style={{ marginTop: "0.5em" }} key={textfield.id}>
                    <TextField
                      id={textfield.id}
                      label={textfield.label}
                      value={textfield.value}
                      onChange={textfield.onChange}
                      error={textfield.error}
                      helperText={textfield.helperText}
                      required
                      fullWidth
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              marginBottom: "2em",
              marginTop: "1em",
              marginLeft: matchesSM ? "2em" : matchesMD ? "3em" : "5em",
              marginRight: matchesMD ? "2em" : matchesMD ? "3em" : "5em",
            }}
          >
            {/*-----Child's Info Block -----*/}
            <Grid container direction="column">
              <Grid item>
                <Typography
                  variant="subtitle1"
                  align={matchesMD ? "center" : undefined}
                >
                  Child's Information
                </Typography>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <TextField
                    id="child-name"
                    label="Full Name"
                    required
                    fullWidth
                    value={childName}
                    onChange={(event) => setChildName(event.target.value)}
                  />
                </Grid>
                <Grid item style={{ marginTop: "0.5em" }}>
                  <Grid container direction="row">
                    <Grid item lg={1} sm={2} xs={2}>
                      <Typography
                        variant="body1"
                        className={classes.datePickerText}
                      >
                        DOB:
                      </Typography>
                    </Grid>
                    <Grid item lg={11} sm={10} xs={10}>
                      <KeyboardDatePicker
                        format="dd/MM/yyyy"
                        value={DOB}
                        fullWidth
                        onChange={(newDate) => setDOB(newDate)}
                        maxDate="2015-01-01"
                        maxDateMessage="Date should not be after 1st Jan 2015"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              marginBottom: "2em",
              marginLeft: matchesSM ? "2em" : matchesMD ? "3em" : "5em",
              marginRight: matchesMD ? "2em" : matchesMD ? "3em" : "5em",
              marginTop: "1em",
            }}
          >
            {/*-----Admission Info Block -----*/}
            <Grid container direction="column">
              <Grid item>
                <Typography
                  variant="subtitle1"
                  align={matchesMD ? "center" : undefined}
                >
                  Admission Information
                </Typography>
              </Grid>
              <Grid item container direction="column">
                <Grid item style={{ marginTop: "0.5em" }}>
                  <Grid container direction="row">
                    <Grid item md={2} sm={4} xs={6}>
                      <Typography
                        variant="body1"
                        className={classes.datePickerText}
                      >
                        Desired start date:
                      </Typography>
                    </Grid>
                    <Grid item md={10} sm={8} xs={6}>
                      <KeyboardDatePicker
                        format="dd/MM/yyyy"
                        value={date}
                        fullWidth
                        onChange={(newDate) => setDate(newDate)}
                        minDate="2021-09-13"
                        minDateMessage="Date should not be before 13th Sept 2021"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    direction={matchesSM ? "column" : "row"}
                    style={{ marginTop: "1em" }}
                  >
                    <Grid
                      item
                      sm
                      container
                      direction="column"
                      alignItems={matchesSM ? "center" : undefined}
                      style={{ marginTop: matchesSM ? "1em" : 0 }}
                    >
                      <Grid item>
                        <Typography className={classes.datePickerText}>
                          Days of the week:
                        </Typography>
                      </Grid>
                      <FormGroup>
                        {days.map((day) => (
                          <FormControlLabel
                            key={day.name}
                            label={day.label}
                            classes={{ label: classes.checkboxText }}
                            control={
                              <Checkbox
                                name={day.name}
                                checked={day.checked}
                                onChange={handleDaysChange}
                                color="primary"
                                size="small"
                                disableRipple
                                classes={{ root: classes.checkBoxStyle }}
                              />
                            }
                          />
                        ))}
                      </FormGroup>
                      <FormHelperText>
                        Pick as many as applicable
                      </FormHelperText>
                    </Grid>
                    <Grid
                      item
                      sm
                      container
                      direction="column"
                      alignItems={matchesSM ? "center" : undefined}
                      style={{ marginTop: matchesSM ? "2em" : 0 }}
                    >
                      <Grid item>
                        <Typography className={classes.datePickerText}>
                          Desired hours:
                        </Typography>
                      </Grid>
                      <FormGroup>
                        {hours.map((hour) => (
                          <FormControlLabel
                            key={hour.name}
                            label={hour.label}
                            classes={{ label: classes.checkboxText }}
                            control={
                              <Checkbox
                                name={hour.name}
                                checked={hour.checked}
                                onChange={handleHoursChange}
                                color="primary"
                                size="small"
                                disableRipple
                                classes={{ root: classes.checkBoxStyle }}
                              />
                            }
                          />
                        ))}
                      </FormGroup>
                      <FormHelperText>
                        Pick as many as applicable
                      </FormHelperText>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            style={{ marginBottom: "3em" }}
          >
            <Button
              className={classes.nextButton}
              variant="contained"
              onClick={() => {
                setDialogOpen(true);
              }}
              disabled={
                parentName.length === 0 ||
                childName.length === 0 ||
                email.length === 0 ||
                emailHelper.length !== 0 ||
                phone.length === 0 ||
                phoneHelper.length !== 0 ||
                address.length === 0 ||
                postCode.length === 0 ||
                DOB.length === 0 ||
                date.length === 0
              }
            >
              Next
            </Button>
          </Grid>
        </Grid>
        <Dialog
          fullScreen
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          style={{ zIndex: 1302 }}
        >
          <DialogContent>
            <Grid container direction="column">
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    {/*-----Title Block -----*/}
                    <Grid container direction="column">
                      <Grid item style={{ marginLeft: matchesMD ? 0 : "5em" }}>
                        <Typography
                          variant="h2"
                          align={matchesMD ? "center" : undefined}
                        >
                          Confirm details
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{
                      marginBottom: "2em",
                      marginTop: "1em",
                      marginLeft: matchesSM ? "2em" : matchesMD ? "3em" : "5em",
                      marginRight: matchesMD
                        ? "2em"
                        : matchesMD
                        ? "3em"
                        : "5em",
                    }}
                  >
                    {/*-----Parent/Guardian Info Block -----*/}
                    <Grid container direction="column">
                      <Grid item style={{ marginBottom: "0.5em" }}>
                        <Typography
                          variant="subtitle1"
                          align={matchesMD ? "center" : undefined}
                        >
                          Parent/Guardian Information
                        </Typography>
                      </Grid>
                      <Grid item container direction="column">
                        <Grid item>
                          <TextField
                            id="parent-name"
                            label="Full Name"
                            required
                            fullWidth
                            value={parentName}
                            onChange={(event) =>
                              setParentName(event.target.value)
                            }
                          />
                        </Grid>
                        <Grid item style={{ marginTop: "0.5em" }}>
                          <TextField
                            id="email"
                            label="Email"
                            required
                            fullWidth
                            value={email}
                            onChange={onChange}
                            error={emailHelper.length !== 0}
                            helperText={emailHelper}
                          />
                        </Grid>
                        <Grid item style={{ marginTop: "0.5em" }}>
                          <TextField
                            id="phone"
                            label="Contact Number"
                            required
                            fullWidth
                            value={phone}
                            onChange={onChange}
                            error={phoneHelper.length !== 0}
                            helperText={phoneHelper}
                          />
                        </Grid>
                        <Grid item style={{ marginTop: "0.5em" }}>
                          <TextField
                            id="address"
                            label="Address"
                            required
                            fullWidth
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                          />
                        </Grid>
                        <Grid item style={{ marginTop: "0.5em" }}>
                          <TextField
                            id="post-code"
                            label="Post Code"
                            required
                            fullWidth
                            value={postCode}
                            onChange={(event) =>
                              setPostCode(event.target.value)
                            }
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{
                      marginBottom: "2em",
                      marginTop: "1em",
                      marginLeft: matchesSM ? "2em" : matchesMD ? "3em" : "5em",
                      marginRight: matchesMD
                        ? "2em"
                        : matchesMD
                        ? "3em"
                        : "5em",
                    }}
                  >
                    {/*-----Child's Info Block -----*/}
                    <Grid container direction="column">
                      <Grid item style={{ marginBottom: "0.5em" }}>
                        <Typography
                          variant="subtitle1"
                          align={matchesMD ? "center" : undefined}
                        >
                          Child's Information
                        </Typography>
                      </Grid>
                      <Grid item container direction="column">
                        <Grid item>
                          <TextField
                            id="child-name"
                            label="Full Name"
                            required
                            fullWidth
                            value={childName}
                            onChange={(event) =>
                              setChildName(event.target.value)
                            }
                          />
                        </Grid>
                        <Grid
                          item
                          style={{ marginTop: "0.5em", height: "3em" }}
                        >
                          <Grid
                            container
                            direction={matchesMD ? "column" : "row"}
                          >
                            <Grid item lg={3}>
                              <Typography
                                variant="body1"
                                className={classes.datePickerText}
                              >
                                DOB:{" "}
                                <span
                                  style={{ color: theme.palette.grey[600] }}
                                >
                                  {DOB.toString().slice(0, 15)}
                                </span>
                              </Typography>
                            </Grid>
                            <Grid item lg={9}>
                              <Button
                                className={classes.editButton}
                                onClick={() => setDialogOpen(false)}
                                variant="outlined"
                              >
                                Edit DOB
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{
                      marginBottom: "2em",
                      marginLeft: matchesSM ? "2em" : matchesMD ? "3em" : "5em",
                      marginRight: matchesMD
                        ? "2em"
                        : matchesMD
                        ? "3em"
                        : "5em",
                    }}
                  >
                    {/*-----Admission Info Block -----*/}
                    <Grid container direction="column">
                      <Grid
                        item
                        style={{
                          marginBottom: "0.5em",
                          marginTop: matchesMD ? "1em" : 0,
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          align={matchesMD ? "center" : undefined}
                        >
                          Admission Information
                        </Typography>
                      </Grid>
                      <Grid item container direction="column">
                        <Grid item style={{ marginTop: "0.5em" }}>
                          <Grid
                            container
                            direction={matchesMD ? "column" : "row"}
                          >
                            <Grid item lg={4}>
                              <Typography
                                variant="body1"
                                className={classes.datePickerText}
                              >
                                Desired Start Date:{" "}
                                <span
                                  style={{ color: theme.palette.grey[600] }}
                                >
                                  {date.toString().slice(0, 15)}
                                </span>
                              </Typography>
                            </Grid>
                            <Grid item lg={8}>
                              <Button
                                className={classes.editButton}
                                onClick={() => setDialogOpen(false)}
                                variant="contained"
                              >
                                Edit Start Date
                              </Button>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            container
                            direction={matchesSM ? "column" : "row"}
                            style={{ marginTop: "1em" }}
                          >
                            <Grid
                              item
                              sm
                              container
                              direction="column"
                              alignItems={matchesSM ? "center" : undefined}
                              style={{ marginTop: matchesSM ? "1em" : 0 }}
                            >
                              <Grid item>
                                <Typography className={classes.datePickerText}>
                                  Days of the week:
                                </Typography>
                              </Grid>
                              <FormGroup>
                                {days.map((day) => (
                                  <FormControlLabel
                                    key={day.name}
                                    label={day.label}
                                    classes={{ label: classes.checkboxText }}
                                    control={
                                      <Checkbox
                                        name={day.name}
                                        checked={day.checked}
                                        onChange={handleDaysChange}
                                        color="primary"
                                        size="small"
                                        disableRipple
                                        classes={{
                                          root: classes.checkBoxStyle,
                                        }}
                                      />
                                    }
                                  />
                                ))}
                              </FormGroup>
                              <FormHelperText>
                                Pick as many as applicable
                              </FormHelperText>
                            </Grid>
                            <Grid
                              item
                              sm
                              container
                              direction="column"
                              alignItems={matchesSM ? "center" : undefined}
                              style={{ marginTop: matchesSM ? "2em" : 0 }}
                            >
                              <Grid item>
                                <Typography className={classes.datePickerText}>
                                  Desired hours:
                                </Typography>
                              </Grid>
                              <FormGroup>
                                {hours.map((hour) => (
                                  <FormControlLabel
                                    key={hour.name}
                                    label={hour.label}
                                    classes={{ label: classes.checkboxText }}
                                    control={
                                      <Checkbox
                                        name={hour.name}
                                        checked={hour.checked}
                                        onChange={handleHoursChange}
                                        color="primary"
                                        size="small"
                                        disableRipple
                                        classes={{
                                          root: classes.checkBoxStyle,
                                        }}
                                      />
                                    }
                                  />
                                ))}
                              </FormGroup>
                              <FormHelperText>
                                Pick as many as applicable
                              </FormHelperText>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={{ marginTop: "2.5em" }} align="center">
                  <Button
                    variant="contained"
                    className={classes.sendButton}
                    disabled={
                      parentName.length === 0 ||
                      childName.length === 0 ||
                      email.length === 0 ||
                      emailHelper.length !== 0 ||
                      phone.length === 0 ||
                      phoneHelper.length !== 0 ||
                      address.length === 0 ||
                      postCode.length === 0 ||
                      DOB.length === 0 ||
                      date.length === 0
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
                    style={{ marginBottom: "2em" }}
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
          </DialogContent>
        </Dialog>
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
    </MuiPickersUtilsProvider>
  );
}
