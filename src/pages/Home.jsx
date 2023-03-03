import {
  Box,
  Highlight,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { connect } from 'react-redux'
import Item from '../components/Item'

const Home = ({ list = [] }) => {
  const [searchItems, setSearchItems] = useState('')
  const addItem = (id) => {
    console.log(id)
  }

  const detailItem = (id) => {
    // const item = list.filter((i) => i.id === id)
    // displayDetailItem({ ...item })
  }
  return (
    <>
      <Box
        overflow={{ base: 'scroll', lg: 'auto' }}
        overflowX={'hidden'}
        h={{ md: '85vh', lg: 'auto' }}
        m={4}
        ml={'58px'}
        height={{ md: '80vh', lg: '100%' }}
      >
        <Stack direction={{ base: 'column', md: 'row' }} gap={'8'}>
          <Text fontSize='1.5em' maxW={'30ch'} textAlign={'left'}>
            <Highlight
              query='Shoopingify'
              styles={{
                px: '1',
                py: '1',
                color: 'green.500',
                fontWeight: '800',
              }}
            >
              Shoopingify allows you take your shopping list wherever you go.
            </Highlight>
          </Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<RiSearchLine color='gray.300' />}
            />
            <Input
              value={searchItems}
              onChange={(e) => setSearchItems(e.target.value)}
              type='text'
              placeholder='Search item'
              borderColor={'green.100'}
              borderWidth='0.12em'
              _hover={{
                borderColor: 'green.300',
              }}
              _focusVisible={{
                borderColor: 'green.300',
              }}
            />
          </InputGroup>
        </Stack>
        <Text textAlign={'left'} fontSize='1.2em' fontWeight={'400'} mt={'8'}>
          Meat and Fish
        </Text>
        <Wrap mt={'8'} spacing='8'>
          {list
            .filter((item) => item.name.toLowerCase().includes(searchItems))
            .map((items) => {
              return (
                <Item
                  key={items.id}
                  {...items}
                  detailItem={detailItem}
                  addItem={addItem}
                />
              )
            })}
        </Wrap>
      </Box>
    </>
  )
}

const mapStateToProps = (state) => {
  return { list: state.list }
}

export default connect(mapStateToProps)(Home)
