import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../features/productSlice'
import './CreateProductPage.scss'

const CreateProductPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formRef = React.useRef(null)

  const handleSubmit = (e) => {
      e.preventDefault()
    const form = formRef.current
    const newProduct = {
      id: Date.now(),
      count: form.count.value,
      type: form.type.value,
      date: new Date().toLocaleDateString(),
      status: form.archived.checked ? 'Архив' : 'Активно'
    }
    dispatch(addProduct(newProduct))
    navigate('/')
  }

  return (
    <div className='container'>
      <h1>Создание типа продукции</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-row">
          <p>Кол-во пачек <span className='required'>*</span></p>
          <input name="count" type="text" required />
        </div>
        <div className="form-row">
          <p>Тип упаковки <span className='required'>*</span></p>
          <select name="type" required>
            <option value="компрессия">компрессия</option>
            <option value="некомпрессия">некомпрессия</option>
          </select>
        </div>
        <div className="form-row">
          <p>Архивировано</p>
          <input name="archived" type="checkbox" />
        </div>
        <div className="form-row">
          <p>Описание</p>
          <input name="description" type="text" />
        </div>
        <div className='btns'>
          <button type="button" onClick={() => navigate('/')} className='cl-btn'>Отмена</button>
          <button type="submit" className='crt-btn'>Создать</button>
        </div>
      </form>
    </div>
  )
}

export default CreateProductPage