import React from 'react'
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tooltip,
  Icon,
  Text,
  Image,
  Button,
  IconButton,
  HStack,
  InputGroup,
  Input,
  InputLeftElement,
  Flex,
  Stack,
  Highlight,
  Wrap,
  WrapItem,
  Center,
  VStack,
} from '@chakra-ui/react'
import { BiChevronRight } from 'react-icons/bi'
import { AiOutlineLeft, AiOutlinePlus, AiOutlineRight } from 'react-icons/ai'
import { FcCalendar } from 'react-icons/fc'

const History = () => {
  return (
    <>
      <Text fontSize='1.5em' fontWeight={'600'} textAlign={'left'}>
        Shooping history
      </Text>

      <Box my={'8'}>
        <Text textAlign={'left'}>November 2020</Text>

        <Flex
          my={'4'}
          justifyContent={'space-between'}
          cursor={'pointer'}
          align='center'
          bg='whiteAlpha.200'
          borderRadius={'md'}
          padding='4'
          boxShadow={'md'}
          _hover={{
            boxShadow: 'lg',
          }}
        >
          <Text>Grocery List</Text>
          <Flex color={'gray.400'} alignItems='center' gap={'2'}>
            <Icon as={FcCalendar} />
            <Text>Mon 24.8.{new Date().getUTCFullYear().toString()}</Text>
            <Button variant={'outline'} colorScheme='blue'>
              Completed
            </Button>
            <IconButton
              color={'yellow.700'}
              fontSize='4xl'
              variant={'unstyled'}
              fontWeight={'800'}
              icon={<BiChevronRight />}
            />
          </Flex>
        </Flex>
        <Flex
          my={'4'}
          justifyContent={'space-between'}
          cursor={'pointer'}
          align='center'
          bg='whiteAlpha.200'
          borderRadius={'md'}
          padding='4'
          boxShadow={'md'}
          _hover={{
            boxShadow: 'lg',
          }}
        >
          <Text>Grocery List</Text>
          <Flex color={'gray.400'} alignItems='center' gap={'2'}>
            <Icon as={FcCalendar} />
            <Text>Mon 24.8.{new Date().getUTCFullYear().toString()}</Text>
            <Button variant={'outline'} colorScheme='blue'>
              Completed
            </Button>
            <IconButton
              color={'yellow.700'}
              fontSize='4xl'
              variant={'unstyled'}
              fontWeight={'800'}
              icon={<BiChevronRight />}
            />
          </Flex>
        </Flex>
      </Box>
      <Box my={'8'}>
        <Text textAlign={'left'}>November 2020</Text>

        <Flex
          my={'4'}
          justifyContent={'space-between'}
          cursor={'pointer'}
          align='center'
          bg='whiteAlpha.200'
          borderRadius={'md'}
          padding='4'
          boxShadow={'md'}
          _hover={{
            boxShadow: 'lg',
          }}
        >
          <Text>Grocery List</Text>
          <Flex color={'gray.400'} alignItems='center' gap={'2'}>
            <Icon as={FcCalendar} />
            <Text>Mon 24.8.{new Date().getUTCFullYear().toString()}</Text>
            <Button variant={'outline'} colorScheme='blue'>
              Completed
            </Button>
            <IconButton
              color={'yellow.700'}
              fontSize='4xl'
              variant={'unstyled'}
              fontWeight={'800'}
              icon={<BiChevronRight />}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default History
