import React from 'react';
import { Container, Typography,  Grid, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

import MathComponent from '../../components/Math'; 

const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#121212',
            color: '#fff',
            padding: '140px',
            marginTop: '40px',
            fontSize: '1.25rem'
          }
        }
      }
    }
  });

  const ContributionContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  padding: 20px;
  color: white;
`;

const TextSection = styled.div`
  flex: 1;
  padding: 20px;
`;

const ImageSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%; 
  height: auto;
`; 

const BulletTypography = styled(Typography)({
  '&::before': {
    content: '"•"',  
    display: 'inline-block',
    width: '1em',    
    marginLeft: '-1em'  
  }
});

const StyledButton = styled(Button)`
  background-color: transparent !important;
  color: #FFB6C1 !important;
  border: 2px solid #FFB6C1 !important;
  font-weight: bold !important;
  margin-top: 10px;
  text-transform: none;

  &:hover {
    background-color: #FFB6C1 !important;
    color: #000 !important;
  }
`;

const AlignedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
`;

const ClassicalKnapsack = `
\\[
\\begin{aligned}
& \\text{Maximize} \\quad v_1 o_1 + v_2 o_2 + \\dots + v_n o_n \\\\
& \\text{Subject to} \\quad w_1 o_1 + w_2 o_2 + \\dots + w_n o_n \\leq \\text{Max Weight}
\\end{aligned}
\\]
`;

const ClassicalKnapsackExample = `
\\[
\\begin{aligned}
& \\text{Maximize} \\quad 2o_1 + 4o_2 + 3o_3 \\\\
& \\text{Subject to} \\quad 5o_1 + 6o_2 + 3o_3 \\leq 10
\\end{aligned}
\\]
`;

const Model1Knapsack = `
\\[
\\begin{aligned}
& \\text{Maximize } \\quad v_1 o_1 + v_2 o_2 + \\dots + v_n o_n \\\\
& \\text{Subject to } \\quad c_1 o_1 + c_2 o_2 + \\dots + c_n o_n \\leq \\text{Max Capacity} \\\\
& \\phantom{\\text{Subject to }} \\quad o_1 + o_{1,2} \\leq 1 \\\\
& \\phantom{\\text{Subject to }}\\quad o_2 + o_{1,2} \\leq 1
\\end{aligned}
\\]
`;

const Model1KnapsackExpand = `
\\[
\\begin{aligned}
& \\text{Maximize} \\quad 3o_1 + 3o_2 + 3o_3 + 3o_4 + 2o_5 + 6o_6 + 5o_7 + 8o_8 + 2o_9 + 5o_{1,2} + 8o_{3,4} + 4o_{5,6} \\\\[1.5ex]
& \\text{Subject to } \\quad 3o_1 + 3o_2 + 4o_3 + 4o_4 + 2o_5 + 4o_6 + 5o_7 + 5o_8 + 5o_9 + 6o_{1,2} + 6o_{3,4} + 8o_{5,6} \\leq 20 \\\\
& \\phantom{\\text{Subject to }} \\quad o_1 + o_{1,2} \\leq 1 \\\\
& \\phantom{\\text{Subject to }} \\quad o_2 + o_{1,2} \\leq 1 \\\\
& \\phantom{\\text{Subject to }} \\quad o_3 + o_{3,4} \\leq 1 \\\\
& \\phantom{\\text{Subject to }} \\quad o_4 + o_{3,4} \\leq 1 \\\\
& \\phantom{\\text{Subject to }} \\quad o_5 + o_{5,6} \\leq 1 \\\\
& \\phantom{\\text{Subject to }} \\quad o_6 + o_{5,6} \\leq 1
\\end{aligned}
\\]
`;

const marineKnapsackModel = `
\\[
\\begin{aligned}
& \\textbf{Maximize} && \\sum_{i=1}^{I} b_i \\left( \\frac{\\sum_{k=1}^{K} a_i X_{ik}}{r_i} \\right) \\\\[1.5ex]
& \\textbf{Subject to:} \\\\
& \\text{1. Weight capacity for each Marine:} && \\sum_{i=1}^{I} c_i X_{ik} \\leq w_k && \\forall\\ k = 1,\\dots,K \\\\
& \\text{2. Item limits (Upper bound on quantity):} && \\sum_{k=1}^{K} X_{ik} \\leq \\left\\lfloor \\frac{r_i}{a_i} \\right\\rfloor && \\forall\\ i = 1,\\dots,I \\\\
& \\text{3. Minimum supply requirement:} && \\sum_{k=1}^{K} a_i X_{ik} \\geq l_i && \\forall\\ i = 1,\\dots,I \\\\
& \\text{4. Item shareability constraint:} && (1 - t_i) X_{ik} \\leq 1 && \\forall\\ i,\\ k \\\\
& \\text{5. Non-negativity and integrality:} && X_{ik} \\geq 0, \\quad \\text{integer}, && \\forall\\ i,\\ k
\\end{aligned}
\\]
`;

const extendedMarineKnapsackModel = `
\\[
\\begin{aligned}
& \\textbf{Maximize} && \\sum_{i=1}^{I} b_i \\left( \\frac{\\sum_{k=1}^{K} a_i X_{ik}}{r_i} \\right)
  - \\beta \\sum_{i=1}^{I} \\sum_{k=1}^{K} c_i X_{ik}
  - \\gamma \\sum_{i=1}^{I} \\sum_{k=1}^{K} v_i X_{ik} \\\\[2ex]

& \\textbf{Subject to:} \\\\
& \\text{1. Weight capacity for each Marine:} &&
  \\sum_{i=1}^{I} c_i X_{ik} \\leq w_k
  \\quad \\forall\\ k = 1,\\dots,K \\\\

& \\text{2. Volume per Marine:} &&
  \\sum_{i=1}^{I} v_i X_{ik} \\leq q_k
  \\quad \\forall\\ k = 1,\\dots,K \\\\

& \\text{3. Item limits (Upper Bound on Quantity):} &&
  \\sum_{k=1}^{K} X_{ik} \\leq \\left\\lfloor \\frac{r_i}{a_i} \\right\\rfloor
  \\quad \\forall\\ i = 1,\\dots,I \\\\

& \\text{4. Minimum supply requirement:} &&
  \\sum_{k=1}^{K} a_i X_{ik} \\geq l_i
  \\quad \\forall\\ i = 1,\\dots,I \\\\

& \\text{5. Item shareability constraint:} &&
  (1 - t_i) X_{ik} \\leq 1
  \\quad \\forall\\ i,\\ k \\\\

& \\text{6. Non-negativity and integrality:} &&
  X_{ik} \\geq 0, \\quad \\text{integer}
  \\quad \\forall\\ i,\\ k
\\end{aligned}
\\]
`;

const KnapsackLogistics = () => {
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>

        {/* Title */}
        <Typography variant="h3" component="h1" gutterBottom style={{ marginTop: '4rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
          Extending the Knapsack Problem
        </Typography>
        <Typography variant="h3" component="h2" gutterBottom style={{ marginTop: '-1.2rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
          for Real-World Humanitarian Logistics
        </Typography>

        {/* Grid Layout: Left - Description | Right - Team & Technologies */}
        <Grid container spacing={4} style={{ marginTop: '20px', alignItems: 'flex-start' }}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'left' }}>
              May 8, 2025
            </Typography>
            <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
              An optimization framework from binary decisions to multi-agent load balancing under weight, volume, and environmental constraints.
            </Typography>

            {/* Button */}
            <AlignedContainer>
              <StyledButton variant="contained" href="https://github.com/itistamtran/self-sufficient-marine-knapsack">
                View Project
              </StyledButton>
            </AlignedContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
              Collaborative Team
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'left' }}>
              Tam Tran, Alyssa Poliakon, Wendy Alvarez
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
              Advisor
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'left' }}>
              Dr. Jennifer Switkes
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
              Technologies
            </Typography>
            <Typography variant="body2" style={{ textAlign: 'left' }}>
              Python, PuLP, Pandas, Mathematical Modeling
            </Typography>
          </Grid>
        </Grid>

        {/* Contribution Container */}
        <ContributionContainer className="flex flex-col lg:flex-row">
          <TextSection className="flex-1 light:text-black">
            <Typography style={{ fontWeight: 700, textAlign: 'left' }}>
              Contribution to Humanitarian Logistics Practice
            </Typography>

            <BulletTypography style={{ paddingTop: '20px', paddingLeft: '15px', textAlign: 'left' }}>
              The objective of this project was to extend the traditional Knapsack Problem into a practical optimization tool 
              for humanitarian logistics, addressing real-world challenges such as limited capacity and resource allocation.
            </BulletTypography>
            <BulletTypography style={{ paddingLeft: '15px', textAlign: 'left' }}>
              The primary outcomes include improved multi-agent coordination, efficient distribution under weight and volume constraints, 
              and consideration of environmental impacts during supply deployment.
            </BulletTypography>
            <BulletTypography style={{ paddingBottom: '20px', paddingLeft: '15px', textAlign: 'left' }}>
              An important takeaway is that mathematical modeling can significantly enhance logistical planning 
              by generating flexible, data-driven solutions. These solutions support more equitable and 
              sustainable distribution of aid across multiple sites and teams.
            </BulletTypography>
          </TextSection>

          <ImageSection className="flex-1">
            <Image src={'/media/knapsack-logistics.png'} alt="knapsack logistics" />
          </ImageSection>
        </ContributionContainer>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Abstract 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          The Knapsack Problem is a classic optimization problem that can be solved using Binary Integer Programming, a form of linear programming where variables are restricted to 0 or 1. 
          Using methods like the Simplex algorithm, we can determine the optimal selection of items to include in a knapsack to maximize value without exceeding a weight limit. 
          However, in practical applications, weight alone may not adequately capture constraints - volume and item shape also play key roles. To address this, we expand the traditional knapsack problem 
          to include volume as a constraint. We create the method from this idea and explore how grouping or compressing similar items changes the optimization landscape.  
          Finally, we apply these principles to a real-world logistics challenge in humanitarian operations. Based on the self-sufficient marine squad scenario from Simon et al. (2017), 
          we model the Multiple Knapsack Problem (MKP) to optimize the allocation of essential supplies like food, gear, and medicine across agents with limited carrying capacities. 
          Through integer programming and sensitivity analysis, we demonstrate how mathematical modeling can guide efficient resource planning in disaster relief and remote deployments.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Introduction 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          We approach the Knapsack Problem through three evolving models. First, we begin with the classical 0/1 Knapsack formulation using binary integer programming to maximize value within a weight limit. 
          Next, we consider both the weight and volume of items, recognizing that space - not just weight - often limits real-world packing. We explore how rigid versus compressible items affect capacity. 
          Then, we extend this to a multiple knapsack model for humanitarian logistics, where supplies must be distributed across agents with weight and volume constraints. Using and modifying the objective function from Simon et al. (2017), 
          we balance utility maximization with fatigue reduction by minimizing total weight carried. This progression highlights how optimization can adapt from theoretical models to practical logistics planning. <br />
          The following sections present each model in detail, starting with the classical 0/1 Knapsack formulation, followed by an enhanced version incorporating volume constraints, 
          and finally extending to a real-world application using a multiple knapsack approach in humanitarian logistics.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Classical Knapsack 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          In this model, we address the basic 0/1 Knapsack Problem using Binary Integer Programming. The objective is to select a combination of items that maximizes total value without exceeding a fixed weight capacity. 
          Each item can either be included (1) or excluded (0), making this a binary decision problem. <br />
          To solve this, we apply the Simplex algorithm adapted for binary constraints. This approach allows us to find an optimal solution where each decision variable is restricted to 0 or 1. The model is defined by:
        </Typography>

        {/* Classical Knapsack */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left', fontWeight: 'bold' }}>
          Objective Function:
        </Typography>
        <MathComponent content={ClassicalKnapsack} />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Variables:
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
        <b>o<sub>n</sub>:</b> The binary value of object number n.
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
        <b>w<sub>n</sub>:</b> The weight of the object n in pounds.
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
        <b>v<sub>n</sub>:</b> The value of object n.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Parameters:
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          <i>Max Weight:</i> The weight limit of the knapsack.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          <strong>Example problem:</strong> Given a set of items with specific weights and values in Table 1. 
        </Typography>

        {/* Image */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
          Table 1. Object Values and Weights for the Classical Knapsack Problem.
        </Typography>
        <img 
          src={"/media/knapsack-logistics-table-1.png"} 
          alt="knapsack logistics table 1" 
          style={{ width: '80%', height: 'auto', margin: '20px auto', boxShadow: '0px 0px 6px 0px #FFB6C1', display: 'block' }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Let the limit of the knapsack be 10 lbs.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Example Function:
        </Typography>
        <MathComponent content={ClassicalKnapsackExample} />

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Result 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          The optimal solution is (0,1,1) with a maximum value of 7 within the knapsack. This means that we put object 2 with weight 6 and a value of 4 and object 3 with weight 3 and a value of 3. 
          Resulting in the maximum value that can be carried within the knapsack of 7 with a carried weight of 9, leaving object 1 behind.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Model 1: Volume-aware Packing
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          In this model, we develop and extend the classical knapsack formulation by shifting the constraint focus from weight to volume. 
          When items are placed in a knapsack and they are of a certain size and weight, though weight is now negligible, we care about the size/shape of the object. 
          Filling a bag full of notebooks is now limited by the capacity of the bag. Textbooks are sometimes rigid items, binders take up a range of space depending on 
          how many papers are inside fabric or malleable items can be compressed with weight. 
        </Typography>
        <MathComponent content={Model1Knapsack} />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Let us explore the last constraint, based on the idea that like items can take up less space when together means we could achieve a greater possible value within the Knapsack. 
          However you cannot have an object included twice within this model. So we have each possible permutation of combined items with the individual items in the constraint. 
          This means with each combined item, object 1 in this case, and combined item object 1,2, only one of these objects can be selected to be placed in the knapsack. 
          If we choose only to include item 1, then by the binary values of the constraints, object 1,2 cannot be included.
        </Typography>
        
        {/* Image */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
          Table 2. Object Attributes for Volume-aware Packing Knapsack Optimization (Grouped by Type and Capacity)
        </Typography>
        <img 
          src={"/media/knapsack-logistics-table-2.png"} 
          alt="knapsack logistics table 2" 
          style={{ width: '80%', height: 'auto', margin: '20px auto', boxShadow: '0px 0px 6px 0px #FFB6C1', display: 'block' }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Let the limit of the knapsack be 10 lbs. <br />
          We see the capacity change when two like items are put into the knapsack for item types A, B, C. Type A items individually take up a capacity of 3 in the knapsack. 
          Typically, putting object 1 and 2 both in the knapsack would take up a capacity of 6. However, packing these items together reduces the total volume. 
          Similarly to a messy drawer, creating more available space by sorting the items from each other, putting them back in a drawer leaves you with better usable space for other tools.
        </Typography>
        
        {/* Image */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
          Table 3. Optimized Capacity Utilization by Grouped Item Type and Quantity
        </Typography>
        <img 
          src={"/media/knapsack-logistics-table-3.png"} 
          alt="knapsack logistics table 3" 
          style={{ width: '80%', height: 'auto', margin: '20px auto', boxShadow: '0px 0px 6px 0px #FFB6C1', display: 'block' }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Care Products have a split in their capacity when adding the two like items together. They are separated by the order items are added into the knapsack. 
          If we only put object 5 in the knapsack then we have a used capacity of 2, similarly only putting object 6 in the knapsack then we have a used capacity of 6. 
          Say object 6 has a malleable size, such as an item stored in a bag. When we pack both items together in the knapsack it is possible to place object 5 in with object 6, 
          say with object 5 within the bag of object 6, it can determine what is the best way to include or exclude these items. Assuming order matters, 
          each permutation of like items of non uniform size allows for less space to be used. As there are only 2 objects in type 3, once both objects are packed in the knapsack together 
          then they share the same combined capacity. Similarly, we will use the same constraint combination method as our combined item type. 
        </Typography>
        <MathComponent content={Model1KnapsackExpand} />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Volume is a good step to work towards in this case but if objects presented are malleable then when combined with other like objects the overall space they take up within the bag may be less than their initial combined volumes. 
          So working with the idea of malleable objects that have a given value that we want to maximize we get to modify our constraints. This means we can make a constraint that when we put items within the knapsack together, 
          the combined capacity gives us a greater value. 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Result
        </Typography>
      
        {/* Image */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
          Figure 1. LP Relaxation Solution for Extended Knapsack Model Using MATLAB's linprog Function
        </Typography>
        <img 
          src={"/media/knapsack-logistics-figure-1.png"} 
          alt="knapsack logistics figure 1" 
          style={{ width: '80%', height: 'auto', margin: '20px auto', boxShadow: '0px 0px 6px 0px #FFB6C1', display: 'block' }}
        />

        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
        From this we can use the branch and bound method, resulting in
        <b>o<sub>1</sub>=</b>0, <b>o<sub>2</sub>=</b>0, <b>o<sub>3</sub>=</b>0, <b>o<sub>4</sub>=</b>0, <b>o<sub>5</sub>=</b>0, <b>o<sub>6</sub>=</b>1,
        <b>o<sub>7</sub>=</b>0, <b>o<sub>8</sub>=</b>1, <b>o<sub>9</sub>=</b>0, <b>o<sub>10</sub>=</b>0, <b>o<sub>11</sub>=</b>1, <b>o<sub>12</sub>=</b>0
        with a maximum value of 22 within the knapsack.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Discussion 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          What this model explores is the ability to rewrite what is being measured in a mathematical model. Consider weight, value, capacity as measurements that can be improved upon. 
          Adapting math not by rewriting the equations to discover or measure something unconventional. Instead, using what ideas models present to measure what you experience in real life, 
          is a delightful translation of medium.  
        </Typography>

        {/* Model 2: Real-World Extension */}
        <MathComponent content={ClassicalKnapsack} />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Model 2: Real-World Extension — Humanitarian Logistics (Multiple Knapsack)
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          In this model, we adapt the knapsack framework to a real-world logistics problem inspired by the Self-Sufficient Marine scenario presented in Simon et al. (2017). 
          The objective is to optimally distribute essential items—such as food, water, medical supplies, and gear—across multiple agents (e.g., marines or aid workers), 
          each with limited weight and volume capacity. Based on the objective function defined in the original paper, which maximizes total utility, 
          we propose a modified objective function that not only maximizes total utility but also minimizes total weight carried to reduce fatigue and improve mobility. 
          Compare the modified model with the original model to evaluate the trade-off between utility and burden.  
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Results
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Consider if minimizing total weight - while still maximizing utility - actually improves the model’s performance in a meaningful way.   
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Discussion
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Can this mathematical model be applied to improve total weight carried to reduce fatigue and improve mobility? 
          What did the model show us, how can it be used and what can we do next on this project?   
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Linear Programming
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          In self-sufficient missions, such as humanitarian aid delivery or isolated military operations, agents must carry all essential resources with them for a defined time frame, such as 72 hours. 
          There are limitations on the carrying capacity of agents (e.g. soldiers or rescue workers). Therefore, the problem is how to distribute the available supply items with corresponding weight, 
          volume and utility value to each agent to maximize overall utility. In the article, Simon et al. (2017) develop and formulate three differences for the three corresponding interpretations of self-sufficiency: 
          a feasibility-based threshold model, a utility-based degree model, and a duration model for sustainment planning. For our project, we adopt the degree model as a foundation and introduce a modification to reduce total carried weight - 
          optimizing for both mission value and Marine fatigue.  
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          The original objective function
        </Typography>
        <MathComponent content={marineKnapsackModel} />
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
          where: <br />
          <b>b<sub>i</sub>:</b>  Utility of item i <br />
          <b>a<sub>i</sub>X<sub>ik</sub>:</b>  Total amount of item i carried by Marine k <br />
          <b>r<sub>i</sub>:</b>  Required quantity  of item i <br />
          1. Each marine k has a max weight limit wk <br />
          2. This is a floor function that enforces the maximum number of units of item i needed, given each unit represents ai <br />
          3. To ensure that each item i is carried at least at a minimum function level l<sub>i</sub> <br />
          4. If t<sub>i</sub> = 0: the item is non-transferable, so only one marine can carry it <br />
             If t<sub>i</sub> = 1: the item is transferable, so no restriction <br />
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          The Original Variables
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
          X<sub>ik</sub>: The number of item i carried by Marine k
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Parameters
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
          b<sub>i</sub>: Relative importance or value of item i <br />
          r<sub>i</sub>: Number of Marines who need to use item i <br />
          a<sub>i</sub>: Number of Marines who can share item i <br />
          c<sub>i</sub>: Weight (lbs) of item i <br />
          w<sub>i</sub>: Max total weight Marine k can carry <br />
          l<sub>i</sub>: Minimum number of units of item i that must be carried <br />
          t<sub>i</sub>: Shareability indicator  (1 = shareable or 0 = unshareable) <br />
          K: Number of Marines in the squad <br />
          I: Number of item types
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Develop Idea for Extending the Model 2
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
          In this step, we want to develop ideas for extending the Degree Model whereby incorporating both weight and volume minimization into the objective function. 
          Additionally, we introduce environment-specific configurations that adjust item utilities and requirements based on terrain. 
          This enables the model to adapt to different mission profiles and support real-world deployment planning. <br />
          Here is the configuration used in our implementation: <br />
          Weight capacity per Marine (lbs): w_base = 100 <br />     
          Volume capacity per Marine (cubic units): q_base = 75 <br />      
          Weight penalty factor: beta (β) = 0.2     <br /> 
          Volume penalty factor: gamma (γ)= 0.001 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          The Extending Objective Function
        </Typography>
        <MathComponent content={extendedMarineKnapsackModel} />
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
          Where: <br />
          b<sub>i</sub>: Utility of item i <br />
          c<sub>i</sub>: Weight (lbs) of item i <br />
          v<sub>i</sub>: Volumne of item i <br />
          β: Minimum number of units of item i that must be carried <br />
          γ: Shareability indicator  (1 = shareable or 0 = unshareable) <br />
          X<sub>ik</sub>: Number of item i assigned to Marine k <br />
          q<sub>k</sub>: The maximum volume capacity of Marine k <br />
          Note: <br />
          <BulletTypography style={{fontSize: '1.2rem', paddingLeft: '15px', textAlign: 'left' }}>
            β (beta) represents the penalty per unit of total weight across all Marines. A higher beta penalizes heavier solutions more severely, 
            encouraging the selection of lighter items or fewer quantities.
          </BulletTypography>
          <BulletTypography style={{fontSize: '1.2rem', paddingLeft: '15px', textAlign: 'left' }}>
            γ (gamma) is the penalty per unit of total volume. Similar to beta, a higher gamma discourages carrying bulky items, even if they provide high utility.
          </BulletTypography>
          These penalty terms act as regularizers, promoting packing efficiency and realistic load distribution, especially in missions with tighter constraints or harsher environments.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Interpretation
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
          When β or γ is low, the model behaves more like the original and prioritizes mission utility, even if the squad carries more. <br />
          When β or γ increases, the model sacrifices some utility to favor lighter and more compact loadouts, which is crucial in long-duration or high-mobility missions.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left', color: '#FFB6C1' }}>
          Result
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
          We used the above configuration and ran our modified Degree Model through 18 different scenarios, varying by environment (Hot/Cold SOP), squad size (4, 8, 12 Marines), 
          and mission duration (2 to 4 days). The results showed that our model achieved perfect self-sufficiency (100%) in all 2-day missions across all squad sizes and environments - 
          demonstrating that for short deployments, the optimized loadouts were both logistically feasible and fully mission-capable.
        </Typography>
        {/* Image */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
          Figure 2. Results: Self-Sufficiency Scores by Squad Size, Duration, and Environment
        </Typography>
        <img 
          src={"/media/knapsack-logistics-figure-2.png"} 
          alt="knapsack logistics figure 2" 
          style={{ width: '70%', height: 'auto', margin: '20px auto', boxShadow: '0px 0px 6px 0px #FFB6C1', display: 'block' }}
        />
      
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
          As mission duration increased, the SelfSufficiencyScore decreased, especially for smaller squads. For example, a 4-person squad on a 4-day mission dropped to 65.6% (Hot) and 67.4% (Cold), 
          reflecting the compounding impact of weight and volume penalties as more sustainment items were required. In contrast, larger squads (8 or 12 Marines) managed to retain higher scores in longer missions, 
          benefiting from greater flexibility in item distribution. <br />
          Compared to the original model, our results showed notable gains in short missions, and more realistic trade-offs in longer ones, 
          especially when constraints became tighter. The model’s inclusion of β and γ effectively discouraged overpacking and favored leaner, terrain-aware strategies. 
          These results emphasize the benefit of explicitly modeling logistical burdens, helping guide smarter decisions in real-world deployment planning. 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left'}}>
          For the full code and complete results, visit:{' '}
          <a
            href="https://github.com/itistamtran/self-sufficient-marine-knapsack"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#FFB6C1] hover:text-[#FFB6C1] no-underline hover:underline"
          >
            GitHub Repository
          </a>
        </Typography>

        <Typography variant="body2" style={{ fontStyle: 'italic', fontSize: '1rem', marginTop: '50px', textAlign: 'left' }}>
          References <br />
          Coherent Local Explanations for Mathematical Optimization – Optimization Online. (2025, February 6). Optimization-Online.org. https://optimization-online.org/2025/02/coherent-local-explanations-for-mathematical-optimization/ <br />
          Fiset, W. (2020, December 8). williamfiset/Algorithms. GitHub. https://github.com/williamfiset/algorithms <br />
          Simon, J., Apte, A., & Regnier, E. (2017). An application of the multiple knapsack problem: The self-sufficient marine. European Journal of Operational Research, 256(3), 868–876. https://doi.org/10.1016/j.ejor.2016.06.049
        </Typography>
        <Typography variant="body2" style={{ fontStyle: 'italic', fontSize: '1rem', marginTop: '50px', textAlign: 'left' }}>
          Appendix <br />
          The Hot SOP and Cold SOP datasets used in this study are sourced from the work of Simon, Apte, and Regnier (2016) in An Application of the Multiple Knapsack Problem: The Self-Sufficient Marine
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'center', marginTop: '50px' }}>
          Appendix A. Hot SOP Item Dataset for Humanitarian Logistics Multi-Knapsack Optimization Model
        </Typography>
        <img 
          src={"/media/knapsack-logistics-figure-3.png"} 
          alt="knapsack logistics figure 3" 
          style={{ width: '70%', height: 'auto', margin: '20px auto', boxShadow: '0px 0px 6px 0px #FFB6C1', display: 'block' }}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
          Appendix B. Cold SOP Item Dataset for Humanitarian Logistics Multi-Knapsack Optimization Model
        </Typography>
        <img 
          src={"/media/knapsack-logistics-figure-3.png"} 
          alt="knapsack logistics figure 3" 
          style={{ width: '70%', height: 'auto', margin: '20px auto', boxShadow: '0px 0px 6px 0px #FFB6C1', display: 'block' }}
        />

      </ThemeProvider>     
    </Container>
    
  );
};

export default KnapsackLogistics;
