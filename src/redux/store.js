import { configureStore } from "@reduxjs/toolkit"
import dataReducer from "./slices/dataSlice"
import orderReducer from "./slices/orderSlice"

export default configureStore({
    reducer: {
        data: dataReducer,
        order: orderReducer
    }
})
