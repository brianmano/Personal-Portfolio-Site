import React, { useState, useEffect } from 'react';
import { Flex, Link , Image, useToast, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, IconButton, useBreakpointValue, Center } from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPython, FaHtml5, FaCss3, FaJsSquare, FaReact } from 'react-icons/fa';
import "./Hero.css"

const Notifications = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  return ( 

    <>
    <Flex justify="center" width="100%" paddingX="10"paddingY= "20" flexDirection={{ base: 'column', md: 'row' }}>
      <VStack align="center" justify="center" spacing="3" flexWrap="wrap">
        <Heading>Notifications</Heading>
      </VStack>
    </Flex>
    </>
  );
};

export default Notifications;
