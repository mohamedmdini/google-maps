import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Map from './Map';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <h1>Google Maps Integration</h1>
        <Map />
      </Container>
    </React.Fragment>
  );
}

export default App;











