import React, { useState, useEffect } from 'react';
import { Flex, Link , Image, useToast, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, IconButton, useBreakpointValue, Center } from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPython, FaHtml5, FaCss3, FaJsSquare, FaReact } from 'react-icons/fa';
import pantryPalImg from './images/pantrypal.png';
import Navbar from "./Navbar";
import "./Hero.css"

const Hero = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  return ( 

    <>
    <Navbar  />
    <Flex justify="center" width="100%" paddingX="10"paddingY= "20" flexDirection={{ base: 'column', md: 'row' }}>
      <VStack align="center" justify="center" spacing="3" flexWrap="wrap">
        <Image
          objectFit="cover"
          height="350px"
          width="100%"
          src={pantryPalImg}
          alt="PantryPal"
        />
        
        <Heading width="100%" paddingTop={10} id="experience" textAlign={"center"}>
          Who is using the pantry?
        </Heading>

        <Box align="center" justify="center">
          <Image
            borderRadius='full'
            boxSize='100px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
          />
          <Text fontSize='md'>Dan</Text>
        </Box>
  
      </VStack>
    </Flex>
    </>
  );
};

export default Hero;
