import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import {AppBar, Toolbar, Typography, Button, ButtonBase} from '@material-ui/core';


const usestyles = makeStyles((theme) => ({
    appbar: {
        marginBottom: 15,
    },
    toolbar : {
        backgroundColor : '#3b3f47',
        padding: 0,
        
    },
    
    button: {
        padding: theme.spacing(1),
        backgroundColor : '#3b3f47',
        color: 'white',
        height: 64,
        minWidth:120,

        '&:hover, &$focusVisible': {
            backgroundColor : '#0190a2'
        }
    },

    infoButton: {
        backgroundColor: '#162533',
        height: 64,
        minWidth: 64,
        marginLeft: 'auto',
        '&:hover, &$focusVisible': {
            backgroundColor : '#0190a2'
        }
    }
}));

export default () => {
    const classes = usestyles();
    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <ButtonBase className={classes.button}>
                    <Typography>
                        請求書
                    </Typography>
                </ButtonBase>
                <ButtonBase className={classes.button}>
                    <Typography>
                        取引先
                    </Typography>
                </ButtonBase>
                <ButtonBase className={classes.button}>
                    <Typography>
                        品目
                    </Typography>
                </ButtonBase>
                <ButtonBase className={classes.infoButton}>
                    <InfoIcon />
                </ButtonBase>
            </Toolbar>
        </AppBar>
    );
}