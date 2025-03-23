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
        <div className="max-w-7xl mx-auto relative min-h-screen flex flex-col justify-start w-full bg-[black] light:bg-white pt-6 sm:pt-4">
        {/* Title */}
            <h1 className="text-4xl font-bold text-center text-white light:text-black w-full mt-15 sm:mt-15 mb-10">
                My Projects
            </h1>
           
            {/* Project Cards Grid */}
<div className="flex justify-center">
  <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
    {projects.map((project) => (
      <Link to={project.link} key={project.id} className="relative block transition duration-300 transform hover:scale-105">
        <div 
          className="rounded-xl p-6 w-[370px] h-[440px] transition duration-300 
          hover:shadow-[0px_0px_30px_rgba(0,255,128,0.5)] 
          transform rotate-[3deg] hover:rotate-0 md:w-[320px] md:h-[400px] sm:w-[250px] sm:h-[360px]
          bg-[#121212] light:bg-[#818181]"
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
        </div>
      </Link>
    ))}
  </div>
</div>

            
        </div>
    );
}

