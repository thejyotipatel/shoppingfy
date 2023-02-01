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
    let tempItem = {...action.payload.item, id:  new Date().getUTCMilliseconds(), showDeleteBtn: false}
    // tempItem.id = new Date().getUTCMilliseconds()
    // tempItem.showDeleteBtn = false
    // console.log(state.list)

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
    let tempSameItem = []
      // state.currentShoopingList.length === 0
      //   ? []
      //   : state.currentShoopingList.filter(
      //       (listItem) => listItem[0].id === action.payload.id
      //     )

    let list = null
    let alertType = ''
    let alertText = ''
    if (state.currentShoopingList.length === 0 || tempSameItem.length === 0) {
        let tempList = state.list.filter(
        (listItem) => listItem.id === action.payload.id
      )
      // list = [...state.currentShoopingList, tempItem]
      // console.log(tempList)
      // console.log(list)
   list= state.currentShoopingList.push(tempList)
      alertType = 'success'
      alertText = 'Item is added!'
    } else {
      list = state.currentShoopingList
      alertType = 'warning'
      alertText = 'Item is already added!'
    }
console.log(list)
    return {
      ...state,
      // currentShoopingList:  list,
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
        console.log(listItem.id)
        if (listItem[0].id === action.payload.id) {
          return { ...listItem, showDeleteBtn: !listItem[0].showDeleteBtn }
        }
        return listItem
      }
      // listItem[0].id === action.payload.id
      // : (listItem[0].showDeleteBtn = false)
      // ? (listItem[0].showDeleteBtn = true)
      // console.log(listItem)
    )
    // const newCompl = todos.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, compleated: !item.compleated }
    //   }
    //   return item
    // })
    console.log(tempList)
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
    return {
      ...state,
      currentShoopingList: [],
      currentShoopingListName: 'Grocery List',
      showAlert: true,
      alertType: 'warning',
      alertText: 'List is canceled!',
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
      showAlert: true,
      alertType: 'success',
      alertText: 'Current list name changed successfully!',
    }
  }
  return state
}

export default reducer
