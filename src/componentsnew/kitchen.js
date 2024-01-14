import React, { useState } from 'react';
import { Flex, VStack, Heading, Button, Text, useBreakpointValue,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,} from '@chakra-ui/react';
import LocalStorage from 'localstorage-enhance';
import receipt_list from './receipt_list_test';
import user_test from './user_test';

const Kitchen = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [displayedItems, setDisplayedItems] = useState(null);

  const handleSetButtonClick = () => {
    // Get user information from user_test
    const currentUser = user_test;
  
    // Get the current date
    const currentDate = new Date().toISOString();
  
    // Iterate over the receipt_list and set each item in local storage
    receipt_list.forEach(([key, quantity]) => {
      // Check if the key already exists in local storage
      const existingData = LocalStorage.getItem(key);
  
      // If the key exists, update the data array
      if (existingData !== null) {
        existingData.push({
          quantity,
          user: currentUser,  // Set user information
          date: currentDate,  // Set date information
        });
  
        LocalStorage.setItem({
          key,
          data: existingData,
        });
      } else {
        // If the key doesn't exist, initialize a new data array
        const newData = [{
          quantity,
          user: currentUser,  // Set user information
          date: currentDate,  // Set date information
        }];
  
        LocalStorage.setItem({
          key,
          data: newData,
        });
      }
    });
  };
  
  const handleGetButtonClick = () => {
    const allItems = {};
  
    // Iterate through all keys in local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
  
      try {
        // Try to parse the stored data as JSON
        const value = JSON.parse(localStorage.getItem(key));
        allItems[key] = value;
      } catch (error) {
        // Handle any errors if parsing fails
        console.error(`Error parsing data for key ${key}:`, error);
      }
    }
  
    // Convert the object to an array of key-value pairs
    const itemsArray = Object.entries(allItems);
  
    // Set the retrieved items to be displayed
    setDisplayedItems(itemsArray);
  };
  
  
  

  const handleClearButtonClick = () => {
    // Clear all items in local storage
    LocalStorage.clearAll();
  };

  return (
    <>
      <Flex justify="flex-start" width="100%" paddingX="10" paddingY="20" flexDirection={{ base: 'column', md: 'row' }}>
        <VStack align="flex-start" spacing="3" flexWrap="wrap">
          <Heading width="100%" paddingTop={10} id="experience">
            Family Pantry
          </Heading>
          {/* Button to trigger setting items in local storage */}
          <Button onClick={handleSetButtonClick} colorScheme="blue">
            Set Items from receipt_list
          </Button>

          {/* Button to trigger retrieving all items from local storage */}
          <Button onClick={handleGetButtonClick} colorScheme="teal">
            Get All Items from Local Storage
          </Button>

          {/* Button to trigger clearing all items in local storage */}
          <Button onClick={handleClearButtonClick} colorScheme="red">
            Clear All Items in Local Storage
          </Button>

          <Heading size="md">Retrieved Items</Heading>
          {displayedItems && displayedItems.map(([key, data], index) => (
            <Text key={index}>
              <b>{key}:</b> {JSON.stringify(data)}
            </Text>
          ))}
        </VStack>
      </Flex>
    </>
  );
};

export default Kitchen;