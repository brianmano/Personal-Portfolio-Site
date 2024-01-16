import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flex, Stack, VStack, Grid, GridItem, Box, Heading, Text, HStack, useBreakpointValue, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter, Image, LinkBox, LinkOverlay, SlideFade  } from '@chakra-ui/react';
import './Projects.css';
import SlideEx1 from './Projects/EcoCarTub';
import SlideEx2 from './Projects/PacemakerProject';
import SlideEx3 from './Projects/PantryPal';
import SlideEx4 from './Projects/CPUHeatsink';
import SlideEx5 from './Projects/SkyjackShelf';
import SlideEx6 from './Projects/MagneticBelt';
import { MdOutlineArrowBackIosNew, MdArrowForwardIos, MdCircle } from "react-icons/md";
import { motion } from "framer-motion";



const project1_image= "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const project2_image= "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const project3_image= "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const projects = [
  {
    name: 'McMaster EcoCAR EV Rear Tub',
    image: project3_image,
    description: 'Redesign and manufacturing of the rear subframe and rear tub of the Cadillac Lyric to mount the new EcoCAR EV Inverter and Connected Automated Vehicles (CAV) components.',
    tags: ['Seimens NX', 'Manufacturing', 'Material Design'],
  },
  {
    name: 'Pacemaker Project',
    image: project3_image,
    description: 'Engineered a modern pacemaker, using code in Simulink integrated with a user-friendly Python GUI, and communicating with an NXP FRDM K64F Board via serial communication.',
    tags: ['Python', 'Simulink', 'Serial Communication'],
  },
  {
    name: 'Pantry Pal',
    image: project2_image,
    description: 'Developed a user-friendly website designed to simplify pantry management by allowing clients to input details of their grocery purchases in a cloud storage for access anywhere.',
    tags: ['JavasScript', 'CSS', 'HTML'],
  },
  {
    name: 'CPU Heatsink Design Challenge',
    image: project1_image,
    description: 'Creation of a custom CPU Heatsink Design using natural convection to reduce maximum temperatures compared to a factory design, reducing temperatures from 198 C → 132 C.',
    tags: ['Fusion 360', 'Thermal Analysis', 'Manufacturing', 'Material Design'],
  },
  {
    name: 'SkyJack Paint NCR Shelf',
    image: project3_image,
    description: 'Designed and engineered a new shelf utilizing SolidWorks, improving the organization of Paint NCRs, improving ergonomics, safety, and cost mitigation for NCR damaged parts.',
    tags: ['SolidWorks', 'Ergonomics', 'Manufacturing', 'Material Design'],
  },

  {
    name: 'Electromagnetic Belt Assisting Gait',
    image: project3_image,
    description: 'Engineered and coded a personal wearable monitoring device that helps a post-stroke patient rehabilitate their gait using neuromuscular rehabilitation and associative learning.',
    tags: ['Python', 'AutoDesk Inventor', 'Raspberry Pi'],
  },
];

/*-------------------------------------------*/

const ExtendedProjects = () => {
    
    const sliderSettings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        draggable: false,
        rows: 3,
        slidesPerRow: 1,
        nextArrow: <MdArrowForwardIos color="black"/>,
      prevArrow: <MdOutlineArrowBackIosNew color = "black"/>,
        
    };
    const [selectedProject, setSelectedProject] = useState(null);
    const [isSlideExVisible, setSlideExVisible] = useState(false);

    const handleButtonClick = (event, project) => {
        event.preventDefault(); // Prevent the default behavior (scrolling to the top)
      
        setSelectedProject(project);
        setSlideExVisible(true);
    };
  
    const handleCloseSlideEx = () => {
      setSelectedProject(null);
      setSlideExVisible(false);
    };
    return (
        
      <Box width="100%" paddingX={0}>
      <Box position="relative" width="100%">
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <motion.div
            initial={{ scale: 0.95 }}
            whileHover="hover"
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            variants={{
              hover: {
                scale: 1.0,
              },
            }}
            >
              <Box
                width="100%"
                height="auto"
                as="button"
                onClick={(event) => handleButtonClick(event, project)}
                variant="unstyled"
              >
              <Card
                height={{ base: '100%', sm: '200px' }}
                width="100%"
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="outline"
                maxW={{ base: '100%', sm: '100%' }}
              >
                <Image
                  objectFit="cover"
                  width={{ base: '100%', md: '80%' }}
                  minWidth="40%"
                  height="250px"
                  src={project.image}
                  alt="Project Card"
                />
                <Stack width="auto">
                  <CardBody  width="auto">
                      <Heading fontFamily="Titillium Web, sans-serif;">{project.name}</Heading>
                        <Box  whiteSpace="normal">
                        <Text  fontFamily="Titillium Web, sans-serif;" maxWidth="100%" py="2">{project.description}</Text>
                        </Box>           
                    <Flex justifyContent="flex-end">
                    {project.tags.map((tag, tagIndex) => (
                      <Tag
                        fontFamily="Titillium Web, sans-serif;"
                        key={tagIndex}
                        bottom="20px"
                        right={`${175 - tagIndex * 75}px`}
                        variant="subtle"
                        colorScheme="gray"
                        mr="2" 
                        mt={{ base: "2", sm: '8' }}
                      >
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                    ))}
                    </Flex>
                  </CardBody>
                </Stack>
              </Card>
              
            </Box>
            </motion.div>
          ))}
  
        
        </Slider>
        {isSlideExVisible && selectedProject && (
                <>
                    {selectedProject.name === 'McMaster EcoCAR EV Rear Tub' && (
                    <SlideEx1
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                    {selectedProject.name === 'Pacemaker Project' && (
                    <SlideEx2
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                    {selectedProject.name === 'Pantry Pal' && (
                    <SlideEx3
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                                        {selectedProject.name === 'CPU Heatsink Design Challenge' && (
                    <SlideEx4
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                                        {selectedProject.name === 'Skyjack Paint NCR Shelf' && (
                    <SlideEx5
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                                        {selectedProject.name === 'Electromagnetic Belt Assisting Gait' && (
                    <SlideEx6
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                </>
                )}
                </Box>
      </Box>
    );
  };

  export default ExtendedProjects;
