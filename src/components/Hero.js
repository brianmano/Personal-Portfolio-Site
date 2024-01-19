import React, { useState, useEffect } from 'react';
import { Flex, Link , Image, useToast, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPython, FaHtml5, FaCss3, FaJsSquare, FaReact } from 'react-icons/fa';
import "./Hero.css"
import Skills from "./skill-carousel";
import '../App.css'

import profileImage from './images/profile.png';

/* change the following to customize the page*/
const name = "Brian Manomaisupat"
const degree = "Mechatronics and Biomedical Engineering" /* Replace this with job title after graduating*/
const university = "McMaster University" /* Replace this with company name after graduating*/
const emaiLink = "mailto:brian.manomaisupat@gmail.com"
const email = "brian.manomaisupat@gmail.com"
const linkedin = "https://www.linkedin.com/in/brian-mano/"
const github = "https://github.com/brianmano"
const description = (
  <>
  <strong>👋 Hello! ,</strong> <br /><br />
    I'm Brian Manomaisupat, a junior studying Mechatronics and Biomedical Engineering at McMaster University, <Text as="strong">currently looking for an internship for the 2024 Winter/Summer terms.</Text> 
    {' '} My ultimate goal is to make a positive impact on the world through learning and applying myself in the field of engineering, pushing the limits of what I can achieve! {' '}

    <br /> <br /> In my free time, I love working on and modifying my car, swimming, and working out at the gym!
  </>
);
/*-------------------------------------------*/


const SolidworksIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="20" viewBox="10 0 50 50">
        <path d="M 25.001953 1 C 24.900953 1 2.0019531 8.1367188 2.0019531 8.1367188 L 2.0019531 39.472656 C 2.0019531 39.472656 2.2432344 39.567656 2.6152344 39.722656 C 2.6152344 39.722656 24.882953 49.001953 25.001953 49.001953 C 25.120953 49.001953 47.388672 39.722656 47.388672 39.722656 C 47.760672 39.567656 48.001953 39.460938 48.001953 39.460938 L 48.001953 8.1328125 C 48.001953 8.1328125 25.102953 1 25.001953 1 z M 25.001953 3.0488281 L 43.660156 8.9003906 L 34.628906 11.732422 L 25.001953 14.751953 L 15.373047 11.732422 L 6.34375 8.9003906 L 25.001953 3.0488281 z M 4.0019531 10.261719 L 24.001953 16.533203 L 24.001953 46.498047 L 4.0019531 38.134766 L 4.0019531 10.261719 z M 46.001953 10.261719 L 46.001953 38.134766 L 26.001953 46.498047 L 26.001953 16.533203 L 46.001953 10.261719 z M 43.527344 15.800781 L 41.423828 16.525391 L 39.519531 30.996094 L 37.146484 18.001953 L 35.289062 18.642578 L 32.816406 33.609375 L 30.775391 20.199219 L 28.474609 20.992188 L 31.546875 38.800781 L 33.730469 37.90625 L 36.230469 23.328125 L 38.636719 35.896484 L 40.705078 35.048828 L 43.527344 15.800781 z M 12.544922 18.099609 C 12.3865 18.097141 12.230328 18.103391 12.080078 18.119141 C 11.482078 18.181141 10.972875 18.371547 10.546875 18.685547 C 10.121875 18.999547 9.7915938 19.426844 9.5585938 19.964844 C 9.3255937 20.501844 9.2109375 21.131375 9.2109375 21.859375 C 9.2109375 22.595375 9.3219219 23.286641 9.5449219 23.931641 C 9.7689219 24.576641 10.078609 25.185766 10.474609 25.759766 C 10.872609 26.334766 11.349344 26.882297 11.902344 27.404297 C 12.458344 27.927297 13.066516 28.433875 13.728516 28.921875 C 14.335516 29.373875 14.833656 29.780672 15.222656 30.138672 C 15.611656 30.496672 15.917625 30.837156 16.140625 31.160156 C 16.363625 31.483156 16.519516 31.805953 16.603516 32.126953 C 16.687516 32.447953 16.728516 32.794969 16.728516 33.167969 C 16.728516 33.911969 16.512078 34.435563 16.080078 34.726562 C 15.651078 35.022563 15.010063 35.016937 14.164062 34.710938 C 13.736063 34.556937 13.338703 34.349703 12.970703 34.095703 C 12.602703 33.841703 12.284625 33.535781 12.015625 33.175781 C 11.748625 32.816781 11.538766 32.4045 11.384766 31.9375 C 11.230766 31.4705 11.154297 30.950953 11.154297 30.376953 L 8.7910156 29.544922 C 8.7910156 30.502922 8.9449531 31.391938 9.2519531 32.210938 C 9.5589531 33.032937 9.96375 33.774547 10.46875 34.435547 C 10.97575 35.099547 11.550359 35.667578 12.193359 36.142578 C 12.838359 36.618578 13.496016 36.983469 14.166016 37.230469 C 14.922016 37.509469 15.611422 37.647531 16.232422 37.644531 C 16.855422 37.641531 17.387125 37.504516 17.828125 37.228516 C 18.271125 36.952516 18.611563 36.544859 18.851562 36.005859 C 19.092562 35.466859 19.212891 34.803531 19.212891 34.019531 C 19.212891 33.277531 19.116734 32.578922 18.927734 31.919922 C 18.736734 31.262922 18.446641 30.629438 18.056641 30.023438 C 17.666641 29.419438 17.17875 28.831766 16.59375 28.259766 C 16.01075 27.690766 15.323203 27.119781 14.533203 26.550781 C 13.530203 25.827781 12.788687 25.161828 12.304688 24.548828 C 11.821688 23.938828 11.580078 23.296094 11.580078 22.621094 C 11.580078 22.262094 11.629563 21.945922 11.726562 21.669922 C 11.823562 21.392922 11.976641 21.174625 12.181641 21.015625 C 12.385641 20.855625 12.643125 20.764281 12.953125 20.738281 C 13.264125 20.712281 13.6355 20.767297 14.0625 20.904297 C 14.5175 21.049297 14.909141 21.250766 15.244141 21.509766 C 15.579141 21.768766 15.858125 22.069063 16.078125 22.414062 C 16.298125 22.760063 16.461359 23.139781 16.568359 23.550781 C 16.676359 23.961781 16.730469 24.391844 16.730469 24.839844 L 19.203125 25.652344 C 19.203125 24.876344 19.086609 24.107703 18.849609 23.345703 C 18.612609 22.583703 18.272078 21.873844 17.830078 21.214844 C 17.389078 20.558844 16.850844 19.979469 16.214844 19.480469 C 15.580844 18.982469 14.869031 18.612188 14.082031 18.367188 C 13.531531 18.196938 13.020188 18.107016 12.544922 18.099609 z"></path>
        </svg>
    );
} 
const InventorIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="25" viewBox="15 0 320 512">
            <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96h96V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V96h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160 32z"/></svg>
    );
} 

const MatlabIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="20" viewBox="15 10 70 80">
        <path d="M92.087,72.725C90.252,66.305,73.86,10,63.25,10c-5.383,0-9.383,6.454-13.251,12.696c-2.481,4.004-4.825,7.786-7.208,9.336 c-1.034,0.673-1.965,1.19-2.865,1.69c-1.808,1.004-3.515,1.953-5.415,3.854c-2.288,2.287-3.926,4.543-4.453,5.299L6.639,51.942 c-0.346,0.134-0.589,0.449-0.632,0.817c-0.043,0.368,0.122,0.73,0.428,0.94L24.31,65.95l0.003-0.005 c0.2,0.137,0.446,0.205,0.699,0.171c0.045-0.006,4.631-0.601,8.789,1.894C41.859,72.844,42,86.862,42,87.003 c0.001,0.296,0.134,0.578,0.362,0.767C42.543,87.92,42.77,88,43,88c0.062,0,0.122-0.005,0.183-0.017 c0.211-0.039,5.209-1.017,10.375-6.125c3.115-3.081,5.441-6.676,7.493-9.848c3.008-4.65,5.605-8.666,9.508-9.283 c5.492-0.87,16.224,7.653,19.891,11.01c0.33,0.302,0.819,0.348,1.202,0.113C92.031,73.615,92.209,73.156,92.087,72.725z M35.925,38.99c1.703-1.703,3.218-2.545,4.973-3.52c0.93-0.517,1.892-1.051,2.984-1.762c2.757-1.793,5.215-5.76,7.817-9.958 c1.683-2.715,3.393-5.466,5.176-7.627c-2.265,4.03-4.73,9.912-7.708,17.257c-2.745,6.77-5.337,13.164-7.618,16.675 c-0.048,0.074-0.099,0.145-0.147,0.218l-9.308-6.802C32.811,42.493,34.179,40.735,35.925,38.99z M24.967,63.975L9.13,53.123 l21.428-8.297l9.681,7.074C34.923,58.824,27.009,62.98,24.967,63.975z M70.246,60.751c-4.784,0.757-7.606,5.12-10.874,10.172 c-1.997,3.086-4.26,6.584-7.221,9.512c-3.299,3.262-6.543,4.69-8.2,5.255c-0.23-3.82-1.553-14.855-9.121-19.396 c-2.099-1.259-4.268-1.834-6.055-2.08c3.927-2.273,10.28-6.65,14.451-13.071c2.385-3.672,5.012-10.152,7.794-17.013 C54.807,24.791,59.992,12,63.25,12c6.551,0,18.981,34.33,25.978,58.05C84.85,66.453,75.932,59.849,70.246,60.751z"></path><path d="M57.765,26.25c-0.067,0-0.136-0.014-0.201-0.042c-0.253-0.111-0.367-0.406-0.257-0.659 c1.458-3.323,2.675-5.833,3.721-7.671c0.136-0.24,0.44-0.325,0.682-0.188c0.24,0.136,0.324,0.442,0.188,0.682 c-1.028,1.809-2.23,4.288-3.674,7.579C58.141,26.138,57.957,26.25,57.765,26.25z"></path><path d="M56.213,29.875c-0.064,0-0.131-0.013-0.193-0.039c-0.255-0.107-0.375-0.4-0.268-0.655l0.423-1.001 c0.107-0.255,0.399-0.372,0.655-0.266c0.254,0.108,0.373,0.401,0.265,0.655l-0.421,0.999 C56.594,29.76,56.408,29.875,56.213,29.875z"></path><path d="M46.432,81.686c-0.069,0-0.139-0.014-0.204-0.043c-0.152-0.068-0.261-0.208-0.289-0.373 c-0.974-5.706-3.469-13.307-9.822-17.119c-0.249-0.149-0.499-0.291-0.748-0.424c-0.151-0.081-0.25-0.232-0.264-0.403 c-0.013-0.17,0.063-0.336,0.199-0.438c4.226-3.158,7.597-6.65,10.02-10.38c2.516-3.874,5.186-10.461,8.014-17.436 c0.403-0.997,0.824-2.014,1.282-3.123l0.419-1.013c0.105-0.255,0.397-0.374,0.652-0.271c0.256,0.105,0.377,0.398,0.271,0.653 l-0.418,1.013c-0.458,1.107-0.878,2.123-1.281,3.117c-2.846,7.02-5.533,13.65-8.102,17.604c-2.368,3.647-5.612,7.067-9.648,10.173 c0.039,0.023,0.078,0.046,0.117,0.07c6.401,3.84,9.062,11.245,10.16,17.059c1.012-0.693,1.984-1.5,2.9-2.406 c1.135-1.122,2.248-2.428,3.405-3.994c0.166-0.222,0.48-0.268,0.699-0.104c0.223,0.164,0.27,0.477,0.105,0.699 c-1.188,1.607-2.335,2.952-3.507,4.11c-1.154,1.142-2.397,2.135-3.695,2.952C46.617,81.66,46.524,81.686,46.432,81.686z"></path><path fill="#fff" d="M58.186,67.25c-0.445,0.671-0.888,1.355-1.334,2.044"></path><path d="M56.853,69.794c-0.094,0-0.188-0.026-0.271-0.08c-0.231-0.15-0.298-0.459-0.148-0.691c0.446-0.691,0.89-1.376,1.338-2.049 c0.152-0.231,0.463-0.292,0.693-0.14c0.229,0.153,0.292,0.463,0.139,0.693c-0.444,0.669-0.886,1.352-1.33,2.039 C57.177,69.713,57.016,69.794,56.853,69.794z"></path><path d="M59.651,65.625c-0.102,0-0.204-0.031-0.293-0.095c-0.224-0.162-0.274-0.475-0.112-0.698 c2.378-3.286,5.479-6.751,10.453-7.537c3.479-0.555,7.834,0.723,13.106,3.852c-2.395-7.483-4.786-14.379-7.116-20.514 c-1.432-3.77-2.826-7.213-4.146-10.234c-0.11-0.253,0.005-0.548,0.258-0.658c0.254-0.111,0.548,0.004,0.658,0.258 c1.327,3.036,2.729,6.495,4.166,10.279c2.468,6.5,5.005,13.849,7.541,21.843c0.063,0.2-0.005,0.418-0.171,0.547 c-0.165,0.128-0.395,0.14-0.571,0.028c-5.565-3.497-10.084-4.964-13.568-4.413c-4.612,0.729-7.542,4.017-9.799,7.136 C59.959,65.553,59.806,65.625,59.651,65.625z"></path><line x1="14.875" x2="25.375" y1="53.25" y2="60.625" fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></line>
        </svg>
   );
} 
const doubleArray = [
    [FaPython, 'Python'],
    [InventorIcon, 'Inventor'],
    [SolidworksIcon, 'Solidworks'],
    [MatlabIcon, 'Matlab + Simulink'],
    [FaHtml5, 'HTML'],
    [FaCss3, 'CSS'],
    [FaJsSquare, 'JavaScript'],
    [FaReact, 'React'],
];

