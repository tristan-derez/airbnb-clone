import { Flex, Box, Image, Text, Badge } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import data from "../data/data.json";

export const Card = () => {
    return (
        <Flex paddingY="49px" pl="37px">
            <Box w="176px" className="card" position="relative">
                <Image src={`/images/${data.img}`} alt="photo of Katie Zaferes" w="176px" borderRadius="9px" />
                <Badge
                    fontSize="10px"
                    position="absolute"
                    top="6px"
                    left="6px"
                    zIndex={"3"}
                    borderRadius="2px"
                    py="4px"
                    px="6px"
                    fontFamily="Poppins"
                    fontWeight="400"
                >
                    SOLD OUT
                </Badge>
                <Box pt="9px" display="flex" alignItems="center">
                    <AiFillStar color="#FE395C" size="15" />
                    <Text ml="2px" fontSize="12px" fontFamily="Poppins" pt="2px">
                        {data.rating}
                    </Text>
                    <Text color="#918E9B" pl="2px" fontSize="12px" fontFamily="Poppins" pt="2px">
                        ({data.reviewCount}) - {data.country}
                    </Text>
                </Box>
                <Text fontSize="12px" fontFamily="Poppins" pt="8px">
                    {data.title}
                </Text>
                <Box display="flex" pt="8px">
                    <Text fontSize="12px" fontWeight="600" fontFamily="Poppins">
                        From ${data.price}
                    </Text>
                    <Text fontSize="12px" fontFamily="Poppins">
                        &nbsp;/ person
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
};
