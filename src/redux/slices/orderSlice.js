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
            state.orderProducts = [...state.orderProducts, payload]
        },
        clearProducts: state => {
            state.orderProducts = []
        }
    }
})

export const { addProduct, clearProducts } = orderSlice.actions

export default orderSlice.reducer
