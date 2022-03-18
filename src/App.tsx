import "./App.css";
import "@fontsource/poppins";

import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";

const queryClient = new QueryClient();

const theme = extendTheme({ config: { initialColorMode: "light" } });

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Flex direction="column" boxSize="100%">
                    <NavBar />
                    <Hero />
                    <Card />
                </Flex>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
