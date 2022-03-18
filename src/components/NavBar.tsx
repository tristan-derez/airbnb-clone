import { Flex, Image } from "@chakra-ui/react";

export const NavBar = () => {
    return (
        <Flex pl="30px" alignItems="center" minH="70px" bg="#FFFFFF" boxShadow="xl">
            <Image src="images/airbnb-logo.png" alt="logo" w="82px" h="25px" />
        </Flex>
    );
};
