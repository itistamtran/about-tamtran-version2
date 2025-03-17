import { Grid, Typography } from "@mui/material"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const References = () => {
  return (
    <div className="p-4">
      <Grid container spacing={4} className="pt-8">
        {/* Title */}
        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.8rem', marginBottom: '0px', textAlign: 'left', color: '#FFB6C1', marginLeft: '20px' }}>
            REFERENCES
        </Typography>
        {/* References Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              className="font-semibold text-white" style={{ marginLeft: '20px', textAlign: 'left' }}
            >
              Dr. Scott Roby
            </Typography>
            <Typography
              variant="body1"
              className="text-white" style={{ marginLeft: '20px', textAlign: 'left' }}
            >
              Professor of Mathematics
            </Typography>
            <Typography
              variant="body1"
              className="text-white" style={{ marginLeft: '20px', textAlign: 'left' }}
            >
              Science, Engineering, Mathematics Division <br />
              Cypress College
            </Typography>
            <div className="flex items-center mt-2" style={{ marginLeft: '20px' }}>
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#FFB6C1]" />
              <Typography
                variant="body2"
                className="text-white"
              >
                (714) 484-7000, ext. 48637
              </Typography>
            </div>
            <div className="flex items-center mt-2" style={{ marginLeft: '20px' }}>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#FFB6C1]" />
              <Typography
                variant="body2"
                className="text-white"
              >
                sroby@cypresscollege.edu
              </Typography>
            </div>
          </Grid>

          {/* Second Reference */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              className="font-semibold text-white" style={{ marginLeft: '20px', textAlign: 'left' }}
            >
              Vinh Nguyen
            </Typography>
            <Typography
              variant="body1"
              className="text-white" style={{ marginLeft: '20px', textAlign: 'left' }}
            >
              Founder
            </Typography>
            <Typography
              variant="body1"
              className="text-white" style={{ marginLeft: '20px', textAlign: 'left' }}
            >
              Vietmedia TV
              <br />
              Broadcasting & Media Production Company
            </Typography>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#FFB6C1]" style={{ marginLeft: '20px' }}/>
              <Typography
                variant="body2"
                className="text-white"
              >
                (661) 623-9999
              </Typography>
            </div>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#FFB6C1]" style={{ marginLeft: '20px' }}/>
              <Typography
                variant="body2"
                className="text-white" 
              >
                Vietmediatv57.14@gmail.com
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default References;
