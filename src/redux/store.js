import { configureStore } from "@reduxjs/toolkit";
import  saraflixSlice  from "./saraflixSlice";


export const store = configureStore({
    reducer: {
        saraflix: saraflixSlice,
    },
        middleware: getDefaultMiddleware => getDefaultMiddleware ({
            serializableCheck: false,
        })
    
})