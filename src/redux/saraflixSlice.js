import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: {},
}


export const saraflixSlice = createSlice({
    name: "saraflix",
    initialState,
    reducers: {
        getMovieInfo:(state, action) => {
            state.movie = action.payload
        }
    }
})

export const {getMovieInfo} = saraflixSlice.actions;

export default saraflixSlice.reducer;
