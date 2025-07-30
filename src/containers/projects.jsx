import React from "react";
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Software Applications",
        imageUrl: "/media/software-applications.png",
        link: "/projects/SoftwareApplications"
    },
    {
        id: 2,
        title: "Operations Research",
        imageUrl: "/media/operations-research-projects.png",
        link: "/projects/OperationsResearch"
    },
    {
        id: 3,
        title: "Machine Learning",
        imageUrl: "/media/machine-learning.png",
        link: "/projects/MachineLearning"
    }
];

export default function ProjectsPage() {
    return (
        <div className="max-w-7xl mx-auto relative min-h-screen flex flex-col justify-start w-full bg-[black] light:bg-white pt-6 sm:pt-4">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center text-white light:text-black w-full mt-15 sm:mt-15 mb-10">
            My Projects
          </h1>
          <Typography style={{ fontSize: '1.2rem',  textAlign: 'center', fontFamily: 'Montserrat, sans-serif', padding: '60px', alignItems: 'center', marginBottom: '40px', marginTop: '-20px', }}>
            I’ve worked across a range of areas that blend technology, problem-solving, and data-driven insights. My projects span software applications, where I design and build user-friendly tools, to operations research, where I tackle complex real-world challenges using analytical methods. I also focus on machine learning, applying algorithms and data science to uncover patterns and drive smarter decisions. Each area reflects my passion for turning ideas into practical solutions.
          </Typography>
           
          {/* Project Cards Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
              {projects.map((project) => (
                <Link to={project.link} key={project.id} className="relative block transition duration-300 transform hover:scale-105">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ rotate: 3, scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: project.id * 0.08 }}
                    className="
                      rounded-xl p-4 w-full max-w-[90vw] 
                      sm:max-w-sm md:max-w-[300px]
                      min-h-[320px] md:min-h-[340px]
                      transition duration-300 
                      hover:shadow-[0px_0px_30px_rgba(0,255,128,0.5)] 
                      bg-[#121212] light:bg-[#818181] border border-[#FFB6C1]
                    "
                    style={{
                      transformOrigin: "center",
                      boxShadow: "0px 10px 30px rgba(255, 182, 193, 0.6)",
                      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    }}
                  >
                    {/* Image */}
                    <div className="overflow-hidden rounded-md w-full h-[200px]">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="object-cover w-full h-full transition-transform duration-300 rounded-md hover:scale-110"
                      />
                    </div>
                    {/* Title */}
                    <h2 className="mt-4 text-2xl font-extrabold text-[#FFB6C1] text-center md:text-xl sm:text-lg 
                      transition-all duration-300 hover:scale-105 shadow hover:shadow-pink-200">
                      {project.title}
                    </h2>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>          
        </div>
    );
}

