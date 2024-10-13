import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullname: '',
    username: '',
    email: '',
    id: '',
    moods: [],
    weekly: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFullnameContext: (state, action) => {
            state.fullname = action.payload;
        },
        setUsernameContext: (state, action) => {
            state.username = action.payload;
        },
        setEmailContext: (state, action) => {
            state.email = action.payload;
        },
        setIdContext: (state, action) => {
            state.id = action.payload;
        },
        setMoodContext: (state, action) => {
            state.moods = action.payload;
        },
        setWeeklyContext : (state,action)=>{
            state.weekly = action.payload;
        }
    }
});

export const { setFullnameContext, setUsernameContext, setEmailContext, setIdContext, setMoodContext,setWeeklyContext } = userSlice.actions;
export default userSlice.reducer;
