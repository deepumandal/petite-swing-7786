import { Box, Button, Flex, Input, Spacer } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "../../component/Menu/Menu";
import ProfileBoard from "../../component/ProfileBoard/ProfileBoard";
import Timer from "../../component/Timer/Timer";

const Dash = () => {
  return (
    <Box>
      <Menu />
      <Flex
        height={"70px"}
        position={"fixed"}
        top={0}
        w={"100%"}
        border={"1px"}
      >
        <Box
          display={"flex"}
          border={"1px"}
          position={"relative"}
          left={"200px"}
        >
          <Flex w={"100%"} bg={"red"} justifyContent={"space-between"}>
            <Input mr={{sm : "30px"}} w={"400px"} />
            <Spacer />

            <Button mr={{sm : "30px"}}> Start Free Trial</Button>
            <Spacer />
            <Timer  />
            <Spacer />
            <ProfileBoard />
          </Flex>
        </Box>
        <Box m={"auto"} mt={"90px"} top={"100px"}>
          <Routes>
            <Route path="/dashboard" />
          </Routes>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dash;
