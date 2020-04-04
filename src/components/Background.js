import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Background() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#f5f7f9', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}