import { Text, VStack } from "@chakra-ui/react";
import React from "react";

const SkillCard=({word})=>{
    return (
        <VStack bg="white" color="gray.800" borderRadius="lg" boxShadow="md" p={4} spacing={4} alignItems="flex-start" maxW="xs">
        <Text>{word}</Text>
    </VStack>
    );
}
export default SkillCard;