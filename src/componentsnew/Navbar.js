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
  Link
} from '@chakra-ui/react';

import { experienceID } from '../componentsold/Experience';


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
        as="button"  
        fontWeight="bold" 
        fontSize="20px" 
        paddingY="3" 
        paddingX="9"
        variant="link"
        onClick={scrollToTop}
      >
        ṇ
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
        <HStack spacing="20" flexWrap="wrap">
          {/* <Spacer /> */}
          {/* <Button variant="link" >Receipts</Button> */}
          <Button
            variant="link"
            onClick={() => {
              const experienceSection = document.getElementById('experience');

              if (experienceSection) {
                experienceSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }
            }}
          >
            Notifications
          </Button>
          <Button
            variant="link"
            onClick={() => {
              const experienceSection = document.getElementById('projects');

              if (experienceSection) {
                experienceSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }
            }}
          >
            Pantry
          </Button>
        </HStack>
      )}
    </Flex>
  );
};

export default Navbar;
