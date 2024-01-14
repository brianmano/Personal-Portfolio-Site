import React, { useState, useEffect, useContext } from 'react';
import { createContext, Flex, Link , Image, useToast, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, IconButton, useBreakpointValue, Center, Stack, useDisclosure } from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPython, FaHtml5, FaCss3, FaJsSquare, FaReact, FaUpload } from 'react-icons/fa';
import pantryPalImg from './images/pantrypal.png';
import "./Hero.css"
import LocalStorage from 'localstorage-enhance';
import UserContext from './UserContext';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react'
import Navbar from './Navbar';
import PantryContext from './PantryContext';
import Pantry from './Pantry';

const Hero = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });
  const [displayedData, setDisplayedData] = useState(null);
  const [showUsers, setShowUsers] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [image, setImage] = useState('');
  // function handleImage(e) {
  //   console.log(e.target.files)
  //   setImage(e.target.files[0])
  // }
  const [currentUser, setCurrentUser] = useState();
  const [newPantryList, setNewPantryList] = useState([]);
  const [ingredient, setIngredient] = React.useState('')
  const [quantity, setQuantity] = React.useState('');
  const handleIngredientChange = (event) => setIngredient(event.target.value)
  const handleQuantityChange = (event) => setQuantity(parseInt(event.target.value))
  const currentDate = new Date();
  const pantryListContext = useContext(PantryContext);

  // Get individual date components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed
  const day = currentDate.getDate();

  // Format the date as a string
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

  const pantryList = useContext(PantryContext);
  const handleAddClick = () => {
    setNewPantryList((prevPantryList) => [
      ...(Array.isArray(prevPantryList) ? prevPantryList : []), [ingredient, quantity, currentUser, formattedDate]
    ]);
    console.log(newPantryList);
  };

  const setLocalStorageData = () => {
    // Fetch existing data from local storage
    const existingData = LocalStorage.getItem('myData') || { newPantryList: [] };

    // Identify deleted items by checking if they exist in the displayedData
    const deletedItems = displayedData
      ? existingData.newPantryList.filter(
          (item) => !displayedData.newPantryList.some((displayedItem) => displayedItem[0] === item[0])
        )
      : [];

    // Remove deleted items from the existing receiptList
    const updatedReceiptList = existingData.newPantryList.filter(
      (item) => !deletedItems.some((deletedItem) => deletedItem[0] === item[0])
    );

    // Combine updated receipt_list from context, user_test, and date into a single object
    const newDataToStore = {
      newPantryList: [...updatedReceiptList, ...pantryListContext, [ingredient, quantity, currentUser, formattedDate]],
    };

    // Set the combined data into local storage
    LocalStorage.setItem({ key: 'myData', data: newDataToStore });
  };

  const handleSetButtonClick = () => {
    // Set data into local storage
    setLocalStorageData();

  };


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

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add ingredients</ModalHeader>
            <ModalCloseButton />
            <ModalBody align="center" justify="center">
            <InputGroup>
              <InputLeftAddon>
              <Input placeholder='Ingredient' onChange={handleIngredientChange}/>
              </InputLeftAddon>
              <Input placeholder='Quantity' onChange={handleQuantityChange}/>
            </InputGroup>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='blue' onClick={handleSetButtonClick}>Add</Button>
              <Text>
                {(newPantryList)}
              </Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
  
      </VStack>
    </Flex>

    <UserContext.Provider value={currentUser}>
      <Navbar/>
    </UserContext.Provider>
    </>
  );
};

export default Hero;
