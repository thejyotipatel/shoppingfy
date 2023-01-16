import React, { useEffect } from 'react'
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
import { RiSearchLine } from 'react-icons/ri'
import { HiPencil } from 'react-icons/hi'
import { useState } from 'react'
// import { useAppContext } from '../context/appContext'

const initalState = {
  name: '',
  note: '',
  imageUrl: '',
  category: '',
}

const AddItemsList = () => {
  // const {
  //   listOfItems,
  //   showAlert,
  //   displayAlert,
  //   name,
  //   note,
  //   imageUrl,
  //   category,
  // } = useAppContext()
  const [value, setValue] = useState(initalState)
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.name || !value.category) {
      console.log('submit !!!')
    }
     
    // displayAlert()
  }

  return (
    <>
      <VStack
        p={'4'}
        width={'100%'}
        maxW='400px'
        height={'100vh'}
        minH={'fit-content'}
        spacing='4'
      >
        <Text fontSize={'1.2em'} textAlign='left' w={'inherit'}>
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
              onChange={handleChange}
            />
          </FormControl>
          <FormControl my='4'>
            <FormLabel>Image(optional)</FormLabel>
            <Input
              borderColor={'green.100'}
              borderWidth='0.12em'
              name='imageUrl'
              type='url'
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
          <Flex py={'4'} width={'inherit'} justifyContent='space-evenly'>
            <Button
              onClick={() => setValue(initalState)}
              color={'gray.400'}
              variant='unstyled'
              >
              clear
            </Button>
            <Button
             type='submit' colorScheme={'green'}>
              Save
            </Button>
          </Flex>
        </Box>
      </VStack>
    </>
  )
}

export default AddItemsList
