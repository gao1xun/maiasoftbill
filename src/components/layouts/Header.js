import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export default ()=>
    <AppBar position="static">
        <Toolbar style={{backgroundColor:'#162533'}}>
            <Typography>
                請求書
            </Typography>
        </Toolbar>
    </AppBar>