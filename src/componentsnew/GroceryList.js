import React, { useState, useEffect } from 'react';
import { Flex, Link , Image, useToast, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, IconButton, useBreakpointValue, Center } from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPython, FaHtml5, FaCss3, FaJsSquare, FaReact } from 'react-icons/fa';
import "./Hero.css"

const GroceryList = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  return ( 

    <>
    <Flex width="100%" paddingX="10"paddingY= "20" flexDirection={{ base: 'column', md: 'row' }}>
      <VStack spacing="3" flexWrap="wrap">
        <Heading>Grocery List</Heading>
      </VStack>
    </Flex>
    </>
  );
};

export default GroceryList;
