import { Alert, Box, Button, Divider, Flex, Heading, Image, Text, Grid, GridItem, TableContainer, Table, Thead, Tr, Th,Tbody,Td, Select, Link } from '@chakra-ui/react';
import React from 'react';
import { InfoOutlineIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
    List,
    ListItem,
    ListIcon
  } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import Chart from 'react-apexcharts';
import { Chrono } from "react-chrono";

const Projects = [
    {
        name:"My Awesome Project 1",
        client:"Sample Client",
        start_date:"Aug 24, 2022",
        documents:{
            proposals:[],
            contract:[]
        },
        invoices:{
            outstanding:'',
            overdue:'',
            paid:''
        },
        notes:[],
        status:'active'
    },
    {
        name:"My Awesome Project 2",
        client:"Sample Client",
        start_date:"Aug 24, 2022",
        documents:{
            proposals:[{
                name:'Extra animation effects'
            }],
            contract:[{

            }]
        },
        invoices:{
            outstanding:'',
            overdue:'',
            paid:''
        },
        notes:[],
        status:'active'
    }
]

const charts = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Feb','Mar','Apr','May','Jun','Jul','Aug']
      },
      stroke: {
        curve: 'smooth',
      }
    },
    series: [
      {
        type:'area',
        name: "Paid",
        data: [0,0,0,0,0,0,5]
      },
      {
        name: "Expenses",
        data: [0,0,0,0,0,0,0]
      },
      {
        name: "Profit",
        data: [0,0,0,0,0,0,5]
      }
    ]
  }

  const charts1 = {
    options: {
      chart: {
        id: "basic-bar",
        type:"bar"
      },
      xaxis: {
        categories: ['Feb','Mar','Apr','May','Jun','Jul','Aug']
      }
    },
    series: [
      {
        name: "Paid",
        data: [0,0,0,0,0,0,5]
      },
      {
        name: "Expenses",
        data: [0,0,0,0,0,0,0]
      },
      {
        name: "Profit",
        data: [0,0,0,0,0,0,5]
      }
    ]
  }
  const items = [
    {
        cardTitle:"User Created project My Awesome Sample Project",
        cardSubtitle:"Aug 24 2022 7:46PM",
    },
    {
        cardTitle:"User marked Invoice #1001 as paid",
        cardSubtitle:"Aug 24 2022 4:21PM",
    },
    {
        cardTitle:"Sample Client paid Rs. 1.00 for Invoice #1001",
        cardSubtitle:"Aug 24 2022 4:21PM",
    },
    {
        cardTitle:"User sent Invoice #1001 to sampleclient@hellobonsai.com for Rs. 1.00",
        cardSubtitle:"Aug 24 2022 4:21PM",
    },
    {
        cardTitle:"User created a new proposal",
        cardSubtitle:"Aug 24 2022 2:07PM",
    },
    {
        cardTitle:"Bonsai signed the contract",
        cardSubtitle:"Aug 24 2022 1:37PM",
    },
    {
        cardTitle:"Sample Client signed the contract",
        cardSubtitle:"Aug 24 2o22 1:37PM",
    },
    {
        cardTitle:"User sent the contract to sampleclient@hellobonsai.com",
        cardSubtitle:"Aug 24 2022 1:37PM",
    },
    {
        cardTitle:"User signed the contract for Sample Client",
        cardSubtitle:"Aug 24 2022 1:36PM",
    },
    {
        cardTitle:"User created a contract for Sample Client",
        cardSubtitle:"Aug 24 2022 1:35PM",
    },
    {
        cardTitle:"User created project My Awesome Sample Project",
        cardSubtitle:"Aug 24 2022 1:31PM",
    }
  ]

const Dashboard = () => {
    
  return (
    <Box margin='10px 32px 16px 32px' display='flex' flexDirection="Column" gap='20px'>
        <Box>
            <Alert status='success' variant='left-accent'>
                <Flex gap={4}>
                    <Box><InfoOutlineIcon fontSize={22}/></Box>
                    <Box>
                        <Box fontSize={20}>Start 7 days free trial</Box>
                        <Box>You currently don't have an active subscription. <Link>Start your free trial now</Link></Box>
                    </Box>
                </Flex>
            </Alert>
        </Box>
        <Flex justify='space-between'>
            <Flex gap={4}>
                <Image src={new Date().getHours() >= 15 ?'./good-night.svg':'./good-morning.svg'}/>
                <Box>
                    <Box>{new Date().toDateString()}</Box>
                    <Heading as='h4'>{new Date().getHours() >= 15 ? "Good Evening":"Good Morning"}, Name</Heading>
                </Box>
            </Flex>
            <Flex>
                <Text>Let's get you setup with Bonsai.</Text>
                <Button variant='outline' colorScheme='teal'>Get started <ChevronRightIcon/></Button>
            </Flex>
        </Flex>
        <Divider />
        <Grid templateColumns='repeat(2, 1fr)' gap={6} gridAutoRows='auto'>
            <GridItem w='100%' borderWidth={"1px"} borderRadius='5px' colspan={8} >
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
                                {Projects.map((p)=><Tr>
                                    <Td>{p.name}</Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>)}
                            </Tbody>
                        </Table>
                </TableContainer>
            </GridItem>
            <GridItem w='100%' h='10' colspan={4} >
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
            <GridItem   colspan={8} >
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
                    <Chart
                        options={charts.options}
                        series={charts.series}
                        type="line"
                    />
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
                    <Chart
                        options={charts1.options}
                        series={charts1.series}
                    />
                </Box>
            </GridItem>
            <GridItem w='100%'borderWidth={"1px"} borderRadius='5px' rowspan={8} colspan={4} >
                <Chrono items={items} 
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
                 />
            </GridItem>
            <GridItem  w='100%'borderWidth={"1px"} borderRadius='5px' >

            </GridItem>
            
        </Grid>

    </Box>
  )
}

export default Dashboard;