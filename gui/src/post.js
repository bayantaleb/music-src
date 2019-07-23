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
import hit from './hit it-01.png';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Albumss from './albumss'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';

var arry =[

 [
   "reem",
   "fire",
   "you will"
],

 [
   "queen",
   "amazing",
   "cover"
],

 [
   "emi",
   "life",
   "ommi"
],

 [
   "weliam",
   "sun",
   "night"
],

 [
   "tamara",
   "loop",
   "circle"
],

 [
   "shada",
   "natural",
   "tree"
]
];



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    align: "center",
  },
  paper: {
    height: 180,
    width: 180,
    textAlign: 'center',
    color: 'rgba(0, 70, 120, .6)',
  },
  control: {
    padding: theme.spacing(2),
    marginTop: 20,
    align:"left",
  },
  icon: {
    color: 'rgba(255, 0, 0, .6)',
    marginRight: 1000,
    align: "center",
    fontFamily: "BebasNeue Book",
    marginTop: 10,
    alignItems: "bottom",
  },
  ri: {
      color: 'rgba(0, 70, 120, .6)',
      marginRight: 1000,
      align: "center",
      marginTop: 10,
  },


}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const customHandleClick = (value) => {

/*

      alert("Albums :  "+(`${arry[value][1]}`))
      alert("Songs :  "+(`${arry[value][2]}`))
      */
      document.write("Albums :  "+(`${arry[value][1]}`) + " \n, " + "Songs :  "+(`${arry[value][2]}`) )



  }

  function handleChange(event, value) {
    setSpacing(Number(value));
  }

  return (


<div >

      <Typography variant="h2" color="#fff" style={{ fontStyle:"bold", fontFamily:"BebasNeue Bold", marginTop: '120px', marginLeft:'100px', color:'#fff'}} >
        AMP UP
      </Typography>
      <Typography variant="h2" color="#fff" style={{ fontStyle:"bold", fontFamily:"BebasNeue Bold", marginTop: '2px', marginLeft:'100px', color:'#fff'}} >
        THOSE DBS
      </Typography>
      <Typography variant="h6" color="#fff" style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '3px', marginLeft:'100px', color:'#fff'}} >
        MAKE MUSIC ON THE GO.
      </Typography>

      <img src={hit} alt="Wikihow LOGO" height="80" width="120" style={{marginTop: '8px', marginLeft: '80px'}} />

      <Grid container className={classes.root} spacing={2} background= "inherit" style={{marginTop: '-250px', marginLeft: '600px'}}>

        <Grid item xs={6}>


          <Grid container justify="space-evenly" spacing={spacing} alignItems="flex-end" >
            {[0, 1, 2, 3, 4, 5].map((value) => (

              <Grid key={value} item>
              <ButtonBase onClick = {customHandleClick.bind(this, value)} isShow={'true'}>

                <Paper className={classes.paper}   elevation="10" style={{background: '#ffe09f', square: "True"}}>

                <div>
                <Typography variant="h5" color="#fff" style={{ fontStyle:"italic", fontFamily:"BebasNeue Regular", marginTop: '12vh', marginLeft:'10px', color:'#fa127'}} >
                  (`{arry[value][0]}`)
                </Typography>
                </div>

                </Paper>
                </ButtonBase>
              </Grid>


            ))}


          </Grid>

        </Grid>

      </Grid>

</div>

  );
}
