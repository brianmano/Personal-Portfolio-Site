import React, { useState } from 'react';
import {
  Flex,
  VStack,
  Heading,
  Button,
  Text,
  useBreakpointValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Box,
  HStack,
  Divider,
  Spacer
} from '@chakra-ui/react';
import LocalStorage from 'localstorage-enhance';
import receipt_list from './receipt_list_test';

const Kitchen = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [displayedData, setDisplayedData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCloseButtonClick = () => {
    // Clear the selected item
    setSelectedItem(null);
  };

  const handleSetButtonClick = () => {
    // Set data into local storage
    setLocalStorageData();

    // Update the displayed data in state
    handleGetButtonClick();
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
    // Fetch existing data from local storage
    const existingData = LocalStorage.getItem('myData') || { receiptList: [] };

    // Identify deleted items by checking if they exist in the displayedData
    const deletedItems = displayedData
      ? existingData.receiptList.filter(
          (item) => !displayedData.receiptList.some((displayedItem) => displayedItem[0] === item[0])
        )
      : [];

    // Remove deleted items from the existing receiptList
    const updatedReceiptList = existingData.receiptList.filter(
      (item) => !deletedItems.some((deletedItem) => deletedItem[0] === item[0])
    );

    // Combine updated receipt_list, user_test, and date into a single object
    const newDataToStore = {
      receiptList: [...updatedReceiptList, ...receipt_list],
    };

    // Set the combined data into local storage
    LocalStorage.setItem({ key: 'myData', data: newDataToStore });
  };

  const getLocalStorageData = () => {
    // Get data from local storage
    const storedData = LocalStorage.getItem('myData');

    if (storedData) {
      // Parse and return the important information
      const { receiptList } = storedData;
      return {
        receiptList,
      };
    } else {
      return null;
    }
  };

  const handleSummaryItemClick = (itemName) => {
    // Set the selected item in state
    setSelectedItem(itemName);
  };

  const generateSummaryTable = () => {
    if (!displayedData) {
      return null;
    }
  
    // Create a summary object to store quantities and the newest date for each unique item
    const summary = {};
  
    // Populate the summary object
    displayedData.receiptList.forEach((item) => {
      const itemName = item[0];
      const itemQuantity = item[1];
      const itemDate = item[3]; // Assuming the date is at index 3, adjust if needed
  
      if (summary[itemName]) {
        // If the item exists in the summary, update the quantity and date if it's newer
        summary[itemName].quantity += itemQuantity;
        summary[itemName].newestDate = Math.max(summary[itemName].newestDate, itemDate);
      } else {
        // If the item is not in the summary, add it with quantity and date
        summary[itemName] = {
          quantity: itemQuantity,
          newestDate: itemDate,
        };
      }
    });
  
    // Convert the summary object into an array for rendering
    const summaryArray = Object.entries(summary);
  
    return (
      <VStack align="flex-start" spacing="2" width={{ base: '100%', md: '100%' }}>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th px={2}>Item</Th>
              <Th px={4}>Quantity</Th>
              <Th px={4}>Newest Date</Th> {/* Add a new column for the newest date */}
            </Tr>
          </Thead>
          <Tbody>
        {summaryArray.map(([itemName, itemInfo], index) => (
          <Tr
            key={index}
            onClick={() => handleSummaryItemClick(itemName)}
            style={{
              cursor: 'pointer',
              backgroundColor: selectedItem === itemName ? '#edf2f7' : 'rgba(255, 255, 255, 0.4)', // White with 0.8 opacity
            }}
          >
            <Td px={4}>{itemInfo.quantity}</Td>
            <Td px={4}>{itemName}</Td>
            <Td px={4}>{itemInfo.newestDate}</Td>
          </Tr>
        ))}
      </Tbody>
        </Table>

      </VStack>
    );
  };
  
  const generateDetailedTable = () => {
    if (!displayedData || !selectedItem) {
      return null;
    }

    // Filter detailed list based on the selected item
    const filteredList = displayedData.receiptList.filter((item) => item[0] === selectedItem);

    if (filteredList.length === 0) {
      // Return null if no items match the selected item
      return null;
    }

    const handleQuantityChange = (index, newQuantity) => {
      // Update the quantity in the filtered list
      const updatedList = [...filteredList];
      updatedList[index][1] = newQuantity;

      // Update the displayed data in state
      setDisplayedData({
        receiptList: [...displayedData.receiptList],
      });
    };

    const handleDeleteClick = (index) => {
      if (!displayedData || !selectedItem) {
        return;
      }

      setDisplayedData((prevData) => {
        // Create a copy of the previous state
        const updatedData = { ...prevData };

        // Get the quantity of the item to be deleted
        const deletedQuantity = updatedData.receiptList[index][1];

        // Remove the item with the selected name and matching index from the receiptList array
        updatedData.receiptList = updatedData.receiptList.filter(
          (item, i) => !(item[0] === selectedItem && i === index)
        );

        // If the quantity becomes zero, remove the entire line
        updatedData.receiptList = updatedData.receiptList.filter((item) => item[1] !== 0);

        // Optional: You can perform any additional logic with the deleted quantity here
        console.log(`Deleted quantity: ${deletedQuantity}`);

        return updatedData;
      });
    };

    return (
      <Box bg="gray.200" p={4} borderRadius="md" borderWidth="1px" borderColor="black">
      <VStack align="flex-start" spacing="1" mt={2}>
        <Heading width="100%" id="experience">
          Item Info: {selectedItem}
        </Heading>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Quantity</Th>
              <Th>User</Th>
              <Th>Date</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredList.map((item, index) => (
              <Tr key={index}>
                <Td>{item[0]}</Td>
                <Td>
                  <Input
                    type="number"
                    min="0"
                    value={item[1]}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
                  />
                </Td>
                <Td>{item[2]}</Td>
                <Td>{item[3]}</Td>
                <Td>
                  <Button size="sm" onClick={() => handleQuantityChange(index, item[1] + 1)}>+</Button>
                  <Button size="sm" onClick={() => handleQuantityChange(index, Math.max(item[1] - 1, 0))}>-</Button>
                  {/* Delete button */}
                  <Button size="sm" onClick={() => handleDeleteClick(index)} colorScheme="red">
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {/* Close button */}
        <Flex justify="flex-end" top="0">
          <Button onClick={handleCloseButtonClick} colorScheme="red">
            Close
          </Button>
        </Flex>
      </VStack>
    </Box>
    );
  };

  return (
    <>
    <Flex justify="flex-start" width="100%" paddingX="10" paddingY="10" flexDirection={{ base: 'column', md: 'row' }}>
    <VStack align="flex-start" spacing="2" flexWrap="wrap" width={{ base: '100%', md: '50%' }}>
      <Heading width="100%" paddingTop={10} paddingBottom={5} id="experience">
        Family Pantry
      </Heading>
      <Box mb={4}>
        <Button onClick={handleSetButtonClick} colorScheme="gray" mb={6}>
          ⊕ Upload Your Receipt List
        </Button>
        <Spacer />
  {/* Add a Spacer component to create space between buttons */}
  <Spacer />
        {/* Button to trigger clearing all items in local storage */}
        <Button onClick={handleClearButtonClick} colorScheme="red" mb={6}>
          X Clear All Items in Family Pantry
        </Button>
      </Box>    
    </VStack>
  </Flex>

  <Flex justify="flex-start" width="100%" paddingX="10"  flexDirection={{ base: 'column', md: 'row' }}>
      <HStack width="100%">
        <VStack align="flex-start" spacing="2" width="700px">
        <Heading size="lg" textAlign="left"  >
            Pantry Items
          </Heading>
          <Divider my={2} borderColor="black"  />
          {generateSummaryTable()}
        </VStack>
        {displayedData && selectedItem && (
          <VStack align="flex-start" spacing="2" width="50%">
            {generateDetailedTable()}
          </VStack>
        )}
      </HStack>   
  </Flex>

</>
  );
};

export default Kitchen;