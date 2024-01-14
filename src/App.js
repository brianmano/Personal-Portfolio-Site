import { VStack, Box } from "@chakra-ui/layout";
import Hero from "./componentsnew/Hero";
import "./App.css"
function App() {
  return (
    <Box width={{ base: "100%"}} height="100vh" bgGradient={["linear(to-bl, white, #8CD18F)"]} style={{ margin: 0 }} >
      <VStack spacing={0} p={0} maxW="100%" align="center">
        <Hero />
      </VStack>
    </Box>

  );
}

export default App;
