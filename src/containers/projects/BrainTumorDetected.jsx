import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212', 
          color: '#fff',
          padding: '140px',
          marginTop: '0px'
        }
      }
    }
  }
});
/* 
const StyledButton = styled(Button)({
  backgroundColor: '#4ADE80 !important',  
  '&:hover': {
    backgroundColor: '#006400 important', 
  },
  color: '#1f1f1f !important', 
  marginTop: '20px',
  fontWeight: 'bold'
});

const RightAlignedContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

*/

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &:hover {
    color: #FFB6C1; 
  }
`;

const BrainTumorDetected = () => {
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>

        {/* Title */}
        <Typography variant="h3" component="h1" gutterBottom style={{ marginTop: '5rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
          Brain Tumor Detected
        </Typography>
        <Typography variant="h3" component="h2" gutterBottom style={{ marginTop: '-1.2rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
          Using Machine Learning
        </Typography>

        {/* Grid Layout: Left - Description | Right - Technologies */}
        <Grid container spacing={4} style={{ marginTop: '20px', alignItems: 'flex-start' }}>
          <Grid item xs={12} md={8}>
          <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Thank you for visiting. This project will be available soon. Please check back later.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left'}}>
                Programming Languages
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'left' }} >
                Python
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Libraries & Frameworks
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'left' }} >
                TensorFlow, Keras, OpenCV, Scikit-learn, NumPy, Matplotlib, imutils
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Tools
            </Typography>
            <Typography variant="body2" style={{ textAlign: 'left', marginBottom: '300px' }}>
                Jupyter Notebook, TensorBoard
            </Typography>

          </Grid>
        </Grid>
    
        {/* Button */}
        {/* 
        <RightAlignedContainer>
            <StyledButton variant="contained" href="https://library-system-omega.vercel.app/">
                View Project
            </StyledButton>
        </RightAlignedContainer>
        */}
        

      </ThemeProvider>
    </Container>
  );
};

export default BrainTumorDetected;