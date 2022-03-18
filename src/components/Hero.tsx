import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export const Hero = () => {
    return (
        <Flex pt="26px" direction="column" fontFamily="Poppins">
            <Flex justifyContent="center">
                <Image src="images/photo-grid.png" alt="banner" w="395px" h="232px" />
            </Flex>
            <Flex pl="36px" direction="column">
                <Heading as="h1" pt="32px" fontFamily="Poppins" fontWeight="600" fontSize="36px" lineHeight="39.6px">
                    Online Experiences
                </Heading>
                <Text pt="16px" fontWeight={"light"} lineHeight="17.6px" w="325px">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </Text>
            </Flex>
        </Flex>
    );
};
