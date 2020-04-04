import React, { Component } from "react";
import MisocaHeader from './components/MisocaHeader'
import './assets/css/container.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class SeikyushoEdit extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <div className='container-background'>
              
              
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper >xs=12</Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper >xs=12 sm=6</Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper >xs=12 sm=6</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper >xs=6 sm=3</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper >xs=6 sm=3</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper >xs=6 sm=3</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper >xs=6 sm=3</Paper>
              </Grid>
            </Grid>
        
          </div>
        )
    }
}  