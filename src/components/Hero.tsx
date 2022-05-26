import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export const Hero = () => {
    return (
        <Flex pt="26px" direction="column" fontFamily="Poppins">
            <Flex justifyContent="center">
                <Image src="images/photo-grid.png" alt="banner" w={["248px", "auto"]} h="232px" />
            </Flex>
            <Flex direction="column" px="36px">
                <Heading
                    as="h1"
                    pt="32px"
                    fontFamily="Poppins"
                    fontWeight="600"
                    fontSize="36px"
                    lineHeight="39.6px"
                    w={["248px", "auto"]}
                >
                    Online Experiences
                </Heading>
                <Text pt="16px" fontWeight={"light"} lineHeight="17.6px" w={["248px", "auto"]}>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </Text>
            </Flex>
        </Flex>
    );
};
