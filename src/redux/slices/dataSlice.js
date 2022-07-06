import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    today: {},
    customers: [],
    products: [],
    orders: [],
    reports: []
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setToday: (state, { payload }) => {
            state.today = payload
        },
        setProducts: (state, { payload }) => {
            state.products = payload
        }
    }
})

export const { setToday, setProducts } = dataSlice.actions

export default dataSlice.reducer
