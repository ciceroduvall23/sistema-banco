import React from 'react';
import Box from '@material-ui/core/Box';

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '5rem', height: '3rem',marginLeft: '140px',
  marginTop: '-45px',zIndex:'0'},
  borderColor: 'text.primary',
};

export default function BorderAdditive() {
  return (
    <Box display="fixed" justifyContent="center">
     
      <Box borderLeft={1} {...defaultProps} />
    </Box>
  );
}