import { Box, HStack, Link } from "@chakra-ui/react"; // Fixed import statement
import {
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:saijyotsna23@gmail.com",
  },
  /*{
    icon: faGithub,
    url: "https://github.com",
  },*/
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sai-jyotsna-vykuntam-0a010818b", // Fixed LinkedIn URL
  },
  
];

const Header = () => {
  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    window.history.replaceState({}, '', `/#${anchor}`);
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
  {socials.map((social, index) => (
    <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '25px' }}>
      <FontAwesomeIcon icon={social.icon} size="2x" />
    </Link>
  ))}
</nav>
          <nav>
            <HStack spacing={8}>
            
              <>
    <a href="#projects-section" onClick={handleClick('projects')}>
                Projects
              </a>
              <a href="#contact-me" onClick={handleClick('contactme')}>
                Contact Me
              </a>
              <a href="#skills-section" onClick={handleClick('skills')}>
                Skills
              </a>
  </>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
