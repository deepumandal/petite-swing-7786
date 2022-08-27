import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
  Flex,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux';

const ProfileBoard = () => {
  const authfirebase = useSelector((state) => state.auth);
  return (
   <>
   <Menu>
  <MenuButton
    
    transition='all 0.2s'
    borderRadius='md'
    
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
    _focus={{ boxShadow: 'outline' }}
    display={"flex"}
    w={"70px"} alignItems={"center"}
  >
    <Flex alignItems={"center"}>

    <Image w={"50px"}  src={authfirebase.profileInfo.photoURL} />
    <ChevronDownIcon />
    </Flex>
     
  </MenuButton>
  <MenuList>
    <MenuItem>New File</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuDivider />
    <MenuItem>Open...</MenuItem>
    <MenuItem>Save File</MenuItem>
  </MenuList>
</Menu>
   </>
  )
}

export default ProfileBoard