import React from "react";
import { motion } from "framer-motion";
import projectImage1 from "../../assets/reciplace logo 750 x 750.png";
import projectImage2 from "../../assets/DJ-topview.jpg";
import projectImage3 from "../../assets/readme.png";
import projectImage4 from "../../assets/blogspaced.png";
import projectImage5 from "../../assets/weather.png";
import projectImage6 from "../../assets/coding.jpg";
import projectImage7 from "../../assets/tunnel.png";
import projectImage8 from "../../assets/etgca.png";
import githubIcon from "../../assets/GitHub.svg";

import "./Portfolio.css";

export default function Portfolio() {
  // Variants for the container to stagger the children animations
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  // Variants for each project item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly hidden and below position
    visible: { opacity: 1, y: 0 }, // End fully visible and in position
  };

  const projects = [
    {
      id: 1,
      title: "Elements the Game Companion App",
      image: projectImage8,
      desc: "A full companion app to allow any player to experience the flash game Elements as a physical tabletop card game.",
      projectLink: "https://elements-companion-app.onrender.com/",
      githubLink: "https://github.com/CinosMagician/Elements-Companion-App",
    },
    {
      id: 2,
      title: "Requests DJ v2",
      image: projectImage2,
      desc: "Requests DJ Version 2 is a platform that allows DJs and event organizers to create interactive playlists for their events.",
      projectLink: "https://requests.dj/",
      githubLink: "https://github.com/roughnut/requests-dj-v2",
    },
    {
      id: 3,
      title: "ReciPlace",
      image: projectImage1,
      desc: "ReciPlace is a combination of recipe searching and nearby places to eat.",
      projectLink: "https://cinosmagician.github.io/group-2-recipe-project/",
      githubLink: "https://github.com/CinosMagician/group-2-recipe-project",
    },
    {
      id: 4,
      title: "J.A.T.E: Just Another Text Editor",
      image: projectImage7,
      desc: "JATE is a PWA Text Editor that allows you to type out notes or code on the fly, you can even install it for offline use and save notes to memory.",
      projectLink: "https://codexium-pwa-text-editor.onrender.com/",
      githubLink: "https://github.com/CinosMagician/Codexium-PWA-Text-Editor",
    },
    {
      id: 5,
      title: "BlogSpace",
      image: projectImage4,
      desc: "Blogs in Space!",
      projectLink: "https://blog-db-rofh.onrender.com/",
      githubLink: "https://github.com/CinosMagician/BlogSpace",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      image: projectImage5,
      desc: "Search up a city, suburb or a town and find out the weather forecasts",
      projectLink: "https://cinosmagician.github.io/weather-dashboard/",
      githubLink: "https://github.com/CinosMagician/weather-dashboard?tab=readme-ov-file",
    },
    {
      id: 7,
      title: "Taskboard",
      image: projectImage6,
      desc: "Plan out your tasks, sort them into planned, ongoing or done when completed. Task change to yellow when near the due date and red when overdue.",
      projectLink: "https://cinosmagician.github.io/taskboard/",
      githubLink: "https://github.com/CinosMagician/taskboard",
    },
    {
      id: 8,
      title: "README.md Generator",
      image: projectImage3,
      desc: "A program designed to help generate a README.MD file for any github project.",
      projectLink: "https://github.com/CinosMagician/README-generator",
      githubLink: "https://github.com/CinosMagician/README-generator",
    }
  ];

  return (
    <div className="portback">
      <h1 className="portfolioHeader">Portfolio</h1>
      <motion.div
        className="portfolio-grid"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <React.Fragment key={project.id}>
            {/* Project image with title block */}
            <motion.div
              className="project-image-box single-img"
              style={{ backgroundImage: `url(${project.image})` }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              onClick={() => window.open(project.projectLink, "_blank")}
            >
              <div className="project-title">{project.title}</div>
            </motion.div>

            {/* Description block with GitHub link */}
            <motion.div
              className="project-desc-box"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <img className="gitlogo" src={githubIcon} alt="GitHub" />
                View on GitHub
              </a>
            </motion.div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}