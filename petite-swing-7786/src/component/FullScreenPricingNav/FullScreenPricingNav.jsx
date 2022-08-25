import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

const FullScreenPricingNav = () => {
  return (
    <Accordion   allowToggle>
  <AccordionItem border={"0px"}>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Pricing
        </Box>
        
      </AccordionButton>
    </h2>
   
  </AccordionItem>

</Accordion>
  )
}

export default FullScreenPricingNav