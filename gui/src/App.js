import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import CustomLayout from './containers/Layout';
import AlbumList from './containers/AlbumListView';
import TitlebarGridList from './components/Album';
import Albumss from './albumss';   /////////////////////
import background from './red.jpg';
import SimpleAppBar from './navbar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import SpacingGrid from './post';
import Typography from '@material-ui/core/Typography';
import logow from './logo white-01.png'
import back2 from './black.png';
const backStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    maxHeight: '100vh'
};
const backStyle2 = {
    backgroundImage: `url(${back2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: '1000vh',
    width: '100%',
    maxHeight: '50vh'
};

const App = () => (
    <div>
    <div style = {backStyle}>
    <div>

    < SimpleAppBar />

    < SpacingGrid />
    <Typography variant="h3" color="#fff" style={{ fontStyle:"bold", fontFamily:"BebasNeue Bold", marginTop: '150px', marginLeft:'100px', color:'#000'}} >
      GET PRODUCTION WITH MUSICDB
    </Typography>
    <Typography variant="h6" color="#fff" style={{ fontStyle:"bold", fontFamily:"BebasNeue Bold", marginTop: '15px', marginLeft:'100px', color:'#000'}} >
      PICK YOUR PREFERED INSTRUMENT
    </Typography>
    <Typography variant="h7" color="#fff" style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '0px', marginLeft:'100px', color:'#000'}} >
      PICK THE INSTRUMENTS YOU NEED TO COMPOSE YOUR PIECE
    </Typography>
    <Typography variant="h6" color="secondary" style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '15px', marginLeft:'100px'}} >
      START COMPOSING
    </Typography>





</div>

    </div>
    <div style = {{backStyle2, marginTop: '50vh', backgroundColor: '#000', height: '51vh'}}>

    <img src={logow} alt="Wikihow LOGO" height="40" width="80"  style={{marginTop: '40px', marginLeft:'100px'}} />
    <Typography variant="h6" style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '10px', marginLeft:'300px', color: '#fff'}} >
      PROFILE
    </Typography>
    <Typography variant="h6"  style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '8px', marginLeft:'300px', color: '#fff'}} >
      SIGN IN
    </Typography>
    <Typography variant="h6"  style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '8px', marginLeft:'300px', color: '#fff', marginBottom: '20px'}} >
      MUSIC
    </Typography>
    <div style={{marginTop: '80px'}}>
    <Typography variant="h7"  style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '50px', marginLeft:'100px', color: '#fff', marginBottom: '20px'}} >
      LEGAL
    </Typography>
    <Typography variant="h7"  style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '0px', marginLeft:'80px', color: '#fff', marginBottom: '20px'}} >
        PRIVACY CENTER
    </Typography>
    <Typography variant="h7"  style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '0px', marginLeft:'80px', color: '#fff', marginBottom: '20px'}} >
      PRIVACY POLICY
    </Typography>
    <Typography variant="h7"  style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '0px', marginLeft:'80px', color: '#fff', marginBottom: '20px'}} >
              COOKIES
    </Typography>
    <Typography variant="h7"  style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '0px', marginLeft:'80px', color: '#fff', marginBottom: '20px'}} >
             ABOUT ADS
    </Typography>
    <Typography variant="h7"  style={{ fontStyle:"bold", fontFamily:"BebasNeue Regular", marginTop: '0px', marginLeft:'450px', color: '#fff', marginBottom: '20px'}} >
                      @2019 MUSICDB
    </Typography>

    </div>
    </div>
    </div>

)

export default App;
