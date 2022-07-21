import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    order: {},
    orderProducts: [],
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            state.orderProducts = state.orderProducts?.find(p => p.id === payload.id) ? state.orderProducts?.map(p => p.id === payload.id ? { ...p, qty: p.qty + 1 } : p) : [...state.orderProducts, payload]
        },
        clearProducts: state => {
            state.orderProducts = []
        }
    }
})

export const { addProduct, clearProducts } = orderSlice.actions

export default orderSlice.reducer
