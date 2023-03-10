export const DISPLAY_ALERT = 'SHOW_ALERT'
export const CLEAR_ALERT = 'CLEAR_ALERT'

export const DISPLAY_ITEM_DETAILS = 'DISPLAY_ITEM_DETAILS'

export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST'
export const DELETE_ITEM_FROM_LIST = 'DELETE_ITEM_TO_LIST'

export const ADD_ITEM_BUTTON = 'ADD_ITEM_BUTTON'
export const BACK_BUTTEN = 'BACK_BUTTEN'

export const ADD_ITEM_TO_SHOPPING_LIST = 'ADD_ITEM_TO_SHOPPING_LIST'
export const RENAME_LIST = 'RENAME_LIST'
export const DELETE_TOGGLE = 'DELETE_TOGGLE'
export const DELETE_ITEM_FROM_SHOPPING_LIST = 'DELETE_ITEM_FROM_SHOPPING_LIST'
export const CANCEL_LIST = 'CANCEL_LIST'
export const SET_COMPLETE_LIST = 'SET_COMPLETE_LIST'

export const SET_COMPLETE_ITEM = 'SET_COMPLETE_ITEM'
export const CHECK_ALREADY_PRESENT_ITEM = 'CHECK_ALREADY_PRESENT_ITEM'

// export const backBtn = ()=>{
//  return { type: BACK_BUTTEN }
// }
export const addItem = (props) => {
  return { type: ADD_ITEM_TO_SHOPPING_LIST, payload: { id: props } }
}
