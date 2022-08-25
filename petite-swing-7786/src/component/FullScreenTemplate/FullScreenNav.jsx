import { Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import FullScreenPricingNav from '../FullScreenPricingNav/FullScreenPricingNav'
import FullscreenProductnav from '../FullscreenProductnav/FullscreenProductnav'
import FullScreenReviewNav from '../FullScreenReviewNav/FullScreenReviewNav'
import FullScreenTemplateNav from '../FullScreenTemplateNav/FullScreenTemplateNav'

const FullScreenNav = () => {
  return (
  <>
   <Flex
          // border={"1px"} borderColor={"red"}
          w={{
            sm: "350px",
            md: "500px",
          }}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
<FullscreenProductnav />
<FullScreenTemplateNav />
<FullScreenPricingNav />
<FullScreenReviewNav />







        </Flex>






        <Spacer />
        <Flex gap={"20px"}>
          <Button
            size={"sm"}
            colorScheme="teal"
            _hover={{
              backgroundColor: "teal",
              color: "white",
            }}
            variant="outline"
          >
            LOG IN
          </Button>

          <Button color={"white"} size={"sm"} bg={"#00b289"}>
            START FREE
          </Button>
        </Flex>
  
  </>
  )
}

export default FullScreenNav