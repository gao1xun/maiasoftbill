import React from 'react';
import {Grid, Typography, TextField, InputAdornment, Divider, Button} from '@material-ui/core';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    smalltextField: {
    '& .MuiInput-input': {
        margin: theme.spacing(0),
        width: '5ch',
        textAlign: 'right'
      },
    },

    normaltextField: {
        '& .MuiInput-input': {
            margin: theme.spacing(0),
            width: '25ch',
            textAlign: 'right'
          },
        '& .MuiInput-root': {
            margin: theme.spacing(1),
          },
    },
  }));


export default function SekyshoBottom () {
    const classes = useStyles();
    return(
        <Grid container spacing={1} >
            <Grid item xs={7} className={classes.smalltextField}>
                <Typography variant="body2" gutterBottom>小計</Typography>
                <TextField defaultValue="0" 
                    InputProps={{
                        readOnly: true,
                        endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                />
                <Typography variant="body2" gutterBottom>消費税</Typography>
                <HelpOutlinedIcon color="action" fontSize="small" />
                <TextField defaultValue="0"
                    InputProps={{
                        readOnly: true,
                        endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={4} className={classes.normaltextField}>
                <Typography variant="h4" gutterBottom>合計</Typography>
                <TextField defaultValue="0" 
                    InputProps={{
                        readOnly: true,
                        endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                />
                <Button variant="contained" color="primary" disableElevation>
                    保存する
                </Button>
            
            </Grid>
        </Grid>
    );
}