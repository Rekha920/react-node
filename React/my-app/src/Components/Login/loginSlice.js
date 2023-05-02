// import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { loginAPI } from './authAPI';

// const initialState = {
//   email: '',
//   password: '',
//   isLoading: false,
//   error: null,
//   isLoggedIn: false,
// };


// export const login = createAsyncThunk('auth/login', async ({ email, password, rememberMe }) => {
//   const response = await loginAPI(email, password, rememberMe);
//   return response.data;
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setEmail: (state, action) => {
//       state.email = action.payload;
//     },
//     setPassword: (state, action) => {
//       state.password = action.payload;
//     },
//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//     setLoggedIn: (state, action) => {
//       state.isLoggedIn = action.payload;
//     },
//   },
// });

// export const { setEmail, setPassword, setLoading, setError, setLoggedIn } = authSlice.actions;

// export default authSlice.reducer;
