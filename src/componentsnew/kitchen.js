import React, { useState } from 'react';
import { Flex, VStack, Heading, Button, Text, useBreakpointValue, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import LocalStorage from 'localstorage-enhance';
import receipt_list from './receipt_list_test';
import user_test from './user_test';

const Kitchen = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [displayedData, setDisplayedData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

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
    // Clear selected item
    setSelectedItem(null);
  };

  const setLocalStorageData = () => {
    const newData = {
      receiptList: receipt_list,
      user: user_test,
      date: new Date().toISOString(),
    };

    // Get existing data from local storage
    const existingData = LocalStorage.getItem('myData') || { receiptList: [], user: null, date: null };

    // Append the new data to the existing data
    existingData.receiptList = existingData.receiptList.concat(newData.receiptList);
    existingData.user = newData.user;
    existingData.date = newData.date;

    // Set the combined data back into local storage
    LocalStorage.setItem({ key: 'myData', data: existingData });
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

  const generateSummaryTable = () => {
    if (!displayedData) {
      return null;
    }

    // Create a summary object to store quantities for each unique item
    const summary = {};

    // Populate the summary object
    displayedData.receiptList.forEach((item) => {
      const itemName = item[0];
      const itemQuantity = item[1];

      if (summary[itemName]) {
        summary[itemName] += itemQuantity;
      } else {
        summary[itemName] = itemQuantity;
      }
    });

    // Convert the summary object into an array for rendering
    const summaryArray = Object.entries(summary);

    return (
      <VStack align="flex-start" spacing="2">
        <Text>Summary Table:</Text>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Quantity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {summaryArray.map(([itemName, itemQuantity], index) => (
              <Tr key={index} onClick={() => handleSummaryItemClick(itemName)}>
                <Td>{itemName}</Td>
                <Td>{itemQuantity}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    );
  };

  const handleSummaryItemClick = (itemName) => {
    // Set the selected item for filtering the detailed list
    setSelectedItem(itemName);
  };

  const generateDetailedTable = () => {
    if (!displayedData) {
      return null;
    }

    // Filter the detailed list based on the selected item
    const filteredList = displayedData.receiptList.filter((item) => item[0] === selectedItem);

    return (
      <VStack align="flex-start" spacing="2">
        <Text>Detailed Table:</Text>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Quantity</Th>
              <Th>User</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredList.map((item, index) => (
              <Tr key={index}>
                <Td>{item[0]}</Td>
                <Td>{item[1]}</Td>
                <Td>{displayedData.user}</Td>
                <Td>{displayedData.date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    );
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

          {/* Display summary information in a separate table */}
          {generateSummaryTable()}

          {/* Display retrieved information in a table */}
          {generateDetailedTable()}
        </VStack>
      </Flex>
    </>
  );
};

export default Kitchen;
