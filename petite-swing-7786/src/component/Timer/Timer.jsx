import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Timer = () => {
  return (
    <Flex w={"150px"} alignItems={"center"} justifyContent={"space-evenly"}>
      <Image w={"50px"} src={"./images/timer.png"} />
      <Text fontSize={"14px"} fontWeight={400}>
        Start Timer
      </Text>
    </Flex>
  );
};

export default Timer;
