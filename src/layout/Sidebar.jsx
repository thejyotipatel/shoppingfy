import { Button, Icon, Tooltip, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiBarChartBoxLine, RiHistoryLine, RiListCheck } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <VStack gap={1} minw={'50px'}>
        <NavLink to='/shoppingfy/'>
          <Button
            bgColor={'white'}
            _selected={{ color: 'green.500', borderColor: 'green.500' }}
            _hover={{ color: 'green.500', borderColor: 'green.500' }}
          >
            <Tooltip
              hasArrow
              placement='right'
              colorScheme={'black'}
              label='Items'
              aria-label='Items'
            >
              <span>
                <Icon as={RiListCheck} w={6} h={6} />
              </span>
            </Tooltip>
          </Button>
        </NavLink>
        <NavLink to='history'>
          <Button
            bgColor={'white'}
            _selected={{ color: 'green.500', borderColor: 'green.500' }}
            _hover={{ color: 'green.500', borderColor: 'green.500' }}
          >
            <Tooltip
              hasArrow
              placement='right'
              colorScheme={'black'}
              label='History'
              aria-label='History'
            >
              <span>
                <Icon as={RiHistoryLine} w={6} h={6} />
              </span>
            </Tooltip>
          </Button>
        </NavLink>
        <NavLink to='statistics'>
          <Button
            bgColor={'white'}
            _selected={{ color: 'green.500', borderColor: 'green.500' }}
            _hover={{ color: 'green.500', borderColor: 'green.500' }}
          >
            <Tooltip
              hasArrow
              placement='right'
              colorScheme={'black'}
              label='Statistics'
              aria-label='Statistics'
            >
              <span>
                <Icon as={RiBarChartBoxLine} w={6} h={6} />
              </span>
            </Tooltip>
          </Button>
        </NavLink>
      </VStack>
    </>
  )
}

export default Sidebar
