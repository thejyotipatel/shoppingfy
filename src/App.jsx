import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './context/reducer'

import List from './utils/List'

import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import History from './pages/History'
import Statistics from './pages/Statistics'

// redux
const initialStore = {
  list: List,
  filterItems: [],
  searchQuery: '',
  itemDetails: null,
  currentShoopingList: [],
  currentShoopingListName: 'Grocery List',
  shoopingLists: [],
  detailBox: false,
  addItemBox: false,
  listsBox: true,
  showAlert: false,
  alertText: '',
  alertType: '',
}
const store = createStore(reducer, initialStore)
// router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/shoppingfy/' element={<Dashboard />}>
      <Route index element={<Home />} />
      <Route path='history' element={<History />} />
      <Route path='statistics' element={<Statistics />} />
    </Route>
  )
)
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
