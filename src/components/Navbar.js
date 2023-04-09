import React from "react"
import { Flex, Spacer, Box, Heading, Text, Image } from '@chakra-ui/react'
import { Search2Icon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import andaman from '../andaman.jpg'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()

    const bookFerryClick = () => {
        navigate('/bookFerry')
    }
    const blogClick = () => {
        navigate('/blog')
    }
    const homeClick = () => {
        navigate('/')
    }
    const hover = {
        cursor: 'pointer',
        bg: 'rgb(202, 220, 205)'
    }
    const [arrowDownIcon, setArrowDownIcon] = useState(true)
    const arrowDownIconFunction = () => {
        setArrowDownIcon(false)
    }
    const arrowUpIconFunction = () => {
        setArrowDownIcon(true)
    }

    return (
        <>

            <Flex h="70px" align='center' gap='30px' position='relative' bg='rgb(242, 247, 243)'>
                <Box ml='45px' >
                    <Image h="70px" objectFit='cover' src={andaman} alt='andaman' onClick={homeClick} _hover={{ cursor: 'pointer' }} />
                </Box>
                <Spacer />
                <Text pl='5px' pr='5px' pt='22px' pb='22px' borderRadius='10px' fontSize='17px' fontWeight='medium' display={{ base: 'none', lg: 'block' }} _hover={hover} onClick={bookFerryClick}>Book Andaman Ferry</Text>
                <Text pl='5px' pr='5px' pt='22px' pb='22px' borderRadius='10px' fontSize='17px' fontWeight='medium' display={{ base: 'none', lg: 'block' }} _hover={hover} onClick={blogClick}>Travel Blog</Text>
                <Text pl='5px' pr='5px' pt='22px' pb='22px' borderRadius='10px' fontSize='17px' fontWeight='medium' display={{ base: 'none', lg: 'block' }} _hover={hover}>Contact Us</Text>
                <Search2Icon mr={{ base: '0px', lg: '60px' }} _hover={{ cursor: 'pointer' }} />
                {arrowDownIcon ?
                    <ArrowDownIcon _hover={{ cursor: 'pointer' }} fontSize='40px' mr='10px' ml='20px' display={{ base: 'block', lg: 'none' }} onClick={arrowDownIconFunction} /> :
                    <ArrowUpIcon _hover={{ cursor: 'pointer' }} fontSize='40px' mr='10px' ml='20px' display={{ base: 'block', lg: 'none' }} onClick={arrowUpIconFunction} />}


                {!arrowDownIcon && <Flex zIndex='1' display={{ base: 'block', lg: 'none' }} flexDirection='column' wrap='nowrap' width='180px' position='absolute' top='70px' right='0px' border='1px solid gray' bg='white'>
                    <Text _hover={hover} fontSize='17px' fontWeight='medium' border='1px solid gray' h='40px' pt='7px' pl='4px' onClick={bookFerryClick}>Book Andaman Ferry</Text>
                    <Text _hover={hover} fontSize='17px' fontWeight='medium' border='1px solid gray' h='40px' pt='7px' pl='4px' onClick={blogClick}>Travel Blog</Text>
                    <Text _hover={hover} fontSize='17px' fontWeight='medium' border='1px solid gray' h='40px' pt='7px' pl='4px' >Contact Us</Text>
                </Flex>}

            </Flex>
        </>
    )
}
export default Navbar