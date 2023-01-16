import React from 'react'
import { Grid, Box, Alert, AlertIcon } from '@chakra-ui/react'
import {connect} from 'react-redux'
import Sidebar from '../layout/Sidebar'
import Home from './Home'
import AddItemsList from '../layout/AddItemsList'
import ShoppingList from '../layout/ShoppingList'
import DetailItem from '../layout/DetailItem'

const Dashboard = ({ detailBox ,
  addItemBox,
  listsBox }) => {
  
  return (
    <>
      {/* {showAlert && (
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
      )} */}
      <Grid gridTemplateColumns={'73% 27%'} justify-items={'stretch'}>
        <Box>
          <Sidebar />
        </Box>
         {detailBox && <DetailItem />}
        {addItemBox && <AddItemsList />}
        {listsBox && <ShoppingList />}
        <ShoppingList />
      </Grid>
    </>
  )
}

const mapStateToProps= state=>{
  // console.log(state)
  return {  detailBox: state.detailBox,
  addItemBox: state.addItemBox,
  listsBox: state.listBox }
}

export default connect(mapStateToProps)(Dashboard)
