import React from 'react';
import {
  Flex,
  Box,
  HStack,
  Button,
  useBreakpointValue,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Image
} from '@chakra-ui/react';

import { experienceID } from '../componentsold/Experience';
import logo from './images/logo.png';


const Navbar = () => {

  const mobileNav = useBreakpointValue({ base: true, md: false });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      width="100%"
      padding="2"
      position="fixed"
      // bg="white"
      zIndex={9}
    >
      <Box 
        as="a"  
        fontWeight="bold" 
        fontSize="26px" 
        paddingY="3" 
        paddingX="9"
        href="/"
      >
        <Image 
        src={logo} 
        alt="Logo"
        objectFit="cover"
        height="50px"
        ></Image>
      </Box>

      {mobileNav ? (
        <Menu>
          <MenuButton as={Button} variant="link" size="lg">
            ☰
          </MenuButton>
          <MenuList>
            {/* <Link href = "" isExternal>
              <MenuItem variant="link">Receipts</MenuItem>
            </Link> */}
            <MenuItem 
                onClick={() => {
                    const experienceSection = document.getElementById('experience');

                    if (experienceSection) {
                      experienceSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }
                  }}variant="link">
                Notifications
            </MenuItem>
            <MenuItem 
                onClick={() => {
                  const experienceSection = document.getElementById('projects');

                  if (experienceSection) {
                    experienceSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}variant="link">
              Pantry
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <HStack spacing="20" flexWrap="wrap" margin={5}>
          {/* <Spacer /> */}
          {/* <Button variant="link" >Receipts</Button> */}
          <Button
            variant="link"
            as="a"
            href="/grocerylist"
          >
            Grocery List
          </Button>
          <Button
            variant="link"
            as="a"
            href="/pantry"
          >
            Pantry
          </Button>
          <Button
            variant="link"
            as="a"
            href="/notifications"
          >
            Notifications
          </Button>
        </HStack>
      )}
    </Flex>
  );
};

export default Navbar;
