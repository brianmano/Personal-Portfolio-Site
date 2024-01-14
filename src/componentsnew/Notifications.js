import React, { useState, useEffect } from 'react';
import { Flex, Link , Image, useToast, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, IconButton, useBreakpointValue, Center } from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPython, FaHtml5, FaCss3, FaJsSquare, FaReact, FaExclamationTriangle } from 'react-icons/fa';
import "./Hero.css"

const Notifications = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  return ( 

    <>
    <Flex width="100%" paddingX="10"paddingY= "20" flexDirection={{ base: 'column', md: 'row' }}>
      <VStack width="100%" spacing="3" flexWrap="wrap" align={"left"}>
        <Heading>Notifications</Heading>
        <Box bg='#FFFFFF' bgColor={"rgba(255, 255, 255, 0.5)"} w='100%' p={4} color='black'>
        <Flex>
            <Box marginRight={5} fontSize="25px">
            <FaExclamationTriangle/> 
            </Box>
            <Box>
            3 items have been in your pantry for a month. Choose whether to keep or remove them by clicking here.
            </Box>
        </Flex>
        </Box>
        <Box bg='#FFFFFF' bgColor={"rgba(255, 255, 255, 0.5)"} w='100%' p={4} color='black'>
        <Flex>
            <Box marginRight={5} fontSize="25px">
            <FaExclamationTriangle/> 
            </Box>
            <Box>
            2 items have been in your pantry for two months. Choose whether to keep or remove them by clicking here.
            </Box>
        </Flex>
        </Box>
      </VStack>
    </Flex>
    </>
  );
};

export default Notifications;
