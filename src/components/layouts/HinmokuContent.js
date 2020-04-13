import React from 'react';
import { Paper, Typography, Link, TextField, InputLabel, Grid, InputAdornment, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Checkbox, Button } from '@material-ui/core';
import MustMart from './MustMart';
import IconTip from './IconTip';

const styles = {
    linkStyle: {
        color: '#0190a2',
    },
    paper: {
        padding: 20,
    },
    saveButton: {
        backgroundColor: '#0190a2',
        minWidth: 170,
    }
}

const linkFunc = (event) => {
    
};
const tipTitle = {
    title: '自社情報で設定されている消費税率が適用されます。',
};

export default ()=> {
    const [value, setValue] = React.useState('USE_SENDER');

    const [value1, setValue1] = React.useState('a');

    const taxTypeHandleChange = (event) => {
      setValue(event.target.value);
    };

    const taxTypeHandleChange1 = (event) => {
        setValue1(event.target.value);
      };

    




    return (
    
        <Paper variant="outlined" square style={styles.paper}>
            <div>
                <div style={{float: 'right'}}>
                    <Typography variant="body1" >
                        <Link href="#" onClick={linkFunc} style={styles.linkStyle} underline="none" >社員一覧へ戻る</Link>
                    </Typography>
                </div>
                <Typography variant="h4">社員の新規登録</Typography>
                
            </div>
    
            <Grid container spacing={2} style={{marginTop: 40}}>
                <Grid item xs={12}>
                    <InputLabel htmlFor="dealing_item_name">
                        <Typography variant="h6" color="textPrimary">社員名 <MustMart /></Typography>
                    </InputLabel>
                    <TextField id="dealing_item_name" variant="outlined" size="small"/>
    
                </Grid>
                <Grid item xs={12}>
                    <InputLabel htmlFor="dealing_item_unit_name">
                        <Typography variant="h6" color="textPrimary">社員基準額（円) </Typography>
                    </InputLabel>
                    <TextField id="dealing_item_unit_name" variant="outlined" size="small"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">円</InputAdornment>,
                          }}/>
                
                </Grid>
                <Grid item xs={12}>
                    <InputLabel htmlFor="dealing_item_unit_price">
                    <Typography variant="h6" color="textPrimary">標準作業時間(H)下限</Typography>
                    
                    </InputLabel>
                    <TextField id="dealing_item_unit_price" variant="outlined" size="small"  
                        InputProps={{
                            endAdornment: <InputAdornment position="end">H</InputAdornment>,
                        }}/>
                    
                </Grid>
                <Grid item xs={12}>
                    <InputLabel htmlFor="dealing_item_unit_price1">
                    <Typography variant="h6" color="textPrimary">標準作業時間(H)上限</Typography>
                    
                    </InputLabel>
                    <TextField id="dealing_item_unit_price1" variant="outlined" size="small" 
                        InputProps={{
                            endAdornment: <InputAdornment position="end">H</InputAdornment>,
                        }} />
                    
                </Grid>

                <Grid item xs={12}>
                    <InputLabel htmlFor="dealing_item_unit_price2">
                    <Typography variant="h6" color="textPrimary">過時間単価(円／Ｈ）</Typography>
                    
                    </InputLabel>
                    <TextField id="dealing_item_unit_price2" variant="outlined" size="small" 
                        InputProps={{
                            endAdornment: <InputAdornment position="end">円／Ｈ</InputAdornment>,
                        }} />
                    
                </Grid>
    
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                    <FormLabel component="legend"><Typography variant="h6" color="textPrimary">消費税率設定  </Typography></FormLabel>
                    <RadioGroup aria-label="dealing_item_tax_type" name="dealing_item_tax_type" value={value} onChange={taxTypeHandleChange}>
                        <FormControlLabel value="USE_SENDER" control={<Radio />} label={<Typography color="textPrimary">自社情報の設定に従う <IconTip props={tipTitle}/> </Typography>} />
                        <FormControlLabel value="STANDARD_TAX_10" control={<Radio />} label="10%" />
                        <FormControlLabel value="REDUCED_TAX_8" control={<Radio />} label="軽減8%" />
                        <FormControlLabel value="STANDARD_TAX_8" control={<Radio />} label="8%" />
                        <FormControlLabel value="EXEMPTED_TAX" control={<Radio />} label="対象外" />
                        <FormControlLabel value="STANDARD_TAX_5" control={<Radio />} label="5%" />
                    </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <FormControl component="fieldset">
                    <FormLabel component="legend"><Typography variant="h6" color="textPrimary">部署タイプ </Typography></FormLabel>
                    <RadioGroup aria-label="dealing_item_tax_type" name="dealing_item_tax_type" value={value1} onChange={taxTypeHandleChange1}>
                        <FormControlLabel value="a" control={<Radio />} label="事業" />
                        <FormControlLabel value="b" control={<Radio />} label="派遣" />
                    </RadioGroup>
                    </FormControl>
                </Grid>

                
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" disableElevation style={styles.saveButton}> <Typography variant="h6" >保存する </Typography></Button>
                </Grid>
            </Grid>
        </Paper>
    )
}


