import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Linhavertical from './borda'


export default function Color() {
  return (
    <Typography component="div" variant="body1" >
      <div className="dualbank">
      <Box color="#6959CD">
       Dualbank <Linhavertical />
       
          </Box>
          </div>
    </Typography>
  );
}