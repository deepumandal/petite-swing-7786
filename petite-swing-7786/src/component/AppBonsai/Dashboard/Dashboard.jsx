import { Box, Button, Divider, Flex, Heading, Image, Text, Grid, GridItem, TableContainer, Table, Thead, Tr, Th,Tbody,Td, Select } from '@chakra-ui/react';
import React from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    List,
    ListItem,
    ListIcon
  } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import Chart from 'react-apexcharts';
import { Chrono } from "react-chrono";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCharts, getCharts1, getItems, getProjects } from '../../../Store/dashboard/dashboard.action';
import StartFreeTrial from './StartFreeTrial';

const Dashboard = () => {
    const authfirebase = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const Projects = useSelector((state)=>state.dashboard.projects.data);
    const charts = useSelector((state)=>state.dashboard.charts.data);
    const charts1 = useSelector((state)=>state.dashboard.charts1.data);
    const items = useSelector((state)=>state.dashboard.items.data);
    // console.log(Projects,charts,charts1,items);
    useEffect(()=>{
        dispatch(getProjects());
        dispatch(getCharts());
        dispatch(getCharts1());
        dispatch(getItems());
    },[])
  return (
    <Box margin='10px 32px 16px 32px' display='flex' flexDirection="Column" gap='20px'>
        <StartFreeTrial/>
        <Flex justify='space-between'>
            <Flex gap={4}>
                <Image src={new Date().getHours() >= 15 ?'./good-night.svg':'./good-morning.svg'}/>
                <Box>
                    <Box>{new Date().toDateString()}</Box>
                    <Heading as='h4'>{new Date().getHours() >= 15 ? "Good Evening":"Good Morning"}, {authfirebase.profileInfo.displayName}</Heading>
                </Box>
            </Flex>
            <Flex>
                <Text>Let's get you setup with Bonsai.</Text>
                <Button variant='outline' colorScheme='teal'>Get started <ChevronRightIcon/></Button>
            </Flex>
        </Flex>
        <Divider />
        <Grid templateColumns='repeat(2, 1fr)' gap={6} gridAutoRows='auto'>

            <GridItem w='100%' borderWidth={"1px"} borderRadius='5px'  >

                <TableContainer>
                    <Text>Project Timeline</Text>
                        <Table variant='simple'>
                            <Thead>
                            <Tr>
                                <Th></Th>
                                <Th>Aug 11</Th>
                                <Th>Today</Th>
                                <Th>Sep 8</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                {Projects && Projects.map((p)=><Tr>
                                    <Td>{p.name}</Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>)}
                            </Tbody>
                        </Table>
                </TableContainer>
            </GridItem>
            <GridItem w='100%' h='10'  >
                <List spacing={3}>
                    <ListItem>
                        <Button variant='outline'>
                            <ListIcon as={CalendarIcon} color='green.500' />
                            Draft a proposal
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button variant='outline'>
                            <ListIcon as={CalendarIcon} color='green.500' />
                            Create a contract
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button variant='outline'>
                            <ListIcon as={CalendarIcon} color='green.500' />
                            Send an Invoice
                        </Button>
                    </ListItem>
                </List>
            </GridItem>

            <GridItem    >
                <Box w='100%' borderWidth={"1px"} borderRadius='5px'>
                    <Flex justify='space-between'>
                        <Text>Income & Expenses</Text>
                        <Flex>
                            <Select placeholder='INR'/>
                            <Select placeholder='Last 6 months'>
                                <option value='Last 30 days'>Last 30 days</option>
                                <option value='This month'>This month</option>
                            </Select>
                        </Flex>
                    </Flex>
                    {charts && <Chart
                        options={charts.options}
                        series={charts.series}
                        type="line"
                    />}
                </Box>
                <br/>
                <br/>
                <Box>
                    
                </Box>
                <br/>
                <br/>
                <Box w='100%'borderWidth={"1px"} borderRadius='5px'>
                    <Flex justify='space-between'>
                        <Text>Time Tracked</Text>
                        <Flex>
                            <Select placeholder='INR'/>
                            <Select placeholder='Last 6 months'>
                                <option value='Last 30 days'>Last 30 days</option>
                                <option value='This month'>This month</option>
                            </Select>
                        </Flex>
                    </Flex>
                    {charts1 && <Chart
                        options={charts1.options}
                        series={charts1.series}
                        type='bar'
                    />}
                </Box>
            </GridItem>

            <GridItem w='100%'borderWidth={"1px"} borderRadius='5px' >

                {items && <Chrono items={items} 
                    mode="VERTICAL" 
                    borderLessCards='true' 
                    cardHeight='80' 
                    disableClickOnCircle='true'
                    theme={{
                        primary: '#00b289',
                        secondary: 'white',
                        cardBgColor: 'white',
                        cardForeColor: 'black',
                        titleColor: 'black',
                        titleColorActive: 'grey',
                      }}
                 />}
            </GridItem>
            <GridItem  w='100%'borderWidth={"1px"} borderRadius='5px' >

            </GridItem>
            
        </Grid>

    </Box>
  )
}

export default Dashboard;