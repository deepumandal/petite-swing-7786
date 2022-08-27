import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const FullScreenPricingNav = () => {
  return (
    <Accordion   allowToggle>
  <AccordionItem border={"0px"}>
    <h2>
      <AccordionButton>
        <Link to={'/pricing'} >
        <Box flex='1' textAlign='left'>
        Pricing
        </Box>
        </Link>
        
      </AccordionButton>
    </h2>
   
  </AccordionItem>

</Accordion>
  )
}

export default FullScreenPricingNav