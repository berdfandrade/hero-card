

import { ChakraProvider, Center } from "@chakra-ui/react"
import HeroCard from "./componentes/characterCard";


function App() {
  return (
    <ChakraProvider>
      <Center h="100vh">
        <HeroCard />
      </Center>
    </ChakraProvider>
  );
}

export default App;
