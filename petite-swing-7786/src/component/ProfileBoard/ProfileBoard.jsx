import React from "react";
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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Store/auth/auth.actions";

const ProfileBoard = () => {
  const authfirebase = useSelector((state) => state.auth);
  const { loading, data, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handlelogout = () => {
    dispatch(logout());
    console.log(data);
    nav("/");
  };

  return (
    <>
      <Menu>
        <MenuButton
          transition="all 0.2s"
          borderRadius="md"
          _hover={{ bg: "gray.400" }}
          _expanded={{ bg: "blue.400" }}
          _focus={{ boxShadow: "outline" }}
          display={"flex"}
          w={"70px"}
          alignItems={"center"}
        >
          <Flex alignItems={"center"}>
            <Image w={"50px"} src={authfirebase.profileInfo.photoURL} />
            <ChevronDownIcon />
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem>Get Bonsai Free</MenuItem>
          <MenuDivider />
          <MenuItem>Help Center</MenuItem>
          <MenuItem>What's New </MenuItem>
          <MenuDivider />
          <MenuItem>My Subscription </MenuItem>
          <MenuItem>Apps & Integrations </MenuItem>
          <MenuItem> Payments </MenuItem>
          <MenuItem> Settings</MenuItem>
          <MenuItem onClick={() => handlelogout()}> Logout </MenuItem>
          {/* <MenuItem> </MenuItem> */}
        </MenuList>
      </Menu>
    </>
  );
};

export default ProfileBoard;
