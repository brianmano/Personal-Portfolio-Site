// SlideEx.js
import React from 'react';
import { Link, useBreakpointValue, Card, CardBody, Stack, Slide, Flex, Image, Box, Button, Text, Heading, Tag, TagLabel, ListItem, UnorderedList, HStack, VStack} from '@chakra-ui/react';
// import { FaGithub } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { MdOpenInNew } from 'react-icons/md';
// import heatsinkdefault from '../images/Heatsink Default.png'
import heatsinkiso from '../images/Heatsink isometric.jpg'
import heatsinktemp from '../images/Heatsink Temp.png'
import finalschem from '../images/Final Schematic.png'
import initialschem from '../images/initialschem.jpg'
import fins from '../images/fins.png'
import holes from '../images/holes.png'
import roots from '../images/roots.png'
import materials from '../images/materials.png'
import ends from '../images/ends.jpg'


function SlideEx({ isOpen, onClose }) {
  // const gridColumnCount = useBreakpointValue({ base: 10, sm: 10, md: 10, lg: 10, xl: 10 });

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
            <Heading fontSize="50" mb="1">CPU Heatsink Design Challenge</Heading>
            <Text color="gray">September 2023</Text>
            <Flex justifyContent="flex-start" mt="2">
            <Link href="https://drive.google.com/file/d/1Lajgt2AT7G7ZIsw9Qn7NInJONjGSqvb0/view?usp=sharing" isExternal>
              <Button mr="2" rightIcon={<MdOpenInNew/>} colorScheme='blue'>
                  Report
                </Button>
            </Link>
            <Link href="https://drive.google.com/file/d/1_vr8Yytuv5EswKry-7_TWbZ3MDCJZJkd/view?usp=sharing" isExternal>
              <Button mr="2" rightIcon={<MdOpenInNew/>} colorScheme='red'>
                  Default Heatsink & Components
                </Button>
            </Link>
              
            </Flex>
            
            <Flex justifyContent="flex-start" mt="2">
              
              <Tag mr="2" ><TagLabel>Fusion 360</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>Thermal Analysis</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>Manufacturing</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>Material Design</TagLabel></Tag>
            </Flex>
            <Flex >
              <Image mt="5" width="50%"  objectFit="cover" height="50%" borderRadius="10" marginRight='4' src= {heatsinkiso}/>
              <Image mt="5" width="50%"  objectFit="cover" height="50%" borderRadius="10" marginRight='4' src= {heatsinktemp}/>
            </Flex>
          </Box>
          
          <Box className="Introduction" >
            <Heading fontSize={35} mt="5" mb="">Quick Summary</Heading>
            <HStack flexDirection={{ base: 'column', md: 'row' }} spacing={10} >
              <VStack align="left" maxW={{ base: '100%', md: '60%' }} >
              <Heading fontSize={20} mt="5" mb="2.5">Summary</Heading>
              <Text>
                As a part of a design challenge, my partner and I tasked ourselves with creating a 
                  <Text as="span" fontWeight="bold" > {' '}
                    custom CPU heatsink 
                  </Text>{' '}
                  that performed more thermally efficiently than an engineering drawing we were provided as an example. 
                  Utilizing concepts of heat transfer, we created a more efficient natural convection heatsink, backed with 
                  <Text as="span" fontWeight="bold" color = 'red'> {' '}
                    thermal simulations 
                  </Text> {' '}
                  used to 
                  <Text as="span" fontWeight="bold" > {' '}
                    test thermal efficency, manufacturing methods, material and cost research, and future areas of improvement.   
                  </Text>{' '}
              </Text> 
              </VStack>
              <VStack align="left" >
              <Heading fontSize={20} >My Role</Heading>
              <UnorderedList >
                <ListItem>Re-engineered and CAD'ed the different root, stem, and shape iterations for the heatsink design</ListItem>
                <ListItem>Performed thermal simulations to test design iterations</ListItem>
                <ListItem>Researched thermodynamic principles relating to heatsink design and fluid dynamics</ListItem>
                <ListItem>Researched various methods of manufacturing and materials</ListItem>
              </UnorderedList>
              </VStack>
            </HStack>
            
          </Box>
            
            <Card mb={4} mt={6} display='flex' width="100%" bg='lightgray'>
              <Flex justifyContent="space-between" width="100%">
                <Box className='Solution' maxWidth="45%" ml="4">
                  <Heading fontSize={20} mt="5" mb="2.5">Our Solution</Heading>
                  <Box position="relative">
                    <Image mt="3" width="100%" objectFit="cover" height="75%" borderRadius="10" src={finalschem} />
                    <Text  bottom="5" left="5" as="span" style={{ fontStyle: 'italic' }}>
                      Final Design Engineering Drawing
                    </Text>
                  </Box>
                  <Text mt="2">
                    For our design, we utilized fundamental knowledge of thermodynamics and natural convection, to create a more efficient CPU cooler. We were able to lower the maximum temperature of the heatsink from{' '}
                    <Text as="span" fontWeight="bold" color="green">
                      198°C → 132°C
                    </Text>
                    {' '}
                    between the first and the last designs that we created.
                  </Text>
                </Box>
                <Box className='Solution' maxWidth="45%" mr="4">
                  <Heading fontSize={20} mt="5" mb="2.5">Initial Design</Heading>
                  <Box position="relative">
                    <Image mt="3" width="100%" objectFit="cover" height="75%" borderRadius="10" src={initialschem} />
                    <Text  bottom="5" left="5" as="span" style={{ fontStyle: 'italic' }}>
                      Initial Design Engineering Drawing
                    </Text>
                  </Box>
                  <Text mt="2" mb = "3">
                    We were initially tasked to recreate this assembly, provided with all the engineering drawings for each part, in order to perform thermal tests using provided parameters.
                  </Text>
                </Box>
              </Flex>
            </Card>


          <Box className='ShowcaseAndProcess'>

          </Box>
          <Heading fontSize={20} mt="5" mb="2.5">Showcase</Heading>
          <Card mb={4} display = 'flex' width = "100%" >
            <CardBody>
            <Heading size='md' mb='3' >Thermal Design</Heading>
            <Flex>
              <Image mt="5" width="30%"  objectFit="cover" height="50%" borderRadius="10" marginRight='4' src= {holes}/>
              <Image mt="5" width="30%"  objectFit="cover" height="50%" borderRadius="10" marginRight='4' src= {fins}/>
              <Image mt="5" width="39%"  objectFit="cover" height="50%" borderRadius="10" marginRight='4' src= {roots}/>
            </Flex>
              <Flex>
                <Stack mt='6' spacing='3'>
                  <Heading size='s'>
                    The following design features were implemented to optimize thermal efficiency:
                  </Heading>
                  <UnorderedList >
                    <ListItem fontWeight="bold">Lattice Structure</ListItem>
                      <Text>
                        Implementing a lattice structure using Fusion360's lattice feature allows for maximum surface area for natural convection.
                      </Text>
                    <ListItem fontWeight="bold">Quantity of Holes</ListItem>
                      <Text>
                        Adding holes creates more surface area for natural convection, and allow hot air to flow upward (buoyancy) between tree branches while reducing total volume.
                      </Text>
                    <ListItem fontWeight="bold">Quantity, shape, and location of Fins</ListItem>
                      <Text>
                        - Adjusting the quantity, curvature and shape of the fins ultimately adds more surface area for natural convection, and redirects heated air more smoothly preventing hot air pockets.
                      </Text>
                      <Text>
                        - The "tree" structured fins utilized topology optimization and additive manufacturing to develop the best shape to dissipate heat.{" "}
                        <Link href="https://https://www.sciencedirect.com/science/article/abs/pii/S0196890421007846.com" isExternal color="blue">
                          [Research Article]
                        </Link>
                      </Text>
                    <ListItem fontWeight="bold">Geometry of Root</ListItem>
                      <Text>
                        Adding more metallic volume directly contacting the CPU allows for better conduction of heat from the source.
                      </Text>
                  </UnorderedList>
                </Stack>
              </Flex>
            </CardBody>
          </Card>

          <Flex>
          <Card mb={4} display = 'flex' width = "130%" >
            <CardBody>
            <Heading size='md' mb='3' >Material Research</Heading>
              <Image src={materials}
                    borderRadius='lg'
                    width='100%'
                    height='auto'
                  />
              <Flex>
                <Stack mt='6' spacing='3'>
                  <Text>
                    The primary criterion for the final
                    material selection was its thermal conductivity. Silver was seen to have the greatest reduction in temperature.
                    However, copper’s temperature reduction was around 5C within silver. 
                    {' '}
                    <Text as="span" fontWeight="bold">
                      Copper was ultimately chosen as the final material 
                    </Text>{' '}
                     for its temperature proximity to silver and a lower cost.
                  </Text>
                </Stack>
              </Flex>
              
              <Heading size='md' mt='6' >Structural Integrity</Heading>
              <Flex>
                <Stack mt='4' >
                <Image mt="5" width="40%"  objectFit="cover" height="50%" borderRadius="10" marginRight='4' src= {ends}/>
                  <Text >
                    The main source of failure from shear stress would be at the 
                    {' '}
                    <Text as="span" fontWeight="bold">
                      end of the branches.
                    </Text>{' '}
                     This is mainly due to it's lack of material, and jagged geometry introducing many stress points. 
                  </Text>
                </Stack>
              </Flex>
            </CardBody>
          </Card>
          <Card mb={4} display = 'flex' >
            <CardBody>
            <Heading size='md' mb='3' >Manufacturing Research</Heading>
            <Flex>
              <Image src='https://www.3erp.com/wp-content/uploads/2023/09/2-min.png'
                  borderRadius='lg'
                  width='40%'
                  height='auto'
                  marginRight='2'
                />
                <Image src='https://assets-global.website-files.com/62b58ca8abc6088f2afd1f66/62e3b2801117bbcef0db8bc7_shutterstock_495869389-e1594853860273.jpg'
                  borderRadius='lg'
                  width='35%'
                  height='auto'
                  marginRight='2'
                />
            </Flex>
              <Flex>
                <Stack mt='6' spacing='3'>
                <UnorderedList >
                    <ListItem fontWeight="bold">Initial Prototyping: CNC Milling</ListItem>
                    <Heading size = "s" color = "green">
                      Advantages
                    </Heading>
                      <UnorderedList>
                        <ListItem>
                        High level of precision compared to other metalworking applications, allowing our prototypes to stay consistent and precise.
                        </ListItem>
                      </UnorderedList>
                      <Heading size = "s" color = "red">
                          Disadvantages
                      </Heading>
                      <UnorderedList>
                        <ListItem>
                          Expensive to program the path and to operate the machine.
                        </ListItem>
                        <ListItem>
                        Metal would be wasted as large blocks of metal are milled from a block, thus inefficient costs.
                        </ListItem>
                        <ListItem>
                        Extremely difficult to mill the holes between the heatsink fins, as new designs would be necessary to accommodate the mill.
                        </ListItem>
                      </UnorderedList>
                    <ListItem fontWeight="bold">Mass Production: Injection Molding</ListItem>
                    <Heading size = "s" color = "green">
                      Advantages
                    </Heading>
                      <UnorderedList>
                        <ListItem>
                          Allows for lowered material use, creating less waste per volume. 
                        </ListItem>
                        <ListItem>
                          Heatsink fin holes can be manufactured without complication by placing a cylinder inside of the mold.
                        </ListItem>
                      </UnorderedList>
                      <Heading size = "s" color = "red">
                          Disadvantages
                      </Heading>
                      <UnorderedList>
                        <ListItem>
                          Imprecise nature of the molding. However, since the final heatsink does not undergo any physical strain or hold fluids, it does not need to be extremely precise.
                        </ListItem>
                      </UnorderedList>
                  </UnorderedList>
                </Stack>
              </Flex>
            </CardBody>
          </Card>
          </Flex>

          <Heading fontSize={20} mb = "2" mt="5">Credits</Heading>

          <Text>Brian Manomaisupat: [Team Member]</Text>
          <Text>Varun Kothandaraman: [Team Member]</Text>



        </Box>
      </div>
    </Slide>
  );
}

export default SlideEx;
