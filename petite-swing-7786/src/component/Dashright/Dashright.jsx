import React from "react";
import Menu from "../Menu/Menu";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import ProfileBoard from "../../component/ProfileBoard/ProfileBoard";
import Timer from "../../component/Timer/Timer";

import { Route, Routes } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

const Dashright = () => {
  const [isLarger480] = useMediaQuery('(min-width: 480px)');
  return (
    <>
      <Flex h={"60px"} w={"100%"}>
        <Flex
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          m={"auto"}
   
        bg={"white"}
        mt={"20px"}

          w={{
            base: "100%",
            sm: "900px",
          }}
        >
          <Flex w={"100%"} alignItems={"center"}   justifyContent={"space-between"}>
            {!isLarger480 && <Spacer />}
            {isLarger480 ?(
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input mr={{ sm: "30px" }} placeholder="Search" w={"400px"} />
              </InputGroup> 
            )
            : null
        }

            

            <Flex mr={"40px"} w={{base : "50%"}} justifyContent={"space-between"} alignItems={"center"}>
              {isLarger480 ? (
                <Button  bg={"#3fc5a6"} color={"white"} mr={{ sm: "30px" }}>
                  {" "}
                  Start Free Trial
                </Button>
              ) : null}

              <Timer  />

              <ProfileBoard />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Dashright;
