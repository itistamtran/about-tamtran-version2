import { Grid, Typography } from "@mui/material"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const References = () => {
  return (
    <div className="p-4">
      <Grid container spacing={4} className="pt-8">
        {/* Title */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.8rem', marginBottom: '0px', textAlign: 'left', color: '#FFB6C1', marginLeft: '20px', marginBottom: '20px' }}>
            REFERENCES
        </Typography>
        {/* References Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              className="font-semibold" style={{ marginLeft: '20px', textAlign: 'left', fontWeight: 'bold', color: '#FFB6C1' }}
            >
              Dr. Alex Madva
            </Typography>
            <Typography
              variant="body1"
              className="text-white" style={{ marginLeft: '20px', textAlign: 'left', color: "var(--text-color)", fontSize: '1.25rem' }}
            >
              Associate Professor, Department of Philosophy <br />
              Director, California Center for Ethics & Policy <br />
              Co-Director, Digital Humanities Consortium

            </Typography>
            <Typography
              variant="body1"
              className="text-white" style={{ marginLeft: '20px', textAlign: 'left',color: "var(--text-color)", fontSize: '1.25rem' }}
            >
              Cal Poly Pomona
            </Typography>
            <div className="flex items-center mt-2" style={{ marginLeft: '20px' }}>
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#FFB6C1]" />
              <Typography
                variant="body2"
                style={{ color: "var(--text-color)", fontSize: '1.25rem'}}>
                  (909) 869-3847
              </Typography>
            </div>
            <div className="flex items-center mt-2" style={{ marginLeft: '20px' }}>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#FFB6C1]" />
              <Typography
                variant="body2"
                style={{ color: "var(--text-color)", fontSize: '1.25rem' }}>
                ammadva@cpp.edu
              </Typography>
            </div>
          </Grid>

          {/* Second Reference */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              className="font-semibold" style={{ marginLeft: '20px', textAlign: 'left', fontWeight: 'bold', color: '#FFB6C1' }}
            >
              Dr. Jennifer Switkes
            </Typography>
            <Typography
              variant="body1"
              style={{ marginLeft: '20px', textAlign: 'left', color: "var(--text-color)", fontSize: '1.25rem' }}
            >
              Professor of Mathematics            
              <br />
              Department of Mathematics and Statistics, <br />
              College of Science
            </Typography>
            <Typography
              variant="body1"
              style={{ marginLeft: '20px', textAlign: 'left', fontSize: '1.25rem' }}>
              Cal Poly Pomona
            </Typography>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#FFB6C1]" style={{ marginLeft: '20px' }}/>
              <Typography
                variant="body2"
                style={{ color: "var(--text-color)", fontSize: '1.25rem' }}>
                (909) 869-3489
              </Typography>
            </div>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#FFB6C1]" style={{ marginLeft: '20px' }}/>
              <Typography
                variant="body2"
                style={{ color: "var(--text-color)", fontSize: '1.25rem' }}>
                  jmswitkes@cpp.edu
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default References;
