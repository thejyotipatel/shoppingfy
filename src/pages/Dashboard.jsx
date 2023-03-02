import React, { useEffect } from 'react'
import { Grid, Box, Alert, AlertIcon, Flex } from '@chakra-ui/react'
import { connect } from 'react-redux'
import { CLEAR_ALERT } from '../context/action'
import Sidebar from '../layout/Sidebar'
import Home from './Home'
import AddItemsList from '../layout/AddItemsList'
import ShoppingList from '../layout/ShoppingList'
import DetailItem from '../layout/DetailItem'

const Dashboard = ({
  showAlert,
  alertType,
  alertText,
  detailBox,
  addItemBox,
  listsBox,
  clearAlert,
}) => {
  useEffect(() => {
    setTimeout(() => {
      clearAlert()
    }, 2000)
  }, [showAlert])

  return (
    <>
      {showAlert && (
        <Alert
          position={'fixed'}
          top={'1em'}
          left='38vw'
          width='fit-content'
          status={alertType}
          fontSize={'xl'}
          zIndex='1000'
        >
          <AlertIcon />
          {alertText}
        </Alert>
      )}
      {/* <Grid
        gridTemplateColumns={{ md: 'auto', lg: '73% 27%' }}
        justify-items={'center'}
        // fontSize={{ base: '24px', md: '40px', lg: '56px' }}
      >
        <Box>
          <Sidebar />
        </Box>
        {detailBox && <DetailItem />}
        {addItemBox && <AddItemsList />}
        {listsBox && <ShoppingList />}
      </Grid> */}
      <Flex wrap={'wrap'} position={'relative'}>
        <Flex flex={8} minW={'500px'} position={'inherit'}>
          <Flex
            flex={1}
            alignItems={'center'}
            position={'fixed'}
            zIndex={'999'}
            height={'100vh'}
            bgColor={'white'}
          >
            <Sidebar />
            {/* <AddItemsList /> */}
          </Flex>
          <Home />
        </Flex>
        <Flex flex={3} minW={'400px'} ml={'50px'}>
          {/* <ShoppingList /> */}
          {detailBox && <DetailItem />}
          {addItemBox && <AddItemsList />}
          {listsBox && <ShoppingList />}
        </Flex>
      </Flex>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    detailBox: state.detailBox,
    addItemBox: state.addItemBox,
    listsBox: state.listsBox,
    showAlert: state.showAlert,
    alertType: state.alertType,
    alertText: state.alertText,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearAlert: () => dispatch({ type: CLEAR_ALERT }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
