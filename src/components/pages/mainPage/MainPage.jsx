import React from 'react'
import './MainPage.scss'
import { useNavigate } from 'react-router'
import Table from '../../ui/table/Table'

const MainPage = () => {

    const PRODUCTS = [
        {id: 1, count: 20, type: 'компрессия', date: '01.02.2024', status: 'Активно'},
        {id: 2, count: 12, type: 'некомпрессия', date: '25.01.2024', status: 'Активно'},
        {id: 3, count: 24, type: 'компрессия', date: '23.01.2024', status: 'Архив'},
    ]

 const navigate = useNavigate()

  return (

    <div className='container'>
      <h1>Список выпускаемой продукции</h1>
      <button onClick={() => navigate('/create-product')}>Создать тип продукции</button>
      <div className='table'>
      <Table data={PRODUCTS}/>
      </div>
    </div>
  )
}

export default MainPage
