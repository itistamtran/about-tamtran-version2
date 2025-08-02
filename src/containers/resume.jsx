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
  color: #ECBDC4;
  font-size: 1rem;
  &:hover {
    color: #E18AAA; 
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
            <video className="absolute top-0 left-0 object-cover w-full h-full" autoPlay loop muted playsInline>
                <source src="/media/relaxing-coding.mp4" type="video/mp4" />
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
                {/* Download icon that triggers a download */}
                <StyledLink href="/media/Tam_Tran_Resume.pdf" download="Resume_TamTran.pdf">
                    <FontAwesomeIcon icon={faDownload}/>
                </StyledLink>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
                <StyledLink href="tel:+17145150577">
                    (714) 515-0577
                </StyledLink>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
                <StyledLink href="mailto:itistamtran@gmail.com">
                    itistamtran@gmail.com
                </StyledLink>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px' }} />
                <StyledLink href="https://www.linkedin.com/in/tamtran-/" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                </StyledLink>
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
                        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', color: "var(--text-color)" }}>
                            Bachelor of Science in Computer Science
                        </Typography>
                        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', color: "var(--text-color)", marginTop: '-10px' }}>
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

                        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', color: "var(--text-color)" }}>
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
                   TECHNICAL SKILLS
                </Typography>
                <div style={{ width: '100%', textAlign: 'left' }}>
                    <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold'}}>
                        Programming:
                    </Typography>
                    <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'normal', marginLeft: '10px'}}>
                        Python, JavaScript, TypeScript, Java, C++, SQL, HTML, CSS, SQL
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
                        AI/ML Tools:
                    </Typography>
                    <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'normal', marginLeft: '10px'}}>
                        TensorFlow, Keras, PyTorch, Scikit-learn, timm, Pandas
                    </Typography>
                </div>
                <div style={{ width: '100%', textAlign: 'left' }}>
                    <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold'}}>
                        Developer Tools:
                    </Typography>
                    <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'normal', marginLeft: '10px'}}>
                        Visual Studio Code, Pycharm, GitHub, Google Colab, Firebase, REST API, Railway, MySQL, PostgreSQL
                    </Typography>
                </div>
                <div style={{ width: '100%', textAlign: 'left' }}>
                    <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold'}}>
                        Creative Tools:: 
                    </Typography>
                    <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'normal', marginLeft: '10px'}}>
                        Photoshop, Illustrator, Premiere, Fresco, Sketchbook, Canva
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
                <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', color: "var(--text-color)",fontWeight: 'bold' }}>
                    Brain Tumor Detection with Vision Transformer (Multiclass)
                </Typography>
                <Typography variant="body1" component="p" style={{ fontStyle: 'italic', fontSize: '1.25rem', textAlign: 'left' }}>
                    Technologies: Python, PyTorch, timm, Vision Transformer (ViT), CNN, Jupyter Notebook, Flask, REST API, Railway
                </Typography>
                <ul style={{ marginTop: '10px' }}> 
                    <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                        Developed and deployed a full-stack deep learning system to classify brain MRI images for multiclass diagnosis (Glioma, Meningioma, Pituitary, No Tumor, Unknown). Key contributions:
                    </Typography>
                    
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Built and fine-tuned Vision Transformer (ViT) models using PyTorch and the timm library for medical image classification.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Applied advanced data preprocessing, augmentation, and evaluation techniques to optimize model robustness and accuracy.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Achieved 98.5% multiclass classification accuracy.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Deployed model through Flask REST API with live web interface on Railway, enabling real-time predictions.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Deployed:
                            <StyledLink href="https://medscanai.vercel.app/" 
                                style={{ fontWeight: '600', textDecoration: 'none', marginLeft: '5px', display: 'inline-block', fontSize: '1.25rem' }}>
                                MedScanAI
                            </StyledLink>
                        </Typography>
                    </li>
                </ul>  
                <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', color: "var(--text-color)", fontWeight: 'bold' }}>
                    Library System Developed (Group Project)
                </Typography>
                <Typography variant="body1" component="p" style={{ fontStyle: 'italic', fontSize: '1.25rem', textAlign: 'left' }}>
                    Technologies: NextJS, Material UI, Tailwind CSS, PostgreSQL, Prisma, Neon
                </Typography>
                <ul style={{ marginTop: '10px' }}>   
                     <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                        Collaborated on developing an online library system to enhance service operations for students and library staff. Responsibilities included:
                    </Typography>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Collaboratively designed and implemented user interfaces using NextJS, Material UI, and Tailwind CSS.
                        </Typography>
                    </li>
              
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Contributed to backend development with PostgreSQL and Prisma for efficient data handling.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Assisted in optimizing system scalability and performance with Neon.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Deployed:
                            <StyledLink href="https://library-system-omega.vercel.app/" 
                                style={{ fontWeight: '600', textDecoration: 'none', marginLeft: '5px', display: 'inline-block', fontSize: '1.25rem', }}>
                                CPP Library System
                            </StyledLink>
                        </Typography>
                    </li>
                </ul>    
            </Grid>
          </Grid>

          {/* Work Experience Section */}
          <Grid container spacing={2} style={{ marginTop: '40px', alignItems: 'flex-start', borderTop: '1px solid #FFB6C1', }}>
            <Grid item xs={14} md={12}>
                <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.8rem', marginBottom: '0px', textAlign: 'left', color: '#FFB6C1' }}>
                    WORK EXPERIENCE
                </Typography>
                
                {/* CPP Philosophy Department Section */}
                <Grid container style={{ width: '100%' }}>
                    {/* Left: Job/Company */}
                    <Grid item xs={12} md={9}>
                        <Typography variant="h3" component="h1" style={{ fontWeight: 'bold', color: 'var(--text-color)', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', textAlign: 'left'}}>
                            Cal Poly Pomona | Philosophy Department
                        </Typography>
                        <Typography variant="body1" style={{ fontStyle: 'italic', fontSize: '1.25rem', color: "var(--text-color)", textAlign: 'left' }}>
                            Website Editor
                        </Typography>
                    </Grid>
                    {/* Right: Dates */}
                    <Grid item xs={12} md={3} style={{ textAlign: 'right' }}>
                        <Typography variant="h6" component="h2" style={{ fontSize: '1.1rem', fontWeight: 'normal' }}>
                            Jan 2025 - Present
                        </Typography>
                    </Grid>
                </Grid>

                {/* Bullets */}
                <ul style={{ marginTop: '10px', marginLeft: 0, paddingLeft: 20 }}>
                    <li>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Manage and update website content, styles, and layouts using Cascade CMS for multiple departmental sites, including the Digital Humanities Consortium, Ethics and Policy Center, Philosophy and Science Technology Society.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Utilize CSS to enhance design elements beyond Cascade CMS’s built-in capabilities, ensuring responsive and visually cohesive layouts.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Collaborate with faculty and staff to maintain an accurate and engaging online presence for academic and research initiatives.
                        </Typography>
                    </li>
                </ul>

                {/* CPP TOM Department Section */}
                <Grid container style={{ width: '100%' }}>
                    {/* Left: Job/Company */}
                    <Grid item xs={12} md={9}>
                        <Typography variant="h3" component="h1" style={{ fontWeight: 'bold', color: 'var(--text-color)', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', textAlign: 'left', marginTop: '20px' }}>
                            Cal Poly Pomona | Technology and Operations Management Department 
                        </Typography>
                        <Typography variant="body1" style={{ fontStyle: 'italic', fontSize: '1.25rem', color: "var(--text-color)", textAlign: 'left' }}>
                            Student Assistant
                        </Typography>
                    </Grid>
                    {/* Right: Dates */}
                    <Grid item xs={12} md={3} style={{ textAlign: 'right' }}>
                        <Typography variant="h6" component="h2" style={{ fontSize: '1.1rem', fontWeight: 'normal', marginTop: '20px' }}>
                            July 2024 - December 2024
                        </Typography>
                    </Grid>
                </Grid>

                {/* Bullets */}
                <ul style={{ marginTop: '10px', marginLeft: 0, paddingLeft: 20 }}>
                    <li>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Website Maintenance: Managed and updated website content, styles, and layouts using Cascade CMS; monitored site performance; resolved bugs; and ensured optimal user experience.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Departmental Support: Assisted with day-to-day operations, including clerical tasks such as filing and data entry.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Faculty and Student Support: Provided assistance to faculty, staff, and students with department-related inquiries.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" style={{ fontSize: '1.25rem', textAlign: 'left' }}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Social Media and Marketing: Developed content and marketing materials for the department’s social media platforms.
                        </Typography>
                    </li>
                </ul>
        
            </Grid>
          </Grid>

          {/* Related Coursework Section */}
          <Grid container spacing={2} style={{ marginTop: '40px', alignItems: 'flex-start', borderTop: '1px solid #FFB6C1', }}>
            <Grid item xs={14} md={12}>
                <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.8rem', marginBottom: '0px', textAlign: 'left', color: '#FFB6C1' }}>
                    RELATED COURSEWORK
                </Typography>
                <div style={{ marginTop: '10px', marginBottom: '8px', fontSize: '1.25rem', textAlign: 'left' }}>
                    <div style={{ width: '100%', }}>
                        <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold'}}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Computer Science & AI:
                        </Typography>
                        <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'normal', marginLeft: '10px'}}>
                            Machine Learning, Data Mining, Big Data, Data Structures in C++, Design and Analysis of Algorithms, Object-Oriented Design, Systems Programming, Computer Architecture
                        </Typography>
                    </div>
                    <div style={{ width: '100%', }}>
                        <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold'}}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Math & Data Science:
                        </Typography>
                        <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'normal', marginLeft: '10px'}}>
                            Linear Algebra, Probability and Statistics, Discrete Structures, Math of Operations Research I & II
                        </Typography>
                    </div>
                    <div style={{ width: '100%', }}>
                        <Typography variant="h3" component="h1" style={{ display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'bold'}}>
                            <span style={{ marginRight: '10px' }}>&#9679;</span>
                            Other:
                        </Typography>
                        <Typography variant="h6" component="h2" style={{display: 'inline', fontSize: window.innerWidth < 768 ? '1.2rem' : '1.25rem', fontWeight: 'normal', marginLeft: '10px'}}>
                            Multivariable Calculus, General Physics I & II
                        </Typography>
                    </div>
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
          <Grid container spacing={2} style={{ marginTop: '40px', alignItems: 'flex-start', borderTop: '1px solid #FFB6C1', }}>
            <References />
          </Grid>
                    
        </ThemeProvider>
      </Container>
    </>
  );
};

export default Resume;
