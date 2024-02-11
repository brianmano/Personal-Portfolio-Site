import { VStack, Box } from "@chakra-ui/layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Skills from "./components/skill-carousel";
// import IslandNavbar from "./components/IslandNavbar";

function App() {
  return (
    <Box width={{ base: "100%"}} bgGradient="linear(to-t, white, #4B4858, #4B4858, #4B4858, #0F0D15, #0F0D15)" style={{ margin: 0 }} >
      <Navbar  />
      <VStack spacing={4} p={5} maxW="100%" align="center">
        <Hero/>
        <Experiences/>
        <Projects/>
        <Contact/>
      </VStack>
    </Box>
  );
}

export default App;
