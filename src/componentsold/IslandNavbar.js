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
import "./IslandNavbar.css"
const IslandNavbar = () => {

    const mobileNav = useBreakpointValue({ base: true, md: false });
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <div className='menu'>
        <Box
        as="button"  
        fontWeight="bold" 
        fontSize="15px" 
        variant="link"
        onClick={scrollToTop}
        color = "#0F0D15"
        >
          Brian Manomaisupat
        </Box>
        <div>
            <Link href = "https://drive.google.com/file/d/1G837Cw9yMQ7vGNIyto_jRXR885sHbwt_/view?usp=sharing" isExternal>
                <Button 
                variant="link"
                color = "#0F0D15" 
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
                color = "#0F0D15"
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
                color = "#0F0D15"
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
            color = "#0F0D15"
          >
            Contact
          </Button>
        </div>
      </div>
    );
  };
  
  export default IslandNavbar;
  