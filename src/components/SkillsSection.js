import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";
import SkillCard from "./SkillCard";

const technicalSkills = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'C/C++', 'HTML/CSS', 'JavaScript', 'SQL']
  },
  {
    category: 'Web Development',
    skills: ['JavaScript', 'jQuery', 'Bootstrap', 'Node JS', 'Express JS', 'REST APIs', 'React JS']
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB']
  },
  {
    category: 'Technologies/Frameworks',
    skills: ['Spring Boot', 'GitHub', 'JDBC', 'Hibernate','Postman']
  },
  {
    category: 'Other',
    skills: ['Browser APIs', 'Debugging', 'Writing UI Components', 'Collaborative Development', 'Performance Optimization', 'Scalability']
  }
];

const SkillsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#8fbc8f"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="skills-section">
        Skills
      </Heading>
      <Box>
        {technicalSkills.map((category, index) => (
          <Box key={index} mb="4">
            <Heading as="h2" size="lg" mb="5">
              {category.category}
            </Heading>
            <Box display="flex" flexWrap="wrap" gap={4}>
              {category.skills.map((word, i) => (
                <SkillCard key={i} word={word} />
              ))}
            </Box>
          </Box>
        ))}
    </Box>
    </FullScreenSection>
);
};

export default SkillsSection;
