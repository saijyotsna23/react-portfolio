import { HStack, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ title, description, imageSrc,githubLink }) => {
  return (
    <VStack bg="white" color="gray.800" borderRadius="lg" boxShadow="md" p={4} spacing={4} alignItems="flex-start" maxW="xs">
      <Image src={imageSrc} alt="Project img" borderRadius="lg" height={200} width={500}/>
      <VStack alignItems="flex-start" spacing={2}>
        <Heading as="h1" size="sm">{title}</Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack justifyContent="flex-end">
      <Link
  href={githubLink}
  fontSize="sm"
  color="inherit"
  textDecoration="underline"
  cursor="pointer"
  isExternal
>
  GitHub Link
</Link>
        <FontAwesomeIcon icon={faArrowRight} size="sm" />
      </HStack>
    </VStack>
  );
};

export default Card;