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
  CHECK_ALREADY_PRESENT_ITEM,
} from './action'

const reducer = (state, action) => { 
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state, 
      [action.payload.name]: action.payload.value,
    }
  }
  if (action.type === DISPLAY_ITEM_DETAILS) {
    return {
      ...state,
      itemDetails: state.list.filter(listItem=> listItem.id === action.payload.id),
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
  if (action.type === ADD_ITEM_TO_LIST) {
    console.log(action.payload.id)
    // return {
    //   ...state,
    //   detailBox: false,
    //   addItemBox: false,
    //   listsBox: true,
    // }
  }
  if (action.type === DELETE_ITEM_FROM_LIST) {
    console.log(action.payload.id)
    // return {
    //   ...state,
    //   detailBox: false,
    //   addItemBox: false,
    //   listsBox: true,
    // }
  }
  return state
}

export default reducer
