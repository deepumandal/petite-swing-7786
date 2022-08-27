import { Box, Image, Button, Text, Link } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Card = ({ type, name, image }) => {
  return (
    <Box
    
      color="grey"
      p="10px 10px"
      borderRadius="5px"
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
    >
      <Box position="relative" padding="2px 2px" h="50%">
        <Image src={image} h="initial" />
        <Button
          position="absolute"
          bottom="5%"
          bgColor="white"
          _hover={{ bgColor: "white" }}
          boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
        >
          {type}
        </Button>
      </Box>
      <br />
      <Box h="25%">
        <Text fontSize="20px" fontWeight="400" lineHeight="20px">
          {name}
        </Text>
        <br />
        <Box textAlign="right">
          <Button _hover={{ bgColor: "#00b289" }} bgColor="#00b289">
            <Link>
              <AiOutlineArrowRight color="white" width="100%" />
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
