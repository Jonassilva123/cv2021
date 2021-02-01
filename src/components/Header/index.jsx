import React from 'react';
import { Grid, Container, Typography, makeStyles, Button, Hidden } from '@material-ui/core';
import SrcAvatar from '../../assets/avatar.jpeg';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
  },
  avatarCircle: {
    borderRadius: '10%',
    maxWidth: '80%',
  },
  shadowNone: { boxShadow: 'none' },
});

function Header() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Hidden only={['xs', 'sm']}>
          <Grid item justify="center" xs={12} sm={12} md={6} lg={6} xl={6}>
            <img className={classes.avatarCircle} alt="jonas" src={SrcAvatar} />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="h4" component="h4">
            Jonas Batista 👨🏻‍💻 <br />
            Software Developer
          </Typography>

          <br />

          <Typography variant="body1" component="body1">
            Sou um desenvolvedor Front-End, trabalho com desenvolvimento de sistemas de tive a oportunidade de trabalhar com diversas
            tecnologias como React e React Native, Meu foco principal é no JavaScript e todo o seu ecossistema para o desenvolvimento web e
            mobile.
          </Typography>

          <br />
          <br />

          <Button
            variant="contained"
            color="secondary"
            className={classes.shadowNone}
            onClick={() => {
              window.location.href = 'https://docs.google.com/document/d/1lkTEg8jJhDhrPwAkG6nuU0ho6C5kL29vhLXd0JrhspI/edit?usp=sharing';
            }}
          >
            DOWNLOAD DO MEU CV
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
