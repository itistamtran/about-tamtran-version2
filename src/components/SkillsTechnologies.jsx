import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaGithub, FaFigma, FaWind } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql, SiJupyter, SiMui } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
  { name: "Python", icon: <FaPython color="#3776ab" /> },
  { name: "Java", icon: <FaJava color="#f89820" /> },
  { name: "C++", icon: <TbBrandCpp color="#00599c" /> },
  { name: "SQL", icon: <SiMysql color="#00758f" /> },
  { name: "ReactJS", icon: <FaReact color="#61dafb" /> },
  { name: "NextJS", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "Windi CSS", icon: <FaWind color="#4adede" /> },
  { name: "Material UI", icon: <SiMui color="#007FFF" /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "VS Code", icon: <VscVscode color="#007acc" /> },
  { name: "Jupyter", icon: <SiJupyter color="#f37626" /> },
  { name: "Figma", icon: <FaFigma color="#a259ff" /> },
];

const SkillsTechnologies = () => {
  return (
    <section className="w-full px-6 py-10 text-white text-center p-[20px]">
        {/* Title outside the box */}
        <h2 className="text-3xl font-bold mb-6 text-white light:text-black ">Skills & Technologies</h2>

        {/* Bordered transparent box */}
        <div
            style={{
                maxWidth: "1200px",
                width: "90%",
                margin: "auto",
                border: "2px solid var(--border-color)",
                backgroundColor: "var(--bg-color)",
                borderRadius: "12px",
                padding: "24px",
                paddingBottom: "20px",
                marginBottom: "80px",
                color: "var(--text-color)",
            }}
        >
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: "var(--card-bg)",
                            border: "1px solid var(--border-color)",
                            color: "var(--text-color)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.5rem 1rem",
                            borderRadius: "9999px",
                            fontSize: "0.875rem",
                            fontWeight: "500",
                            transition: "transform 0.3s ease",
                          }}
                          className="hover:scale-105"
                          
                    >
                    <span className="text-xl">{skill.icon}</span>
                    {skill.name}
                    </div>
                ))}
            </div>
        </div>

    </section>

  );
};

export default SkillsTechnologies;
