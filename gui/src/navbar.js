import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Book, AccountBox } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './logo colored-01.png';
import profile from './profile icon-01.png';
import './index.css';
import background from './mu.png';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    fontStyle: "bold",
    fontFamily: 'BebasNeue Regular',

  },
  control:{
      marginLeft: 1000,
      fontFamily: 'BebasNeue Regular',
  },
  Bo: {
      fontStyle: "bold",
  },
  cont: {
      marginLeft: 1,
  },
type:{
    fontFamily: 'BebasNeue Light',
},
});
const backStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'right',
    backgroundSize: 'icon',
    backgroundRepeat: 'no-repeat',
    width: '10%',
    maxHeight: '20vh'
};
export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#fff">

        <Toolbar>

        <p align="left">
        <img src={logo} alt="Wikihow LOGO" height="40" width="80"  />
        </p>

          <Typography className={classes.root} variant="h6" color="inherit"  >

          </Typography>


          <Typography className={classes.control} variant="h6" color="inherit" style={{fontStyle:"italic", fontStyle:"bold", fontFamily:"BebasNeue Bold", marginTop: '-15px'}} >
            PROFILE
          </Typography>

          <p  className={classes.cont} align="right">
          <img src={profile}  height="30" width="60" align= "right" />
          </p>

        </Toolbar>

      </AppBar>
    </div>
  );
}



/*
function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div" >

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Home  <Home />
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title" align="right">
                        Posts <Book />
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="#fff" variant="title">
                        Contact <AccountBox />
                    </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
    )
}
*/
