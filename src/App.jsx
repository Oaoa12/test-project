import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './components/app/store'
import MainPage from './components/pages/mainPage/MainPage'
import CreateProductPage from './components/pages/createProductPage/CreateProductPage'
import EditProductPage from './components/pages/editProductsPage/EditProductPage'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="/create-product" element={<CreateProductPage />} />
          <Route path='/edit-product' element={<EditProductPage />}/>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App