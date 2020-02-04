import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    }
  }));

const Error = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
          <Typography  variant="h4" align="center">
            We're Sorry ! Something Went Wrong
          </Typography>
        </Paper>
    ) ;
  };
  
export default Error;
  