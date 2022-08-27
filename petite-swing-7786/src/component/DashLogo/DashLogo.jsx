import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Addbonsai from '../Addbonsai/Addbonsai'
import AddIconcomp from '../AddIcon/AddIcon'

const DashLogo = () => {
  return (
    <Flex align={"center"} mb={"20px"} justifyContent={"space-between"}>
      <Link to="/dash" >
        <Image 
        w={"60%"}
        src={"https://app.hellobonsai.com/packs/static/bonsai-623ed86a47a195e7f9e2.svg"}  />
        </Link>

        <Addbonsai />

        
    </Flex>
  )
}

export default DashLogo