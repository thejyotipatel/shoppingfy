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
import { connect } from 'react-redux'
import { CANCEL_LIST } from '../context/action'

const CompleteBtn = ({ cancelList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
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
        onClick={onOpen}
        // onClick={() => cancelList()}
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
                // value={editListName}
                // onChange={(e) => setEditListName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              // onClick={() => changeListName()}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    cancelList: () => dispatch({ type: CANCEL_LIST }),
  }
}
export default connect(null, mapDispatchToProps)(CompleteBtn)
