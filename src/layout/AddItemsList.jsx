import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

import { connect } from 'react-redux'
import { ADD_ITEM_TO_LIST, BACK_BUTTEN } from '../context/action'

const initalState = {
  name: '',
  note: '',
  image: '',
  category: '',
  totalItems: 1,
}

const AddItemsList = ({ itemDetails, backButten, addItemToList }) => {
  const [value, setValue] = useState(initalState)
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.name !== '' || value.category !== '') {
      addItemToList(value)
      setValue(initalState)
    }
  }

  return (
    <VStack
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
        <Text fontSize={'2xl'} textAlign='left' w={'inherit'}>
          Add a new item
        </Text>
        <Box as='form' w={'inherit'} onSubmit={handleSubmit}>
          <FormControl my='4'>
            <FormLabel>Name</FormLabel>
            <Input
              borderColor={'green.100'}
              borderWidth='0.12em'
              _focusVisible={{
                borderColor: 'green.300',
              }}
              _hover={{
                borderColor: 'green.300',
              }}
              type='text'
              placeholder='Enter a name'
              name='name'
              value={value.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl my='4'>
            <FormLabel>Note(optional)</FormLabel>
            <Textarea
              borderColor={'green.100'}
              borderWidth='0.12em'
              _focusVisible={{
                borderColor: 'green.300',
              }}
              _hover={{
                borderColor: 'green.300',
              }}
              placeholder='Enter a note'
              size='sm'
              name='note'
              value={value.note}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl my='4'>
            <FormLabel>Image(optional)</FormLabel>
            <Input
              borderColor={'green.100'}
              borderWidth='0.12em'
              name='image'
              type='url'
              value={value.image}
              onChange={handleChange}
              placeholder='Enter a url'
              _focusVisible={{
                borderColor: 'green.300',
              }}
              _hover={{
                borderColor: 'green.300',
              }}
            />
          </FormControl>
          <FormControl my='4'>
            <FormLabel>Category</FormLabel>
            <Input
              borderColor={'green.100'}
              borderWidth='0.12em'
              _focusVisible={{
                borderColor: 'green.300',
              }}
              _hover={{
                borderColor: 'green.300',
              }}
              type='text'
              placeholder='Enter a category'
              name='category'
              value={value.category}
              onChange={handleChange}
              id='category'
              list='category'
            />
            <datalist id='category'>
              <option value='Fruit and vegetables' />
              <option value='vegetables' />
              <option value='Fruit' />
            </datalist>
          </FormControl>
          <Flex
            py={'4'}
            justifyContent='space-evenly'
            width={'100%'}
            bgColor={'gray.50'}
          >
            <Button
              onClick={() => setValue(initalState)}
              color={'gray.400'}
              variant='unstyled'
            >
              Clear
            </Button>
            <Button type='submit' colorScheme={'green'}>
              Save
            </Button>
          </Flex>
        </Box>
      </Box>
    </VStack>
  )
}

const mapStateToProps = (state) => {
  return { itemDetails: state.itemDetails }
}
const mapDispatchToProps = (dispatch) => {
  return {
    backButten: () => dispatch({ type: BACK_BUTTEN }),
    addItemToList: (props) =>
      dispatch({ type: ADD_ITEM_TO_LIST, payload: { item: props } }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddItemsList)
