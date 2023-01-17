import React,{useEffect} from 'react'
import { Grid, Box, Alert, AlertIcon } from '@chakra-ui/react'
import { connect } from 'react-redux'
import {CLEAR_ALERT} from '../context/action'
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
  listsBox,clearAlert
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
          position={'absolute'}
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
      <Grid gridTemplateColumns={'73% 27%'} justify-items={'stretch'}>
        <Box>
          <Sidebar />
        </Box>
        {detailBox && <DetailItem />}
        {addItemBox && <AddItemsList />}
        {listsBox && <ShoppingList />}
      </Grid>
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
    clearAlert: () =>
      dispatch({ type: CLEAR_ALERT }),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
