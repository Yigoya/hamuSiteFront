import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode:'dark',
    user:null,
    token:null,
}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setMode:(s)=>{
            s.mode = s.mode === 'dark'?'light':'dark'
        },
        setUser:(s,a)=>{
            s.user = a.payload.user
            s.token = a.payload.token
        },
        userLogout:(s)=>{
            s.token = null
            s.user = null
        }
    }
})
export const { setMode,setUser,userLogout} = userSlice.actions
export default userSlice.reducer