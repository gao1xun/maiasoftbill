import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import SeikyushoEdit from './components/SeikyushoEdit';
import ShainEdit from './components/ShainEdit';
import * as serviceWorker from './serviceWorker';

import {createMuiTheme,MuiThemeProvider} from '@material-ui/core';
import {cyan, yellow} from '@material-ui/core/colors';

const theme = createMuiTheme ({
    palette: {
      parimary: cyan,
      secondary: {
          main:yellow[100]
      },
      type:'dark'
    }
})

ReactDOM.render(
  <MuiThemeProvider>
    <ShainEdit theme={theme}/>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
