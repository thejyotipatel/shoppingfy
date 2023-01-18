import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  DISPLAY_ITEM_DETAILS,
  ADD_ITEM_TO_LIST,
  DELETE_ITEM_FROM_LIST,
  ADD_ITEM_BUTTON,
  BACK_BUTTEN,
  SET_COMPLETE_ITEM,
  CHECK_ALREADY_PRESENT_ITEM,
} from './action'

const reducer = (state, action) => {
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
    let tempId = state.list.filter(
        (listItem) => listItem.id === action.payload.id
      )
    return {
      ...state,
      itemDetails: tempId,
      detailBox: true,
      addItemBox: false,
      listsBox: false,
    }
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
    let tempList = state.list.filter(
      (listItem) => listItem.id !== state.itemDetails[0].id
    )
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
  if (action.type === ADD_ITEM_TO_LIST) {
    console.log(new Date().getUTCMilliseconds())
    // let tempList = state.list.filter(listItem  => listItem.id !== state.itemDetails[0].id)
    //  return {
    //   ...state,
    //   list: tempList,
    //   detailBox: false,
    //   addItemBox: false,
    //   listsBox: true,
    //   showAlert: true,
    //   alertType: 'warning',
    //   alertText: 'Item is deleted!',
    // }
  }
  return state
}

export default reducer
