import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    customers: [],
    products: [],
    orders: [],
    reports: []
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload
        },
        setCustomers: (state, { payload }) => {
            state.customers = payload
        },
        setOrders: (state, { payload }) => {
            state.orders = payload
        }
    }
})

export const { setProducts, setCustomers, setOrders } = dataSlice.actions

export default dataSlice.reducer
