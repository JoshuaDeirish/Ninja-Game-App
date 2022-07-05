import React, { useState } from "react";
import './App.css';
import { Login } from './login/Login';
import { CharacterList } from './CharacterList/CharactersList.jsx';
import { useFetch } from "../hooks/useFetch";
import { CharacterSelection } from "./CharacterSelection/CharacterSelection";


export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        dph: 75
    },
    {
        name: 'Itachi', 
        health: 130, 
        faction: 'Akatski', 
        weapon: 'Amaturasu', 
        dph: 75
    },
    {
        name: 'Might Guy', 
        health: 125, 
        faction: 'Leaf', 
        weapon: '7 Gate', 
        dph: 70
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

  const userNotLoggedIn = (
    <h3 className="not-logged-in">
      Please log in as admin to see character list
    </h3>
  );
  return (
    <div className='App'>
      {!isLoggedIn ? <Login setLoggedIn={setIsLoggedIn} /> : null}
      {isLoggedIn ? <CharacterList characters={characters} /> : userNotLoggedIn}
      {isLoggedIn ? <CharacterSelection characters={characters} /> : null}
    </div>
  );
    
  
}


/*const header = (
      //we can only use className in JSX, because class is a reserved word in JS
      //JSX can have only one parent element
    <div className="App">
      <h1 className="jsx-style">Hello, Sword Art Gamers</h1>
      <h3>Welcome</h3>
      </div>
    );
    
  
  const SwordArtHeader = React.createElement(
    'h1',
    {className: 'Sword-art-header'},
    'Hello, Sword Art Gamers'
  );
 */