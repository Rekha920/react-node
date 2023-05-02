import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from './Components/Login/loginSlice';

const store=configureStore({
    reducer:{
        Login:LoginReducer
    }
})

export default store;