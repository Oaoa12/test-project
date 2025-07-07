import { Route, Routes } from 'react-router'
import './App.css'
import MainPage from './components/pages/mainPage/MainPage'
import CreateProductPage from './components/pages/createProductPage/CreateProductPage'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/create-product' element={<CreateProductPage />}/>
      </Routes>
     
    </>
  )
}

export default App
