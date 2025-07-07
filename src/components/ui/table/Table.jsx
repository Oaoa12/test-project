import React from 'react'
import './Table.scss'

const Table = ({ data }) => {



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
            {data.map((i) => (
                <tr key={i.id}>
                    <td>{i.id}</td>
                    <td>{i.count}</td>
                    <td>{i.type}</td>
                    <td>{i.date}</td>
                    <td>
                        <div className='status'>
                        {i.status}
                            <div className='status-icons'>                
                                <img className='que-icon' src="/question.png" alt="Info Icon" />
                                <img className='pencil-icon' src="/pencil.png" alt="Pencil Icon" />
                                <img className='trash-icon' src="/trash.png" alt="Delete Icon" />
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
