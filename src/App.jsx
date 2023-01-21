import Dashboard from './pages/Dashboard'
import List from './utils/List'
import { createStore } from 'redux'
import reducer from './context/reducer'
import { Provider } from 'react-redux'
// import { HANDLE_CHANGE } from './context/action'

const initialStore = {
  list: List,
  filterItems: [],
  searchQuery: '',
  shoopingList: [],
  itemDetails: null,
  currentShoopingListName: 'Shooping List',
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
