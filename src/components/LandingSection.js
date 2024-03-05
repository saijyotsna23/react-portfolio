import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import PassportImage from "../images/photo.jpeg";
import FullScreenSection from "./FullScreenSection";
const greeting = "Hello, I am Sai Jyotsna Vykuntam!";
const bio1 = "A Passionate software developer";
const bio2 = "expertise in React and a strong foundation in Computer Science. Experienced in creating robust web applications that align with business objectives. Eager learner and dedicated problem solver.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    return (
    <VStack spacing={4} alignItems="center">
      <Avatar style={{ width: '100px', height: '100px' }} name="s" src={PassportImage} />
      <Heading as="h6" size="sm">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg">
        {bio1}
      </Heading>
      <Text textAlign="center" fontSize="md"> {/* Adjust text alignment and size */}
    {bio2}
  </Text>
    </VStack>
  );

  </FullScreenSection>
  
  
);

export default LandingSection;
