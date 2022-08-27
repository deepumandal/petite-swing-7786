import React from 'react'
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
    Box,
    VStack,
    Text,
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import DashLeft from '../DashLeft/DashLeft'
import DashLogo from '../DashLogo/DashLogo'
import DashLists from '../DashLists/DashLists'


const DashHumburgur = () => {
  
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
      
        return (
          <>
            <HamburgerIcon mt={"20px"} 
        ref={btnRef}
        w={6}
        h={6}
        colorscheme="teal"
        onClick={onOpen}
       
      />
            <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>
      
                <DrawerBody>


                <Box w={"100%"} >
        <VStack
      bg={"white"}
      
      w={"100%"}
     
      
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
         
    </Box>









                </DrawerBody>
      
              </DrawerContent>
            </Drawer>
          </>
        )
      
  
}

export default DashHumburgur