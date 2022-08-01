import React, { useState } from "react";
import './App.css';
import { useFetch } from "../hooks/useFetch";
import { CharactersScreen } from "../Screens/CharactersScreen";
import { WinnerScreen } from "../Screens/WinnerScreen";
import { LoginScreen } from "../Screens/LoginScreen";
import { BattlegroundScreen } from "../Screens/BattlegroundScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  const [winner, setWinner] = useState(null);
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
        <Route path="/" element={<LoginScreen  />}/>
        <Route 
          path="/characters" 
          element={<CharactersScreen 
        />}/>
        <Route 
          path="/winner" 
          element={<WinnerScreen 
          winner={winner} 
        />}/>
        <Route 
          path="/battleground" 
          element={<BattlegroundScreen 
          setWinner={setWinner} 
          winner={winner}
        />}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
    
  
}


