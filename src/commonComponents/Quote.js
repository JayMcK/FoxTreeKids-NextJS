import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  quoteContainer: {
    minHeight: "10em",
    backgroundColor: theme.palette.grey[200],
  },
  quote: {
    ...theme.typography.join,
    color: theme.palette.grey[700],
    fontSize: "1.5rem",
  },
}));

export default function Quote({ info }) {
  const classes = useStyles();

  return (
    <Grid item>
      {/*-----Quote Block -----*/}
      <Grid
        container
        direction="row"
        className={classes.quoteContainer}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={10} style={{ marginTop: "1em" }}>
          <Typography
            variant="subtitle1"
            className={classes.quote}
            align="center"
            paragraph
          >
            <img
              src={"/assets/leftQuotes.svg"}
              alt="left quotation mark"
              style={{ height: 25, width: 25, marginRight: "0.5em" }}
            />
            {info}
            <img
              src={"/assets/rightQuotes.svg"}
              alt="right quotation mark"
              style={{ height: 25, width: 25, marginLeft: "0.5em" }}
            />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
