import React from 'react';
import { Typography } from '@mui/material';

const VariableDescription = () => {
  return (
    <>
      <Typography variant="body1" style={{fontSize: '1.2rem', textAlign: 'left'}}>
        <b>x<sub>j</sub>:</b> The number of 12-hour shifts beginning at block j for j = 1, 2, 3, 4
      </Typography>
      <Typography variant="body1" style={{fontSize: '1.2rem', textAlign: 'left'}}>
        <b>y<sub>j</sub>:</b> The number of 8-hour shifts beginning at block j for j = 1, 2, 3, 4, 5
      </Typography>
    </>
  );
};

export default VariableDescription;