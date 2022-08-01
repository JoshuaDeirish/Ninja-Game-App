import { configureStore } from '@reduxjs/toolkit'
import  charactersReducer  from './slices/charactersSlice.js'
import loginSlice from './slices/loginSlice.js'
export default configureStore({
  reducer: {
  characters: charactersReducer,
  loginSlice: loginReducer
  },
  
})