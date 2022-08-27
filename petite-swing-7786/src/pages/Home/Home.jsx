import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import HomeIntroComp from "../../component/HomeIntroComp/HomeIntroComp";
import Hometrust from "../../component/Hometrust/Hometrust";
import Owlcarousal from "../../component/owlcarousal/Owlcarousal";
import Virticleclicktabs from "../../component/Virticleclicktabs/Virticleclicktabs";
import Withorwithout from "../../component/Withorwithout/Withorwithout";
import { Link, useLocation } from "react-router-dom";

const Home = () => {

  const loc = useLocation()
 

  return (
    <Box
      mt={{
        sm: "180px",
        base: "60px",
      }}
    >
      <HomeIntroComp />
      <Spacer />

      <VStack
        mt={{
          base: "150px",
        }}
      >
        <Heading
          letterSpacing={"1.16px"}
          fontSize={{
            sm: "32px",
            base: "24px",
          }}
          lineHeight={{
            sm: "45px",
            base: "34px",
          }}
          sx={{
            fontFamily: "'amerigo-bt-roman', sans-serif",
            fontWeight: 400,
            color: "#4c525a",
          }}
          m={"auto"}
        >
          Make more,manage less
        </Heading>
        <Text
          fontSize={{
            sm: "22px",
            base: "16px",
          }}
          lineHeight={{
            sm: "31px",
            base: "22px",
          }}
          fontWeight={{ sm: 300, base: 300 }}
          color={"#4c525a"}
          w={{ base: "90%", sm: "56%" }}
        >
          Bonsai integrates and automates every step of your business so it runs
          seamlessly - from proposal to tax season.
        </Text>
      </VStack>

      <Spacer />
      <Withorwithout />

      <Spacer />

      <Virticleclicktabs />

      <Spacer />
      <VStack
        mt={{
          sm: "90px",
          base: "60px",
        }}
      >
        <Heading
          fontSize={{
            sm: "32px",
            base: "24px",
          }}
          lineHeight={{
            sm: "45px",
            base: "34px",
          }}
          color={"#4c525a"}
          fontWeight={400}
          w={{
            sm: "60%",
            base: "80%",
          }}
          m={"auto"}
        >
          Trusted by 500K+ self-employed workers and small businesses
        </Heading>
        <Heading
          fontSize={{
            sm: "24px",
            base: "20px",
          }}
          lineHeight={{
            sm: "29px",
            base: "24px",
          }}
          color={"#4c525a"}
          fontWeight={300}
          w={{
            sm: "50%",
            base: "80%",
          }}
          m={"auto"}
        >
          Whether you’re just getting started or your business is booming,
          Bonsai has you covered.
        </Heading>
      </VStack>
      <Hometrust />
      <Spacer />
      <Owlcarousal />

      <Flex
        flexWrap={"wrap"}
        w={{
          base: "100%",
          sm: "80%",
        }}
        bg={"#f2faff"}
        m={"auto"}
        mt={{
          base: "60px",
          sm: "90px",
        }}
        p={"40px"}
        alignItems={"center"}
        justifyContent={{
          base: "center",
        }}
      >
        <Box
          w={{
            sm: "70%",
            base: "90%",
          }}
        >
          <Heading
            textAlign={"left"}
            fontSize={{
              base: "40px",
              sm: "44px",
            }}
            lineHeight={{
              sm: "57px",
              sm: "52px",
            }}
            color={"#4c525a"}
            fontWeight={400}
          >
            It’s{" "}
            <span
              style={{
                color: "#01b289",
              }}
            >
              your{" "}
            </span>{" "}
            business.
          </Heading>
          <Heading
            textAlign={"left"}
            fontSize={{
              base: "40px",
              sm: "44px",
            }}
            lineHeight={{
              sm: "57px",
              sm: "52px",
            }}
            color={"#4c525a"}
            fontWeight={400}
          >
            We’re here to help it grow.
          </Heading>
        </Box>
        <Spacer />
        <Link to="/dash">
          <Button
            bg={"#00b289"}
            p={4}
            m={"auto"}
            color={"white"}
            mt={{ base: "20px" }}
            mr={{ sm: "20px" }}
          >
            GO TO DASHBOARD
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Home;
