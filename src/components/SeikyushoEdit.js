import React, { Component, Fragment } from "react";
import {Container, CssBaseline} from '@material-ui/core';
import {Header, Footer, SeikyshoContent} from './layouts';

export default class SeikyushoEdit extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <Fragment>
            <CssBaseline />
            <Container maxwidth="xs" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
              <Header />
              <SeikyshoContent />
               
            </Container>
          </Fragment>
            
        )
    }
}  