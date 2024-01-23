// SlideEx.js
import React, { useState, useEffect } from 'react';
import { Spacer, Link, useBreakpointValue, Card, CardBody, Stack, Grid, GridItem, Slide, Flex, Image, Box, Button, Text, Heading, Tag, TagLabel, List, ListItem, ListIcon, OrderedList,  UnorderedList, HStack, VStack} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { MdOpenInNew } from 'react-icons/md';
import ncrshelf from '../images/ncrshelf.jpg'
import ncrissue from '../images/ncrissue.png'



function SlideEx({ isOpen, onClose }) {
  const gridColumnCount = useBreakpointValue({ base: 10, sm: 10, md: 10, lg: 10, xl: 10 });

  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10, position: 'fixed', top: 0, left: 0, right: 0 }}>
      <div  style={{ maxHeight: '100%', overflowY: 'auto' }}>
        <Box
          p="40px"
          color="black"
          mt="4"
          bg="white"
          rounded="md"
          shadow="md"
          position="relative"
          outlineColor="black"
          border='2px solid gray'
          outline="1"
        >
          <Button
            position="absolute"
            top="5px"
            right="5px"
            onClick={onClose}
            variant="outline"
            bg="transparent"
            colorScheme="red"
          >
            <ImCross/>
            
          </Button>



          {/* Start of the Document */}
          <Box lassName="Header" >
            <Heading fontSize="50" mb="1">SkyJack Paint NCR Shelf</Heading>
            <Text color="gray">May 2023 - August 2023</Text>
            <Flex justifyContent="flex-start" mt="2">
            <Link href="https://www.skyjack.com/" isExternal>
              <Button mr="2" rightIcon={<MdOpenInNew/>} colorScheme='orange'>
                SkyJack Website
              </Button>
            </Link>
              
            </Flex>
            
            <Flex justifyContent="flex-start" mt="2">
              
              <Tag mr="2" ><TagLabel>SolidWorks</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>Ergonomics</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>Manufacturing</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>Material Design</TagLabel></Tag>
            </Flex>
          </Box>
          
          <Box className="Introduction" >
            <Heading fontSize={35} mt="5" mb="">Quick Summary</Heading>
            {/* 
            Our team was assigned/set out to solve the following problem []. 
            
            To solve this we developed the [name of project] that utilized the following [list of items]

            The project allows the following features/objects to be done 
            
            *Remember to add specific stats wherever possile*
            */}
            <HStack flexDirection={{ base: 'column', md: 'row' }} spacing={{ base: 4, md: 10 }}>
              <VStack align="left" maxW={{ base: '100%', md: '80%' }}>
                <Heading fontSize={20} mt="5" mb="2.5">
                  Problem
                </Heading>
                <Flex>
  <Card mb={4} display='flex' width='40%'>
    <CardBody>
      <Image
        src={ncrissue}
        borderRadius='lg'
        width={{ base: '100%', md: '500px' }}
        height='auto'
      />
              <Flex>
                <Stack mt='6' align = "center" as="span" fontWeight="bold" >
                  <Text>
                    Disorganized NCR bin jeopardizing safety and damage of parts.
                  </Text>
                </Stack>
              </Flex>
            </CardBody>
          </Card>
                  <Box mt={{ base: 4, md: 0 }} width='60%' ml={6}>
                    <Text>
                      A huge challenge at Skyjack Plant 1 included the management of
                      Non-Conformance Reports (NCRs). Particularly, the daily influx of NCR'd
                      parts has created strain on material handlers, Quality Engineers (QEs),
                      supervisors, and NCR coordinators. When backlogs of NCR’s occur often,
                      parts usually become disorganized, lost, or damaged. The physical space
                      constraints on the floor and in the yard add further complications.
                      Additionally, prolonged retention of NCR parts may result in obsolescence.
                      The current workload on the Material Review Board (MRB) team has led to
                      communication gaps, increasing the risk of mishandling and loss of parts.
                      Obsolescence, lost, damaged, or disorganized parts cost the plant huge
                      deficits in cost, as well as jeopardizes the safety of workers interacting
                      with the Paint NCR station.
                    </Text>
                  </Box>
                </Flex>
              </VStack>
            </HStack>
          </Box>
          <Box className='Solution'>
            <Heading fontSize={20} mt="5" mb="2.5">Solution</Heading>
            <Flex>
              <Image mt="5" width="30%"  objectFit="cover" height="400px" borderRadius="10" src={ncrshelf}/>
              <Text pt="2.5" width = "59%" mt = "4" ml = "4">
                A new shelf design was developed, utilizing {' '}
                <Text as="span" fontWeight="bold">
                  SolidWorks,
                  </Text> {' '}
                  improving the organization of Paint NCR's, improving ergonomics, safety, and cost mitigation for damaged parts. Each part of the shelf was made individually, then put in one assembly. 
                  Each cross arm can slide throughout the structure to adjust for any size of equipment. The maximum sizes of equipment was accounted for in the final dimensions. Along the sides of the shelf, 
                  specific NCR arms can be hung to make space as efficient as possible, as well as ease of access to parts as easy as possible.
              </Text>
            </Flex>
          </Box>
          <Box className='ShowcaseAndProcess'>
            <Flex mt = "4">
              <Card mb={4} display = 'flex' width="50%">
                  <CardBody>
                    <Heading size='s' mb='3' >Structural Analysis</Heading>
                    <Text pt="2.5" >
                      A comprehensive {' '}
                      <Text as="span" fontWeight="bold">
                      structural analysis
                        </Text> {' '}
                        was undertaken to ensure the harmonious integration of design elements, materials, and manufacturing processes, thereby upholding a robust and well-balanced structure.
                    </Text>
                  </CardBody>
                </Card>
                <Card mb={4} display = 'flex' width="50%">
                  <CardBody>
                    <Heading size='s' mb='3' >Safety and Ergonomics</Heading>
                    <Text pt="2.5" >
                      Thorough safety and ergonomics research was conducted to ensure the well-being of workers who interact with the shelf, whether they are walking past it or engaging in the process of placing or removing components, were safe.
                    </Text>
                  </CardBody>
                </Card>
            </Flex>
            <Flex>
              <Card mb={4} display = 'flex' width="50%">
                <CardBody>
                  <Heading size='s' mb='3' >Economics</Heading>
                  <Text pt="2.5">
                    Cost-saving analyses and payback periods were calculated and performance metrics were presented, leveraging insights from historical data related to paint NCR.
                  </Text>
                </CardBody>
              </Card>      
              <Card mb={4} display = 'flex' width="50%">
                <CardBody>
                  <Heading size='s' mb='3' >Materials and Manufacturing</Heading>
                  <Text pt="2.5">
                  Extensive research on materials and manufacturing processes was conducted to address cost considerations, all while upholding structural integrity and ensuring a seamless transition throughout the entire design-to-shelf creation process.
                  </Text>
                </CardBody>
              </Card>     
            </Flex>
          </Box>
        </Box>
      </div>
    </Slide>
  );
}

export default SlideEx;
