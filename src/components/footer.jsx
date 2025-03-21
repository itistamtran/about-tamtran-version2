import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled(Box)`
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  overflow: hidden;
`;

/* Video Container */
const VideoContainer = styled(Box)`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  max-height: 300px; 
  object-fit: cover;
`;

/* Footer Content */
const FooterContainer = styled(Box)`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 10px;
  padding-left: 20px;
  padding-bottom: 30px;
  padding-right: 20px;
  border-top: 2px solid #FFB6C1;
  background-color: transparent;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &:hover {
    color: #FFB6C1; 
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>

      {/* Video Section Above Footer */}
      <VideoContainer>
        <Video autoPlay loop muted playsInline>
          <source src="/media/footer-video.mp4" type="video/mp4" />
          
        </Video>
      </VideoContainer>

      {/* Footer Content */}
      <FooterContainer>
        <Typography variant="body2" style={{ color: 'white' }}>
          © 2025 Tam Tran. All rights reserved.
        </Typography>
        <StyledLink to="/">Home</StyledLink>
      </FooterContainer>

    </FooterWrapper>
  );
};

export default Footer;