const fontcolourtitle = "white"
const fontcolour2 = "#D3D3D3"
const fontcolour3 = "#979797"

const Hero = () => {
  

  const isMobile = useBreakpointValue({ base: true, md: false });


  return ( 

    <>
        <Flex align="center" justify="center" minHeight="100vh">
          <VStack textAlign="center" paddingY={17}>
            <Box overflow="hidden" align="center">
              <Heading color={fontcolourtitle} fontWeight={400} fontSize={{ base: "9vw", md: "9vw", lg: "9vw" }} fontFamily="Titillium Web, sans-serif;">
                {name}
              </Heading>
            </Box>
            <HStack justify="space-between" spacing="4" width="100%">
              <Box overflow="hidden" align="left">
                <Text color={fontcolourtitle} fontSize={{ base: "2vw", md: "2vw", lg: "2vw" }} fontFamily="Titillium Web, sans-serif;">
                  {degree} @ {university}
                </Text>
              </Box>
              <Box overflow="hidden" align="right">
                <Text color={fontcolourtitle} fontSize={{ base: "2vw", md: "2vw", lg: "2vw" }} fontFamily="Titillium Web, sans-serif;">
                  Based in Hamilton, ON
                </Text>
              </Box>
            </HStack>
            <Box overflow="hidden" paddingY="1" maxWidth="100%" width={{ base: "70vw", md: "350px", lg: "35vw" }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                src={profileImage}
                alt="Profile"
              />
            </Box>
            <HStack pt="4" spacing="4" flexWrap="wrap">
            <Link href={emaiLink} isExternal>
              {isMobile ? (
                <IconButton
                  aria-label="Email"
                  icon={<FaEnvelope />}
                  colorScheme="red"
                  variant="outline"
                />
              ) : (
                <Button
                fontFamily="Titillium Web, sans-serif;" 
                leftIcon={<FaEnvelope />} 
                colorScheme="red" 
                >
                  {email}
                </Button>
              )}
            </Link>
            <Link href={linkedin} isExternal>
              {isMobile ? (
                <IconButton
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  colorScheme="linkedin"
                  variant="outline"
                >
                  LinkedIn
                </IconButton>
              ) : (
                <Button
                  fontFamily="Titillium Web, sans-serif;"
                  leftIcon={<FaLinkedin />}
                  colorScheme="linkedin"
                >
                  LinkedIn
                </Button>
              )}
            </Link>

            <Link href={github} isExternal>
              {isMobile ? (
                <IconButton
                  aria-label="GitHub"
                  icon={<FaGithub />}
                  bgColor="#333"
                  color="white"
                  variant="outline"
                  _hover={{ bgColor: 'white', color: 'black' }}
                >
                  GitHub
                </IconButton>
              ) : (
                <Button
                  fontFamily="Titillium Web, sans-serif;"
                  leftIcon={<FaGithub />}
                  bgColor="#333"
                  textColor="white"
                  variant="outline"
                  _hover={{ bgColor: 'white', textColor: 'black' }}
                >
                  GitHub
                </Button>
              )}
            </Link>
            </HStack>
          </VStack>
        </Flex>
    <Skills /> 
    

    <Flex justify="flex-start" width="100%" paddingX="10" flexDirection={{ base: 'column', md: 'row' }}>
      <VStack align="flex-start" spacing="3" flexWrap="wrap">
        <Heading fontFamily="Titillium Web, sans-serif;" color={fontcolour2} width="100%" paddingTop={10} id="experience">
            About Me        
        </Heading>
        <Flex>
        <Box paddingY ="1" width="100%">
          <Text fontFamily="Titillium Web, sans-serif;" color={fontcolour2} width={{base:"100%", lg: "55%"}}>
            {description}
          </Text>
        </Box>
        </Flex>
  
      </VStack>
    </Flex>
    </>
  );
};

export default Hero;
