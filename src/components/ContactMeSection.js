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
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser'; // Import EmailJS library
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useAlertContext } from '../context/alertContext';
import useSubmit from '../hooks/useSubmit';
import FullScreenSection from './FullScreenSection';

const ContactMeSection = () => {
  const { isLoading} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      comment: Yup.string().required('Comment is required').min(25, 'Comment must be at least 25 characters'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await emailjs.send('service_d6v3rk2', 'template_x1kg4he', values, '7klHOsP6fFRQG8ZXX');
        onOpen('success', 'Email sent successfully!');
        resetForm();
      } catch (error) {
        onOpen('error', 'Failed to send email. Please try again later.');
      }
    },
  });

  return (
    <FullScreenSection isDarkBackground backgroundColor="#512DA8" py={{ base: 4, md: 16 }} spacing={8}>
      <VStack w={{ base: "100%", md: "1024px" }} px={{ base: 4, md: 32 }} py={{ base: 2, md: 32 }} alignItems="center">
        <Heading as="h1" id="contactme-section" size="xl" textAlign="center" mb={4}>
          Contact me
        </Heading>
        <Box p={{ base: 4, md: 6 }} rounded="md" w={{ base: "100%", md: "80%" }} alignSelf="center">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} alignItems="flex-start" w="100%">
              <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName} w="100%">
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input {...formik.getFieldProps("firstName")} id="firstName" name="firstName" />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email && formik.touched.email} w="100%">
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input {...formik.getFieldProps("email")} id="email" name="email" type="email" />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl w="100%">
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select {...formik.getFieldProps("type")} id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Job Offer</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment && formik.touched.comment} w="100%">
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
