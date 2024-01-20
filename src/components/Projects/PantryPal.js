// SlideEx.js
import React, { useState, useEffect } from 'react';
import { Link, useBreakpointValue, Card, CardBody, Stack, Grid, GridItem, Slide, Flex, Image, Box, Button, Text, Heading, Tag, TagLabel, List, ListItem, ListIcon, OrderedList,  UnorderedList, HStack, VStack} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { MdOpenInNew } from 'react-icons/md';
import login from '../images/Login.png'
import options from '../images/Options Screen.png'
import empty from '../images/Empty Pantry.png'
import filled from '../images/Filled Pantry.png'
import detailed from '../images/Detail Card.png'
import ingredients from '../images/Adding ingredients popup.png'



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
            <Heading fontSize="50" mb="1">Pantry Pal</Heading>
            <Text color="gray">January 2024</Text>
            <Flex justifyContent="flex-start" mt="2">
              <Link href="https://github.com/MenHackers/PantryPal" isExternal>
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
              <Link href="https://devpost.com/software/pantrypal-nrdw78" isExternal>
                <Button mr="2"  bgColor='gray' textColor='white' variant='outline'
                  sx={{
                    '&:hover': {
                      bgColor: "white",
                      textColor: 'black',
                    },
                  }}
                >
                  Devpost
                </Button>
              </Link>
              
            </Flex>
            
            <Flex justifyContent="flex-start" mt="2">
              
              <Tag mr="2" ><TagLabel>JavaScript</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>CSS</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>HTML</TagLabel></Tag>
            </Flex>
            <Flex>
              <Image mt="5" width="50%"  objectFit="cover" height="50%" borderRadius="10" marginRight='4' src={login}/>
              <Image mt="5" width="50%"  objectFit="cover" height="50%" borderRadius="10" marginRight='4' src={detailed}/>
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
              Our group wanted to help many communities, from food banks to families in houses to roomates, be able to keep their pantry organized to lessen the burden of expired food.
              More specifically, we have personally seen how catalogues within food banks become extremely lengthy, causing the expiry of food where it could have been prevented with a tad bit organization.
              A global cloud app of a kitchen pantry was an idea brought to solve all these issues, along with a multitude of features to interact with this app.
              </Text> 
              </VStack>
              <VStack align="left" >
              <Heading fontSize={20} >My Role</Heading>
              <UnorderedList >
                <ListItem>Front End Development of UI and Front End Features</ListItem>
                <ListItem>Back End Development of Data Storage System</ListItem>
              </UnorderedList>
              </VStack>
            </HStack>
            
          </Box>
          <Box className='Solution'>
            <Heading fontSize={20} mt="5" mb="2.5">Our Solution</Heading>
            {/* 

            During this project, our solution solved the following using the following
            
            */}
            
            <Text pt="2.5" width = "60%">
            PantryPal is a user-friendly website designed to simplify kitchen management by allowing users to input details of their grocery purchases. Users can easily add items, specifying the item name, quantity, purchaser's information, and purchase date. The app organizes this information into a clear and accessible view, providing users with a comprehensive record of their kitchen inventory. PantryPal's user-friendly interface facilitates quick assessments of available items, personalized tracking based on purchaser details, and efficient meal planning with items organized by purchase date. It serves as a practical solution for individuals or families seeking to optimize kitchen organization, reduce food waste, and enhance the overall grocery tracking experience.
            </Text>
          </Box>
          <Box className='ShowcaseAndProcess'>

          </Box>
          <Heading fontSize={20} mt="5" mb="2.5">Showcase</Heading>

          <Flex>
            <Card mb={4} display = 'flex' width="70%">
              <CardBody>
              <Heading size='s' mb='3' >Login & Main Pages</Heading>
              <Flex>
                <Image src={login}
                    borderRadius='lg'
                    width='48%'
                    height='auto'
                    marginRight='4'
                  />
                  <Image src={options}
                    borderRadius='lg'
                    width='48%'
                    height='auto'
                    marginRight='4'
                  />
              </Flex>
                <Flex>
                  <Stack mt='10' spacing='3'>
                  <UnorderedList >
                    <ListItem>Multiple users of the pantry can log in as their profile to enter the main menu screen, or use the "Pantry" button on the top right to view the pantry as a guest.</ListItem>
                    <ListItem>The main menu allows the user to select between adding ingredients or opening the pantry.</ListItem>
                  </UnorderedList>
                  </Stack>
                </Flex>
              </CardBody>
            </Card>
            <Card mb={4} display = 'flex' width="50%">
              <CardBody>
              <Heading size='s' mb='3' >Adding Ingredients Page</Heading>
              <Flex>
              <Image src={ingredients}
                  borderRadius='lg'
                  width='70%'
                  height='auto'
                />
              </Flex>
                <Flex>
                  <Stack mt='6' spacing='3'>
                  <Text>
                    The add ingredient pop up allows the user to add their ingredient and quantity.{' '}
                    </Text>
                    <Text as="span" fontWeight="bold">
                      The following is stored in local storage when the user adds an ingredient:
                    </Text>{' '}
                    <List fontWeight="bold" styleType="disc" pl="4" mt="2">
                      <ListItem>Ingredient</ListItem>
                      <ListItem>Quantity</ListItem>
                      <ListItem>Date</ListItem>
                      <ListItem>User Name</ListItem>
                    </List>

                  </Stack>
                </Flex>
              </CardBody>
            </Card>
          </Flex>
          <Card mb={4} display = 'flex' width="100%">
              <CardBody>
              <Heading size='s' mb='3' >Pantry Page</Heading>
              <Flex>
                <Image src={empty}
                  borderRadius='lg'
                  width='30%'
                  height='auto'
                  marginRight='4' // Adjust the value as needed
                />
                <Image src={filled}
                  borderRadius='lg'
                  width='30%'
                  height='auto'
                  marginRight='4' // Adjust the value as needed
                />
                <Image src={detailed}
                  borderRadius='lg'
                  width='30%'
                  height='auto'
                />
              </Flex>
                <Flex>
                  <Stack mt='6' spacing='3'>
                  <Text>
                    The pantry page allows the user to see the status and features of the pantry including:{' '}
                    </Text>
                    <List fontWeight="bold" styleType="disc" pl="4" mt="2">
                      <ListItem>The options to load your pantry (load items from local storage) or clear all items from pantry.</ListItem>
                      <ListItem>View the item, quantity, and newest date entry of the item.</ListItem>
                      <ListItem>Detailed card of the item, including a history list of every entry of the item with quantity, user, date. As well, the user can change quantity or delete an entry.</ListItem>
                    </List>
                    <Text>
                    A user can go back to the login screen by pressing the logo in the top left of the screen.
                  </Text>
                  </Stack>
                </Flex>
              </CardBody>
            </Card>
          
          <Heading fontSize={20} mt="5">Credits</Heading>

          <Text>Brian Manomaisupat: [Full Stack Developer]</Text>
          <Text>Kyleigh Sacbibit: [Front End Developer]</Text>
          <Text>Fechukwu Agbassi: [UI Designer]</Text>
          <Text>Connor Irvine: [Back End Developer]</Text>

        </Box>
      </div>
    </Slide>
  );
}

export default SlideEx;
