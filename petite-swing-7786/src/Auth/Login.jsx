import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./Auth.module.css";
import { Foot } from "./Foot";
import { Navabr } from "./Navabr";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAPI } from "../Store/auth/auth.actions";

export const Login = () => {
  const onLoginSuccess = (res) => {
    // console.log(res);
    navigate("/");
  };

  const onLoginError = (err) => {
    // console.log(err);
  };

const location = useLocation()


  const clientId =
    "175168483203-8td0h9fbnrfjfpj4uf1rpc5j79kukgfm.apps.googleusercontent.com";

  const dispatch = useDispatch();
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    location.state = location.pathname
    dispatch(
      loginAPI({
        email,
        password,
      })
    ).then(() => {
      // navigate(location.state);
    });
  };

useEffect(() => {
  navigate(location.pathname);
}, [handlesubmit])


  return (
    <>
      <Navabr />
      <Box w={["100%", "100%", "100%", "65%"]} m="50px auto" p="0px 40px">
        <SimpleGrid columns={[1, null, 2]} spacing="90px">
          <Box
            h={["auto", "auto", "auto", 400]}
            textAlign={"center"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            <HStack
              p="0px 20px"
              borderLeft={"3px solid #00B289"}
              alignItems={"flex-start"}
              my="10px"
            >
              <Text textAlign={"left"} fontSize="13px">
                <Button
                  bg="#00B289"
                  color={"#fff"}
                  _hover={{ bg: "#00B289" }}
                  size="12px"
                  p="2px 5px"
                  m="0px 5px"
                >
                  New
                </Button>
                <b className={styles.boldte}>
                  Automatically send your Bonsai invoices to QuickBooks Online
                  (US only){" "}
                </b>
                Keep your accounting synced between Bonsai and QuickBooks with
                the new QuickBooks Online...
              </Text>
            </HStack>
            <HStack p="0px 20px" alignItems={"flex-start"} my="10px">
              <Text textAlign={"left"} fontSize="13px">
                <Button
                  bg="#00B289"
                  color={"#fff"}
                  _hover={{ bg: "#00B289" }}
                  size="12px"
                  p="2px 5px"
                  m="0px 5px"
                >
                  New
                </Button>
                <b className={styles.boldte}>A new Client Forms experience.</b>
                You can now create client forms and surveys, no matter which
                plan you are on. The forms also...
              </Text>
            </HStack>
            <HStack p="0px 20px" alignItems={"flex-start"} my="10px">
              <Text textAlign={"left"} fontSize="13px">
                <Button
                  bg="#00B289"
                  color={"#fff"}
                  _hover={{ bg: "#00B289" }}
                  size="12px"
                  p="2px 5px"
                  m="0px 5px"
                >
                  New
                </Button>
                <b className={styles.boldte}>
                  A new client payment experience. only){" "}
                </b>
                In your invoice settings, you can now pick “Simplified payment
                page”. Instead of seeing the...
              </Text>
            </HStack>
            <HStack p="0px 20px" alignItems={"flex-start"} my="10px">
              <Text textAlign={"left"} fontSize="13px">
                <Button
                  bg="#EEF9F5"
                  border={"none"}
                  size="12px"
                  p="2px 5px"
                  m="0px 5px"
                >
                  Improvment
                </Button>
                <b className={styles.boldte}>
                  Drag and Drops items on your invoices.
                </b>
              </Text>
            </HStack>
            <HStack
              borderLeft={"3px solid #00B289"}
              p="0px 20px"
              alignItems={"flex-start"}
              my="10px"
            >
              <Text textAlign={"left"} fontSize="13px">
                <Button
                  bg="#EEF9F5"
                  border={"none"}
                  size="12px"
                  p="2px 5px"
                  m="0px 5px"
                >
                  Improvment
                </Button>
                <b className={styles.boldte}>Update Intgration page.</b>
                <br />
                Discover all the ways you can connect Bonsai to your workflow on
                the new integrations page....
              </Text>
            </HStack>
            <VStack>
              <Box borderTop={"0.2px solid #000"} bg="#FCFCFC" w="100%">
                Bonsai updates powered by Headway
              </Box>
            </VStack>
          </Box>

          <Box
            textAlign={"center"}
            p="30px 0px"
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            <Heading as="h3" size="lg" fontWeight={"normal"}>
              Sign In
            </Heading>
            <br />
            <br />
            <Box w="100%">
              <GoogleLogin
                className={styles.google}
                clientId={clientId}
                buttonText="Sign up with Google"
                // onSuccess={navigate("/")}
                onSuccess={onLoginSuccess}
                onFailure={onLoginError}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            </Box>
            <br />
            <br />
            <Text fontSize={"12px"} textAlign={"center"}>
              OR
            </Text>
            <br />
            <form onSubmit={handlesubmit}>
              <Input
                required
                w="80%"
                placeholder="Email"
                borderRadius={0}
                type="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <br />
              <br />
              <Input
                required
                w="80%"
                placeholder="Password"
                borderRadius={0}
                type="password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <br />
              <HStack justifyContent={"center"} m="20px">
                <Checkbox />
                <Text> Remember me</Text>
              </HStack>
              <Button
                colorScheme="green"
                w="80%"
                borderRadius={0}
                type="submit"
              >
                Log in
              </Button>
            </form>
            <br />
            <br />
            <Text color="#00AC85">Reset Password</Text>
            <br />
            <Text color="#00AC85">Resend Verification Email</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Foot />
    </>
  );
};
