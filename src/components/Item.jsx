import React from 'react'
import { Wrap, WrapItem, Flex, Button, IconButton } from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import { connect } from 'react-redux'
import {
  DISPLAY_ITEM_DETAILS,
  ADD_ITEM_TO_SHOPPING_LIST,
} from '../context/action'

const Item = ({ name, id, addItem, displayDetailOfItem }) => {
  return (
    <WrapItem>
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
          onClick={() => displayDetailOfItem()}
        >
          {name}
        </Button>
        <IconButton
          color={'green.500'}
          fontSize='2xl'
          width={'50%'}
          alignItems='center'
          display={'flex'}
          justifyContent={'center'}
          minH={'80px'}
          variant={'unstyled'}
          _hover={{
            bgColor: 'green.500',
            color: 'gray.100',
          }}
          onClick={() => addItem(id)}
          // onClick={() => addItemToList(id)}
          icon={<AiOutlinePlus />}
        />
      </Flex>
    </WrapItem>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    displayDetailOfItem: () =>
      dispatch({ type: DISPLAY_ITEM_DETAILS, payload: { id: ownProps.id } }),
    addItem: (props) =>
      dispatch({ type: ADD_ITEM_TO_SHOPPING_LIST, payload: { id: props } }),
  }
}

export default connect(null, mapDispatchToProps)(Item)
