import React from 'react';
import { Alert, Box, Link, Flex } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const StartFreeTrial = ()=>{
    return (
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
    )
}

export default StartFreeTrial;