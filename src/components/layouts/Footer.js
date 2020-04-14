import React from 'react';
import {BottomNavigation, TextField, InputAdornment, Typography, Link} from '@material-ui/core';

const linkFunc = (event) => {
    
};

const styles = {
    linkStyle: {
        color: '#0190a2',
    },
   
}

export default ()=>
    <div style={{display: '-webkit-box', WebkitBoxPack:'justify', padding: 25}}>  
        <div ></div>
        <div >
            <Typography variant="body2" >
                <Link href="#" onClick={linkFunc} style={styles.linkStyle} underline="none" >Maiasoftについて</Link>
            </Typography>
        </div>
    </div>