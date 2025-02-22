import React from 'react';

import { Table } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const columns = [
  {
    title: 'Artist',
    dataIndex: 'artist',
  },
  {
    title: 'Album',
    dataIndex: 'albums',
  },
  {
    title: 'Song',
    dataIndex: 'song',
  },
];


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarGridList() {
const classes = useStyles();




//const Albums = (props) =>{

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Bayan</ListSubheader>
          </GridListTile>



        </GridList>
      </div>
    )
}

//export default Albums;
