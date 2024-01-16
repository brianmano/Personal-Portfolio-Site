import React, { useState, useEffect } from 'react';
import { Flex, Link, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter, Tab, useBreakpointValue } from '@chakra-ui/react';
import { MdOutlineArrowOutward, MdOutlineArrowCircleUp } from "react-icons/md";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, Facode, FaHeart, FaReact } from 'react-icons/fa';
import "../App"

/* change the following to customize the page*/
const emaiLink = "mailto:brian.manomaisupat@gmail.com"
const email = "brian.manomaisupat@gmail.com"
const linkedin = "https://www.linkedin.com/in/brian-mano/"
const github = "https://github.com/brianmano"
/*-------------------------------------------*/


const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Adds smooth scrolling effect
    });
  };

  const scrollStyle = {
    width: '100%',
    '--time': '20s', // Custom property
    // Add other styles as needed
  };

const Contact = () => {

    const shouldRenderSecondHeading = useBreakpointValue({ base: false, md: true });

  return ( 
    <Flex justify="flex-start" width="100%" padding="10" >
      <VStack align="flex-start" spacing="5" width='100%' overflow="hidden">
      <Flex width="100%" justify='left'>
  {shouldRenderSecondHeading ? (
    <div>
        <Flex width="100%" justify='center' align='left'>
            <Heading fontFamily="Titillium Web, sans-serif;" color='black' fontSize={100} id="contact">
                Get In Touch
                <Box display="inline-block" ml="2" verticalAlign="middle">
                <MdOutlineArrowOutward size={90} color='black' />
                </Box>
            </Heading>
        </Flex>
    </div>
  ) : (
    <div>
        <Flex fontFamily="Titillium Web, sans-serif;" width="100%" justify='center' align='center'>
            <Heading color='black' fontSize={70} id="contact">
                Get In Touch
                <Box display="inline-block" ml="2" verticalAlign="middle">
                <MdOutlineArrowOutward size={50} color='black' />
                </Box>
            </Heading>
        </Flex>
     </div>
  )}
 
  </Flex>
    <HStack width="100%" spacing={4} justify='left' flexWrap="wrap">
        <Link href={emaiLink} isExternal>
          <Button fontFamily="Titillium Web, sans-serif;" leftIcon={<FaEnvelope />} colorScheme='red' variant='outline'>
            {email}
          </Button>
        </Link>
        <Button fontFamily="Titillium Web, sans-serif;" leftIcon={<FaPhone />} colorScheme='orange' variant='outline'>
            289-788-9659
        </Button>
        <Link fontFamily="Titillium Web, sans-serif;" href={linkedin} isExternal>
          <Button leftIcon={<FaLinkedin />} colorScheme='linkedin' variant='outline' >
            LinkedIn  
          </Button>
        </Link>
        <Link fontFamily="Titillium Web, sans-serif;" href={github} isExternal>
        <Button leftIcon={<FaGithub />} bgColor='#333' textColor='white' variant='outline'
          sx={{
            '&:hover': {
              bgColor: "white",
              textColor: 'black',
            },
          }}
        >
          Github
      </Button>
      </Link>
          </HStack>
    <HStack width="100%" spacing={4} justify='left' as="article">
        <Button fontFamily="Titillium Web, sans-serif;" variant='link'onClick={scrollToTop} leftIcon={<MdOutlineArrowCircleUp/>}>
            Back To Top
        </Button>
    </HStack>
    <Divider />
    </VStack>
  </Flex>
 
  );
};

export default Contact;
