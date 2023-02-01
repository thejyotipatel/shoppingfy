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
import shopping_re from '../assets/images/undraw_gone_shopping_re_2lau.svg'
import { connect } from 'react-redux'
import {
  ADD_ITEM_BUTTON,
  RENAME_LIST,
  CANCEL_LIST,
  DELETE_ITEM_FROM_SHOPPING_LIST,
  DELETE_TOGGLE,
} from '../context/action'

const History = ({shoopingLists}) => {
  return (
    <>
      <Text fontSize='1.5em' fontWeight={'600'} textAlign={'left'}>
        Shooping history
      </Text>

      <Box my={'8'}>

        <Text textAlign={'left'}>November 2020</Text>
{shoopingLists.length === 0 ? (
          <Image src={shopping_re} alt='shopping_re.avg' />
        ) : (
          <>
          {shoopingLists.map((item) => {
              const { id, list, status, shoppingListName} = item
              // console.log(item)
              return (

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
          key={id}
        >
          <Text>{shoppingListName}</Text>
          <Flex color={'gray.400'} alignItems='center' gap={'2'}>
            <Icon as={FcCalendar} />
            <Text>Mon 24.8.{new Date().getUTCFullYear().toString()}</Text>
            <Button variant={'outline'} colorScheme={status === 'Canceled'? 'red':'blue'}>
              {status}
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
              )})
          }
          </>)
}
      </Box>
       
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    shoopingLists: state.shoopingLists,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default  connect(mapStateToProps, mapDispatchToProps)(History)
