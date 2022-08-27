import { Box, Button, Flex, Input, Spacer } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";




import Dashboard from "../../component/AppBonsai/Dashboard/Dashboard";


import DashHumburgur from "../../component/DashHumburgur/DashHumburgur";
import DashLeft from "../../component/DashLeft/DashLeft";
import Dashright from "../../component/Dashright/Dashright";
import { useMediaQuery } from "@chakra-ui/react";
import { HellobonsaiContext } from "../../Context/HellobonsaiContext";
import { Task } from "../Task/Task";
import Layout from "../../component/AppBonsai/Layout/Layout";

const Dash = () => {
  const [isLarger480] = useMediaQuery(`(max-width: 480px)`);
  const { route } = useContext(HellobonsaiContext);
  const loc = useLocation();
  console.log(loc);
  return (
    <>
      <Flex h={"60px"} justifyContent={"space-between"}>
        <Flex p={2} w={"100%"} alignItems={"center"}>
          <Box w={{ sm: "20%", base: "10%" }}>
            {!isLarger480 ? <DashLeft /> : <DashHumburgur />}
          </Box>
          <Box borderColor={"red"} w={"80%"}>
            <Dashright />
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <Box w={{ base: "0%", sm: "20%" }}></Box>
        <Box
          position={{ base: "static", sm: "relative" }}
          m={"auto"}
          w={{ sm: "70%", base: "90%" }}
          my={"20px"}
        >
          {route == "/dashboard" && <Dashboard />}
          {route == "/clients" && <Dashboard />}
          {route == "/Projects" && (
            <Layout
              type="Project"
              tableHeadings={["Title", "Client", "Start Date", "Due", "Paid"]}
            />
          )}
          {route == "/proposals" && (
            <Layout
              type="Proposal"
              tableHeadings={["Title", "Client", "Sent", "Accepted"]}
            />
          )}
          {route == "/contracts" && (
            <Layout
              type="Contract"
              tableHeadings={["TItle", "Client", "Project", "Created", "Sent"]}
            />
          )}
          {route == "/invoices" && <Dashboard />}
          {route == "/timeTracking" && <Dashboard />}
          {route == "/tasks" && <Task />}
          {route == "/Dashboard" && <Dashboard />}
          {route == "/cash" && <Dashboard />}
          {route == "/accounting" && <Dashboard />}
          {route == "/taxes" && <Dashboard />}
        </Box>
      </Flex>
    </>
  );
};

export default Dash;

{
  /* <Flex bg={"white"} top={0} bottom={0} left={0} right={0}>
<Box
  w={{ sm: "20%", base: "60px" }}
  display={"flex"}
  position={"relative"}
  zIndex={10}
  bg={"white"}
>
  {isLarger480 ? <DashHumburgur /> : <DashLeft />}
</Box>
<Spacer />
<Box
  w={{
    base: "100%",
    sm: "80%",
  }}
  position={"fixed"}
  bottom={0}
  top={0}
  right={0}
  overflowY={"scroll"}
  m={"auto"}
>
  <Dashright />

  <Box
    // border={"1px"}
    p={"50px"}
    w={{ base: "100%", sm: "900px" }}
    minH={"1000px"}
    m={"auto"}
  >
    <Dashboard />
  </Box>
</Box>
</Flex> */
}
