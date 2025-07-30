import React from "react";
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Library System Developed",
        imageUrl: "/media/cpp-library-2.png",
        tags: ["2024", "DEV", "NextJS", "MaterialUI", "TailwindCSS"],
        link: "/allprojects/CPPlibrary"
    },
    {
        id: 2,
        title: "Medical Image Analysis",
        imageUrl: "/media/medscanai.png",
        tags: ["2025", "Machine Learning", "Flask", "Vite", "React"],
        link: "/allprojects/MedScanAI"
    },
    
];

export default function SoftwareApplications() {
    return (
        <div className="max-w-7xl mx-auto relative min-h-screen flex flex-col justify-start w-full bg-[black] light:bg-white pt-6 sm:pt-4">
        {/* Title */}
            <h1 className="text-4xl font-bold text-center text-white light:text-black w-full mt-15 sm:mt-15 mb-10">
                Software Applications Projects
            </h1>
            <Typography style={{ fontSize: '1.2rem',  textAlign: 'center', fontFamily: 'Montserrat, sans-serif', padding: '60px', alignItems: 'center', marginBottom: '40px', marginTop: '-20px', }}>
                My software application projects focus on building practical tools that solve real problems and make life a bit easier. I’ve developed a modern library management system that helps users discover, organize, and access books more efficiently, using frameworks like Next.js, Material UI, and TailwindCSS. I’ve also worked on MedScanAI, an application for medical image analysis, which leverages machine learning and a user-friendly interface to assist in early brain tumor detection. These projects reflect my passion for combining technology and thoughtful design to create solutions that matter.
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
                        className="rounded-xl p-6 w-[320px] h-[380px] transition duration-300 
                            hover:shadow-[0px_0px_30px_rgba(0,255,128,0.5)] 
                            transform md:w-[320px] md:h-[380px] sm:w-[280px] sm:h-[360px]
                            bg-[#121212] light:bg-[#818181] border border-[#FFB6C1]"
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
                        <h2 className="mt-4 text-lg font-extrabold text-[#FFB6C1] text-center md:text-base sm:text-sm">
                            {project.title}
                        </h2>                            

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-2 mt-3">
                            {project.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 text-xs font-semibold text-black bg-[#FFB6C1] rounded-md shadow-md md:text-xs sm:text-[10px]">
                                {tag}
                            </span>
                            ))}
                        </div>
                    </motion.div>
                    </Link>
                    ))}
                </div>
            </div>          
        </div>
    );
}
