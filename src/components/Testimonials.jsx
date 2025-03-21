import React from "react";

const testimonials = [
  {
    name: "Scott Roby, PhD",
    company: "Cypress College",
    role: (
      <> 
        Professor of Mathematics <br />
        Science, Engineering and Math Division
      </>
    ),    
    image: "/media/scott-roby.jpg",
    text: `My Calculus 2 class is focused on producing thorough and well-presented logical solutions to problems, 
          and Tam excelled at this. Tam performed exceptionally well in the class and finished the semester with one of the top grades. 
          My observations of Tam have shown a hard-working, talented, and well-rounded student with a lot of drive and potential.`,
  },
  {
    name: "Professor's Name",
    company: "Cal Poly Pomona",
    role: "Professor",
    image: "/media/grid-photo.jpg",
    text: "Write something here",
    highlighted: true, 
  },
  {
    name: "Professor's Name",
    company: "Cal Poly Pomona",
    role: "Professor",
    image: "/media/grid-photo.jpg",
    text: "Write somthing here",
  },
];

const Testimonials = () => {
  return (
    <div style={styles.container}>
      {/* Section Title */}
      <h3 style={styles.subheading}>What Others Say About Me</h3>
      <h2 style={styles.heading}>Testimonials from Professors & Colleagues</h2>

      {/* Testimonials Grid */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(testimonial.highlighted ? styles.highlightedCard : {}),
            }}
          >
            {/* Profile Image + Name & Role Container */}
            <div style={styles.profileContainer}>
              <img src={testimonial.image} alt={testimonial.name} style={styles.image} />
              <div>
                <h4 style={styles.name}>{testimonial.name}</h4>
                <p style={styles.company}>{testimonial.company}</p>
                <p style={styles.role}>{testimonial.role}</p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p style={styles.text}>{testimonial.text}</p>
          </div>
        ))}
      </div>

      {/* Responsive Styling */}
      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1230px;
          margin: auto;
          padding: 20px;
        }

        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

/* Inline Styles */
const styles = {
  container: {
    textAlign: "center",
    padding: "60px 20px",
  },
  subheading: {
    fontSize: "1.5rem",
    color: "#cccccc",
    marginBottom: "10px",
    fontWeight: "300",
  },
  heading: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "white",
  },
  card: {
    background: "#3f3f3f",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(219, 16, 118, 0.5)",
    textAlign: "left",
  },
  highlightedCard: {
    background: "#595959", 
    padding: "20px",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "10px",
  },
  image: {
    width: "60px",
    height: "60px",
    borderRadius: "50%", 
    objectFit: "cover",
  },
  name: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "2px",
  },
  company: {
    fontSize: "1rem",
    color: "#cccccc",
    fontWeight: "600",
    margin: 0,
  },
  role: {
    fontSize: "1rem",
    color: "#cccccc",
    fontWeight: "300",
    margin: 0,
  },
  text: {
    fontSize: "1rem",
    color: "#cccccc",
    fontWeight: "300",
  },
};

export default Testimonials;

