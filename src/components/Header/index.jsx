import React from 'react';
import { Grid, Container, Typography, makeStyles, Button, Hidden } from '@material-ui/core';
import SrcAvatar from '../../assets/avatar.png';

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
            <img className={classes.avatarCircle} alt="Christian" src={SrcAvatar} />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="h4" component="h4">
            Christian Possidonio 👨🏻‍💻 <br />
            Software Developer
          </Typography>

          <br />

          <Typography variant="body1" component="body1">
            Sou um desenvolvedor Full-Stack, trabalho com desenvolvimento de sistemas desde 2013 e tive a oportunidade de trabalhar com
            diversas tecnologias, hoje meu foco principal é no JavaScript e todo o seu ecossistema para o desenvolvimento web e mobile.
          </Typography>

          <br />
          <br />

          <Button
            variant="contained"
            color="secondary"
            className={classes.shadowNone}
            onClick={() => {
              window.location.href = 'https://docs.google.com/document/d/1kwJsRjsvaXI3JNWC0XXSLUxOJlTsz_l70ksJSCBuIwo/edit?usp=sharing';
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
