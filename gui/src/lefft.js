import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './index.css';

const styles = makeStyles(theme => ({
    root: {
      flexGrow: 1,

      marginLeft: 60,
      align: "center",
      marginTop: 200,
    },
}));

export default function con() {
  const classes = styles();

  return (
      <div>

<Typography className={classes.root} variant="h3" color="inherit" style={{fontStyle:"italic", fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop:'90', marginLeft:'50'}} >
  SONGS
</Typography>
</div>
);
}




<Grid container className={classes.root} spacing={2} justify="flex-end"  background= "inherit">



  <Grid item xs={6}>

    <Grid container justify="space-evenly" spacing={spacing} alignItems="flex-end" >
      {[0, 1, 2, 3, 4, 5].map(value => (

        <Grid key={value} item>

          <Paper className={classes.paper}  square="True" elevation="10" />

        </Grid>

      ))}



    </Grid>
  </Grid>

</Grid>





<Grid container className={classes.root} spacing={2} background= "inherit" style={{marginTop: '-250px', marginLeft: '600px'}}>



  <Grid item xs={6}>

    <Grid container justify="space-evenly" spacing={spacing} alignItems="flex-end" >
      {[0, 1, 2, 3, 4, 5].map(value => (

        <Grid key={value} item>

          <Paper className={classes.paper}   elevation="10" style={{background: '#ffe09f', square: "True"}}>
          <Typography variant="h6" color="#fff" style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '2px', marginLeft:'10px', color:'#000'}} >
            MAKE MUSIC ON THE GO.
          </Typography>

          </Paper>


        </Grid>
