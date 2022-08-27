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

const FullScreenReviewNav = () => {
  return (
    <Accordion  allowToggle>
    <AccordionItem border={"0px"}>
      <h2>
        <AccordionButton>
          <Link to='/reviews' >
          <Box flex='1' textAlign='left'>
          Review
          </Box>
          </Link>
        </AccordionButton>
      </h2>
     
    </AccordionItem>
  
  </Accordion>
  )
}

export default FullScreenReviewNav