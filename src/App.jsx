import Dashboard from './pages/Dashboard'
import List from './utils/List'
import { createStore } from 'redux'
import reducer from './context/reducer'
import { Provider } from 'react-redux'

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

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  )
}

export default App
