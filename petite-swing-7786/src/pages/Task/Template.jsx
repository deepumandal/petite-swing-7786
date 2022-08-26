import React from "react";
import {
  Box,
  Alert,
  Flex,
  Link,
  Image,
  Button,
  HStack,
  Heading,
  Text, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,useDisclosure,FormControl,FormLabel,Input
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Foot } from "./Foot";

export const Templates = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
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
          <Image
            height="65vh"
            width="70%"
            src="https://app.hellobonsai.com/assets/welcome_states/task-templates-illustration-a949da30513b4138707b78cf13ff6cce670f1a8ba2458c7d1d73f04e4b1c728d.png"
          />
          <Box textAlign="left">
            <Heading as="h4" size="md">
              Prefill Tasks With Templates
            </Heading>
            <Text mt="25px">
              Make the process of managing a new project easier by adding preset
              task lists. You can add or edit the tasks anytime as your process
              evolves.{" "}
            </Text>
            <Button colorScheme="green" mt="25px"  onClick={onOpen}>
              New Template
            </Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent textAlign="center">
                <ModalHeader m="5">New Task Template</ModalHeader>
                <hr />
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl mt="5">
                    <FormLabel fontWeight="normal">TEMPLATE NAME</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="Default Project Task"
                    />
                  </FormControl>
                  <FormControl>
                  
                    <Button w="100%" my="5" colorScheme="green" mr={3}>
                      Create Template
                    </Button>
                  </FormControl>

                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </HStack>
      </Box>
      <Foot />
    </Box>
  );
};
