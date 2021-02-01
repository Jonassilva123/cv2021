import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: '#f3f2ef',
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar title="Christian Possidonio" />
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Header />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
