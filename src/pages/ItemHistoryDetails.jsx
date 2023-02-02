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
  InputLeftElement,
  Flex,
  Stack,
  Highlight,
  Wrap,
  WrapItem,
  Center,
  VStack,
  Container,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  useBoolean,
  Alert,
  AlertIcon,
  useDisclosure,
} from '@chakra-ui/react'
import { BiChevronRight } from 'react-icons/bi'
import { AiOutlineLeft, AiOutlinePlus, AiOutlineRight } from 'react-icons/ai'
import { FcCalendar } from 'react-icons/fc'
import shopping_re from '../assets/images/undraw_gone_shopping_re_2lau.svg'
import { RiSearchLine } from 'react-icons/ri'
import { HiPencil } from 'react-icons/hi'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { connect } from 'react-redux'
import {
  ADD_ITEM_BUTTON,
  RENAME_LIST,
  CANCEL_LIST,
  DELETE_ITEM_FROM_SHOPPING_LIST,
  BACK_BUTTEN,
} from '../context/action'

const ItemHistoryDetails = ({ shoopingLists, backButten }) => {
  return  <VStack
      p={'4'}
      width={'100%'}
      height={'100vh'}
      minH={'fit-content'}
      spacing='4'
    >
      <Box w={'100%'} pb='4'>
        <Button
          mb='4'
          onClick={() => backButten()}
          width={'inherit'}
          justifyContent={'left'}
          alignItems='center'
          display={'flex'}
          color='green.500'
          fontSize='1.2em'
          gap={'1'}
          w='fit-content'
          variant={'unstyled'}
          textAlign='left'
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Icon fontSize='1.5em' as={MdOutlineKeyboardBackspace} />
          back
        </Button>
        <Text fontSize='1.5em' fontWeight={'600'} textAlign={'left'}>
        Shooping history
      </Text>
      <Flex color={'gray.400'} alignItems='center' gap={'2'}>
      <Icon as={FcCalendar} />
      <Text>{date}</Text>
      </Flex>

      <Flex
        minW={'180px'}
        minH={'80px'}
        _hover={{
          boxShadow: 'lg',
        }}
        bg='green.100'
        borderRadius={'md'}
        boxShadow={'md'}
      >

        <Button
          textTransform='capitalize'
          width={'90%'}
          minH={'80px'}
          fontWeight='normal'
          fontSize='18px'
          variant={'unstyled'}
          _hover={{
            bgColor: 'green.500',
            color: 'gray.100',
          }}
          // onClick={() => displayDetailOfItem()}
        >
          {/* {name} */}
          name
        </Button>
        </Flex>

        </Box>
        </VStack>
}

const mapStateToProps = (state) => {
  return { shoopingLists: state.shoopingLists }
}
const mapDispatchToProps = (dispatch) => {
  return {
    backButten: () => dispatch({ type: BACK_BUTTEN }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemHistoryDetails)
