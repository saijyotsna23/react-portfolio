import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useAlertContext } from "../context/alertContext";
import useSubmit from "../hooks/useSubmit";
import FullScreenSection from "./FullScreenSection";

const ContactMeSection = () => {
  const { isLoading, response,submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string().required("Comment is required").min(25, "Comment must be at least 25 characters"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        response = await submit(values);
        console.log("Form values:", values);
        console.log("Server response:", response);

        if (response.success) {
          onOpen("success", `Thank you, ${values.firstName}, for submitting the form successfully.`);
          resetForm();
        } else {
          onOpen("error", response && response.message ? response.message : "Unknown error occurred.");
        }
      } catch (error) {
        console.error("An error occurred while submitting the form:", error);
        onOpen("error", "An error occurred while submitting the form. Please try again later.This is just to show case my");
      }
    },
  });

  return (
    <FullScreenSection isDarkBackground backgroundColor="#512DA8" py={16} spacing={8}>
      <VStack w={{ base: "100%", md: "1024px" }} p={32} alignItems="flex-start">
  <Heading as="h1" id="contactme-section">
    Contact me
  </Heading>
  <Box p={6} rounded="md" w="100%">
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing={4}>
        <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
          <FormLabel htmlFor="firstName">Name</FormLabel>
          <Input {...formik.getFieldProps("firstName")} id="firstName" name="firstName" />
          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.email && formik.touched.email}>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input {...formik.getFieldProps("email")} id="email" name="email" type="email" />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="type">Type of enquiry</FormLabel>
          <Select {...formik.getFieldProps("type")} id="type" name="type">
            <option value="hireMe">Freelance project proposal</option>
            <option value="openSource">Job Offer</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>
        <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
          <FormLabel htmlFor="comment">Your message</FormLabel>
          <Textarea {...formik.getFieldProps("comment")} id="comment" name="comment" height={250} />
          <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
          Submit
        </Button>
      </VStack>
    </form>
  </Box>
</VStack>

    </FullScreenSection>
  );
};

export default ContactMeSection;
