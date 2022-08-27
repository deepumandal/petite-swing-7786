import React from 'react';
import { Box, Button, Flex, Heading, Select, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import StartFreeTrial from '../Dashboard/StartFreeTrial';
import { Search2Icon, ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Layout = ({type,tableHeadings})=>{
    const [loadFilter,setLoadFilter] = useState(false);
    const handleFilter = ()=>{
        setLoadFilter(!loadFilter);
    }
    return (
        <Box margin='10px 32px 16px 32px' display='flex' flexDirection="Column" gap='20px'>
            <StartFreeTrial/>
            <Flex justify='space-between'>
                <Box>
                    <Flex>
                        <Search2Icon m='0.7rem 0.8rem' fontSize={20}/>
                        <Select icon={<ChevronDownIcon/>} onClick={handleFilter} placeholder='Filter'>
                        </Select>
                    </Flex>
                    
                </Box>
                
                <Box>
                    <Button color='white' backgroundColor='#00b289'>New {" "}{type}</Button>
                </Box>
            </Flex>
            <Box>{loadFilter && <Flex justify='space-around' bgColor='#f6f7f7' color='#a4a4a4'>
                            <Box>
                                <Box>STATUS</Box>
                                <Select disabled placeholder='Select...'>

                                </Select>
                            </Box>
                            <Box>
                                <Box>CLIENT</Box>
                                <Select disabled placeholder='Select...'>
                                    
                                </Select>
                            </Box>
                            <Box>
                                <Box>PROJECT</Box>
                                <Select disabled placeholder='Select...'>
                                    
                                </Select>
                            </Box>
                        </Flex>}</Box>
            <Box>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                        <Tr>
                            {tableHeadings && tableHeadings.map((h)=><Th>{h}</Th>)}
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>Fiscal Deficit Raise</Td>
                            <Td>Sample Client </Td>
                            <Td></Td>
                            <Td>1</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default Layout;