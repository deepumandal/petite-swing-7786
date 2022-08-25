import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Spacer,
  Text,
} from "@chakra-ui/react";

const FullscreenProductnav = () => {
  return (
    <Accordion  allowToggle>
      <AccordionItem border={"0px"}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Product
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          mt={4}
          w={"350px"}
          bg={"white"}
      gap={"10px"}
          position={"fixed"}
     
          p={"20px"}
          display={"flex"}
          flexDir={"column"}
        >
          <Box p={5} borderBottom={"1px"}>
            <Text mb={3}
             fontSize={"22px"}
             lineHeight={"22px"}
             color={"#4c4d5f"}
             fontWeight={400}
             textAlign={"left"}
            >Bonsai Workflow</Text>
            <Text
              fontSize={"17px"}
              lineHeight={"22px"}
              color={"#4c4d5f"}
              fontWeight={400}
              textAlign={"left"}
            >Look professional, win more clients and manage your business from one place</Text>
            
            </Box> <Spacer />
          <Box p={5} borderBottom={"1px"}>
            <Text 
            fontSize={"22px"}
            lineHeight={"22px"}
            color={"#4c4d5f"}
            fontWeight={400}
            textAlign={"left"}
            mb={3}
            >
              Bonsai Tax
            </Text>
            <Text 
             fontSize={"17px"}
             lineHeight={"22px"}
             color={"#4c4d5f"}
             fontWeight={400}
             textAlign={"left"}>
              track expenses, maximize tax write-offs, and estimate taxes without the headache
            </Text>
            </Box> <Spacer />
          <Box p={5} borderBottom={"1px"}>
            <Text mb={3}
             fontSize={"22px"}
             lineHeight={"22px"}
             color={"#4c4d5f"}
             fontWeight={400}
             textAlign={"left"}
            >
              Bonsai Cash 
            </Text>
            <Text  fontSize={"17px"}
              lineHeight={"22px"}
              color={"#4c4d5f"}
              fontWeight={400}
              textAlign={"left"}>
              Bonsai's all-in-one financial hub: No fees and lighting fase payouts
            </Text>
            
            </Box> 
         
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FullscreenProductnav;
