import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";

export interface AppStore {
    user: UserInfo 
}

export interface UserInfo {
    user: string
    email: string
}

export default configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer
    }
})