import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardHeader, Heading, Link, Text, Button, Tag, TagLeftIcon, Box, Flex, TagLabel } from "@chakra-ui/react";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos, MdCircle } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5"
import "../App"


/* change the following to customize the page*/
/* To add cards you have to scroll down and manually change them*/
/* !!! In the future, we can add something to generate them with a for loop*/
/* Present Jobs (if you have only 1 current job, you will have to scroll down and delete on of the cards)*/
/* Card 1*/

const fontcolour2 = "#D3D3D3"

const experienceList = [
  {
     present : true,
     jobTitle: "System Design and Integration (SDI) Team Member",
     companyName: "McMaster EcoCAR EV",
     companyDepartment: "SDI Connected Automated Vehicle (CAVs) Electrical Subteam",
     timeline: "Sept 2023 - Present",
  },
  {
    present : false,
    jobTitle: "Quality Engineer Intern",
    companyName: "Linamar Corporation",
    companyDepartment: "Quality Team",
    timeline: "May 2023 - August 2023",
  },
  {
    present : false,
    jobTitle: "Civil Engineer Intern",
    companyName: "Urbex Engineering Limited",
    companyDepartment: "Engineering Team",
    timeline: "May 2022 - August 2022",
  },
];
/*-------------------------------------------*/


export default class Experiences extends Component {
  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      swipeToSlide: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      lazyLoad: true,
      nextArrow: <MdArrowForwardIos color="black"/>,
      prevArrow: <MdOutlineArrowBackIosNew color = "black"/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
      
      <>
        <Heading fontFamily="Titillium Web, sans-serif;" color={fontcolour2} width="100%" paddingX={10} paddingTop={10} id="experience">
          Experience        
        </Heading>
          <Box paddingX={10} paddingY={5} width="100%" align="left">
            <Text fontFamily="Titillium Web, sans-serif;" color={fontcolour2} pb="3"width={{base:"100%", lg: "55%"}}>
              My journey in engineering has been shaped by a diverse range of experiences, each contributing to my growth. Below you can find a link with my resume attached:
            </Text>
            <Link href = "https://drive.google.com/file/d/1G837Cw9yMQ7vGNIyto_jRXR885sHbwt_/view?usp=sharing" isExternal>
            <Button fontFamily="Titillium Web, sans-serif;" paddingY="3" colorScheme="red" leftIcon={<IoDocumentAttach/>}>
              Resume
            </Button>
            </Link>
          
          </Box>
        
        <Box width="90%" padding="0 20px" pt="3"> 

          <Slider {...sliderSettings}>
            
          {experienceList.map((experienceList, index) => (
              <Box px={2}>
                <Card height="320px" variant="outline" borderColor={experienceList.present ? 'green' : 'gray'}>
                    <Flex direction="column" height="100%">
                      <Box>
                        <Tag fontFamily="Titillium Web, sans-serif;" variant='subtle' colorScheme='green' display={experienceList.present ? 'inline-flex' : 'none'}>
                            <TagLeftIcon boxSize='20px' as={MdCircle} />
                            <TagLabel>Now</TagLabel>
                        </Tag>
                        <CardHeader> 
                          <Heading fontFamily="Titillium Web, sans-serif;" paddingBottom={2}>{experienceList.jobTitle}</Heading>
                          <Text fontFamily="Titillium Web, sans-serif;" >{experienceList.companyName}</Text>
                          <Text fontFamily="Titillium Web, sans-serif;" color="gray">{experienceList.companyDepartment}</Text>
                        </CardHeader>
                      </Box>
                      <Box marginTop="auto"> 
                      <Text fontFamily="Titillium Web, sans-serif;" textAlign="left" paddingTop={2} paddingX="4" paddingBottom={2} color="gray">
                          {experienceList.timeline}
                      </Text>
                      </Box>
                    </Flex>
                </Card>
              </Box>
          ))}
          </Slider>
        </Box>
      </>
    );
  }
}