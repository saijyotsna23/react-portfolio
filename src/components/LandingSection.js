import { Avatar, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import PassportImage from "../images/photo.jpeg";
import FullScreenSection from "./FullScreenSection";
const greeting = "Hello, I am Sai Jyotsna Vykuntam!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

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
        {bio1}, {bio2}
      </Heading>
    </VStack>
  );

  </FullScreenSection>
  
  
);

export default LandingSection;
