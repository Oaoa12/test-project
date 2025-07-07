import React from 'react'
import './CreateProductPage.scss'
import { useNavigate } from 'react-router'

const CreateProductPage = () => {

    const navigate = useNavigate()

  return (

    <div className='container'>
      <h1>Создание типа продукции</h1>
      <form>
        <div className="form-row">
          <p>Кол-во пачек <span className='required'>*</span></p>
          <input type="text" />
        </div>
        <div className="form-row">
          <p>Тип упаковки <span className='required'>*</span></p>
          <select>
            <option>компрессия</option>
            <option>некомпрессия</option>
          </select>
        </div>
        <div className="form-row">
          <p>Архивировано</p>
          <input type="checkbox" />
        </div>
        <div className="form-row">
          <p>Описание</p>
          <input type="text" />
        </div>
        <div className='btns'>
          <button onClick={() => navigate('/')} className='cl-btn'>Отмена</button>
          <button className='crt-btn'>Создать</button>
        </div>
      </form>
    </div>
  )
}

export default CreateProductPage