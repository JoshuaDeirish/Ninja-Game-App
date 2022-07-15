import React, { useState } from "react";
import './App.css';
import { useFetch } from "../hooks/useFetch";
import { CharactersScreen } from "../Screens/CharactersScreen";
import { WinnerScreen } from "../Screens/WinnerScreen";
import { LoginScreen } from "../Screens/LoginScreen";
import { BattlegroundScreen } from "../Screens/BattlegroundScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [battleCharacters, setBattleCharacters] = useState([]);
  const [winner, setWinner] = useState(null);
  const characters = [
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
  ];
  const { response, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response) {
      return <>Loading...</>;
    }
    if (error && error instanceof Error) {
      return <>Error: {error.message}</>;
    }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen setLoggedIn={setIsLoggedIn} />}/>
        <Route path="/characters" 
          element={<CharactersScreen 
          isLoggedIn={isLoggedIn} 
          characters={characters}
          setBattleCharacters={setBattleCharacters}        
        />}/>
        <Route path="/winner" 
          element={<WinnerScreen 
          isLoggedIn={isLoggedIn} 
          winner={winner} 
        />}/>
        <Route path="/battleground" 
          element={<BattlegroundScreen 
          isLoggedIn={isLoggedIn} 
          setWinner={setWinner} 
          battleCharacters={battleCharacters} 
          winner={winner}
        />}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
    
  
}


