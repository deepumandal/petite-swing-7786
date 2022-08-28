import React, { useState } from "react";
import { Box, Image, Text, Select, Grid, Button } from "@chakra-ui/react";
import axios from "axios";
import { stepa } from "./conTempConstatnts";
import FilterBox from "./FilterBox";
import Card from "./Card";
import Process1 from "./Process1";
import Process345 from "./Process345";
import Process2 from "./Process2";
import Steps from "./Steps";
import { useEffect } from "react";
const ContractTemp = () => {
  const [page, setPage] = useState(0);
  const [conData, setConData] = useState([]);
  const handlePrev = () => {
    setPage(page - 15);
  };

  const handleNext = () => {
    setPage(page + 15);
  };

  const getData = () => {
    axios
      .get("https://bonsai-backend-1782.herokuapp.com/contract")
      .then((r) => {
        // console.log(r.data);
        setConData(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const paginatedData = (page) => {
    axios
      .get(`https://bonsai-backend-1782.herokuapp.com/contract?skip=${page}`)
      .then((r) => {
        // console.log(r.data);
        setConData(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getData();
    paginatedData(page);
  }, [page]);
  return (
    <Box textAlign="left" mt="10%">
      {/* Top */}
      <Box
        p="20px 20px"
        w="95%"
        m="auto"
        display="flex"
        justifyContent="space-between"
      >
        <Box mt="5%" w="30%" position={{ lg: "relative" }}>
          <Image
            display={{ lg: "initial", sm: "none" }}
            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60af77ee803b9202a69d1cc9_hero_left-p-800.png"
          />
        </Box>
        <Box
          ml={{ lg: "25%", sm: "none" }}
          position={{ lg: "absolute" }}
          w={{ lg: "40%" }}
          textAlign="center"
        >
          <Text
            fontFamily="serif"
            fontSize={{ lg: "44px", sm: "35px" }}
            fontWeight="400"
            lineHeight="57px"
          >
            Free Contract Templates
          </Text>
          <br />
          <Text
            fontSize={{ lg: "20px", sm: "16px" }}
            fontWeight="400"
            lineHeight={{ lg: "28px", sm: "22px" }}
          >
            Welcome to our gallery of editable contract templates. You can
            search by industry to find a contract template specifically for your
            freelance profession. All of our contract templates have been
            legally vetted by top lawyers.
          </Text>
        </Box>
        <Box mt="5%" w="30%" position={{ lg: "relative" }}>
          <Image
            display={{ lg: "initial", sm: "none" }}
            e
            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60af77ee7f2fd7129bcd2f47_hero_left_two-p-800.png"
          />
        </Box>
      </Box>

      {/* top end */}

      {/* filter  */}

      <Box
        display={{ sm: "flex", base: "initial", lg: "none" }}
        justifyContent="space-between"
        p="5% 5%"
      >
        <Box w="48%">
          <Select placeholder="Contracts by Industry">
            <option type="checkbox"></option>
          </Select>
        </Box>
        <Box w="48%">
          <Select placeholder="Document Type"></Select>
        </Box>
      </Box>

      {/* filter end */}

      <Box display="flex" p="5% 5%" gap="5%">
        <Box
          h="fit-content"
          p="2% 2%"
          borderRadius="5px"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        >
          <FilterBox />
        </Box>
        <Box>
          <Text fontSize="22px" fontWeight="600" lineHeight="31px">
            All Contracts
          </Text>
          <br />
          <Grid
            templateColumns={{
              lg: "repeat(3, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={5}
          >
            {conData.map((e) => (
              <Card type={e.type} name={e.name} image={e.img} id={e.id} />
            ))}
          </Grid>
          {/* pagination  */}
          <Box w="100%" textAlign="center">
            <Button
              display={page > 1 ? "initial" : "none"}
              onClick={handlePrev}
              mt="10%"
              mr="10%"
              border="1px solid"
              bgColor="white"
              _hover={{ bgColor: "white" }}
            >
              Previous
            </Button>

            <Button
              disabled={conData.length < 15}
              onClick={handleNext}
              mt="10%"
              border="1px solid"
              bgColor="white"
              _hover={{ bgColor: "white" }}
            >
              Next
            </Button>
          </Box>
          <br />
          <br />
          {/* q n q */}
          <Box>
            <Process1 />
            <br />
            <Process2 />
            <br />
            <Process345 />
          </Box>

          {/* qna end */}
        </Box>
        <br />
      </Box>
      {/* steppa */}
      <Box w="80%" m="auto">
        {stepa.map((e) => (
          <Steps id={e.id} image={e.img} head={e.head} />
        ))}
      </Box>
    </Box>
  );
};

export default ContractTemp;
