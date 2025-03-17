import React from "react";

const testimonials = [
  {
    name: "Professor's Name",
    role: "Dr. Professor",
    image: "/media/grid-photo.jpg",
    text: "This is test",
  },
  {
    name: "Professor's Name",
    role: "Dr. Professor",
    image: "/media/grid-photo.jpg",
    text: "This is test",
    highlighted: true, 
  },
  {
    name: "Professor's Name",
    role: "Dr. Professor",
    image: "/media/grid-photo.jpg",
    text: "This is test",
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
            {/* Profile Image */}
            <img src={testimonial.image} alt={testimonial.name} style={styles.image} />
            <h4 style={styles.name}>{testimonial.name}</h4>
            <p style={styles.role}>{testimonial.role}</p>
            <p style={styles.text}>{testimonial.text}</p>
          </div>
        ))}
      </div>

      {/* Responsive Styling */}
      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1200px;
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
    background: "#dddddd",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  highlightedCard: {
    background: "#F8F8F8", 
    padding: "30px",
  },
  image: {
    width: "60px",
    height: "60px",
    borderRadius: "50%", 
    objectFit: "cover",
    marginBottom: "10px",
  },
  name: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "black",
  },
  role: {
    fontSize: "0.9rem",
    color: "black",
    marginBottom: "10px",
    fontWeight: "300",
  },
  text: {
    fontSize: "0.95rem",
    color: "black",
    fontWeight: "300",
  },
};

export default Testimonials;
