import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// const geAllData = createAsyncThunk("getImages", async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=50")
//     const results = response.json()
//     return results
// })
export const geAllData = createAsyncThunk('getImages',async(args,{rejectWithValue}) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    try {
        const result = await response.json();
        return result.data
    } catch (error) {
      return rejectWithValue(error)
    }
  })


const getImages = createSlice({
    name: 'getImages',
    initialState: {
        Images: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [geAllData.pending]: (state) => {
            state.loading = true
        },
        [geAllData.fulfilled]: (state, action) => {
            state.loading = false;
            state.Images = action.payload;
        },
        [geAllData.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload
        },
    }
})

export default getImages.reducer;
// export {geAllData};