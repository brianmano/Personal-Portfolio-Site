import React, { useState } from 'react';
import { Flex, VStack, Heading, Button, Text, useBreakpointValue, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import LocalStorage from 'localstorage-enhance';
import receipt_list from './receipt_list_test';
import user_test from './user_test';

const Kitchen = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [displayedData, setDisplayedData] = useState(null);

  const handleSetButtonClick = () => {
    // Set data into local storage
    setLocalStorageData();
  };

  const handleGetButtonClick = () => {
    // Get data from local storage and set it in the component's state
    const data = getLocalStorageData();
    setDisplayedData(data);
  };

  const handleClearButtonClick = () => {
    // Clear all items in local storage
    LocalStorage.clearAll();
    // Clear displayed data in state
    setDisplayedData(null);
  };

  const setLocalStorageData = () => {
    // Combine receipt_list, user_test, and date into a single object
    const dataToStore = {
      receiptList: receipt_list,
      user: user_test,
      date: new Date().toISOString(),
    };

    // Set the combined data into local storage
    LocalStorage.setItem({ key: 'myData', data: dataToStore });
  };

  const getLocalStorageData = () => {
    // Get data from local storage
    const storedData = LocalStorage.getItem('myData');

    if (storedData) {
      // Parse and return the important information
      const { receiptList, user, date } = storedData;
      return {
        receiptList,
        user,
        date: new Date(date).toLocaleString(), // Format the date for better readability
      };
    } else {
      return null;
    }
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
  
          {/* Display retrieved information in a table */}
          {displayedData && (
            <VStack align="flex-start" spacing="2">
              <Text>Receipt List:</Text>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Item</Th>
                    <Th>Quantity</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {displayedData.receiptList.map((item, index) => (
                    <Tr key={index}>
                      <Td>{item[0]}</Td>
                      <Td>{item[1]}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Text>User: {displayedData.user}</Text>
              <Text>Date: {displayedData.date}</Text>
            </VStack>
          )}
        </VStack>
      </Flex>
    </>
  );
};

export default Kitchen;
