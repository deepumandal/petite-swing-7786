import { Spacer, Flex, Image, Box, Button } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";

const Navbar = () => {
  const ProductComp = [
    {
      title: "Bonsai Workflow",
      description:
        "Look professional, win more clients and manage your business from one place",
    },
    {
      title: "Bonsai Tax",
      description:
        "Track expenses, maximize tax write-offs, and estimate taxes without the headache",
    },
    {
      title: "Bonsai Cash",
      description:
        "Bonsai's all-in-one financial hub: No fees ans lightnint fast payouts",
    },
  ];

  return (
    <Box
    position={"fixed"}
    top={0}
      border={"1px"}
      pt={{
        base: "8px",
        sm: "10px",
      }}
      pb={{
        base: "8px",
        sm: "10px",
      }}
      m={"auto"}
      w={"100%"}
    >
      <Flex
        alignItems={"center"}
        m={"auto"}
        w={{
          sm: "700px",
          md: "900px",
          lg: "1050px",
          base: "80%",
        }}
        border={"1px"}
        height={{
          sm: "50px",
          lg: "45px",
        }}
        ovewrflow={"auto"}
      >
        <Flex>
          <Image
            w={{
              lg: "110px",
              sm: "108px",
            }}
            src={`https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg`}
          />
        </Flex>
        <Spacer />
        <Spacer />
        <Flex
          border={"1px"}
          w={{
            sm: "350px",
            md: "500px",
          }}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        ></Flex>
        <Spacer />
        <Flex gap={"20px"}>
          <Button
            size={"sm"}
            colorScheme="teal"
            _hover={{
              backgroundColor: "teal",
              color: "white",
            }}
            variant="outline"
          >
            LOG IN
          </Button>

          <Button color={"white"} size={"sm"} bg={"#00b289"}>
            START FREE
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

// border={"1px"}
// w={{
//   sm: "300px",
//   lg: "450px",
// }}
