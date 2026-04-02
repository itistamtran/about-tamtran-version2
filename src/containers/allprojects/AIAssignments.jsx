import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#121212",
          color: "#fff",
          padding: "140px",
          marginTop: "0px",
        },
      },
    },
  },
});

const StyledButton = styled(Button)`
  background-color: transparent !important;
  color: #ffb6c1 !important;
  border: 2px solid #ffb6c1 !important;
  font-weight: bold !important;
  margin-top: 20px;
  text-transform: none;

  &:hover {
    background-color: #ffb6c1 !important;
    color: #000 !important;
  }
`;

const AlignedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

const BulletTypography = styled(Typography)({
  "&::before": {
    content: '"•"',
    display: "inline-block",
    width: "1em",
    marginLeft: "-1em",
  },
});

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

const StyledLink = styled.a`
  text-decoration: none;
  color: #ecbdc4;
  font-size: 1rem;
  &:hover {
    color: #e18aaa;
  }
`;

const AIAssignments = () => {
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>
        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          className="text-3xl font-bold text-left text-white"
          style={{
            marginTop: "5rem",
            fontWeight: "bold",
            color: "var(--text-color)",
          }}
        >
          AI Assignments
        </Typography>

        {/* Grid Layout: Left - Description | Right - Team & Technologies */}
        <Grid container spacing={4} className="mt-8">
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              gutterBottom
              component="div"
              style={{ fontSize: "1rem", lineHeight: "1.6", textAlign: "left" }}
            >
              Fall 2025
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className="text-lg leading-7 text-left text-white light:text-black"
            >
              This repository contains a collection of assignments for CS 4200:
              Artificial Intelligence (Fall 2025) at California State
              Polytechnic University, Pomona (CPP). The project demonstrates
              core artificial intelligence concepts, including search
              algorithms, problem solving, and intelligent systems. Each
              assignment is paired with a web-based demo that visually
              illustrates how the algorithms work in practice. The repository is
              organized by assignment, with instructions provided in each folder
              for running the demos locally.
            </Typography>

            {/* Button Section */}
            <AlignedContainer>
              <StyledButton
                variant="contained"
                href="https://github.com/itistamtran/cpp-cs4200-artificial-intelligence-fall25?tab=readme-ov-file"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </StyledButton>
              <StyledButton
                variant="contained"
                href="https://itistamtran.github.io/cpp-cs4200-artificial-intelligence-fall25/index.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "1rem" }}
              >
                Visit Website
              </StyledButton>
            </AlignedContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              style={{ fontWeight: 700, textAlign: "left" }}
            >
              Author: Tam Tran
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              style={{ fontWeight: 700, textAlign: "left" }}
            >
              Tools & Libraries
            </Typography>
            <Typography
              variant="body2"
              style={{ marginBottom: "20px", textAlign: "left" }}
            >
              Python 3.x, Jupyter Notebook, NumPy, Pandas, Streamlit
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              style={{ fontWeight: 700, textAlign: "left" }}
            >
              Algorithms
            </Typography>
            <Typography
              variant="body2"
              style={{ marginBottom: "20px", textAlign: "left" }}
            >
              A* Search, Backtracking, Minimax, Heuristics, Optimization
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              style={{ fontWeight: 700, textAlign: "left" }}
            >
              Environment
            </Typography>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: "0px" }}
            >
              VS Code, GitHub
            </Typography>
          </Grid>
        </Grid>

        <BulletTypography
          sx={{
            pl: "15px",
            textAlign: "left",
            color: "#ffb6c1",
            fontWeight: 700,
            fontSize: "1.5rem",
          }}
        >
          8 Queens Problem (Artificial Intelligence & Search Algorithms)
        </BulletTypography>
        <Typography
          variant="body1"
          style={{ textAlign: "left", marginBottom: "10px" }}
        >
          This project implements a solution to the classic 8 Queens Problem, a
          well-known constraint satisfaction problem in Artificial Intelligence.
          The objective is to place eight queens on an 8×8 chessboard such that
          no two queens attack each other, meaning no conflicts in rows,
          columns, or diagonals.
        </Typography>
        <Typography
          variant="body1"
          style={{ textAlign: "left", marginBottom: "10px" }}
        >
          The solution applies key AI techniques including backtracking,
          heuristic search, and A* search, systematically exploring the state
          space to find valid configurations. The algorithm incrementally places
          queens and backtracks whenever a conflict is detected, ensuring an
          efficient search for optimal solutions.
        </Typography>
        <Typography
          variant="body1"
          style={{ textAlign: "left", marginBottom: "10px" }}
        >
          This project also includes a Python-based implementation and an
          interactive web demo, allowing users to visualize how the algorithm
          navigates the search space and arrives at valid solutions. It
          demonstrates fundamental concepts in problem solving, state space
          search, and algorithm optimization within AI.
        </Typography>

        <Typography variant="body1" style={{ textAlign: "left" }}>
          <span style={{ marginRight: "10px" }}>&#9679;</span>
          Explore more:
          <StyledLink
            href="https://github.com/itistamtran/cpp-cs4200-artificial-intelligence-fall25/tree/main/asgn1-8-queens-problem"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontWeight: "600",
              textDecoration: "none",
              marginLeft: "5px",
              display: "inline-block",
            }}
          >
            8 Queens Problem GitHub Repo
          </StyledLink>
        </Typography>
        {/* Responsive YouTube Embed */}
        <VideoWrapper>
          <iframe
            src="https://www.youtube.com/embed/_iwH90yV9co?autoplay=1&mute=1&loop=1&playlist=_iwH90yV9co"
            title="8 Queens Problem Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>

        {/* Chess Game */}
        <BulletTypography
          sx={{
            pl: "15px",
            textAlign: "left",
            color: "#ffb6c1",
            fontWeight: 700,
            fontSize: "1.5rem",
          }}
        >
          Chess Position Evaluation using Machine Learning
        </BulletTypography>
        <Typography
          variant="body1"
          style={{ textAlign: "left", marginBottom: "10px" }}
        >
          This project is a chess position evaluation system powered by machine
          learning, designed to predict the strength of chess positions from FEN
          strings using a Convolutional Neural Network (CNN). The trained model
          is integrated into a playable chess application, allowing real-time
          board evaluation alongside human-vs-AI gameplay.
        </Typography>
        <Typography
          variant="body1"
          style={{ textAlign: "left", marginBottom: "10px" }}
        >
          The workflow includes data preprocessing, dataset balancing, model
          training, and evaluation. Chess positions are converted into an 8×8×14
          tensor representation, invalid scores are filtered out, evaluation
          values are normalized, and the dataset is balanced with
          inverse-frequency sample weighting to improve training quality.
        </Typography>
        <Typography
          variant="body1"
          style={{ textAlign: "left", marginBottom: "10px" }}
        >
          The model is built with TensorFlow and Keras and uses multiple
          convolutional blocks with BatchNormalization, LeakyReLU, Dropout, and
          dense layers to learn position strength directly from board states.
          The project also includes saved trained models and a web-based chess
          game that uses the model for interactive evaluation.
        </Typography>

        <Typography variant="body1" style={{ textAlign: "left" }}>
          <span style={{ marginRight: "10px" }}>&#9679;</span>
          Explore more:
          <StyledLink
            href="https://github.com/itistamtran/cpp-cs4200-artificial-intelligence-fall25/tree/main/asgn2-chess-game"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontWeight: "600",
              textDecoration: "none",
              marginLeft: "5px",
              display: "inline-block",
            }}
          >
            Chess Game GitHub Repo
          </StyledLink>
        </Typography>

        {/* Responsive YouTube Embed */}
        <VideoWrapper>
          <iframe
            src="https://www.youtube.com/embed/Ec3nTfwN-GE?autoplay=1&mute=1&loop=1&playlist=Ec3nTfwN-GE"
            title="Chess Game Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>

        {/* Resume-to-Job Match Recommendation System */}
        <BulletTypography
          sx={{
            pl: "15px",
            textAlign: "left",
            color: "#ffb6c1",
            fontWeight: 700,
            fontSize: "1.5rem",
          }}
        >
          Resume-to-Job Match Recommendation System
        </BulletTypography>
        <Typography
          variant="body1"
          style={{ textAlign: "left", marginBottom: "10px" }}
        >
          This project is an AI-powered resume matching system that analyzes
          resumes and job descriptions to determine how well a candidate fits a
          specific role. It applies Natural Language Processing (NLP) and
          machine learning techniques to extract key information such as skills,
          experience, and keywords, then computes a similarity score to rank
          candidate-job alignment.
        </Typography>
        <Typography
          variant="body1"
          style={{ textAlign: "left", marginBottom: "10px" }}
        >
          The system includes text preprocessing, feature extraction, and
          similarity modeling (e.g., cosine similarity or embeddings) to compare
          resumes with job requirements. It helps identify matching skills,
          highlight gaps, and provide insights for improving job applications,
          similar to how modern Applicant Tracking Systems (ATS) evaluate
          candidates.
        </Typography>
        <Typography
          variant="body1"
          style={{ textAlign: "left", marginBottom: "10px" }}
        >
          The project also features an interactive interface, allowing users to
          upload resumes and input job descriptions to receive real-time match
          scores and analysis, demonstrating practical applications of AI in
          recruitment and career optimization.
        </Typography>

        <Typography variant="body1" style={{ textAlign: "left" }}>
          <span style={{ marginRight: "10px" }}>&#9679;</span>
          Explore more:
          <StyledLink
            href="https://github.com/itistamtran/resume_job_match"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontWeight: "600",
              textDecoration: "none",
              marginLeft: "5px",
              display: "inline-block",
            }}
          >
            Resume-to-Job Match Recommendation System GitHub Repo
          </StyledLink>
        </Typography>
      </ThemeProvider>
    </Container>
  );
};

export default AIAssignments;
