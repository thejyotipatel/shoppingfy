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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import { CANCEL_LIST,SET_COMPLETE_LIST } from '../context/action'

const CompleteBtn = ({ cancelList,completeList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const cancelListOnDeleteBtn = () => {
    cancelList()
    onClose()
  }
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
      >
        Cancel List
      </Button>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Cancel List
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme='red'
                onClick={() => cancelListOnDeleteBtn()}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Button
        height={'100%'}
        py={'5'}
        width='100%'
        variant={'solid'}
        colorScheme='green'
        borderRadius={0}
        fontSize={'xl'}
        fontWeight={'bold'}
        onClick={() => completeList()}
      >
        Completed list
      </Button>
    </Flex>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    cancelList: () => dispatch({ type: CANCEL_LIST }),
    completeList: () => dispatch({ type: SET_COMPLETE_LIST }),
  }
}
export default connect(null, mapDispatchToProps)(CompleteBtn)
