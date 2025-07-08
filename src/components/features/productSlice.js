import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {id: 1, count: 20, type: 'компрессия', date: '01.02.2024', status: 'Активно'},
    {id: 2, count: 12, type: 'некомпрессия', date: '25.01.2024', status: 'Активно'},
    {id: 3, count: 24, type: 'компрессия', date: '23.01.2024', status: 'Архив'}
  ]
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload)
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    }
  }
})

export const { addProduct, deleteProduct } = productSlice.actions
export default productSlice.reducer