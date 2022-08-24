import { Box, Heading, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import HomeIntroComp from '../../component/HomeIntroComp/HomeIntroComp'
import Virticleclicktabs from '../../component/Virticleclicktabs/Virticleclicktabs'
import Withorwithout from '../../component/Withorwithout/Withorwithout'

const Home = () => {
  return (
    <Box mt={{
      sm  : "180px",
      base : "60px"
    }} >
<HomeIntroComp />
<Spacer />


<VStack

mt={{
  base :"150px"
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
    sm : "22px",
    base : "16px"
  }}
  lineHeight={{
    sm : "31px",
    base : "22px"
  }}
  fontWeight={{sm :300, base : 300}}
  color={"#4c525a"}
  w={{base : "90%", sm : "56%"}}
  
  
  >
  Bonsai integrates and automates every step of your business so it runs seamlessly - from proposal to tax season.
  </Text>
</VStack>

<Spacer />
<Withorwithout/>

<Spacer />

<Virticleclicktabs />


    </Box>
  )
}

export default Home