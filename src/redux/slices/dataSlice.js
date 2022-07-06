import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    today: {},
    customers: [],
    products: [
        {
            id: 304234,
            title: 'Birra Moretti',
            price: 1.50,
            stock: 15,
        },
        {
            id: 423,
            title: 'Tonic',
            price: 1.00,
            stock: 30,
        },
        {
            id: 234322,
            title: 'Spritz',
            price: 2.50,
            stock: null,
        },
        {
            id: 2343243,
            title: 'Coca Cola',
            price: 1.50,
            stock: 23,
        },
        {
            id: 4324324,
            title: 'Chinotto',
            price: 1.50,
            stock: 1,
        },
        {
            id: 0,
            title: 'Birra Moretti',
            price: 1.50,
            stock: 15,
        },
        {
            id: 1,
            title: 'Tonic',
            price: 1.00,
            stock: 30,
        },
        {
            id: 2,
            title: 'Spritz',
            price: 2.50,
            stock: null,
        },
        {
            id: 3,
            title: 'Coca Cola',
            price: 1.50,
            stock: 23,
        },
        {
            id: 4,
            title: 'Chinotto',
            price: 1.50,
            stock: 1,
        },
        {
            id: 345340,
            title: 'Birra Moretti',
            price: 1.50,
            stock: 15,
        },
        {
            id: 145334,
            title: 'Tonic',
            price: 1.00,
            stock: 30,
        },
        {
            id: 32432,
            title: 'Spritz',
            price: 2.50,
            stock: null,
        },
        {
            id: 323432,
            title: 'Coca Cola',
            price: 1.50,
            stock: 23,
        }
    ],
    orders: [],
    reports: []
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setToday: (state, { payload }) => {
            state.today = payload
        }
    }
})

export const { setToday } = dataSlice.actions

export default dataSlice.reducer
