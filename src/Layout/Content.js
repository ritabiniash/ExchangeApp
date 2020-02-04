import React from 'react';
import { SourceProvider } from "../contexts/source-conext";
import Wrapper from "../Converter/Wrapper";
import TodaysRate from "../TodaysRate/TodaysRate";

// mui imports
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import clsx from 'clsx';

// material ui styles
const useStyles = makeStyles(theme => ({
    container: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 400,
      }
  }));


function Content() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return(
      <SourceProvider>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Wrapper/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <TodaysRate/>
                </Paper>
            </Grid>
          </Grid>
        </Container>    
      </SourceProvider>
    );
}

export default Content;