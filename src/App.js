import { VStack, Box } from "@chakra-ui/layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import IslandNavbar from "./components/IslandNavbar";
// import Skills from "./components/skill-carousel";

function App() {
  return (
    <Box width={{ base: "100%"}} bg="#0c0e0c" style={{ margin: 0 }} >
      <IslandNavbar />
      {/* <Navbar  /> */}
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
