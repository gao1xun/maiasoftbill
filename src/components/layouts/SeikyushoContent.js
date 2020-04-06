import React, { Fragment } from 'react';
import { Grid, Divider} from '@material-ui/core';
import SeikyshoLeft from './SeikyshoLeft';
import SeikyshoRight from './SeikyshoRight';
import SeikyshoBottom from './SeikyshoBottom'

const styles = {
    grid: {
        marginTop:10,
        marginBottom:10,
    },
    paper : {
        marginTop:10,
        marginBottom:10,
        padding:20
    }
}

export default ()=>
    <Fragment>
        <Grid container style={styles.grid}>
            <Grid item xs={2} >
            請求書の新規作成
            </Grid>
            <Grid item xs={1} >
            ご案内
            </Grid>
            <Grid item xs >
            請求書の作り方がわからない方はこちらをクリック
            </Grid>
        </Grid>
        <Grid container spacing={2} >
            <Grid item xs style={{backgroundColor:'red'}}>
                <SeikyshoLeft styles={styles}/>
            </Grid>
                <Divider orientation="vertical" flexItem />
            <Grid style={{backgroundColor:'blue'}} item xs>
                <SeikyshoRight styles={styles}/>
            </Grid>
        </Grid>
        <SeikyshoBottom />
    </Fragment>