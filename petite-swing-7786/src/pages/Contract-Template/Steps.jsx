import React from "react";
import {
  Box,
  Image,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

const Steps = ({ id, image, head }) => {
  return (
    <Box key={id}>
      <Accordion allowToggle>
        <AccordionItem borderBottom="5px solid #00b289">
          <AccordionButton>
            <Box
              flex="1"
              textAlign="left"
              fontSize="22px"
              lineHeight="31px"
              fontWeight="600"
            >
              {head}
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Image src={image}></Image>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Steps;
