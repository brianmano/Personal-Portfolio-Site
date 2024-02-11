import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex, Link, VStack, Box, Heading, Text, Button,  Tag, TagLeftIcon, TagLabel, Card } from '@chakra-ui/react';
import { FaCircle, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { MdOutlineArrowBackIosNew, MdArrowForwardIos, MdCircle } from "react-icons/md";
// import { useMediaQuery } from '@chakra-ui/react';

/* List of common languages - look at colors.json for other colors to reference*/
const languageColors = {
    JavaScript: '#F1E05A',
    CSS: '#563D7C',
    HTML: '#E34C26',
    Python: '#3572A5',
    Java: '#b07219',
    Ruby: '#701516',
    TypeScript: '#2b7489',
    'C#': "#178600",
    Rust: "#dea584",
    'C++': "#f34b7d",
    PHP: "#4F5D95",
    Shell: "#89e051",
    C: "#555555",
    Go: "#00ADD8",
    Ruby: "#701516",
    Lua: "#000080",
    Kotlin: "#A97BFF",
  };


const RepoInfo = ({ repoName }) => {
  
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${repoName}`);
        const {
          html_url: repoLink,
          languages_url: languagesURL,
          contributors_url: contributorsURL,
          updated_at: lastUpdated,
        } = response.data;

        const languagesResponse = await axios.get(languagesURL);
        const languagesData = languagesResponse.data;

        const contributorsResponse = await axios.get(contributorsURL);
        const contributorsData = contributorsResponse.data.map((contributor) => contributor.login);

        // Calculate language percentages
        const totalSize = Object.values(languagesData).reduce((acc, size) => acc + size, 0);
        const languagePercentages = {};
        for (const [lang, size] of Object.entries(languagesData)) {
          const percentage = ((size / totalSize) * 100).toFixed(2);
          languagePercentages[lang] = `${percentage}%`;
        }

        const repoInfo = {
          repoLink,
          languages: languagePercentages,
          contributors: contributorsData,
          lastUpdated,
        };

        setRepoData(repoInfo);
      } catch (error) {
        console.error('Error fetching repository data:', error);
      }
    };

    fetchRepoData();
  }, [repoName]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3, // Adjust the number of slides shown
    slidesToScroll: 1,
    lazyLoad: true,
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


      <motion.div
            initial={{ scale: 0.95 }}
            whileHover="hover"
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            variants={{
              hover: {
                scale: 1.0,
              },
            }}
            >
    {repoData ? (
        
            <Card style={{ width: '100%', minHeight: '178px' }} p="2">
              <Flex flexDirection={{ base: 'column', md: 'row' }}>
                <VStack spacing="1" align={{ base: 'stretch', md: 'flex-start' }}>
                  <Link href={repoData.repoLink} isExternal pb="1" pr="2" pt="1.5">
                        <Button fontFamily="Titillium Web, sans-serif;" leftIcon={<FaGithub />} bgColor='#333' textColor='white' variant='outline'
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
                    <Heading fontFamily="Titillium Web, sans-serif;" pb="1">
                     {repoName.substring(repoName.indexOf('/') + 1)}
                    </Heading>
                </VStack>

                    </Flex>
                    <Text fontFamily="Titillium Web, sans-serif;" pb="1">
                    <strong>Contributors:</strong> {repoData.contributors.join(', ')}
                    </Text>
                    <Flex>
                    {Object.entries(repoData.languages).map(([lang, percentage]) => (
                        <Box
                        key={lang}
                        height="2"
                        width={percentage}
                        bgColor= {languageColors[lang] || 'gray'}
                        />
                    ))}
                    </Flex>
                    <Flex flexWrap="wrap" pb="1" width="100%">
                    {Object.entries(repoData.languages).map(([lang, percentage]) => (
                        <Tag
                        fontFamily="Titillium Web, sans-serif;"
                        key={lang}
                        height="2"
                        width="auto"
                        variant="none"
                        style={{ minWidth: '100px', marginRight: '5px' }} // Adjust minimum width and margin
                        >
                        <TagLeftIcon boxSize="10px" as={FaCircle} color={languageColors[lang] || 'gray'} />
                        <TagLabel>
                        <Flex>
                            <Text fontFamily="Titillium Web, sans-serif;" pr="1">{lang}{' '}</Text>
                            <Text fontFamily="Titillium Web, sans-serif;" color="gray" fontWeight="thin">{percentage}</Text>
                        </Flex>
                        </TagLabel>
                        </Tag>
                    ))}
                    </Flex>

                    <Text fontFamily="Titillium Web, sans-serif;">
                    <strong>Last Updated:</strong> {repoData.lastUpdated.substring(0,10)}
                    </Text>
                </Card>
                
      ) : (
        <p>Loading...</p>
      )}
      </motion.div>

  );
};

export default RepoInfo;
