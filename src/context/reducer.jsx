import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  DISPLAY_ITEM_DETAILS,
  ADD_ITEM_TO_LIST,
  DELETE_ITEM_FROM_LIST,
  ADD_ITEM_BUTTON,
  BACK_BUTTEN,ADD_ITEM_TO_SHOPPING_LIST,
  SET_COMPLETE_ITEM,CANCLE_LIST,
  CHECK_ALREADY_PRESENT_ITEM,RENAME_LIST,SET_COMPLETE_LIST
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
  if (action.type === ADD_ITEM_BUTTON) {
    return {
      ...state,
      detailBox: false,
      addItemBox: true,
      listsBox: false,
    }
  }
  if (action.type === ADD_ITEM_TO_LIST) {
    
    // action.payload.item.id =  
    let tempItem = action.payload.item
    tempItem.id = new Date().getUTCMilliseconds()
    console.log(action.payload.item)
    
    // let tempList = state.list.filter(listItem  => listItem.id !== state.itemDetails[0].id)
     return {
      ...state,
      list: [...state.list, action.payload.item],
      detailBox: false,
      addItemBox: true,
      listsBox: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Item is added!',
    }
  }
   if (action.type === ADD_ITEM_TO_SHOPPING_LIST) {
    return {
      ...state,
     
    }
  } 
  if (action.type === CANCLE_LIST) {
    return {
      ...state, 
    }
  }
  if (action.type === SET_COMPLETE_LIST) {
    return {
      ...state, 
    }
  }
  if (action.type === RENAME_LIST) {
    return {
      ...state, 
      currentShoopingListName: action.payload.listName,
    }
  }
  return state
}

export default reducer
