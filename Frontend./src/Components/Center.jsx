import React from 'react';
import Grid from '@mui/material/Grid';

export default function Center(props) {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item>
        {props.children}
      </Grid>
    </Grid>
  );
}
