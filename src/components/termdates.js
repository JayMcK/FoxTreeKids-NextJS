import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  cancelButton: {
    ...theme.typography.h5,
    color: theme.palette.common.orange,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tableHeaders: {
    fontFamily: "Palanquin",
    color: theme.palette.common.orange,
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  tableBody: {
    fontFamily: "Palanquin",
    color: theme.palette.common.blue,
    fontSize: "1rem",
  },
}));

export default function TermDates({ setDialogOpen }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  function createData(day, date, year, info) {
    return { day, date, year, info };
  }

  const rows = [
    createData("Tuesday", "7th Sept", "2021", "Return to school"),
    createData("Friday", "22nd Oct", "2021", "Break up for half-term"),
    createData("Monday", "1st Nov", "2021", "Return to school"),
    createData("Friday", "26th Nov", "2021", "Inset day"),
    createData("Monday", "29th Nov", "2021", "Inset day"),
    createData("Friday", "17th Dec", "2021", "Break up for Christmas"),
    createData("Wednesday", "5th Jan", "2022", "Return to school"),
    createData("Friday", "11th Feb", "2022", "Break up for half-term"),
    createData("Monday", "21st Feb", "2022", "Return to school"),
    createData("Friday", "1st April", "2022", "Break up for Easter"),
    createData("Tuesday", "19th April", "2022", "Return to school"),
    createData("Monday", "2nd May", "2022", "Bank Holiday"),
    createData("Friday", "27th May", "2022", "Break up for half-term"),
    createData("Monday", "6th June", "2022", "Return to school"),
    createData("Thursday", "21st July", "2022", "Break up for Summer holidays"),
  ];

  return (
    <DialogContent>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            {/* ---- Title Block ----- */}
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginBottom: "1em" }}
            >
              <Typography variant="h2" align="center">
                Term Dates 2021 - 2022
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              width: matchesXS
                ? "18em"
                : matchesSM
                ? "30em"
                : matchesMD
                ? "45em"
                : "50em",
              overflowX: "auto",
            }}
          >
            {/* ---- Term Dates Block ----- */}
            <TableContainer
              component={Paper}
              elevation={0}
              classes={{ paper: classes.paper }}
              style={{ maxWidth: "50em" }}
            >
              <Table aria-label="term-dates-table" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell
                      className={classes.tableHeaders}
                      style={{ minWidth: "3em" }}
                    >
                      Day
                    </TableCell>
                    <TableCell
                      className={classes.tableHeaders}
                      align="right"
                      style={{ minWidth: "4em" }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      className={classes.tableHeaders}
                      align="right"
                      style={{ minWidth: "2em" }}
                    >
                      Year
                    </TableCell>
                    <TableCell
                      className={classes.tableHeaders}
                      align="right"
                      style={{ minWidth: "11em" }}
                    >
                      Info
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.date}>
                      <TableCell
                        className={classes.tableBody}
                        component="th"
                        scope="row"
                      >
                        {row.day}
                      </TableCell>
                      <TableCell className={classes.tableBody} align="right">
                        {row.date}
                      </TableCell>
                      <TableCell className={classes.tableBody} align="right">
                        {row.year}
                      </TableCell>
                      <TableCell className={classes.tableBody} align="right">
                        {row.info}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item align="center" style={{ marginTop: "1em" }}>
            <Button
              className={classes.cancelButton}
              onClick={() => {
                setDialogOpen({ ...setDialogOpen, dates: false });
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </DialogContent>
  );
}
