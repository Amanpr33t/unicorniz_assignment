import React from "react"
import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react'
import andaman_body from '../andaman_body.jpg'
import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react'

const LandingPage = () => {


    return (
        <>
            <Box >
                <Image h='400px' w='100%' src={andaman_body} />
            </Box>
            <Flex direction='row' wrap='wrap' justify='center' gap='20px' mt='-180px' ml='10px' mr='10px'>
                <Card w='250px' h='250px' bg='white' border='2px solid silver' borderRadius='50px'>
                    <CardHeader>
                        <Flex maxH='70px' gap='20px' alignItems='center' flexWrap='nowrap' flexDirection='row' >
                            <Box>
                                <Heading size='md' maxW='100px'>Plan an incredible trip</Heading>
                            </Box>
                        </Flex>
                    </CardHeader>
                    <CardBody maxH='65px' >
                        <Text fontWeight='600' >Build a trip-of-a-lifetime with us</Text>
                    </CardBody>
                    <CardFooter maxH='10px'>
                        <Button color='green' border='2px solid green' bg='white'>Explore</Button>
                    </CardFooter>
                </Card>
                <Card w='250px' h='250px' bg='white' border='2px solid silver' borderRadius='50px'>
                    <CardHeader>
                        <Flex maxH='70px' gap='20px' alignItems='center' flexWrap='nowrap' flexDirection='row' >
                            <Box>
                                <Heading size='md' maxW='100px'>The Best Hotels + Resorts</Heading>
                            </Box>
                        </Flex>
                    </CardHeader>
                    <CardBody maxH='65px' >
                        <Text fontWeight='600' >The top stays on every island</Text>
                    </CardBody>
                    <CardFooter maxH='10px'>
                        <Button color='green' border='2px solid green' bg='white'>Explore</Button>
                    </CardFooter>
                </Card>
                <Card w='250px' h='250px' bg='white' border='2px solid silver' borderRadius='50px'>
                    <CardHeader>
                        <Flex maxH='70px' gap='20px' alignItems='center' flexWrap='nowrap' flexDirection='row' >
                            <Box>
                                <Heading size='md' maxW='100px'> Explore Things-to-do</Heading>
                            </Box>
                        </Flex>
                    </CardHeader>
                    <CardBody maxH='65px' >
                        <Text fontWeight='600' >All the must-do activities right here</Text>
                    </CardBody>
                    <CardFooter maxH='10px'>
                        <Button color='green' border='2px solid green' bg='white'>Explore</Button>
                    </CardFooter>
                </Card>
                <Card w='250px' h='250px' bg='white' border='2px solid silver' mb={{ base: '20px' }} borderRadius='50px'>
                    <CardHeader>
                        <Flex maxH='70px' gap='20px' alignItems='center' flexWrap='nowrap' flexDirection='row' >
                            <Box>
                                <Heading size='md' maxW='100px'>Ferry Bookings </Heading>
                            </Box>
                        </Flex>
                    </CardHeader>
                    <CardBody maxH='65px' >
                        <Text fontWeight='600' >Inter island travel made easy</Text>
                    </CardBody>
                    <CardFooter maxH='10px'>
                        <Button color='green' border='2px solid green' bg='white'>Explore</Button>
                    </CardFooter>
                </Card>
            </Flex>
        </>
    )
}
export default LandingPage