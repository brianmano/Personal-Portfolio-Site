import React, { useState, useEffect, useContext } from 'react';
import { Flex, Link , Image, useToast, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, IconButton, useBreakpointValue, Center } from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPython, FaHtml5, FaCss3, FaJsSquare, FaReact } from 'react-icons/fa';
import "./Hero.css"
import PantryContext from './PantryContext';

const Pantry = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  return ( 

    <>
    <Flex width="100%" paddingX="10"paddingY= "20" flexDirection={{ base: 'column', md: 'row' }}>
      <VStack spacing="3" flexWrap="wrap">
        <Text>{useContext(PantryContext)}</Text>
      </VStack>
    </Flex>
    </>
  );
};

export default Pantry;
