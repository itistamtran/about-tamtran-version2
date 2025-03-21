import { Container, Typography, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPhone, faEnvelope, faPen, faCamera, faHiking, faMusic, faBookReader, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';

import References from '../components/References';

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212', 
          color: '#F5F5F5',
          marginTop: '0px',
         
        }
      }
    }
  }
});



const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &:hover {
    color: #FFB6C1; 
  }
`;

const Resume = () => {
    const [hover, setHover] = useState(false); // Define hover state

  return (
    <>
     <Container maxWidth="lg">
      <ThemeProvider theme={theme}>
        {/* Video container */}
        <div className="relative w-full h-[60vh] overflow-hidden">
            <video className="absolute top-0 left-0 object-cover w-full h-full" autoPlay loop muted>
                <source src="/media/Relaxing-coding.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        {/* Content Container */}   
        {/* Tam Tran */}
        <div
            style={{
                position: 'absolute',
                top: '18rem', 
                left: 0,
                width: '100%',
                maxWidth: '600px',
                height: '3.5rem',
                backgroundColor: '#FFB6C1',
                backgroundOpacity: '0.7',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.7,
                padding: '0 20px',
                boxSizing: 'border-box',
                whiteSpace: 'nowrap',
            }}>           
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: 'Montserrat, sans-serif',
                    position: 'absolute',
                    left: '50%',
                    top: '3%',
                    transform: 'translateX(-50%)',
                    color: hover ? '#F33A6A' : 'black', 
                    WebkitTextStroke: hover ? '2px black' : 'none',
                    textShadow: '5px 5px 10px #F33A6A',
                    transition: 'color 0.3s ease',
                    whiteSpace: 'nowrap',
                    maxWidth: '100%',
                    overflow: 'hidden',
                }}
                onMouseEnter={() => setHover(true)} // Hover in
                onMouseLeave={() => setHover(false)} // Hover out
            >
                TAM TRAN
            </Typography>
        </div>
        {/* Icon container at the top left */}
        <div style={{
                position: 'absolute',
                top: 100, 
                left: 100, 
                padding: '20px', 
                display: 'flex',
                alignItems: 'center',
            }}>                   
            {/* Download icon that triggers a download */}
            <a href="/media/resume-tamtran.pdf" download="Resume_TamTran.pdf" style={{ color: 'white', textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faDownload} style={{ color: 'white' }} />
            </a>
        </div>
        {/* Contact Information Section */}
        <div style={{
            backgroundColor: 'transparent',
            color: '#ffffff',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            borderTop: '1px solid #FFB6C1',
            marginTop: '0px',
            fontSize: '15px',
            flexWrap: 'wrap', 
            }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
                <a href="tel:+17145150577" style={{ fontSize: '1rem', color: '#FFB6C1', textDecoration: 'none' }}>
                    (714) 515-0577
                </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
                <a href="mailto:itistamtran@gmail.com" style={{ fontSize: '1rem', color: '#FFB6C1', textDecoration: 'none' }}>
                    itistamtran@gmail.com
                </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px' }} />
                <a href="https://www.linkedin.com/in/tamtran-/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', color: '#FFB6C1', textDecoration: 'none' }}>
                    LinkedIn Profile
                </a>
            </div>
        </div>
        {/* Education Section */}
        <Grid container spacing={4} style={{ marginTop: '0px', alignItems: 'flex-start', width: '100vw' }}>
            <Grid item xs={14} md={12}>                
                <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.8rem', marginBottom: '0px', textAlign: 'left', color: '#FFB6C1' }}>
                    EDUCATION
                </Typography>
                <div className="flex flex-col items-start w-full sm:flex-row sm:items-center">
                    {/* Left section (Text content) */}
                    <div className="w-full sm:w-2/3">
                        <div style={{ width: '100%', textAlign: 'left' }}>
                            <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold'}}>
                                Cal Poly Pomona
                            </Typography>
                            <Typography 
                                variant="h6" 
                                component="h2"
                                style={{
                                    display: 'inline', 
                                    fontSize: window.innerWidth < 768 ? '1rem' : '1.2rem', 
                                    fontWeight: 'normal', 
                                    marginLeft: '10px'
                                    }}>
                                -- Expected December 2025
                            </Typography>
                        </div>
                        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', color: '#F5F5F5' }}>
                            Bachelor of Science in Computer Science
                        </Typography>
                        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', color: '#F5F5F5', marginTop: '-10px' }}>
                            Minors in Mathematics and Data Science
                        </Typography>
                        <div style={{ width: '100%', textAlign: 'left' }}>
                            <Typography 
                                variant="h3" 
                                component="h1"
                                style={{
                                    display: 'inline', 
                                    fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', 
                                    fontWeight: 'bold'
                                }}>
                                Cypress College
                            </Typography>
                            <Typography 
                                variant="h6" 
                                component="h2"
                                style={{
                                    display: 'inline', 
                                    fontSize: window.innerWidth < 768 ? '1rem' : '1.2rem', 
                                    fontWeight: 'normal', 
                                    marginLeft: '10px'
                                }}>
                                -- December 2023
                            </Typography>
                        </div>

                        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', color: '#F5F5F5' }}>
                            AS-T Degree in Computer Science
                        </Typography>
                    </div>
      
                    {/* Right section (Image) */}
                    <div className="flex justify-end hidden w-full sm:block" style={{ marginLeft: '200px' }}>
                        <img 
                            src="media/cpp.png" 
                            alt="Cal Poly Pomona image"
                            className="object-cover w-[300px] h-[200px] transition-all duration-100 ease-in-out h-250px"
                        />
                    </div>
                </div>
            </Grid>
        </Grid>

        {/* Skill Section */}
        
        <Grid container spacing={2} style={{ marginTop: '40px', alignItems: 'flex-start', borderTop: '1px solid #FFB6C1', }}>
            <Grid item xs={14} md={12}>
                <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.8rem', marginBottom: '0px', textAlign: 'left', color: '#FFB6C1' }}>
                   SKILL
                </Typography>
                <div style={{ width: '100%', textAlign: 'left' }}>
                    <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold'}}>
                        Programming:
                    </Typography>
                    <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'normal', marginLeft: '10px'}}>
                        Python, C++, Java, TypeScript, JavaScript, HTML, CSS, SQL
                    </Typography>
                </div>
                <div style={{ width: '100%', textAlign: 'left' }}>
                    <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold'}}>
                        Frameworks: 
                    </Typography>
                    <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'normal', marginLeft: '10px'}}>
                        Next.js, React
                    </Typography>
                </div>
                <div style={{ width: '100%', textAlign: 'left' }}>
                    <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold'}}>
                        Design: 
                    </Typography>
                    <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'normal', marginLeft: '10px'}}>
                        Photoshop, Premiere, Fresco, Sketchbook, Canva
                    </Typography>
                </div>
                <div style={{ width: '100%', textAlign: 'left' }}>
                    <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold'}}>
                        Other: 
                    </Typography>
                    <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'normal', marginLeft: '10px'}}>
                        Visual Studio Code, Pycharm, MySQL, GitHub, Google Colab
                    </Typography>
                </div>
            </Grid>
        </Grid>

        {/* Project Section */}
        <Grid container spacing={2} style={{ marginTop: '40px', alignItems: 'flex-start', borderTop: '1px solid #FFB6C1', }}>
            <Grid item xs={14} md={12}>
                <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.8rem', marginBottom: '0px', textAlign: 'left', color: '#FFB6C1' }}>
                    PROJECTS
                </Typography>
                <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', color: '#F5F5F5' }}>
                    Library System Developed (Group Project) - Fall 2024
                </Typography>
                <Typography variant="body1" component="p" style={{ fontStyle: 'italic', fontSize: '1.25rem', textAlign: 'left' }}>
                    Technologies: NextJS, Material UI, Tailwind CSS, PostgreSQL, Prisma, Neon
                </Typography>

                <ul style={{ marginTop: '10px' }}>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Collaboratively designed and implemented UI using NextJS, Material UI, and Tailwind CSS.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Backend development with PostgreSQL and Prisma.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Optimized system scalability and performance with Neon.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Deployed:
                            <a href="https://library-system-omega.vercel.app/" 
                                style={{ color: '#FFB6C1', fontWeight: '600', textDecoration: 'none', marginLeft: '5px', display: 'inline-block' }}>
                                CPP Library System
                            </a>
                        </Typography>
                    </li>
                </ul>    
            </Grid>
          </Grid>

          {/* Project Section */}
          <Grid container spacing={2} style={{ marginTop: '40px', alignItems: 'flex-start', borderTop: '1px solid #FFB6C1', }}>
            <Grid item xs={14} md={12}>
                <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.8rem', marginBottom: '0px', textAlign: 'left', color: '#FFB6C1' }}>
                    WORK EXPERIENCE
                </Typography>
                {/* CPP Philosophy Department Section */}
                <div style={{ width: '100%', textAlign: 'left' }}>
                    <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold', color: 'white'}}>
                        Cal Poly Pomona | Philosophy Department 
                    </Typography>
                    <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1rem' : '1.1rem', fontWeight: 'normal', marginLeft: '10px'}}>
                        -- January 2025 - Present
                    </Typography>
                </div>
                <Typography variant="body1" gutterBottom component="div" style={{ fontStyle: 'italic', fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', color: '#F5F5F5' }}>
                    Website Editor
                </Typography>
                <ul style={{ marginTop: '10px' }}>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Manage and update website content, styles, and layouts using Cascade CMS for multiple departmental sites, including the Digital Humanities Consortium, Ethics and Policy Center, Philosophy and Science Technology Society.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Utilize CSS to enhance design elements beyond Cascade CMS’s built-in capabilities, ensuring responsive and visually cohesive layouts.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Collaborate with faculty and staff to maintain an accurate and engaging online presence for academic and research initiatives.
                        </Typography>
                    </li>
                </ul>
                {/* CPP TOM Department Section */}
                <div style={{ width: '100%', textAlign: 'left' }}>
                    <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold', color: 'white'}}>
                        Cal Poly Pomona | Technology and Operations Management Department 
                    </Typography>
                    <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1rem' : '1.1rem', fontWeight: 'normal', marginLeft: '10px'}}>
                        -- July 2024 - December 2024
                    </Typography>
                </div>
                <Typography variant="body1" gutterBottom component="div" style={{ fontStyle: 'italic', fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', color: '#F5F5F5' }}>
                    Student Assistant
                </Typography>
                <div style={{ marginTop: '10px', marginBottom: '8px', fontSize: '1.25rem', textAlign: 'left' }}>
                    <Typography variant="body1" style={{fontSize: '1.25rem'}}>
                        <span style={{ marginRight: '10px' }}>&#9679;</span>
                        Website Maintenance: Managed and updated website content, styles, and layouts using Cascade CMS; monitored site performance; resolved bugs; and ensured optimal user experience.
                    </Typography>
                    <Typography variant="body1" style={{fontSize: '1.25rem'}}>
                        <span style={{ marginRight: '10px' }}>&#9679;</span>
                        Departmental Support: Assisted with day-to-day operations, including clerical tasks such as filing and data entry.
                    </Typography>
                    <Typography variant="body1" style={{fontSize: '1.25rem'}}>
                        <span style={{ marginRight: '10px' }}>&#9679;</span>
                        Faculty and Student Support: Provided assistance to faculty, staff, and students with department-related inquiries.
                    </Typography>
                    <Typography variant="body1" style={{fontSize: '1.25rem'}}>
                        <span style={{ marginRight: '10px' }}>&#9679;</span>
                        Social Media and Marketing: Developed content and marketing materials for the department’s social media platforms.
                    </Typography>   
                </div>

                {/* VietmediaTV Section */}
                <div style={{ width: '100%', textAlign: 'left' }}>
                    <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold', color: 'white'}}>
                        VietmediaTV | Garden Grove, CA
                    </Typography>
                    <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1rem' : '1.1rem', fontWeight: 'normal', marginLeft: '10px'}}>
                        -- May 2019 - Present
                    </Typography>
                </div>
                <Typography variant="body1" gutterBottom component="div" style={{ fontStyle: 'italic', fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', color: '#F5F5F5' }}>
                    Video, News Editor and Graphic Designer
                </Typography>
                <div style={{ marginTop: '10px', marginBottom: '8px', fontSize: '1.25rem', textAlign: 'left' }}>
                    <Typography variant="body1" style={{fontSize: '1.25rem'}}>
                        <span style={{ marginRight: '10px' }}>&#9679;</span>
                        Edit News for Anchors: Translate news from English to Vietnamese and edit the content to ensure accuracy and clarity, providing news anchors with well-prepared scripts for smooth and professional delivery.
                    </Typography>
                    <Typography variant="body1" style={{fontSize: '1.25rem'}}>
                        <span style={{ marginRight: '10px' }}>&#9679;</span>
                        Edit Videos and Write Captions for Social Media: Edit videos and craft engaging captions for social media platforms like Facebook and YouTube, enhancing the content's reach and impact.
                    </Typography>
                    <Typography variant="body1" style={{fontSize: '1.25rem'}}>
                        <span style={{ marginRight: '10px' }}>&#9679;</span>
                        Develop creative advertising content for media including flyers, logos, and posters.
                    </Typography>  
                </div>           
            </Grid>
          </Grid>

          {/* Related Coursework Section */}
          <Grid container spacing={2} style={{ marginTop: '40px', alignItems: 'flex-start', borderTop: '1px solid #FFB6C1', }}>
            <Grid item xs={14} md={12}>
                <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.8rem', marginBottom: '0px', textAlign: 'left', color: '#FFB6C1' }}>
                    RELATED COURSEWORK
                </Typography>
                <div style={{ marginTop: '10px', marginBottom: '8px', fontSize: '1.25rem', textAlign: 'left' }}>
                    <Typography variant="body1" style={{fontSize: '1.25rem'}}>
                        <span style={{ marginRight: '10px' }}>&#9679;</span>
                        Computer Architecture, Discrete Structures, Data Structures, Design and Analysis of Algorithms, System Programming, Object Oriented Design and Programming, Data Mining, and Big Data.
                    </Typography>
                    <Typography variant="body1" style={{fontSize: '1.25rem'}}>
                        <span style={{ marginRight: '10px' }}>&#9679;</span>
                        College Algebra, Trigonometry, Multivariable Calculus, Linear Algebra and Differential Equations, Probability and Statistics for CS Engineers, and Math of Operations Research I, II.
                    </Typography>
                </div>         
            </Grid>
          </Grid>

          {/* Additional Section */}
          <Grid container spacing={2} style={{ marginTop: '40px', alignItems: 'flex-start', borderTop: '1px solid #FFB6C1', }}>
            <Grid item xs={14} md={12}>
                <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.8rem', marginBottom: '0px', textAlign: 'left', color: '#FFB6C1' }}>
                    ADDITIONAL SECTIONS
                </Typography>
                <div style={{ marginTop: '10px', marginBottom: '8px', fontSize: '1.25rem', textAlign: 'left' }}>
                    <Typography variant="body1" style={{fontSize: '1.25rem'}}>
                        <span style={{ marginRight: '10px' }}>&#9679;</span>
                        Honors: President's List student, Dean's List Student
                    </Typography>
                    <Typography variant="body1" style={{fontSize: '1.25rem'}}>
                        <span style={{ marginRight: '10px' }}>&#9679;</span>
                        Hobbies/Interests:
                    </Typography>
                    <div className="flex justify-start gap-5 mt-4">
                                <FontAwesomeIcon icon={faPen} size="2x" className="text-[#FFB6C1]" />
                                <FontAwesomeIcon icon={faCamera} size="2x" className="text-[#FFB6C1]" />
                                <FontAwesomeIcon icon={faHiking} size="2x" className="text-[#FFB6C1]" />
                                <FontAwesomeIcon icon={faMusic} size="2x" className="text-[#FFB6C1]" />
                                <FontAwesomeIcon icon={faBookReader} size="2x" className="text-[#FFB6C1]" />
                                <FontAwesomeIcon icon={faGlobe} size="2x" className="text-[#FFB6C1]" />
                            </div>
                </div>         
            </Grid>
          </Grid>
          {/* References Section */}
          <References />
                    
        </ThemeProvider>
      </Container>
    </>
  );
};

export default Resume;
