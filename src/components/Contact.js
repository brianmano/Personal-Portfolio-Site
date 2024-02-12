import React from 'react';
import { Spacer, Text, Flex, Link, VStack, Box, Heading, HStack, Button, Divider, useBreakpointValue } from '@chakra-ui/react';
import { MdOutlineArrowOutward, MdOutlineArrowCircleUp } from "react-icons/md";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, } from 'react-icons/fa';
import "../App"

/* change the following to customize the page*/
const emaiLink = "mailto:brian.manomaisupat@gmail.com"
const email = "brian.manomaisupat@gmail.com"
const linkedin = "https://www.linkedin.com/in/brian-mano/"
const github = "https://github.com/brianmano"
/*-------------------------------------------*/


const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Adds smooth scrolling effect
    });
  };

  const scrollStyle = {
    width: '100%',
    '--time': '20s', // Custom property
    // Add other styles as needed
  };

const Contact = () => {

    const shouldRenderSecondHeading = useBreakpointValue({ base: false, md: true });

  return ( 
    <Flex justify="flex-start" width="100%" paddingLeft="10" paddingy= "5" >
      <VStack align="flex-start" spacing="5" width='100%' overflow="hidden">
      <Flex width="100%" justify='left'>
  {shouldRenderSecondHeading ? (
    <div>
        <Flex width="100%" justify='center' align='left'>
            <Heading fontFamily="Titillium Web, sans-serif;" color='#eaebea' fontSize={100} id="contact">
                Get In Touch
                <Box display="inline-block" ml="2" verticalAlign="middle">
                <MdOutlineArrowOutward size={90} color='#eaebea' />
                </Box>
            </Heading>
        </Flex>
    </div>
  ) : (
    <div>
        <Flex fontFamily="Titillium Web, sans-serif;" width="100%" justify='center' align='center'>
            <Heading color='black' fontSize={70} id="contact">
                Get In Touch
                <Box display="inline-block" ml="2" verticalAlign="middle">
                <MdOutlineArrowOutward size={50} color='black' />
                </Box>
            </Heading>
        </Flex>
     </div>
  )}
 
  </Flex>
    <HStack width="100%" spacing={4} justify='left' flexWrap="wrap">
        <Link href={emaiLink} isExternal>
          <Button fontFamily="Titillium Web, sans-serif;" leftIcon={<FaEnvelope />} bg="#94161e" color = "white">
            {email}
          </Button>
        </Link>
        <Button color= "white" fontFamily="Titillium Web, sans-serif;" leftIcon={<FaPhone />} bg='#b8561d'>
            289-788-9659
        </Button>
        <Link fontFamily="Titillium Web, sans-serif;" href={linkedin} isExternal>
          <Button color = "white" leftIcon={<FaLinkedin />} bg="#194e94" >
            LinkedIn  
          </Button>
        </Link>
        <Link fontFamily="Titillium Web, sans-serif;" href={github} isExternal>
        <Button leftIcon={<FaGithub />} bgColor="#eaebea" textColor='black' variant='outline'
          sx={{
            '&:hover': {
              bgColor: "white",
              textColor: 'black',
            },
          }}
        >
          Github
      </Button>
      </Link>
          </HStack>
    <HStack width="100%" spacing={4} justify="space-between" align="center" as="article">
        <Button color="#eaebea" fontFamily="Titillium Web, sans-serif;" variant="link" onClick={scrollToTop} leftIcon={<MdOutlineArrowCircleUp/>}>
            Back To Top
        </Button>
        <Spacer />
        <Text mr = "5" color="#eaebea" fontFamily="Titillium Web, sans-serif;">Project code is open source, feel free to fork and make your own version. </Text>
    </HStack>
    <Divider />
    </VStack>
  </Flex>
 
  );
};

export default Contact;
