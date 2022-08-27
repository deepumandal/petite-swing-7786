import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import DashLists from "../DashLists/DashLists";
import DashLogo from "../DashLogo/DashLogo";

const Menu = () => {
  return (
    <VStack
      w={"200px"}
      border={"1px"}
      bg={"white"}
      position={"fixed"}
      left={0}
      top={0}
      bottom={0}
      p={6}
    >
      <DashLogo />
      <DashLists />
      <Box
        m={"auto"}
        w={"180px"}
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
        // border={"1px"}
        bg={"#f2fbf9"}
        p={4}
      >
        <Text
          cursor={"pointer"}
          fontSize={"12px"}
          border={"1px"}
          borderColor={"#3fc5a6"}
          color={"#3fc5a6"}
          p={"5px"}
        >
          Get One Months Free
        </Text>
      </Box>
    </VStack>
  );
};

export default Menu;
