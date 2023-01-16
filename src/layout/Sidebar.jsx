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
} from '@chakra-ui/react'
import {
  RiBarChartBoxLine,
  RiShoppingCart2Line,
  RiListCheck,
  RiHistoryLine,
} from 'react-icons/ri'
import img from '../assets//images/logo.svg'
import Home from '../pages/Home'
import History from '../pages/History'
import Statistics from '../pages/Statistics'

const Sidebar = () => {
  return (
    <>
      <Button margin={'2'} position={'fixed'} top={'1em'} variant={'unstyled'}>
        <Image src={img} alt='logo' />
      </Button>
      <Tabs align='center' orientation='vertical' w={'100%'} h={'100%'}>
        <TabList gap={'4'}>
          <Tab
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
          </Tab>
          <Tab
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
          </Tab>
          <Tab
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
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <Home />
          </TabPanel>
          <TabPanel>
            <History />
          </TabPanel>
          <TabPanel>
            <Statistics />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <IconButton
        position={'fixed'}
        bottom={'1.2em'}
        margin={'2'}
        colorScheme={'green'}
        backgroundColor={'green.500'}
        color={'gray.50'}
        borderRadius={'100%'}
        icon={<RiShoppingCart2Line />}
      />
    </>
  )
}

export default Sidebar
