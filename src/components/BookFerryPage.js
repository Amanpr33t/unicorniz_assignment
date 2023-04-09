import React from "react"
import { Flex, Heading, Text, Image, useNumberInput, HStack, Button, Input, Select, Card, CardBody, Stack } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import andaman from '../andaman.jpg'
import { useState } from "react"
import { SingleDatepicker } from "chakra-dayzed-datepicker"


const BookFerryPage = () => {

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 6
        })

    const incAdults = getIncrementButtonProps()
    const decAdults = getDecrementButtonProps()
    const inputAdults = getInputProps()

    const incInfants = getIncrementButtonProps()
    const decInfants = getDecrementButtonProps()
    const inputInfants = getInputProps()
    const [date, setDate] = useState(new Date());

    return (
        <>
            <Flex flexDirection={{ base: 'column', lg: 'row' }} justify='center' align='center' mt={{ base: '30px', lg: '0px' }} gap='5px'>
                <Flex flexDirection='column' w='700px' borderRadius='10px' justify='center' align='center' ml={{ base: '0px', lg: '10px' }} bg='gray.100' p='5px' mb={{ base: '20px', md: '0px' }}>
                    <Heading size='xl' mb={{ base: '50px', md: '70px' }} mr='3px' ml='3px' w={{ base: '100vw', sm: '450px' }} textAlign='center'> Book Your Andaman Ferry</Heading>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} align='center'>
                        <Heading fontSize='25px' fontWeight='600' mr={{ base: '0px', md: '90px' }} mb={{ base: '15px', md: '0px' }}> Select Passengers</Heading>
                        <Flex flexDirection={{ base: 'column', sm: 'row' }} ml={{ base: '25px', sm: '0px' }}>
                            <Flex flexDirection='column' mr='30px' gap='10px' >
                                <Flex flexDirection='row' gap='8px' align='center'>
                                    <Heading fontSize='20px' color='gray' fontWeight='600'> Adults</Heading>
                                    <Heading fontSize='12px' color='gray' fontWeight='600' >(Above 18 Year) </Heading>
                                </Flex>
                                <HStack maxW='320px' w='150px' border='2px solid silver' borderRadius='10px'>
                                    <Button {...decAdults} fontSize='35px' pb='8px'>-</Button>
                                    <Input {...inputAdults} textAlign='center' fontSize='25px' fontWeight='600' border='none' />
                                    <Button {...incAdults} fontSize='35px' pb='8px'>+</Button>
                                </HStack>
                            </Flex>
                            <Flex flexDirection='column' gap='10px'>
                                <Flex flexDirection='row' gap='8px' align='center'>
                                    <Heading fontSize='20px' color='gray' fontWeight='600' >Infants</Heading>
                                    <Heading fontSize='12px' color='gray' fontWeight='600' >(Below 12 Months)</Heading>
                                </Flex>
                                <HStack maxW='320px' w='150px' border='2px solid silver' borderRadius='10px' >
                                    <Button {...decInfants} fontSize='35px' pb='8px'>-</Button>
                                    <Input  {...inputInfants} textAlign='center' fontSize='25px' fontWeight='600' border='none' />
                                    <Button {...incInfants} fontSize='35px' pb='8px'>+</Button>
                                </HStack>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Heading fontSize='25px' fontWeight='600' mt={{ base: '40px', md: '70px' }}> Select Trip</Heading>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} mt='20px' ml='20px' gap='20px'>
                        <Flex flexDirection='column'>
                            <Heading fontSize='18px' color='gray' fontWeight='600' mb='7px'> From</Heading>
                            <Select >
                                <option value='option1'>Havelock Island</option>
                                <option value='option2'>Jolly Buoy Island</option>
                                <option value='option3'>Neil Island</option>
                                <option value='option1'>Ross Island</option>
                                <option value='option2'>Ross and Smith Island</option>
                                <option value='option3'>Barren Island</option>
                            </Select>
                        </Flex>
                        <Flex flexDirection='column'>
                            <Heading fontSize='18px' color='gray' fontWeight='600' mb='7px'> To</Heading>
                            <Select >
                                <option value='option2'>Jolly Buoy Island</option>
                                <option value='option1'>Havelock Island</option>

                                <option value='option3'>Neil Island</option>
                                <option value='option1'>Ross Island</option>
                                <option value='option2'>Ross and Smith Island</option>
                                <option value='option3'>Barren Island</option>
                            </Select>
                        </Flex>
                        <Flex flexDirection='column'>
                            <Heading fontSize='18px' color='gray' fontWeight='600' mb='7px'> Date Of Journey</Heading>
                            <SingleDatepicker
                                name="date-input"
                                date={date}
                                onDateChange={setDate}
                            />
                        </Flex>
                    </Flex>
                    <Flex flexDirection='row' mt='35px' justify='center' align='center'>
                        <AddIcon fontSize='20px' borderRadius='50%' p='2px' bg='green' color='white' mr='5px'></AddIcon>
                        <Heading fontSize='20px' color='green' fontWeight='600' > Add Round Trips</Heading>
                    </Flex>
                    <Flex justify='center' mt='30px'>
                        <Button colorScheme='blue' width='140px'>Search</Button>
                    </Flex>
                </Flex>
                <Card maxW='xl' bg='gray.100'>
                    <CardBody>
                        <Image
                            src={andaman}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3' mb='25px'>
                            <Heading size='md' textAlign='center'>Andaman Ferry Booking Process</Heading>
                        </Stack>
                        <Flex flexDir={{ base: 'column', md: 'row' }} justify='space-around' align={{ base: 'center', md: 'baseline' }} gap='10px'>
                            <Flex mb='20px' flexDirection='column' w='130px' gap='7px' align='center'>
                                <Heading size='sm' color='orange'>Search</Heading>
                                <Text fontSize='16px' fontWeight='600' textAlign='center'>and compare ferries from a large selection</Text>
                            </Flex>
                            <Flex mb='20px' flexDirection='column' w='130px' gap='7px' align='center'>
                                <Heading size='sm' color='pink'>Order</Heading>
                                <Text fontSize='16px' fontWeight='600' textAlign='center'>tickets by securely paying Rs.200 per ticket</Text>
                            </Flex>
                            <Flex mb='20px' flexDirection='column' w='130px' gap='7px' align='center'>
                                <Heading size='sm' color='blue'>Recieve</Heading>
                                <Text fontSize='16px' fontWeight='600' textAlign='center'>your confirmed tickets in 3-4 working hours</Text>
                            </Flex>
                            <Flex flexDirection='column' w='130px' gap='7px' align='center'>
                                <Heading size='sm' color='green'>Pay</Heading>
                                <Text fontSize='16px' fontWeight='600' textAlign='center'>the balance money in the next 24 hours and enjoy your trip</Text>
                            </Flex>
                        </Flex>
                    </CardBody>
                </Card>
            </Flex>
        </>
    )
}
export default BookFerryPage