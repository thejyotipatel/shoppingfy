import { Alert, AlertIcon, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { CLEAR_ALERT } from '../context/action'
import AddItemsList from '../layout/AddItemsList'
import DetailItem from '../layout/DetailItem'
import ShoppingList from '../layout/ShoppingList'
import Sidebar from '../layout/Sidebar'

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
      <Flex wrap={'wrap'} position={'relative'}>
        <Flex
          flex={8}
          minW={'500px'}
          position={'inherit'}
          flexDirection='column'
        >
          <Flex
            flex={1}
            alignItems={'center'}
            position={'fixed'}
            zIndex={'999'}
            height={'100vh'}
            bgColor={'white'}
          >
            <Sidebar />
          </Flex>
          <Outlet />
        </Flex>
        <Flex flex={3} ml={'50px'}>
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
