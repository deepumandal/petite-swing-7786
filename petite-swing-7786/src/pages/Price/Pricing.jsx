import { Box, Grid, Image, Switch, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Pricing.module.css";
import { pricingDetails } from "./priceConstants";
import { useState } from "react";
import Card from "./Card";
import Cards2 from "./Cards2";
const Pricing = () => {
  const [ym, setym] = useState(false);

  const handleym = (e) => {
    setym(e.target.checked);
  };
  return (
    <div className={styles.bg_shape}>
      {/* plans and pricing top */}
      <Box p="10px 10px" w={{ lg: "60%", sm: "110%" }} margin="auto">
        <Grid
          p="20px 20px"
          templateColumns="repeat(2, 1fr)"
          gap={10}
          color="#4c525a"
        >
          <Box textAlign="center" h="fit-content">
            <Text
              fontWeight="400"
              fontSize={{ sm: "24px", md: "40px" }}
              lineHeight="29px"
            >
              Plans & Pricing
            </Text>
          </Box>
          <Box display="flex" textAlign="center" ml={{ lg: "20%" }}>
            <Box
              display="flex"
              gap="10px"
              mt={{ sm: "20%" }}
              ml={{ sm: "-25%" }}
            >
              <Text fontWeight="600" fontSize="17px" lineHeight="20px">
                MONTHLY
              </Text>
              <Switch color="" onChange={handleym} size="lg"></Switch>
              <Text color={ym ? "grey" : ""}>YEARLY</Text>
            </Box>
            <Box mt={{ lg: "10%", md: "-10%" }} ml={{ lg: "-20%", sm: "-40%" }}>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9d7255d3886a6103fb12a9_FREE-text.svg"></Image>
            </Box>
          </Box>
        </Grid>
      </Box>

      {/* Cards part */}
      <Box
        display="grid"
        gridTemplateColumns={{ lg: "repeat(3, 1fr)", md: "repeat(1, 1fr)" }}
      >
        {pricingDetails.map((e) => (
          <Card
            head={e.header}
            headP={e.headerP}
            rateM={e.rateM}
            rateY={e.rateY}
            ym={ym}
            lists={e.lists}
          />
        ))}
      </Box>
      <br />

      {/* straight cards */}

      <Cards2 />
    </div>
  );
};

export default Pricing;
