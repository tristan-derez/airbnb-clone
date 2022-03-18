import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

export const Card = () => {
    return (
        <Flex paddingY="49px" pl="37px">
            <Box w="176px" className="card">
                <Image src="images/katie-zaferes.png" alt="photo of Katie Zaferes" w="176px" borderRadius="9px" />
                <Box pt="9px" display="flex" alignItems="center">
                    <AiFillStar color="#FE395C" size="15" />
                    <Text ml="2px" fontSize="12px" fontFamily="Poppins" pt="2px">
                        5.0
                    </Text>
                    <Text color="#918E9B" pl="2px" fontSize="12px" fontFamily="Poppins" pt="2px">
                        (6) - USA
                    </Text>
                </Box>
                <Text fontSize="12px" fontFamily="Poppins" fontWeight="300" pt="8px">
                    Life lessons with Katie Zaferes
                </Text>
                <Box display="flex" pt="8px">
                    <Text fontSize="12px" fontWeight="600" fontFamily="Poppins">
                        From $136
                    </Text>
                    <Text fontSize="12px" fontWeight="300" fontFamily="Poppins">
                        &nbsp;/ person
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
};
