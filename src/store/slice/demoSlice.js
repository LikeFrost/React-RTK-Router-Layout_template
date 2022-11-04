import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import demoService from '../../service/demoService';

export const getDemo = createAsyncThunk(
    "demo/getDemo",
    async () => {
        const res = await demoService.getDemo();
        return res.data;
    }
)

export const demoSlice = createSlice({
    name: 'demo',
    initialState: [],
    reducers: {
        clearDemo(state) {
            state = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDemo.fulfilled, (state, action) => {
            state = action.payload.data;
        })
    }
})

export const { clearDemo } = demoSlice.actions;
export default demoSlice.reducer;