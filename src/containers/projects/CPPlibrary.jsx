import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

const CPPLibrary = () => {
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
            Library System
        </Typography>

        <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            className="text-5xl font-bold text-left text-white"
            style={{ marginTop: '-1.2rem', fontWeight: 'bold', color: "var(--text-color)", }} 
        >
            Developed
        </Typography>


        {/* Grid Layout: Left - Description | Right - Team & Technologies */}
        <Grid container spacing={4} className="mt-8">
          <Grid item xs={12} md={8}>
            <Typography variant="body1" gutterBottom className="text-lg leading-7 text-left text-white light:text-black">
              This is a group project that aims to create an online library system that provides streamlined services for students and library staff.
              Students can look up materials, create a book borrowing order, renew, and return books through our system.
              Meanwhile, staff can manage the book catalog and process students' orders.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography
            variant="subtitle1"
            gutterBottom
            className="text-left text-white light:text-black"
            style={{ fontWeight: "bold" }} 
            >
            Collaborative Team
            </Typography>
            <Typography variant="body2" className="mb-6 text-left text-white light:text-black">
              Tam Tran, Tram Tran, Vi Tran, An Nguyen, Thu Nguyen, David Lam
            </Typography>
            <Typography 
                variant="subtitle1"
                gutterBottom
                className="text-left text-white light:text-black"
                style={{ fontWeight: "bold", paddingTop: "10px" }} 
                >
              Technologies
            </Typography>
            <Typography variant="body2" className="text-left text-white light:text-black">
              NextJS, Material UI, Tailwind CSS, PostgreSQL, Prisma, Neon
            </Typography>
          </Grid>
        </Grid>

        {/* Button */}
        <div className="flex justify-end">
            <a href="https://library-system-omega.vercel.app/">
                <button className="px-4 py-2 text-lg font-bold text-black uppercase transition-colors duration-300 bg-pink-300 rounded-full hover:bg-pink-400 hover:text-white">
                    View Project
                </button>
            </a>
        </div>

        <Typography variant="body1" gutterBottom className="text-lg leading-7 text-left text-white light:text-black">
          Below is the interface that library staff will see. Please click on 'View Project' to explore the user experience.
        </Typography>

        {/* Image */}
        <img 
          src={"/media/cpp-library-1.png"} 
          alt="CPPLibrary" 
          className="w-full h-auto mt-10 mb-6 shadow-lg shadow-pink-500"
        />
        <img 
          src={"/media/cpp-library-2.png"} 
          alt="CPPLibrary" 
          className="w-full h-auto mt-10 mb-6 shadow-lg shadow-pink-500"
        />
        <img 
          src={"/media/cpp-library-3.png"} 
          alt="CPPLibrary" 
          className="w-full h-auto mt-10 mb-6 shadow-lg shadow-pink-500"
        />
        <img 
          src={"/media/cpp-library-4.png"} 
          alt="CPPLibrary" 
          className="w-full h-auto mt-10 mb-6 shadow-lg shadow-pink-500"
        />
        <img 
          src={ "/media/cpp-library-5.png"} 
          alt="CPPLibrary" 
          className="w-full h-auto mt-10 mb-6 shadow-lg shadow-pink-500"
        />
        <img 
          src={"/media/cpp-library-6.png"} 
          alt="CPPLibrary" 
          className="w-full h-auto mt-10 mb-6 shadow-lg shadow-pink-500"
        />
      </ThemeProvider>
    </Container>
  );
};

export default CPPLibrary;
