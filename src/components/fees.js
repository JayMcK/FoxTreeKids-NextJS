import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  checkboxText: {
    fontSize: "1rem",
    color: theme.palette.common.orange,
  },
  checkBoxStyle: {
    color: theme.palette.common.orange,
  },
  radio: {
    color: theme.palette.common.orange,
  },
  label: {
    fontSize: "1rem",
    color: theme.palette.common.orange,
  },
  cancelButton: {
    ...theme.typography.h5,
    color: theme.palette.common.orange,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default function Fees({ setDialogOpen }) {
  const classes = useStyles();
  const theme = useTheme();

  const [checkedDays, setCheckedDays] = useState("");

  const [checkedHours, setCheckedHours] = useState("");

  const handleDaysChange = (event) => {
    setCheckedDays(event.target.value);
  };

  const handleHoursChange = (event) => {
    setCheckedHours(event.target.value);
  };

  const estimate = () => {
    return Number(checkedDays) * Number(checkedHours);
  };

  const days = [
    { label: "1 day per week", value: "1" },
    { label: "2 days per week", value: "2" },
    { label: "3 days per week", value: "3" },
    { label: "4 days per week", value: "4" },
    { label: "5 days per week", value: "5" },
  ];

  const hours = [
    { label: "Core Morning (8:45am - 12:00pm)", value: "25" },
    { label: "Core Afternoon (12:00pm - 3:45pm)", value: "30" },
    { label: "Core Full Day (8:45am - 3:30pm)", value: "50" },
    { label: "Core Full Day + Extra AM + PM (7:45am - 6:30pm)", value: "70" },
  ];

  return (
    <DialogContent>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            {/* ---- Title Block ----- */}
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginBottom: "1em" }}
            >
              <Typography variant="h2" align="center">
                School Fees 2021 - 2022
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* ---- Fee Information Block ----- */}
        <Grid container direction="column">
          <Grid item align="center">
            <Typography variant="h4">Fee Estimate Calculator</Typography>
          </Grid>
          <Grid
            item
            sm
            container
            direction="column"
            style={{ marginTop: "1em" }}
          >
            <FormControl>
              <Typography
                variant="subtitle1"
                style={{ color: theme.palette.common.blue }}
              >
                How many days per week
              </Typography>
              <RadioGroup
                aria-label="days"
                name="days"
                value={checkedDays}
                onChange={handleDaysChange}
              >
                {days.map((day) => (
                  <FormControlLabel
                    key={uuidv4()}
                    classes={{ label: classes.label }}
                    value={day.value}
                    label={day.label}
                    control={
                      <Radio
                        classes={{ root: classes.radio }}
                        color="primary"
                        size="small"
                      />
                    }
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            item
            sm
            container
            direction="column"
            style={{ marginTop: "1em" }}
          >
            <FormControl>
              <Typography
                variant="subtitle1"
                style={{ color: theme.palette.common.blue }}
              >
                How many hours day
              </Typography>
              <RadioGroup
                aria-label="hours"
                name="hours"
                value={checkedHours}
                onChange={handleHoursChange}
              >
                {hours.map((hour) => (
                  <FormControlLabel
                    key={uuidv4()}
                    classes={{ label: classes.label }}
                    value={hour.value}
                    label={hour.label}
                    control={
                      <Radio
                        classes={{ root: classes.radio }}
                        color="primary"
                        size="small"
                      />
                    }
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* ---- Fee EStimate Block ----- */}
        <Grid container direction="column">
          <Grid item align="center" style={{ marginTop: "0.5em" }}>
            <Typography
              variant="h4"
              style={{ color: theme.palette.common.blue }}
            >
              Estimate: <span style={{ fontSize: "2rem" }}> £{estimate()}</span>{" "}
              per week
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item align="center">
        <Button
          className={classes.cancelButton}
          onClick={() => {
            setDialogOpen(false);
            setCheckedDays("");
            setCheckedHours("");
          }}
        >
          Cancel
        </Button>
      </Grid>
    </DialogContent>
  );
}
