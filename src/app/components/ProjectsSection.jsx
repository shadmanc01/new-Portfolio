"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AIngka",
    description: "An AI planning/designing assisstant powered by Google Gemini Ultra. AIngvar scans your space and recommends furniture based on your needs and preferences. It even keeps up with market trends to suggest what's popular.",
    image: "/images/projects/1.JPEG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shadmanc01/AIngka",
    previewUrl: "https://github.com/shadmanc01/AIngka",
  },
  {
    id: 2,
    title: "mentee.",
    description: "mentee. is an application for high-school graduates or GED holders from underprivileged communities and nontraditional backgrounds looking to build career skills through mentorship and community. ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mentee-marcy",
    previewUrl: "https://github.com/mentee-marcy",
  },
  {
    id: 3,
    title: "snkrHub",
    description: "snkrHub is an online portfolio which allows users to compile their sneakers and add sneakers to their wishlist. Displaying current market prices along with a total estimation of value for your collection. ",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shadmanc01/snkrHub",
    previewUrl: "https://github.com/shadmanc01/snkrHub",
  },
  {
    id: 4,
    title: "DoMore",
    description: "DoMore is an interactive productivity app, centered around the user and their mental well-being. DoMore was built using Javascript, CSS, HTML, Bootstrap with supplemental applications such as Figma and Photoshop to design the UI.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/shadmanc01/DoMore",
    previewUrl: "https://github.com/shadmanc01/DoMore",
  },
  {
    id: 5,
    title: "Into the Tall Grass",
    description: "My first game! Collaborated with a team to create a game using primarily Javascript. Took charge of sprite creation, enemy properties, map creation, player properties, and functions reliant on decrementing health.",
    image: "/images/projects/5.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shadmanc01/IntoTheTallGrass",
    previewUrl: "https://github.com/shadmanc01/IntoTheTallGrass",
  },
  {
    id: 6,
    title: "For the Bee's",
    description: "My first HTML project! Developed a fully dynamic website with a team with a one-week timeline. Utilized agile work environment to assign tasks, responsibilities, and deadlines.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/noelfernandez98/ForTheBees_Project",
    previewUrl: "https://github.com/noelfernandez98/ForTheBees_Project",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
