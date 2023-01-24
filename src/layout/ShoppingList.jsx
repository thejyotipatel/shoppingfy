import React, { useState } from 'react'
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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useBoolean,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { HiMinus, HiPencil, HiPlus } from 'react-icons/hi'
import img from '../assets/images/source.svg'
import shopping_re from '../assets/images/undraw_gone_shopping_re_2lau.svg'
import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai'
import { connect } from 'react-redux'
import { ADD_ITEM_BUTTON, RENAME_LIST } from '../context/action'

const ShoppingList = ({
  shoopingList,
  addItemBtn,
  currentShoopingListName,
  renameShoppingList,
}) => {
  const [toogle, setToogle] = useBoolean()
  const [toogleAmount, setToogleAmount] = useBoolean()
  const [amount, setAmount] = useState(1)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [editListName, setEditListName] = useState(currentShoopingListName)

  const changeListName = () => {
    setEditListName(editListName)
    console.log(editListName)
  }

  const amountChange = (a) => {
    a = amount <= 1 ? a == 1 : a
    return setAmount(amount + a)
  }

  return (
    <>
      <VStack
        p={'4'}
        bgColor={'green.100'}
        width={'100%'}
        maxW='400px'
        height={'100vh'}
        minH={'fit-content'}
        position='relative'
      >
        <Flex
          borderRadius={'lg'}
          width={'90%'}
          height={'20%'}
          bgColor={'teal.600'}
        >
          <Image src={img} alt='Dan Abramov' />
          <VStack justifyContent='center'>
            <Text color={'white'} fontSize={'1.2em'} textAlign='left'>
              Didn't find what you need?
            </Text>
            <Button onClick={() => addItemBtn()}>Add item</Button>
          </VStack>
        </Flex>
        <Flex width={'100%'} justifyContent={'space-between'}>
          <Text fontSize='1.5em' fontWeight={'600'} textAlign={'left'}>
            {currentShoopingListName}
          </Text>
          <IconButton
            variant={'unstyled'}
            onClick={onOpen}
            icon={<HiPencil fontSize={'1.5em'} color={'gray.400'} />}
          />
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
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
                    value={editListName}
                    onChange={(e) => setEditListName(e.target.value)}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme='blue'
                  mr={3}
                  onClick={() => changeListName()}
                >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
        <Text
          width={'inherit'}
          textAlign={'left'}
          fontSize='12px'
          fontWeight={'600'}
          py={'4'}
          color='gray.500'
        >
          Meat and fish
        </Text>
        {shoopingList.length === 0 ? (
          <Image src={shopping_re} alt='shopping_re.avg' />
        ) : (
          <Flex
            key={list[0]?.id}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems='center'
          >
            {toogle && (
              <Checkbox
                colorScheme='green'
                size={'lg'}
                borderColor='green.300'
                onChange={() => setCompleteItem(list?.id)}
              ></Checkbox>
            )}
            <Button
              variant={'unstyled'}
              textDecoration={list?.completed ? 'line-through' : 'none'}
              fontSize='18px'
              textTransform='capitalize'
              onClick={setToogle.toggle}
            >
              {list[0]?.name}
            </Button>

            {toogle && (
              <IconButton
                variant={'unstyled'}
                color={'red'}
                fontSize={'2xl'}
                my={2}
                icon={<AiFillDelete />}
                onClick={() => deleteItemToList(list[0]?.id)}
              />
            )}

            <Flex alignItems={'center'}>
              {toogleAmount && (
                <IconButton
                  colorScheme={'green'}
                  backgroundColor={'green.500'}
                  color={'gray.50'}
                  size='sm'
                  icon={<HiMinus />}
                  onClick={() => amountChange(-1)}
                />
              )}
              <Button
                variant={'unstyled'}
                color='green'
                p={'0.5em'}
                onClick={setToogleAmount.toggle}
              >
                {amount} pcs
              </Button>
              {toogleAmount && (
                <IconButton
                  colorScheme={'green'}
                  backgroundColor={'green.500'}
                  color={'gray.50'}
                  size='sm'
                  icon={<HiPlus />}
                  onClick={() => amountChange(1)}
                />
              )}
            </Flex>
          </Flex>
        )}

        <Flex
          position={'absolute'}
          bottom='0'
          width={'inherit'}
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
          >
            Cancel list
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
          >
            Completed list
          </Button>
        </Flex>
      </VStack>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    shoopingList: state.shoopingList,
    currentShoopingListName: state.currentShoopingListName,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addItemBtn: () => dispatch({ type: ADD_ITEM_BUTTON }),
    renameShoppingList: (props) =>
      dispatch({ type: RENAME_LIST, payload: { listName: props } }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)
