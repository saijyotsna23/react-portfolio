import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import FullScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "Little Lemon",
    description:
      "'Little Lemon' is a React-based frontend application designed to streamline table reservations at a restaurant. Users can effortlessly reserve tables through an intuitive interface, enhancing their dining experience.",
    getImageSrc: () => require("../images/ab.jpg"),
    githubLink:"https://github.com/saijyotsna23/little__lemon.git"
    
  },
  {
    title: "warehouse management system",
    description:
      "The aim of this project is to develop and design a comprehensive warehouse management system that will optimize the entire sales and distribution process in a company. Overall, our main goal is to optimize the daily operations and improve the overall business performance of the warehouse companies.",
    getImageSrc: () => require("../images/photo2.jpg"),
    githubLink:"https://github.com/saijyotsna23/Warehouse-Management-System-Development-.git"
  },
  {
    title: "Simon Game",
    description:
      "The Simon game created using HTML, CSS, and JavaScript presents players with a sequence of blinking colors. If the player clicks the colors in the correct sequence, they advance to the next level, where the sequence becomes longer. If they make a mistake, the game ends.",
    getImageSrc: () => require("../images/small_game.jpeg"),
    githubLink:"https://github.com/saijyotsna23/Simon-Game.git"
  },
  
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#5f9ea0"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            githubLink={project.githubLink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
