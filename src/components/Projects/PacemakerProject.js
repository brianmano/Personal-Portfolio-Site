// SlideEx.js
import React, { useState, useEffect } from 'react';
import { Link, useBreakpointValue, Card, CardBody, Stack, Grid, GridItem, Slide, Flex, Image, Box, Button, Text, Heading, Tag, TagLabel, List, ListItem, ListIcon, OrderedList,  UnorderedList, HStack, VStack} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { MdOpenInNew } from 'react-icons/md';
import K64FBoard from '../images/K64F-Board.jpg'
import regscreen from '../images/Reg-Screen.jpg'
import loginscreen from '../images/Login-Screen.jpg'
import mainscreen from '../images/Main-Screen.jpg'
import modeparameterstateflow from '../images/Mode_Parameter_Stateflow.jpg'
import serialcomm from '../images/Serial_Comm.jpg'
import simulinkoverview from '../images/Simulink_Overview.jpg'
import electrogram from '../images/Electrogram.jpg'


function SlideEx({ isOpen, onClose }) {
  const gridColumnCount = useBreakpointValue({ base: 15, sm: 15, md: 15, lg: 15, xl: 15 });

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
            <Heading fontSize="50" mb="1">Pacemaker Project</Heading>
            <Text color="gray">September 2023 - December 2023</Text>
            <Flex justifyContent="flex-start" mt="2">
            <Link href="https://www.macecocar.ca/" isExternal>
              <Button mr="2" leftIcon={<FaGithub />} bgColor='#333' textColor='white' variant='outline'
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

              
            </Flex>
            
            <Flex justifyContent="flex-start" mt="2">
              
              <Tag mr="2" ><TagLabel>Python</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>Simulink</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>Serial Communication</TagLabel></Tag>
            </Flex>
            <Flex>
              <Image mt="5" width="35%" objectFit="cover" borderRadius="10" src={K64FBoard} />
              <Image mt="5" width="33%" objectFit="cover" borderRadius="10" src={mainscreen} />
              <Image mt="5" width="33%" objectFit="cover" borderRadius="10" src={electrogram} />
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
            <HStack flexDirection={{ base: 'column', md: 'row' }} spacing={10} >
              <VStack align="left" maxW={{ base: '100%', md: '60%' }} >
              <Heading fontSize={20} mt="5" mb="2.5">Goal</Heading>
              <Text>
                This is a simulated pacemaker built to visually and functionally represent the various functions of modern pacemakers today. The following project is based on{' '}
                <Link color="blue.500" href="https://www.bostonscientific.com/en-US/Home.html" isExternal>
                  Boston Scientific's
                </Link>{' '}
                pacemaker specifications.

                Through model-based code generation and a Python GUI, we created the following features:
                <List styleType="disc" pl="4" mt="2">
                  <ListItem>7 unique pacemaker modes (AOO, VOO, AAI, VVI, AOOR, VOOR, AAIR, VVIR)</ListItem>
                  <ListItem>Real-time electrocardiogram display</ListItem>
                  <ListItem>Local encrypted data storages</ListItem>
                </List>
              </Text>
              </VStack>
              <VStack align="left" >
              <Heading fontSize={20} >My Role</Heading>
              <UnorderedList >
                <ListItem>Designing and implementing functionality of front end Device Control Monitor (DCM).</ListItem>
                <ListItem>Implementing serial communication between NXP FRDM K64F Board / Simulink and DCM. </ListItem>
                <ListItem>Assisted in state logic in Simulink.</ListItem>
              </UnorderedList>
              </VStack>
            </HStack>
            
          </Box>
          <Box className='ShowcaseAndProcess'>

          </Box>
          
          <Heading fontSize={20} mt="5" mb="2.5">Showcase</Heading>
          <Flex>
            <Card mb={4} display = 'flex' width="40%">
              <CardBody>
              <Heading size='s' mb='3' >Modeling with MATLAB Simulink</Heading>
                <Image src={simulinkoverview}
                  borderRadius='lg'
                  width='500px'
                  height='auto'
                />
                <Flex>
                  <Stack mt='6' spacing='3'>
                  <Text>
                    Central to modelling our pacemaker's functionality was the use of MATLAB Simulink, which allowed us to generate code iteratively and quickly flash our code into our board.{' '}
                    <Text as="span" fontWeight="bold">
                      Through user-set parameters, our Simulink code allow for pacing of both the atrium and ventricle alongside rate adaptive pacing with a in-built accelerometer.
                    </Text>{' '}
                    All important user-set data and electrocardiogram data was framed. The resulting packet was sent through a micro-usb to the device controller monitor.
                  </Text>
                  </Stack>
                </Flex>
              </CardBody>
            </Card>
            <Card mb={4} display = 'flex' width="60%">
              <CardBody>
              <Heading size='s' mb='3' >Device Controller Monitor (DCM)</Heading>
              <Flex>
              <Image src={mainscreen}
                  borderRadius='lg'
                  width='50%'
                  height='auto'
                />
                <Image src={electrogram}
                  borderRadius='lg'
                  width='50%'
                  height='auto'
                />
              </Flex>
                <Flex>
                  <Stack mt='6' spacing='3'>
                  <Text>
                    Through python's tkinter, we created a secure interface that allows for the modification of the pacemaker. Our GUI allows for:{' '}
                    <List fontWeight="bold" styleType="disc" pl="4" mt="2">
                      <ListItem>Real-time display of the simulated heartbeat</ListItem>
                      <ListItem>Patient data to be saved and modified</ListItem>
                      <ListItem>Encryption of patient data</ListItem>
                      <ListItem>Serial communication to the K64F board</ListItem>
                    </List>
                    To test and validate our pacemaker mode function, we employed Heartview, a McMaster created cardiac simulation tool that was pre-flashed onto our board.
                  </Text>
                  </Stack>
                </Flex>
              </CardBody>
            </Card>
          </Flex>
          <Heading fontSize={20} mt="2" mb = "2.5">Gallery</Heading>
          <Heading size = "s" mt="2" mb = "2.5">Device Control Monitor (DCM)</Heading>
          <Grid
            h='500px'
            templateRows='repeat(10, 1fr)'
            templateColumns={`repeat(${gridColumnCount}, 1fr)`}
            gap={2}
          >
            <GridItem rowSpan={1} colSpan={4}>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={loginscreen}
                alt="Green Icon"
              />
              <Text as="span" style={{ fontStyle: 'italic' }}>
                Login Screen
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={4}>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={regscreen}
                alt="Green Icon"
              />
              <Text as="span" style={{ fontStyle: 'italic' }}>
                Registration Screen
              </Text>              
            </GridItem>
            <GridItem rowSpan={1} colSpan={4}>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={mainscreen}
                alt="Green Icon"
              />
              <Text as="span" style={{ fontStyle: 'italic' }}>
                Main Parameter Page (Client Permission)
              </Text>              
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={electrogram}
                alt="Green Icon"
              />
              <Text as="span" style={{ fontStyle: 'italic' }}>
                Electrogram
              </Text>
            </GridItem>
          </Grid>

          <Heading size = "s" mt="2" mb="2.5">Simulink</Heading>
          <Grid
            h='500px'
            templateRows='repeat(5, 1fr)'
            templateColumns={`repeat(${gridColumnCount}, 1fr)`}
            gap = {2}
          >
            <GridItem rowSpan={3.5} colSpan={5}>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={modeparameterstateflow}
                alt="Green Icon"
              />
              <Text as="span" style={{ fontStyle: 'italic' }}>
                Mode Parameter Stateflow
              </Text>
            </GridItem>
            <GridItem rowSpan={3.5} colSpan={5}>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={serialcomm}
                alt="Green Icon"
              />
              <Text as="span" style={{ fontStyle: 'italic' }}>
                Serial Communication Packet Stateflow
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={5}>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={simulinkoverview}
                alt="Green Icon"
              />
              <Text as="span" style={{ fontStyle: 'italic' }}>
                Simulink Stateflow Overview
              </Text>
            </GridItem>
          </Grid>

          <Heading fontSize={20} mt="20">Credits</Heading>

          <Text>Brian Manomaisupat: [Serial Communication and Front End Developer]</Text>
          <Text>Lucian Cheng: [Front End Developer]</Text>
          <Text>Melody Yang: [Front End Developer]</Text>
          <Text>Ansh Mistry: [Back End Developer]</Text>
          <Text>Rick Parikh: [Back End Developer]</Text>



        </Box>
      </div>
    </Slide>
  );
}

export default SlideEx;
