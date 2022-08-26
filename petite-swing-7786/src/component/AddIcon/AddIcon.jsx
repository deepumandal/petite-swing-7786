import React from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'

const AddIconcomp = () => {
  return (
    <Box border={"2px"} borderRadius={"5px"} display={"flex"} justifyContent={"center"} alignItems={"center"} w={"29px"} h={"29px"} borderColor={"#01b289"}>
      <AddIcon  color={"#01b289"} />
    </Box>
  )
}

export default AddIconcomp