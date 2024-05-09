import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state, action) => {
            state.login.isFetching = false;
            state.login.error = true;
            // Có thể sử dụng action.payload để truyền thông điệp lỗi cụ thể nếu cần
        }
    }
});

export const {
    loginStart,
    loginFailed,
    loginSuccess
} = authSlice.actions;

export default authSlice.reducer;
