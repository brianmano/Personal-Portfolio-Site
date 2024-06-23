import React from 'react';
import {
  Image,
  Box,
  Button,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  extendTheme,
} from '@chakra-ui/react';
import "./IslandNavbar.css";
import logo from "./images/86c30529904c3a992eb7241299e5f3e5.png";

const IslandNavbar = () => {

  const theme = extendTheme({
    breakpoints: {
      "1600px": {
        min: "1600px",
        max: "1600px",
      },
    },
  });
  
  const mobileNav = useBreakpointValue({ base: true, md: false, lg: false, xl: false, "1600px": true });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='menu'>
      {mobileNav ? (
        <Menu>
          <Box>
            <Image width="12%" src={logo} />
            <Box
              as="button"
              fontFamily="Titillium Web, sans-serif;"
              fontWeight="bold"
              fontSize="18px"
              variant="link"
              onClick={scrollToTop}
              color="black"
            >
              Brian Mano
            </Box>
          </Box>
          <MenuButton color="black" as={Button} bg="transparent" size="lg" _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }}>
            ☰
          </MenuButton>
          <MenuList>
            <Link href="https://drive.google.com/file/d/1q6sITnvTjJQpHgGuAHlJx_U3ySFROxPy/view?usp=sharing" isExternal>
              <MenuItem fontFamily="Titillium Web, sans-serif;" variant="link">
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
        <>
          <Box>
            <Image width="12%" src={logo} />
            <Box
              as="button"
              fontFamily="Titillium Web, sans-serif;"
              fontWeight="bold"
              fontSize="18px"
              variant="link"
              onClick={scrollToTop}
              color="black"
            >
              Brian Mano
            </Box>
          </Box>

          <Box>
            <Link href="https://drive.google.com/file/d/1lgre9ghRHktAR7Ym0qdcK-wDvQXLi6eD/view?usp=drive_link" isExternal>
              <Button
                variant="link"
                color="black"
                fontFamily="Titillium Web, sans-serif;"
              >
                Resume
              </Button>
            </Link>
            <Button
              variant="link"
              pl="4"
              onClick={() => {
                const experienceSection = document.getElementById('experience');
                if (experienceSection) {
                  experienceSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
              color="black"
              fontFamily="Titillium Web, sans-serif;"
            >
              Experience
            </Button>
            <Button
              variant="link"
              pl="4"
              onClick={() => {
                const experienceSection = document.getElementById('projects');
                if (experienceSection) {
                  experienceSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
              color="black"
              fontFamily="Titillium Web, sans-serif;"
            >
              Projects
            </Button>
            <Button
              variant="link"
              pl="4"
              display={{ base: "none", sm: "block" }}
              onClick={() => {
                const experienceSection = document.getElementById('contact');
                if (experienceSection) {
                  experienceSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
              color="black"
              fontFamily="Titillium Web, sans-serif;"
            >
              Contact
            </Button>
          </Box>
        </>
      )}
    </div>
  );
};

export default IslandNavbar;
