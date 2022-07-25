import { createSlice } from '@reduxjs/toolkit'

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characterList: [
        {
            name: 'Naruto', 
            health: 150, 
            faction: 'leaf', 
            weapon: 'Rasengan', 
            dph: 80
        },
        {
            name: 'Sasuke', 
            health: 145, 
            faction: 'hawk', 
            weapon: 'Chidori', 
            dph: 25
        },
        {
            name: 'Itachi', 
            health: 130, 
            faction: 'Akatski', 
            weapon: 'Amaturasu', 
            dph: 25
        },
        {
            name: 'Might Guy', 
            health: 125, 
            faction: 'Leaf', 
            weapon: '7 Gate', 
            dph: 70
        },
        {
            name: 'Pain', 
            health: 145, 
            faction: 'Akatski', 
            weapon: 'Almighty Push', 
            dph: 90
        },
    ],
    battleCharacters: [],
  },
  reducers: {
    setBattleCharacters: (state, action) => {
        return {
            characterList: state.characterList,
            battleCharacters: action.payload,
        }        
    }
      
  },
})

// Action creators are generated for each case reducer function
export const { setBattleCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;