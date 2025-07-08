import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Table from '../../ui/table/Table'
import './MainPage.scss'

const MainPage = () => {
  const products = useSelector(state => state.products.items)
  const navigate = useNavigate()

  return (
    <div className='container'>
      <h1>Список выпускаемой продукции</h1>
      <button onClick={() => navigate('/create-product')}>
        Создать тип продукции
      </button>
      <div className='table'>
        <Table data={products} />
      </div>
    </div>
  )
}

export default MainPage