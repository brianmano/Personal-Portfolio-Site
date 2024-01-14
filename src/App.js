
import { VStack, Box } from "@chakra-ui/layout";
import Navbar from "./componentsnew/Navbar";
import Kitchen from "./componentsnew/kitchen";

function App() {
  return (
    <Box width={{ base: "100%"}} style={{ margin: 0 }} >
      <VStack spacing={0} p={0} maxW="100%" align="center">
        <Navbar />
        <Kitchen />
      </VStack>
    </Box>
  );
}

export default App;
