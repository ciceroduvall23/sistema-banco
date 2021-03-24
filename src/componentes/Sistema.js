import React from 'react';
import Box from '@material-ui/core/Box';


const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '3rem', height: '3rem'},
    borderColor: 'text.primary',
  };

  export default function BorderAdditive() {
    return (
      <header className="App">
          <p>Dualbank</p> 
          <div className="linha-left">
          <Box display="flex" justifyContent="left">
        <Box borderLeft={1} {...defaultProps} />
      </Box>
      </div>
        </header>

    );
  }
  
  