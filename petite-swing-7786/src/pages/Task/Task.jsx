import React from "react";
import { Box, Alert, Flex, Link, Image , Button,HStack, Heading,Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Foot } from "./Foot";

export const Task = () => {
  return (
    <Box w="90%" m="auto">
      <Box>
        <Alert bg="#F2FAFF">
          <Flex gap={4}>
            <Box>
              <InfoOutlineIcon fontSize={22} color="#5D9FD8" />
            </Box>
            <Box textAlign={"left"}>
              <Box fontSize={20} color="#5D9FD8">
                Start 7 days free trial
              </Box>
              <Box>
                You currently don't have an active subscription.{" "}
                <Link textDecoration="underline" color="#5D9FD8">
                  Start your free trial now
                </Link>
              </Box>
            </Box>
          </Flex>
        </Alert>
      </Box>

      <Box
      borderRadius="20px"
        mt="50px"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      >
        <HStack textAlign="center" w="85%" m="auto" p="50px" gap="50px">
          <Image height= "65vh" width="70%" src="https://app.hellobonsai.com/assets/welcome_states/tasks-illustration-6c57aa89574a6b2ca8c0cf70b7c8c4817125848e74a875b403195c16cf8ca72d.png" />
          <Box textAlign="left">
            <Heading as='h4' size='md'>
            Task Management For Projects
            </Heading>
            <Text mt="25px">
            Create tasks for your projects with details and due dates. Reorder them as needed and manage the upcoming todos you have planned.
            </Text>
            <Button colorScheme='green' mt="25px">Add A Task</Button>

          </Box>
        </HStack>
      </Box>
      <Foot />
    </Box>
  );
};
