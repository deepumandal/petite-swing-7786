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
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


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

245
                </DrawerBody>
      
              </DrawerContent>
            </Drawer>
          </>
        )
      
  
}

export default DashHumburgur