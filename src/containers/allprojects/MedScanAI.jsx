import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

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
const StyledButton = styled(Button)`
  background-color: transparent !important;
  color: #FFB6C1 !important;
  border: 2px solid #FFB6C1 !important;
  font-weight: bold !important;
  margin-top: 20px;
  text-transform: none;

  &:hover {
    background-color: #FFB6C1 !important;
    color: #000 !important;
  }
`;

const AlignedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 2rem auto;
  padding-top: 56.25%; /* 16:9 */
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(255, 182, 193, 0.5);
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const MedScanAI = () => {
  return (
    <Container maxWidth="lg" >
      <ThemeProvider theme={theme}>

        {/* Title */}
        <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            className="text-3xl font-bold text-left text-white"
            style={{ marginTop: '5rem', fontWeight: 'bold', color: "var(--text-color)",}} 
        >
            MedScanAI
        </Typography>

        {/* Grid Layout: Left - Description | Right - Team & Technologies */}
        <Grid container spacing={4} className="mt-8">
          <Grid item xs={12} md={8}>
            <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'left' }}>
                May 27, 2025
            </Typography>
            <Typography variant="body1" gutterBottom className="text-lg leading-7 text-left text-white light:text-black">
              This is a personal project that aims to create a web-based diagnostic tool for brain tumor detection. Users can upload MRI images, which are then analyzed by an AI model to identify the presence and type of tumor. 
              The system provides fast, reliable results and a clear diagnosis page, making advanced medical insights more accessible to patients and healthcare professionals alike.
            </Typography>
            
            {/* Button Section */}
            <AlignedContainer>
                <StyledButton
                    variant="contained"
                    href="https://github.com/itistamtran/image-analysis-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub Repo
                </StyledButton>
                <StyledButton
                    variant="contained"
                    href="https://medscanai.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: '1rem' }}
                >
                    Visit Website
                </StyledButton>
            </AlignedContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Author: Tam Tran
            </Typography>
                      
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Tools & Libraries
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'left' }} >
                Python 3.x, TensorFlow, NumPy, Pandas,PIL, Flask
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
                Development Environment
            </Typography>
            <Typography variant="body2" style={{ textAlign: 'left', marginBottom: '0px' }}>
                VS Code, Jupyter Notebook, GitHub
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body1" gutterBottom className="text-lg leading-7 text-left text-white light:text-black mt-8">
          Below is the demo of the website. Please click on "GitHub Repo" to see the source codes or click "Visit Website" to explore the user experience.
        </Typography>

        {/* Responsive YouTube Embed */}
        <VideoWrapper>
            <iframe
                src="https://www.youtube.com/embed/OZBFaZuboUA?autoplay=1&mute=1&loop=1&playlist=OZBFaZuboUA"
                title="MedScanAI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </VideoWrapper>

      </ThemeProvider>
    </Container>
  );
};

export default MedScanAI;
