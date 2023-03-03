import { Box, Button, Flex, Icon, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { connect } from 'react-redux'
import { addItem, BACK_BUTTEN, DELETE_ITEM_FROM_LIST } from '../context/action'

const DetailItem = ({
  itemDetails,
  backButten,
  addItemToList,
  deleteItem,
  addItem,
}) => {
  const { category, id, image, name, note } = itemDetails[0]

  return (
    <>
      <VStack
        p={'4'}
        width={'100%'}
        // maxW='400px'
        height={'100vh'}
        minH={'fit-content'}
        position={'relative'}
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
        </Box>
        <Flex width={'100%'} justifyContent='space-evenly' bgColor={'gray.50'}>
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
            onClick={() => addItem(id)}
          >
            Add to list
          </Button>
        </Flex>
      </VStack>
    </>
  )
}

const mapStateToProps = (state) => {
  return { itemDetails: state.itemDetails }
}
const mapDispatchToProps = (dispatch) => {
  // console.log(state)
  return {
    backButten: () => dispatch({ type: BACK_BUTTEN }),
    addItem: (props) => dispatch(addItem(props)),
    deleteItem: () =>
      dispatch({
        type: DELETE_ITEM_FROM_LIST,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailItem)
