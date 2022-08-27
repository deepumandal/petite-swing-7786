import { Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FullScreenPricingNav from '../FullScreenPricingNav/FullScreenPricingNav'
import FullscreenProductnav from '../FullscreenProductnav/FullscreenProductnav'
import FullScreenReviewNav from '../FullScreenReviewNav/FullScreenReviewNav'
import FullScreenTemplateNav from '../FullScreenTemplateNav/FullScreenTemplateNav'

const FullScreenNav = () => {

  const {data} =  useSelector(state=>state.auth)

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
        <Flex alignItems={"center"} gap={"20px"}>

{
data.isAuthenticated ? 

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
</Link> :  <>
<Link to='/login' >





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
          </Link>

          <Button color={"white"} size={"sm"} bg={"#00b289"}>
            START FREE
          </Button>

</>

}



          
        </Flex>
  
  </>
  )
}

export default FullScreenNav