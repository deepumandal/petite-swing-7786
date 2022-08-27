import React from "react";
import { Box, Text, Checkbox } from "@chakra-ui/react";
import { filters1, filters2, filters3, filters4 } from "./conTempConstatnts";

const FilterBox = () => {
  return (
    <Box display={{ md: "none", sm: "none", lg: "initial" }}>
      <Text fontSize="22px" fontWeight="600" lineHeight="31px">
        Filter by Industry
      </Text>
      <br />
      <Box display="flex" justifyContent="space-between" gap="2%">
        <Box>
          {filters1.map((e, i) => (
            <Text
              fontSize="16px"
              fontWeight="400"
              lineHeight="20px"
              color="#00b289"
              key={i}
              mb="10%"
            >
              <Checkbox>{e}</Checkbox>
            </Text>
          ))}
        </Box>
        <Box>
          {filters2.map((e, i) => (
            <Text
              fontSize="16px"
              fontWeight="400"
              lineHeight="20px"
              color="#00b289"
              key={i}
              mb="10%"
            >
              <Checkbox>{e}</Checkbox>
            </Text>
          ))}
        </Box>
      </Box>

      <Text fontSize="22px" fontWeight="600" lineHeight="31px">
        Document
      </Text>
      <br />
      <Box>
        {filters3.map((e, i) => (
          <Text
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            color="#00b289"
            key={i}
            mb="10%"
          >
            {e}
          </Text>
        ))}
      </Box>

      <Box borderRadius="5px" position="sticky">
        <Text fontSize="22px" fontWeight="600" lineHeight="31px">
          Table of Contents
        </Text>
        <br />
        <Box>
          {filters4.map((e, i) => (
            <Text
              fontSize="16px"
              fontWeight="600"
              lineHeight="20px"
              color="#00b289"
              key={i}
              mb="5%"
            >
              {e}
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FilterBox;
