import { configureStore } from '@reduxjs/toolkit'
import  charactersReducer  from './slices/charactersSlice.js'

export default configureStore({
  reducer: {
  characters: charactersReducer 
  },
})