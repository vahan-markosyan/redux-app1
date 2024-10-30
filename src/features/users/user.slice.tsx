import axios from "axios";
import { createAppSlice } from "../../app/createAppSlice";
import { IState, IUser } from "./types";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState:IState = {
    list:[]
}

export const UserSlice = createAppSlice({
    name:"users",
    initialState,
    reducers: create => ({
        getAllUsers: create.asyncThunk(
            async() => {
             const response = await axios.get("http://localhost:3004/users")
             return response.data
            },
            {
             fulfilled: (state, action:PayloadAction<IUser[]>) => {
                 state.list = action.payload
                 console.log(state.list)
             }
            }
         ),
         deleteUser: create.asyncThunk(
            async(id:number) => {
                const response = await axios.delete("http://localhost:3004/users/" + id)
                return response.data
            },
            {
             fulfilled: (state, action:PayloadAction<number>) => {
               state.list = state.list.filter(user => user.id !== action.payload)
               console.log(state.list)
             }
            }
         )
    }),
    selectors: {
        users: state => state.list
    }
})

export const {users} = UserSlice.selectors
export const {getAllUsers, deleteUser} = UserSlice.actions