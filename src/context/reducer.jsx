import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  DISPLAY_ITEM_DETAILS,
  ADD_ITEM_TO_LIST,
  DELETE_ITEM_FROM_LIST,
  ADD_ITEM_BUTTON,
  BACK_BUTTEN,
  ADD_ITEM_TO_SHOPPING_LIST,
  SET_COMPLETE_ITEM,
  CANCEL_LIST,
  CHECK_ALREADY_PRESENT_ITEM,
  RENAME_LIST,
  SET_COMPLETE_LIST,
  DELETE_ITEM_FROM_SHOPPING_LIST,
  DELETE_TOGGLE,
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
    let tempItem = {
      ...action.payload.item,
      id: new Date().getUTCMilliseconds(),
      showDeleteBtn: false,
    }
    return {
      ...state,
      list: [...state.list, tempItem],
      detailBox: false,
      addItemBox: true,
      listsBox: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Item is added!',
    }
  }
  if (action.type === ADD_ITEM_TO_SHOPPING_LIST) {
    let tempList = null
    
    let tempSameItem =
    state.currentShoopingList.length === 0
    ? []
    : state.currentShoopingList.filter((listItem) => listItem[0].id === action.payload.id)
    
    let alertType = ''
    let alertText = ''

    if (state.currentShoopingList.length === 0 || tempSameItem.length === 0) {
     tempList = state.list.filter((listItem) =>
        listItem.id === action.payload.id 
      ) 
      alertType = 'success'
      alertText = 'Item is added!'
    } else {
      alertType = 'warning'
      alertText = 'Item is already added!'
    }
    return {
      ...state,
      currentShoopingList: tempList === null?state.currentShoopingList:[...state.currentShoopingList,tempList ],
      detailBox: false,
      addItemBox: false,
      listsBox: true,
      showAlert: true,
      alertType: alertType,
      alertText: alertText,
    }
  }
  if (action.type === DELETE_TOGGLE) {
    let tempList = state.currentShoopingList.map(
      (listItem) => {
        if (listItem[0].id === action.payload.id) {
           listItem[0].showDeleteBtn= !listItem[0].showDeleteBtn 
        }else{
          listItem[0].showDeleteBtn= false
        }
        return listItem
      }
   )
    return {
      ...state,
      currentShoopingList: tempList,
    }
  }
  if (action.type === DELETE_ITEM_FROM_SHOPPING_LIST) {
    let tempList = state.currentShoopingList.filter(
      (listItem) => listItem[0].id !== action.payload.id
    )
    return {
      ...state,
      currentShoopingList: tempList,
      showAlert: true,
      alertType: 'warning',
      alertText: 'Item is deleted!',
    }
  }
  if (action.type === CANCEL_LIST) {
    let list = {
      list:state.currentShoopingList, id: new Date().getUTCMilliseconds(), shoppingListName: state.currentShoopingListName,status: 'Canceled'
    }
    return {
      ...state,
      shoopingLists: [...state.shoopingLists, list],
      currentShoopingList: [],
      currentShoopingListName: 'Grocery List',
      showAlert: true,
      alertType: 'warning',
      alertText: 'List is canceled!',
    }
  }
  if (action.type === SET_COMPLETE_LIST) {
    let list = {
      list:state.currentShoopingList, id: new Date().getUTCMilliseconds(), shoppingListName: state.currentShoopingListName,status: 'Completed'
    }
    // console.log(state.shoopingLists)
    // console.log(list)
    return {
      ...state,
      shoopingLists: [...state.shoopingLists, list],
      currentShoopingList: [],
      currentShoopingListName: 'Grocery List',
      showAlert: true,
      alertType: 'warning',
      alertText: 'List is completed!',
    }
  }
  if (action.type === RENAME_LIST) {
    return {
      ...state,
      currentShoopingListName: action.payload.listName,
      showAlert: true,
      alertType: 'success',
      alertText: 'Current list name changed successfully!',
    }
  }
  return state
}

export default reducer
