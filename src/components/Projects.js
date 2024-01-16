import React, { useState, useEffect } from 'react';
import { Flex, Stack, VStack, Grid, GridItem, Box, Heading, Text, HStack, useBreakpointValue, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter, Image, LinkBox, LinkOverlay, SlideFade  } from '@chakra-ui/react';
import { BsArrowUpRightSquare  } from 'react-icons/bs';
import './Projects.css';
import SlideEx1 from './Projects/Project1';
import SlideEx2 from './Projects/Project2';
import SlideEx3 from './Projects/Project3';
import GithubCard from './Github-Card'
import ExtendedProjects from './Extended_Projects';
import "../App"

/* change the following to customize the page*/
const fontcolour2 = "#D3D3D3"

const project1_image= "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const project2_image= "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const project3_image= "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


const repoNames = [
  {
    name: 'Brian-Varun/Personal-Portfolio'
  },
  {
    name: 'brianmano/Pacemaker_Project'
  },
  {
    name: 'brianmano/Electromagnet_System_Project_Code'
  },
  {
    name: 'MenHackers/PantryPal'
  },
];



/*-------------------------------------------*/



const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isSlideExVisible, setSlideExVisible] = useState(false);
    const columns = useBreakpointValue({ base: 1, md: 2 }); // 1 column for mobile, 2 columns for desktop

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
      <Flex justify="flex-start" width="100%" padding={{ base: '10', sm: '10' }} paddingBottom={0}>
        <VStack align="flex-start" spacing="5" width="100%">
          
          <Heading fontFamily="Titillium Web, sans-serif;" color={fontcolour2} paddingX={0} id="projects">
            Projects
          </Heading>

          <Text fontFamily="Titillium Web, sans-serif;" color={fontcolour2} fontWeight="700" paddingX={0}>Click the Arrows to See More</Text>

        <ExtendedProjects  />

        <Heading fontFamily="Titillium Web, sans-serif;" color={fontcolour2} width="100%" paddingTop={10} id="experience">
            GitHub Projects       
        </Heading>
          <VStack spacing={4} align="center" p={4} w = '100%'>
            <Grid
              templateColumns={`repeat(${columns}, 1fr)`}
              gap={4}
              w="100%"
            >
              {repoNames.map((repo) => (
                <GridItem key={repo.name}>
                  <GithubCard repoName={repo.name} />
                </GridItem>
              ))}
            </Grid>
          </VStack>
         
          
          <Divider />
        </VStack>
      </Flex>
    );
  };
  
  export default Projects;
  
