import React from 'react';
import {BottomNavigation, TextField, InputAdornment} from '@material-ui/core';

export default ()=>
    <div>
        <span>
        小計
        </span>
        
        <TextField disabled defaultValue="0"
            InputProps={{
                
                endAdornment: <InputAdornment position="end">円</InputAdornment>,
              }}
        />
         <TextField
            defaultValue="0"
 
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
            
          />
    </div>