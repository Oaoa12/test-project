import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../features/productSlice'
import './Table.scss'
import { useNavigate } from 'react-router-dom';

const Table = ({ data }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Кол-во пачек</th>
            <th>Тип упаковки</th>
            <th>Дата создания</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.count}</td>
              <td>{item.type}</td>
              <td>{item.date}</td>
              <td>
                <div className='status'>
                  {item.status}
                  <div className='status-icons'>                
                    <img className='que-icon' src="/question.png" alt="Info" />
                    <img 
                      className='pencil-icon'
                      src="/pencil.png"
                      onClick={() => navigate('/edit-product')}
                      alt="Edit" 
                      />
                    <img 
                      className='trash-icon' 
                      src="/trash.png" 
                      onClick={() => dispatch(deleteProduct(item.id))} 
                      alt="Delete" 
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table