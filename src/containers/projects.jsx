import React from "react";
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        title: "Library System Developed",
        imageUrl: "/media/cpp-library-2.png",
        tags: ["2024", "DEV", "NextJS", "MaterialUI", "TailwindCSS"],
        link: "/projects/CPPlibrary"
    },
    {
        id: 2,
        title: "Math of Operations Research",
        imageUrl: "/media/operations-research.png",
        tags: ["2024", "MatLab", "Mathematical Modeling"],
        link: "/projects/OperationsResearch"
    },
    {
        id: 3,
        title: "Brain Tumor Detected",
        imageUrl: "/media/brain-tumor-detected.jpg",
        tags: ["Coming 2025", "Machine Learning", "Python", "TensorFlow", "Scikit-learn", "Keras"],
        link: "/projects/BrainTumorDetected"
    }
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full bg-[black] p-12">
            {/* Title */}
            <h1 className="mb-10 text-4xl font-bold text-center text-white">My Projects</h1>
            
            {/* Project Cards Grid */}
            <div className="grid w-full max-w-6xl grid-cols-1 gap-12 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3">
                {projects.map((project, index) => (
                    <Link to={project.link} key={project.id} className="relative block transition duration-300 transform hover:scale-105">
                        <div 
                            className={`bg-[#121212] rounded-xl p-6 w-[350px] h-[460px] transition duration-300 
                                hover:shadow-[0px_0px_30px_rgba(0,255,128,0.5)] 
                                transform rotate-[3deg] hover:rotate-0`} 
                            style={{
                                transformOrigin: "center",
                                boxShadow: "0px 10px 30px rgba(255, 182, 193, 0.6)",
                                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                            }}
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-md w-full h-[220px]">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="object-cover w-full h-full transition-transform duration-300 rounded-md hover:scale-110"
                                />
                            </div>

                            {/* Title */}
                            <h2 className="mt-4 text-xl font-extrabold text-[#FFB6C1] text-center">{project.title}</h2>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap justify-center gap-2 mt-3">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="px-3 py-1 text-sm font-semibold text-black bg-[#FFB6C1] rounded-md shadow-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

