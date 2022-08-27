import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Image,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";
import AddIconcomp from "../AddIcon/AddIcon";
import { Link } from "react-router-dom";

const Addbonsai = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box cursor={"pointer"} ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <AddIconcomp />
      </Box>

      <Drawer w={"50px"}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w={"200px"} maxW={"220px"}>
          <DrawerHeader>
            <Flex align={"center"} mb={"20px"} justifyContent={"space-between"}>
              <Link to="/dash">
                <Image
                  w={"60%"}
                  src={
                    "https://app.hellobonsai.com/packs/static/bonsai-623ed86a47a195e7f9e2.svg"
                  }
                />
              </Link>

              <DrawerCloseButton />
            </Flex>
          </DrawerHeader>

          <DrawerBody  p={2}>
           <Divider />
            <Flex my={"10px"} w={"170px"} justifyContent={"space-between"}>
              <Text fontSize={"px"} color={"#3fc5a6"} fontWeight={700}>
                Add Project
              </Text>
              <AddIconcomp />
            </Flex>
           <Divider />
            <Flex my={"10px"} w={"170px"} justifyContent={"space-between"}>
              <Text fontSize={"19px"} color={"#3fc5a6"} fontWeight={700}>
                Add Proposal
              </Text>
              <AddIconcomp />
            </Flex>
           <Divider />
            <Flex my={"10px"} w={"170px"} justifyContent={"space-between"}>
              <Text fontSize={"19px"} color={"#3fc5a6"} fontWeight={700}>
                Add Contract
              </Text>
              <AddIconcomp />
            </Flex>
           <Divider />
            <Flex my={"10px"} w={"170px"} justifyContent={"space-between"}>
              <Text fontSize={"19px"} color={"#3fc5a6"} fontWeight={700}>
                Add Invoice
              </Text>
              <AddIconcomp />
            </Flex>
           <Divider />
            <Flex my={"10px"} w={"170px"} justifyContent={"space-between"}>
              <Text fontSize={"19px"} color={"#3fc5a6"} fontWeight={700}>
                Add Expense
              </Text>
              <AddIconcomp />
            </Flex>
           <Divider />
            <Flex my={"10px"} w={"170px"} justifyContent={"space-between"}>
              <Text fontSize={"19px"} color={"#3fc5a6"} fontWeight={700}>
                Add Task
              </Text>
              <AddIconcomp />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Addbonsai;
