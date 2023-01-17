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
  Link,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { HiPencil } from 'react-icons/hi'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { connect } from 'react-redux'
import {
  BACK_BUTTEN,
  ADD_ITEM_TO_LIST,
  DELETE_ITEM_FROM_LIST,
} from '../context/action'

const DetailItem = ({ itemDetails, backButten, addItemToList, deleteItem }) => {
  const { category, id, image, name, note } = itemDetails[0]

  return (
    <VStack
      p={'4'}
      width={'100%'}
      maxW='400px'
      height={'100vh'}
      minH={'fit-content'}
      position={'relative'}
    >
      <Button
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
      <Box w={'100%'} py='4'>
        <Image src={image} alt='img' borderRadius={'2xl'} />
        <VStack w={'inherit'} py='4'>
          <Text
            fontSize={'xs'}
            fontWeight='bold'
            color={'green.200'}
            textAlign={'left'}
            w='inherit'
          >
            Name
          </Text>
          <Text fontWeight={'500'} textAlign={'left'} w='inherit'>
            {name}
          </Text>
        </VStack>
        <VStack py='4' w='inherit'>
          <Text
            fontSize={'xs'}
            fontWeight='bold'
            color={'green.200'}
            textAlign={'left'}
            w='inherit'
          >
            Category
          </Text>
          <Text fontWeight={'500'} textAlign={'left'} w='inherit'>
            {category}
          </Text>
        </VStack>
        <VStack py='4' w='inherit'>
          <Text
            fontSize={'xs'}
            fontWeight='bold'
            color={'green.200'}
            textAlign={'left'}
            w='inherit'
          >
            Note
          </Text>
          <Text fontWeight={'500'} textAlign={'justify'} w='inherit'>
            {note}
          </Text>
        </VStack>
        {/* <Flex py={'4'} width={'inherit'} justifyContent='space-evenly'>
          <Button color={'gray.400'} variant='unstyled'>
            Delete
          </Button>
          <Button colorScheme={'green'}>Add to list</Button>
        </Flex> */}
      </Box>
      <Flex
        position={'fixed'}
        bottom='0px'
        maxW={'400px'}
        width={'100%'}
        justifyContent='space-evenly'
        bgColor={'gray.50'}
      >
        <Button
          width='100%'
          variant={'unstyled'}
          color={'gray.400'}
          py={'5'}
          fontSize={'xl'}
          fontWeight={'bold'}
          onClick={() => deleteItem()}
        >
          Delete item
        </Button>
        <Button
          height={'100%'}
          py={'5'}
          width='100%'
          variant={'solid'}
          colorScheme='green'
          borderRadius={0}
          fontSize={'xl'}
          fontWeight={'bold'}
          // onClick={() => addItemToList()}
        >
          Add to list
        </Button>
      </Flex>
    </VStack>
  )
}

const mapStateToProps = (state) => {
  return { itemDetails: state.itemDetails }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(state)
  return {
    backButten: () => dispatch({ type: BACK_BUTTEN }),
    // addItemToList: () =>
    //   dispatch({
    //     type: ADD_ITEM_TO_LIST,
    //     payload: { id: ownProps.ItemDetails[0].id },
    //   }),
    deleteItem: () =>
      dispatch({
        type: DELETE_ITEM_FROM_LIST,
        // payload: { id: ownProps.ItemDetails[0].id },
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailItem)
