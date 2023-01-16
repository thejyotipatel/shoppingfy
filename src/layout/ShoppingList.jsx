import React, { useState } from 'react'
import {
  Text,
  Image,
  Button,
  IconButton,
  Flex,
  VStack,
  useBoolean,
  Checkbox,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { HiMinus, HiPencil, HiPlus } from 'react-icons/hi'
import img from '../assets/images/source.svg'
import shopping_re from '../assets/images/undraw_gone_shopping_re_2lau.svg'
// import { useAppContext } from '../context/appContext'
import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai'

const ShoppingList = () => {
  // const { addItemBtn, deleteItemToList, shoopingList, setCompleteItem } =
    // useAppContext()

  // const [complete, setComplete] = useState(false)
  const [toogle, setToogle] = useBoolean()
  const [toogleAmount, setToogleAmount] = useBoolean()
  const [amount, setAmount] = useState(1)

  const amountChange = (a) => {
    a = amount <= 1 ? a == 1 : a
    return setAmount(amount + a)
  }
  // console.log(shoopingList.length)
  // console.log(shoopingList)
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
            <Button 
            // onClick={addItemBtn}
            >Add item</Button>
          </VStack>
        </Flex>
        <Flex width={'100%'} justifyContent={'space-between'}>
          <Text fontSize='1.5em' fontWeight={'600'} textAlign={'left'}>
            Shooping list
          </Text>
          <IconButton
            variant={'unstyled'}
            icon={<HiPencil fontSize={'1.5em'} color={'gray.400'} />}
          />
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
        {/* {shoopingList.length === 0 && (
          <Image src={shopping_re} alt='shopping_re.avg' />
        )} */}

        {/* {shoopingList.length > 0 &&
          shoopingList.map((list) => {
            // console.log(list.id)
            return (
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
            )
          })}
*/}
        
        
        
       
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

export default ShoppingList
