import { Spacer, Flex, Image, Box, Button, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";

import Hamburgur from "../Hamburgur/Hamburgur";
import FullScreenNav from "../FullScreenTemplate/FullScreenNav";
import { Link } from "react-router-dom";

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

const [ismobileScreen] = useMediaQuery(`(max-width: 480px)`)


  return (
    <Box
    bg={"white"}
    zIndex={10}
    position={"fixed"}
    top={0}
      // border={"1px"}
      pt={{
        base: "12px",
        sm: "10px",
      }}
      pb={{
        base: "12px",
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
          base: "85%",
        }}
        // border={"1px"}
        height={{
          sm: "50px",
          lg: "45px",
        }}
        ovewrflow={"auto"}
      >
        <Flex>
          <Link to='/'>
          <Image
            w={{
              lg: "110px",
              sm: "108px",
              base : "90px"
            }}
            src={`https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg`}
          />
          </Link>
        </Flex>
        <Spacer />
        <Spacer />



{
  ismobileScreen? <Hamburgur /> : <FullScreenNav />
}

       
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
