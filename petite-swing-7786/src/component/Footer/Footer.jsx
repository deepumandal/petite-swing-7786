import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  footProduct,
  footFreeResources1,
  footFreeResources2,
  footTemplates,
  footBonsai,
} from "./footerConstants";

const Footer = () => {
  return (
    <Box
      color="#595568"
      p="20px 20px"
      cursor="pointer"
      display={{ md: "flex" }}
      justifyContent={{ md: "space-evenly" }}
    >
      {/* Product Box */}
      <Box>
        <Text fontSize="20px" fontWeight="500">
          PRODUCT
        </Text>
        <br />
        {footProduct.map((e) => (
          <Text
            _hover={{ color: "black.500", textDecoration: "underline" }}
            fontWeight="300"
          >
            {e}
          </Text>
        ))}
      </Box>
      <br />
      <Box>
        {/* Free Resources Box */}

        <Box>
          <Text fontSize="20px" fontWeight="500">
            FREE RESOURCES
          </Text>
          <br />
          {footFreeResources1.map((e) => (
            <Text
              _hover={{ color: "black.500", textDecoration: "underline" }}
              fontWeight="300"
            >
              {e}
            </Text>
          ))}
          <br />
          {footFreeResources2.map((e) => (
            <Text
              _hover={{ color: "black.500", textDecoration: "underline" }}
              fontWeight="300"
            >
              {e}
            </Text>
          ))}
        </Box>
        <br />
        {/* Templates box */}

        <Box w={{ sm: "50%", lg: "100%", base: "100%" }}>
          <Text fontSize="20px" fontWeight="500">
            Templates
          </Text>
          <br />
          <Accordion allowMultiple>
            {footTemplates.map((e) => (
              <AccordionItem>
                <h2>
                  <AccordionButton _hover={{ background: "white" }}>
                    <Box textAlign="left">{e.head}</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  {e.someElse.map((k) => (
                    <Text
                      _hover={{
                        color: "black.500",
                        textDecoration: "underline",
                      }}
                      fontWeight="300"
                    >
                      {k}
                    </Text>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <br />
        </Box>
      </Box>
      {/* BONSAI Box */}

      <Box>
        <Text fontSize="20px" fontWeight="500">
          BONSAI
        </Text>
        <br />

        {footBonsai.map((e) => (
          <Text
            _hover={{ color: "black.500", textDecoration: "underline" }}
            fontWeight="300"
          >
            {e}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
