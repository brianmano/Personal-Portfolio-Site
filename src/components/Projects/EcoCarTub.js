// SlideEx.js
import React, { useState, useEffect } from 'react';
import { Link, useBreakpointValue, Card, CardBody, Stack, Grid, GridItem, Slide, Flex, Image, Box, Button, Text, Heading, Tag, TagLabel, List, ListItem, ListIcon, OrderedList,  UnorderedList, HStack, VStack} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { MdOpenInNew } from 'react-icons/md';
import reartub from '../images/RearTub.jpg'
import reartub1 from '../images/RearTub1.jpg'
import reartub2 from '../images/RearTub2.jpg'


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
            colorScheme="red"
          >
            <ImCross/>
            
          </Button>



          {/* Start of the Document */}
          <Box lassName="Header" >
            <Heading fontSize="50" mb="1">McMaster EcoCAR EV Rear Tub</Heading>
            <Text color="gray">September 2023 - Present</Text>
            <Flex justifyContent="flex-start" mt="2">
              <Link href="https://www.macecocar.ca/" isExternal>
                <Button mr="2" rightIcon={<MdOpenInNew />} colorScheme="blue" >
                  McMaster EcoCAR
                </Button>
              </Link>
            </Flex>
            
            <Flex justifyContent="flex-start" mt="2">
              
              <Tag mr="2" ><TagLabel>Seimens NX</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>Manufacturing</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>Material Design</TagLabel></Tag>
            </Flex>
            <Flex>
              <Image mt="5" width="25%" objectFit="cover" borderRadius="10" marginRight='2'  src={reartub} />
              <Image mt="5" width="33%" objectFit="cover" borderRadius="10" marginRight='2' src={reartub1} />
              <Image mt="5" width="40%" objectFit="cover" borderRadius="10" marginRight='2' src={reartub2} />
            </Flex>
            <Text as="span" style={{ fontStyle: 'italic' }} >
              Displayed above are the default tub images. Due to NDA Standards, I cannot final images of my design.
            </Text>
            
          </Box>
          
          <Box className="Introduction" >
            <Heading fontSize={35} mt="5" mb="">Quick Summary</Heading>
            <HStack flexDirection={{ base: 'column', md: 'row' }} spacing={10} >
              <VStack align="left" maxW={{ base: '100%', md: '60%' }} >
              <Heading fontSize={20} mt="5" mb="2.5">Goal</Heading>
              <Text>
              The rear tub of the McMaster EcoCAR EV (Cadillac Lyriq) did not fit the design requirements, in terms of structural integrity, position, and structural attachments for various new parts going into the vehicle. 
              Our goal was to create a new rear tub that functions as a hub for housing various Connected Automated Vehicle (CAV) components and compensates for the new in-house inverter.
              </Text> 
              </VStack>
              <VStack align="left" >
              <Heading fontSize={20} >My Role</Heading>
              <UnorderedList >
                <ListItem>Redesigning and CADing model in Seimens NX</ListItem>
                <ListItem>Engineering cooling system (intake and exhaust) of heat in rear tub</ListItem>
                <ListItem>Researching manufacturing methods</ListItem>
                <ListItem>Researching and implementing welding points</ListItem>
              </UnorderedList>
              </VStack>
            </HStack>
            
          </Box>
          <Box className='Solution' maxWidth="60%">
            <Heading fontSize={20} mt="5" mb="2.5">Our Solution</Heading>
            {/* 

            During this project, our solution solved the following using the following
            
            */}
            
            <Text pt="2.5">
            The rear tub of the McMaster EcoCAR EV underwent a structural redesign to accommodate the integration of the new in-house inverter and house Connected Automated Vehicle components, while also addressing the repositioning of the rear subframe. 
            This redesign aimed to create a secure mounting platform for the advanced technologies and ensure seamless integration, contributing to the vehicle's overall structural integrity and performance.
            </Text>
          </Box>

          <Box className='ShowcaseAndProcess'></Box>

          <Heading fontSize={20} mt="5" mb="2.5">Showcase</Heading>

          <Flex>
            <Card mb={4} display = 'flex' >
              <CardBody>
              <Heading size='s' mb='3' >Manufacturing</Heading>
                <Image src='https://www.custompartnet.com/wu/images/sheet-metal/v-bending.png'
                  borderRadius='lg'
                  width='500px'
                  height='auto'
                />
                <Flex>
                  <Stack mt='6' spacing='3'>
                  <Text>
                    Our design implementation involved a comprehensive exploration of diverse manufacturing techniques. 
                    These included the meticulous application of dimple dye press,{' '}
                    <Text as="span" fontWeight="normal">
                      precision bending,
                    </Text>{' '}
                    and CNC machining. We decided to use{' '}
                    <Text as="span" fontWeight="bold">
                      precision bending
                    </Text>{' '}
                    as our manufacturing method due to its ease and big metal gauge.
                  </Text>
                  </Stack>
                </Flex>
              </CardBody>
            </Card>
            <Card mb={4} display = 'flex' >
              <CardBody>
              <Heading size='s' mb='3' >Welding</Heading>
                <Image src='https://thepeasantblog.files.wordpress.com/2015/11/plug-welds-finished.jpg'
                  borderRadius='lg'
                  width='500px'
                  height='auto'
                />
                <Flex>
                  <Stack mt='6' spacing='3'>
                  <Text>
                    Welding points were strategically incorporated, utilizing both{' '}
                    <Text as="span" fontWeight="bold">
                      spot welds and plug welds.
                    </Text>{' '}
                    This multifaceted approach showcased the versatility of our manufacturing capabilities and ensured a robust execution of the design, meeting the exacting standards required for the McMaster EcoCAR EV project.
                  </Text>
                  </Stack>
                </Flex>
              </CardBody>
            </Card>
            <Card mb={4} display = 'flex' >
              <CardBody>
              <Heading size='s' mb='3' >Cooling System</Heading>
                <Image src='https://thepeasantblog.files.wordpress.com/2015/11/plug-welds-finished.jpg'
                  borderRadius='lg'
                  width='500px'
                  height='auto'
                />
                <Flex>
                  <Stack mt='6' spacing='3'>
                  <Text>
                    Strategies for intake and exhaust of heat were engineered. Heat sources were taken into consideration, including maximum operation temperatures of CAV components.{' '}
                    <Text as="span" fontWeight="bold">
                      Custom brackets were designed and HVAC hoses were routed through the car into the rear tub, and pre-existing exhaust points were used with fans. 
                    </Text>{' '}
                  </Text>
                  </Stack>
                </Flex>
              </CardBody>
            </Card>
          </Flex>

          <Heading fontSize={20} mt="5">Credits</Heading>

          <Text>Brian Manomaisupat: [System Design and Integration Team Member]</Text>
          <Text>Ahmed Zabtia: [System Design and Integration Team Member]</Text>

        </Box>
      </div>
    </Slide>
  );
}

export default SlideEx;
