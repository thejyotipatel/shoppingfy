import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  HANDLE_CHANGE,
  DISPLAY_ITEM_DETAILS,
  DELETE_ITEM,
  ADD_ITEM_TO_LIST,
  DELETE_ITEM_FROM_LIST,
  BACK_BUTTEN,
  ADD_ITEM_TOOGLE_BUTTON,
  SET_COMPLETE_ITEM,
  CHECK_ALREADY_PRESENT_ITEM,ADD_ITEM_BUTTON
} from './action'

const reducer = (state, action) => {
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    }
  }
   if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'warning',
      alertText: 'Please provide all values!',
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }
  if (action.type === DISPLAY_ITEM_DETAILS) {
    // console.log(state)
    return {
      ...state,
      itemDetails: state.list.filter(
        (listItem) => listItem.id === action.payload.id
      ),
      detailBox: true,
      addItemBox: false,
      listsBox: false,
      

    }
    // console.log(state)
  }
  if (action.type === BACK_BUTTEN) {
    return {
      ...state,
      detailBox: false,
      addItemBox: false,
      listsBox: true,
    }
  }
  if (action.type === ADD_ITEM_BUTTON) {
  return {
      ...state, 
      detailBox: false,
      addItemBox: true,
      listsBox: false,
  }
  }
  if (action.type === DELETE_ITEM_FROM_LIST) {
    // console.log(state.itemDetails[0].id)
    let tempList = state.list.filter(listItem  => listItem.id !== state.itemDetails[0].id)
     return {
      ...state,
      list: tempList,
      detailBox: false,
      addItemBox: false,
      listsBox: true,
      showAlert: true,
      alertType: 'warning',
      alertText: 'Item is deleted!',
    }
  }
  return state
}

export default reducer
