import React from 'react';
import {
  Flex,
  Box,
  HStack,
  Button,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  extendTheme 
} from '@chakra-ui/react';


import "../App"


const Navbar = () => {

  const theme = extendTheme({
    breakpoints: {
      custom: "861px",
    },
  });
  
  const mobileNav = useBreakpointValue({ base: true, md: false, lg: false, xl: false, custom: false });


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
        position="fixed"
        bg="rgba(216, 50, 60, 0.5)" // Set the background color with some transparency
        zIndex={9}
        style={{
          backdropFilter: "blur(10px)" // Apply a blur effect
        }}
      >

      {mobileNav ? (
        
        <Menu>
          <Box
            
            as="button"
            fontWeight="bold"
            fontSize="20px"
            paddingY="3"
            paddingX="9"
            variant="link"
            onClick={scrollToTop}
          >
            Brian Manomaisupat
          </Box>
          <MenuButton color="#0F0D15" as={Button} variant="link" size="lg">
            ☰
          </MenuButton>
            <MenuList >
              <Link href="https://drive.google.com/file/d/1q6sITnvTjJQpHgGuAHlJx_U3ySFROxPy/view?usp=sharing" isExternal>
                <MenuItem  fontFamily="Titillium Web, sans-serif;" variant="link">
                  Resume
                </MenuItem>
              </Link>
              <MenuItem
                fontFamily="Titillium Web, sans-serif;"
                onClick={() => {
                  const experienceSection = document.getElementById('experience');
                  if (experienceSection) {
                    experienceSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                variant="link"
              >
                Experience
              </MenuItem>
              <MenuItem
                fontFamily="Titillium Web, sans-serif;"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                variant="link"
              >
                Projects
              </MenuItem>
              <MenuItem
                fontFamily="Titillium Web, sans-serif;"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                variant="link"
              >
                Contact
              </MenuItem>
            </MenuList>
        </Menu>
      ) : (
        <HStack spacing="10" flexWrap="wrap">
      <Box
        fontFamily="Titillium Web, sans-serif;"
        as="button"
        fontWeight="bold"
        fontSize="20px"
        paddingY="3"
        paddingX="9"
        variant="link"
        onClick={scrollToTop}
      >
        Brian Manomaisupat
      </Box>
        <Link href="https://drive.google.com/file/d/1q6sITnvTjJQpHgGuAHlJx_U3ySFROxPy/view?usp=sharing" isExternal>
          <Button fontFamily="Titillium Web, sans-serif;" color="#0F0D15" variant="link">
            Resume
          </Button>
        </Link>
        <Button
          fontFamily="Titillium Web, sans-serif;"
          color="#0F0D15"
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
          Experience
        </Button>
        <Button
          fontFamily="Titillium Web, sans-serif;"
          color="#0F0D15"
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
          Projects
        </Button>
        <Button
          fontFamily="Titillium Web, sans-serif;"
          color="#0F0D15"
          variant="link"
          onClick={() => {
            const experienceSection = document.getElementById('contact');
  
            if (experienceSection) {
              experienceSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }}
        >
          Contact
        </Button>
      </HStack>
    )}
  </Flex>
  );
};

export default Navbar;
