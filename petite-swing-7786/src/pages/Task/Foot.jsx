import { Box, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMonitor } from "react-icons/md";
import { AiOutlineChrome } from "react-icons/ai";

export const Foot = () => {
  return (
    <Box w="70%" m="100px auto">
      <ul
        style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          fontSize: "14px",
          color: "#999999",
          fontWeight:"500"
        }}
      >
        Feature Request
        <li>Help Center</li>
        <li>BLog & Resource</li>
        <li> Pricing</li>
        <li> Privacy policy</li>
      </ul>
      <ul
        style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          fontSize: "14px",
          color: "#999999",
          margin:"30px ",
          fontWeight:"500"
        }}
      >
        Bonsai Apps
        <li>
          <HStack >
            <BsPhone />
            <Text>Iphone</Text>
          </HStack>
        </li>
        <li>
          <HStack>
            <MdOutlineMonitor />
            <Text>MacOS</Text>
          </HStack>
        </li>
        <li>
          {" "}
          <HStack>
            <BsPhone />
            <Text>Android</Text>
          </HStack>
        </li>
        <li>
          {" "}
          <HStack>
            <AiOutlineChrome />
            <Text>Chrome</Text>
          </HStack>
        </li>
      </ul>
      <Text fontSize="12px" color="#ccd0d2">
        ©2022 Bonsai Technologies Inc — Payments, banking, and issuing services
        are provided by Stripe Payments Company, Evolve Bank & Trust (Member
        FDIC), and Celtic Bank (Member FDIC), respectively. Bonsai is not a law
        firm, and does not provide legal services, advice, or representation.
        Terms Credits
      </Text>
    </Box>
  );
};
