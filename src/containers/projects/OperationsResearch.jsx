import React from 'react';
import { Container, Typography,  Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

import MathComponent from '../../components/Math'; 
import VariableDescription from '../../components/VariableDescription';

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
  width: 100%; // or max-width if you want to constrain it
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


const latexContent = `
\\[
\\begin{align*}
& \\text{Minimize } \\sum_{j=1}^{4} x_j + \\sum_{j=1}^{5} y_j \\\\
& \\text{Subject to} \\\\
& x_1 + y_1 \\geq 8 \\\\
& \\frac{7}{8}x_1 + \\frac{7}{8}y_1 + x_2 + y_2 \\geq 15 \\\\
& x_1 + \\frac{7}{8}x_2 + \\frac{7}{8}y_2 + x_3 + y_3 \\geq 19 \\\\
& x_2 + \\frac{7}{8}x_3 + \\frac{7}{8}y_3 + x_4 + y_4 \\geq 19 \\\\
& x_3 + \\frac{7}{8}x_4 + \\frac{7}{8}y_4 + \\frac{7}{8}y_5 \\geq 15 \\\\
& x_4 + y_5 \\geq 8 \\\\
& \\sum_{j=1}^{4} x_j \\geq 0.80 \\left( \\sum_{j=1}^{4} x_j + \\sum_{j=1}^{5} y_j \\right) \\\\
& y_1 \\geq 2 \\\\
& y_2 \\geq 1 \\\\
& y_4 \\geq 1 \\\\
& y_5 \\geq 1\\\\
\\end{align*}
\\]
`;


const latexContentModify1 = `
\\[
\\begin{align*}
\\text{Minimize} \\quad & \\sum_{j=1}^{4} x_j + \\sum_{j=1}^{5} y_j + \\sum_{j=1}^{3} z_j & (1) \\\\
\\text{Subject to} \\\\
x_1 + y_1 + z_1 & \\geq 8 & (2) \\text{ (7am-11am)} \\\\
\\frac{7}{8}x_1 + \\frac{7}{8}y_1 + \\frac{7}{8}z_1 + x_2 + y_2 + z_2 & \\geq 15 & (3) \\text{ (11am-3pm)} \\\\
x_1 + \\frac{1}{2}z_2 + \\frac{7}{8}x_2 + \\frac{7}{8}y_2 + \\frac{7}{8}z_2 + x_3 + y_3 + z_3 & \\geq 19 & (4) \\text{ (3pm-7pm)} \\\\
x_2 + \\frac{1}{2}z_3 + \\frac{7}{8}x_3 + \\frac{7}{8}y_3 + \\frac{7}{8}z_3 + x_4 + y_4 + z_4 & \\geq 19 & (5) \\text{ (7pm-11pm)} \\\\
x_3 + \\frac{1}{2}z_4 + \\frac{7}{8}x_4 + \\frac{7}{8}y_4 + \\frac{7}{8}z_4 & \\geq 15 & (6) \\text{ (11pm-3am)} \\\\
x_4 + y_5 & \\geq 8 & (7) \\text{ (3am-7am)} \\\\
\\sum_{j=1}^{3} z_j & \\geq 0.2 \\left( \\sum_{j=1}^{4} x_j + \\sum_{j=1}^{5} y_j + \\sum_{j=1}^{3} z_j \\right) & (8)\\\\
y_1 + z_1\\geq 2 & (9) \\text{ (7am-3pm)}\\\\
y_2 + z_2 \\geq 1 & (10) \\text{ (11am-7pm)}\\\\
& y_4 \\geq 1 & (11) \\text{ (7pm-3am)}\\\\
& y_5 \\geq 1 & (12) \\text{ (11pm-7am)}\\\\
\\end{align*}
\\]
`;

const latexContentModify2 = `
\\[
\\begin{align*}
& \\text{Minimize } \\sum_{j=1}^{4} x_j + \\sum_{j=1}^{5} y_j & (1)\\\\
& \\text{Subject to} \\\\
& x_1 + y_1 \\geq 9 & (2)\\\\
& \\frac{3}{4}x_1 + x_2 + \\frac{7}{8}y_1 + y_2 \\geq 15 & (3)\\\\
& x_1 + \\frac{3}{4}x_2 + x_3 + \\frac{7}{8}y_2 + y_3 \\geq 20 & (4)\\\\
& x_2 + \\frac{3}{4}x_3 + x_4 + \\frac{7}{8}y_3 + y_4 \\geq 20 & (5)\\\\
& x_3 + \\frac{3}{4}x_4 + \\frac{7}{8}y_4 + y_5 \\geq 14 & (6)\\\\
& x_4 + \\frac{7}{8}y_5 \\geq 8 & (7)\\\\
\\end{align*}
\\]
`;

const latexContentModify3 = `
\\[
\\begin{align*}
& \\text{Minimize } \\sum_{j=1}^{4} x_j + \\sum_{j=1}^{5} y_j & (1)\\\\
& \\text{Subject to} \\\\
& x_1 + y_1 \\geq 9 & (2)\\\\
& \\frac{7}{8}x_1 + x_2 + \\frac{7}{8}y_1 + y_2 \\geq 14 & (3)\\\\
& x_1 + \\frac{7}{8}x_2 + \\frac{7}{8}y_2 + x_3 + y_3 \\geq 19 & (4) \\\\
& x_2 + \\frac{7}{8}x_3 + \\frac{7}{8}y_3 + x_4 + y_4 \\geq 19 & (5)\\\\
& x_3 + \\frac{7}{8}x_4 + \\frac{7}{8}y_4 + \\frac{7}{8}y_5 \\geq 15 & (6)\\\\
& x_4 + y_5 \\geq 8 & (7)\\\\
& \\sum_{j=1}^{4} x_j \\geq 0.80 \\left( \\sum_{j=1}^{4} x_j + \\sum_{j=1}^{5} y_j \\right) & (8)\\\\
& y_1 \\geq 2 & (9)\\\\
& y_2 \\geq 1 & (10)\\\\
& y_4 \\geq 1 & (11)\\\\
& y_5 \\geq 1 & (12)\\\\
\\end{align*}
\\]
`;

const OperationsResearch = () => {
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>

        {/* Title */}
        <Typography variant="h3" component="h1" gutterBottom style={{ marginTop: '4rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
          Optimization of Emergency Department
        </Typography>
        <Typography variant="h3" component="h2" gutterBottom style={{ marginTop: '-1.2rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
          Nurse-Scheduling
        </Typography>

        {/* Grid Layout: Left - Description | Right - Team & Technologies */}
        <Grid container spacing={4} style={{ marginTop: '20px', alignItems: 'flex-start' }}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
              Developed a mathematical model to optimize nurse scheduling in emergency departments, enhancing operational efficiency and staff satisfaction.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700, textAlign: 'left' }}>
              Collaborative Team
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'left' }}>
              Tam Tran, Alyssa Poliakon, Erika Vazquez
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
              MATLAB, Mathematical Modeling
            </Typography>
          </Grid>
        </Grid>

        {/* Contribution Container */}
        <ContributionContainer className="flex flex-col lg:flex-row">
          <TextSection className="flex-1 light:text-black">
            <Typography style={{ fontWeight: 700, textAlign: 'left' }}>
              Contribution to Emergency Nursing Practice
            </Typography>

            <BulletTypography style={{ paddingTop: '20px', paddingLeft: '15px', textAlign: 'left' }}>
              The objective of this project was to enhance the self-scheduling system for ED nurses.
            </BulletTypography>
            <BulletTypography style={{ paddingLeft: '15px', textAlign: 'left' }}>
              The primary outcomes of this project including better nurse-staffing ratios, 
              reduced time required to finalize the monthly scheduling, and the possibility of heightened nurse satisfaction.          
            </BulletTypography>
            <BulletTypography style={{ paddingBottom: '20px', paddingLeft: '15px', textAlign: 'left' }}>
              An important takeaway from this project for emergency nursing is that 
              the scheduling process can be optimized through mathematical modeling to craft daily rosters 
              that not only meet the necessary staffing demands but also consider the preferences of the nurses.
            </BulletTypography>
          </TextSection>

          <ImageSection className="flex-1">
            <Image src={'/media/operations-research.png'} alt="nursing schedule" />
          </ImageSection>
        </ContributionContainer>

  
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Abstract 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          The article uses a mathematical model to help with schedule preferences and staffing levels needed at the ED. 
          The result from the article was that the staff levels and nurses satisfaction increased. 
          After the team explored the article, we developed different ideas to help improve the nurse scheduling process. 
          The ideas implemented are having shifts of various lengths, increasing the amount of time at lunch breaks, 
          and analyzing how nursing shift changes can affect staffing levels.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Methods 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Compare the article's objective function with the new modified functions, and determine whether nursing shifts are better 
          to minimize, maximize, increase, or reduce the amount of hours in the shift, and increase the amount of time during lunch breaks.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Results 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Consider if the new modification did a positive change or negative, such as nurses’ satisfaction increase or reduction.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Discussion 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          Can this mathematical model be applied to improve others' schedules,
          what did the model show us, how can it be used and what can we do next on this project?
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Linear Programming 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
          The emergency department requires an optimal nurse schedule that ensures a sufficient number of nurses are available throughout the day 
          while considering constraints like shift lengths and meal breaks. The goal is to minimize the number of nurse shifts required while 
          ensuring staffing levels meet patient care demands. The scheduling process must balance between nurses working 8-hour and 12-hour shifts, 
          while also respecting nurse preferences for particular shifts.
        </Typography>

        {/* Image */}
        <img 
          src={"/media/nursing-scheduling-table-1.png"} 
          alt="nursing scheduling" 
          style={{ width: '100%', height: 'auto', marginTop: '40px', marginBottom: '20px', boxShadow: '0px 0px 6px 0px #66bb6a' }}
        />

        <Typography variant="body1" gutterBottom component="div" style={{ paddingTop: '10px', textAlign: 'center', fontSize: '0.9rem', lineHeight: '1.6', fontStyle: 'italic' }}>
          Average emergency department (A) patient arrivals and (B) number of patients by hour. 
        </Typography>

        {/* Image */}
        <img 
          src={"/media/nursing-scheduling-figure-1.png"} 
          alt="nursing scheduling" 
          style={{ display: 'block', width: '50%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px', boxShadow: '0px 0px 6px 0px #66bb6a'}}
        />
        
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          The original objective function 
        </Typography>
        <MathComponent content={latexContent} />

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          The Original Variables 
        </Typography>
        <VariableDescription />
        <Typography variant="body1" gutterBottom component="div" style={{ paddingTop: '20px', fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Parameters 
        </Typography>
        <BulletTypography style={{fontSize: '1.2rem', paddingLeft: '15px', textAlign: 'left' }}>
          Nurse staffing target: The number of nurses required at specific times of the day, varying based on patient demand.
        </BulletTypography>
        <BulletTypography style={{ fontSize: '1.2rem', paddingLeft: '15px', textAlign: 'left' }}>
          Shift duration: Nurses work either 8-hour or 12-hour shifts.        </BulletTypography>
        <BulletTypography style={{ fontSize: '1.2rem', paddingBottom: '20px', paddingLeft: '15px', textAlign: 'left' }}>
          Meal breaks: All nurses working 12-hour shifts take their half-hour meal breaks during the middle 4-hour block of their shifts, 
          and all nurses working 8-hour shifts take their meal breaks during the second block of their shifts,  except any 8-hour nurses who work at 11 PM, 
          who take their meals during the first block of their shifts. For each 4-hour block, a minimum staffing level is required, typically based on patient arrival patterns.
        </BulletTypography>

        <Typography variant="body1" gutterBottom component="div" style={{ textAlign: 'center', fontSize: '0.9rem', lineHeight: '1.6', fontStyle: 'italic' }}>
          Nurse preferences: Nurses may prefer specific shift times (e.g., night or morning shifts)
        </Typography>
        {/* Image */}
        <img 
          src={"/media/nursing-scheduling-table-2.png"} 
          alt="nursing scheduling" 
          style={{ display: 'block', width: '50%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px', boxShadow: '0px 0px 6px 0px #66bb6a'}}
        />

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.20rem', lineHeight: '1.6', textAlign: 'left' }}>
          To help improve the emergency department nursing scheduling process, the team decided to develop ideas for extending the model. 
          The first idea was to allow for shifts to have different lengths. The next idea was for nurses to have longer lunchtimes, and 
          the last one was to be better staffed for the increase in the average patient arrivals and the average number of current patients 
          starting at hours 8 - 9 (Figure 1 - Appendix). By developing those ideas we can analyze whether it is better to minimize, maximize, 
          or increase the amount of shift lengths or reduce them. To analyze the nursing model, scheduling will analyze different ideas and their outcomes.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Develop Idea 1 for Extending the Model 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.20rem', lineHeight: '1.6', textAlign: 'left' }}>
          In this step, we want to develop ideas for extending the model whereby, allowing for shifts of different lengths, 
          such as 10-hour shifts to fit demand surges without requiring full 12-hour or only 8-hour. 
          In this way, the nurse scheduling can be more flexible and simultaneously solve various daily needs.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Defining new variables  
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
        <b>z<sub>j</sub>:</b> The number of 10-hour shifts beginning at block j for j = 1, 2, 3. Each 10-hour shift zj covers two full-time blocks and half of a third block. 
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Modifying the objective function and constraints
        </Typography>
        <MathComponent content={latexContentModify1} />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.20rem', lineHeight: '1.6', textAlign: 'left' }}>
          In this linear program, the objective function (1) minimized the total number of shifts needed to reach the target nurse staffing level, 
          and based on Table 1, equation (2-7) ensured that the number of nurses available at each block is at least the target nurse staffing level. 
          As the nurse meal break is one-half hour of a 4-hour block, we assumed that a nurse works 7/8 of the block that included their meal break (recommended on the original). 
          Equation (8) shows the balance of 8-hour, 10-hour, and 12-hour shifts in nurse scheduling. We ensure that at least 20% of all shifts are 10-hour shifts.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.20rem', lineHeight: '1.6', textAlign: 'left' }}>
          In addition to these constraints, based on the original recommendation, we included constraints to accommodate nursing preferences for the 8-hour shifts. 
          Moreover, because we introduced the 10-hour shift, we will combine the 8-hour shift and 10-hour shift to make the staffing level more efficient and flexible. 
          According to the workforce, we needed 2 8-hour shifts from 7 AM to 3 PM and 1 from 11AM to 7PM, 7PM to 3AM, and 11PM to 7AM.
        </Typography>

        {/* Image */}
        <img 
          src={"/media/nursing-scheduling-table-3.png"} 
          alt="nursing scheduling" 
          style={{ display: 'block', width: '50%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px', boxShadow: '0px 0px 6px 0px #66bb6a'}}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Conclusion 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.20rem', lineHeight: '1.6', textAlign: 'left' }}>
          In this idea, the objective function value, which represents the minimum total number of hours worked, is 36.1013, increasing compared to the original model (z = 32.125). 
          The higher objective value in the modified solution could imply higher operational costs or less efficient use of resources. The result might show the 10-hour shifts are not fit for the Nurse-Scheduling. 
          The reasons could be changes in constraint tightness or modifications in the objective function. In addition, we realized the balance of 8-hour, 10-hour, and 12-hour shifts in nurse scheduling (in equation 8) 
          that might be key to deciding the result of the objective function. It's interesting because when we tried to change the balance in different ways (Results 2 and 3), the result didn't change that much and 
          was still larger than the original model. Therefore, we suppose although the 10-hour shifts might be fit for the nurses, it is not a good way for the nurse scheduling. 
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Develop Idea 2 for Extending the Model 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.20rem', lineHeight: '1.6', textAlign: 'left' }}>
          To improve the model by increasing lunch from a 30-minute meal break to 60-minute and nurses who work an 8-hour shift to have a 30-minute lunch. 
          These will increase job satisfaction, relieve stress, and restore focus and attention. At the same time minimize the number of people 
          without losing the nurses' staffing targets by time of day
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Parameters
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
        <b>x<sub>j</sub>:</b> the number of 12-hour shifts beginning at block j where j= 1,2,3,4. Lunch time is 60 min which will be represented as the amount of time the nurse works in the block = 3/4.
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
        <b>y<sub>j</sub>:</b> the number of 8-hour shifts beginning at block j where j= 1,2,3,4,5. Lunch time is 30 min which will be represented as the amount of time the nurse works in the block = 7/8. 
          Analyze the modifying objective function by each block.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Modifying the objective function and constraints
        </Typography>
        <MathComponent content={latexContentModify2} />
        
        {/* Image */}
        <img 
          src={"/media/nursing-scheduling-table-4.png"} 
          alt="nursing scheduling" 
          style={{ display: 'block', width: '50%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px', boxShadow: '0px 0px 6px 0px #66bb6a'}}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Conclusion 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.20rem', lineHeight: '1.6', textAlign: 'left' }}>
          The model exhibits the possibility of increasing their lunchtime and increases the constraint in some blocks, 
          giving the flexibility to take longer lunchtime. As well as the capacity to add more people when the number of patients increases. 
          The model gives an idea about how to maximize or minimize a model and understands that adding more variables and changing constraints makes it harder to accomplish an optimal solution.
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Discussion 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.20rem', lineHeight: '1.6', textAlign: 'left' }}>
          Something to explore is how adding interns will change models or explore when a pandemic happens are interesting topics to look more into.
        </Typography>
        {/* Develop Idea 3*/}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Develop Idea 3 for Extending the Model 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.20rem', lineHeight: '1.6', textAlign: 'left' }}>
          To expand upon the model we have chosen to see how changing the shift of a nurse will affect the staffing levels and compare to the average number of patients. 
          Changing the starting and ending hours of a 12-hour nurse due to the demand for another shift or a reduction of nurses needed without adding additional strain or stress to other nurses.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Idea 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.20rem', lineHeight: '1.6', textAlign: 'left' }}>
          We can see from Figure 1 (Appendix) the average patient arrivals and average number of patients at each hour. 
          To best prepare for the uptick of patients at hours 8 - 9, we can choose to move a nurse from a later start time to arrive earlier to better be prepared for the hospital's needs. 
          How can we do this inside of the model best? 
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Parameters
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
        <b>x<sub>j</sub>:</b> the number of 12-hour nurses working from 7am to 7pm
        </Typography>
        <Typography variant="body1"style={{fontSize: '1.2rem', textAlign: 'left'}}>
        <b>y<sub>j</sub>:</b> the number of of 12-hour nurses working from 11am to 11pm 
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Modifying the objective function and constraints
        </Typography>
        <MathComponent content={latexContentModify3} />
        {/* Image */}
        <img 
          src={"/media/nursing-scheduling-table-5.png"} 
          alt="nursing scheduling" 
          style={{ display: 'block', width: '70%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px', marginTop: '20px', boxShadow: '0px 0px 6px 0px #66bb6a'}}
        />
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold' }}>
          Conclusion 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.20rem', lineHeight: '1.6', textAlign: 'left' }}>
          The optimal solution for this model is the same as the original. From 7 am to 11 am there is one more nurse, and from 7 pm to 11 pm, there is one less nurse reflecting that one nurse now comes in 4 hours earlier. 
          In comparison to the other tests, it has the highest rounded-down staffing levels with a minimized z value. This shows that we can change the starting and ending times of one nurse and maintain optimality within the linear model. 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Discussion 
        </Typography>
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.20rem', lineHeight: '1.6', textAlign: 'left' }}>
          An expansion of this idea can be implemented in the case of the shifting of Figure 1. Say the graph more resembles a left-tailed graph. 
          Meaning the graph now has a major uptick of patient arrivals around 2 pm or on holidays. We can use this method to see how we can shift one nurse, or half of a shift, 
          to compensate for the increase in the nurse staffing level later in the day, and the decrease earlier in the day within the Model.
        </Typography>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 'bold', textAlign: 'left' }}>
          Reference: 
        </Typography>
        <Typography variant="body2" style={{ fontStyle: 'italic', fontSize: '1rem', marginBottom: '50px', textAlign: 'left' }}>
          Anna Camille Svirsko, Bryan A. Norman, David Rausch, Jennifer Woodring,
          {" "}Journal of Emergency Nursing, Volume 45, Issue 4, 2019, Pages 425-432.
        </Typography>

      </ThemeProvider>     
    </Container>
    
  );
};

export default OperationsResearch;