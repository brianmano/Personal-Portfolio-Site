import React, { useState, useEffect } from 'react';
import { createContext, useContext, Flex, Link , Image, useToast, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, IconButton, useBreakpointValue, Center, Stack, useDisclosure } from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPython, FaHtml5, FaCss3, FaJsSquare, FaReact, FaUpload } from 'react-icons/fa';
import pantryPalImg from './images/pantrypal.png';
import "./Hero.css"
import UserContext from './UserContext';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import Navbar from './Navbar';

const Hero = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  const [showUsers, setShowUsers] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [image, setImage] = useState('');
  function handleImage(e) {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }


  const [currentUser, setCurrentUser] = useState();


  return ( 

    <>
    <Flex justify="center" width="100%" paddingX="10"paddingY= "20" flexDirection={{ base: 'column', md: 'row' }}>
      <VStack align="center" justify="center" spacing="3" flexWrap="wrap">
        <Image
          objectFit="cover"
          height="350px"
          width="100%"
          src={pantryPalImg}
          alt="PantryPal"
        />
        
        {showUsers?
          <Box align="center" justify="center">
            <Heading width="100%" paddingTop={10} id="experience" textAlign={"center"}>
              Who is using the pantry?
            </Heading>
            <Box margin="5" onClick={()=>{
              setShowUsers(false);
              setCurrentUser("dan");
              
              }}>
              <Image
                borderRadius='full'
                boxSize='100px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
              <Text fontSize='md'>Dan</Text>
            </Box>
          </Box>
        :
        <HStack spacing={20} margin="20">
          <Button onClick={onOpen}>
            Add ingredients
          </Button>
          <Button as="a" href='/pantry'>
            Open pantry
          </Button>
        </HStack>
        }

        {/* <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Scan a receipt</ModalHeader>
            <ModalCloseButton />
            <ModalBody align="center" justify="center">
              <input type="file" name='file' onChange={handleImage}/>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
  
      </VStack>
    </Flex>

    <UserContext.Provider value={currentUser}>
      <Navbar/>
    </UserContext.Provider>
    </>
  );
};

export default Hero;
