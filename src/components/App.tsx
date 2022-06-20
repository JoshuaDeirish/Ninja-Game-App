import React, { useState } from "react";
import './App.css';
import { Login } from './login/Login';
import { CharacterList } from './CharacterList/CharactersList.jsx';
import { useFetch } from "../hooks/useFetch";


export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { response, error } = useFetch(
    "https://jsonplaceholdser.typicode.com/posts"
    );

    if (!response) {
      return <>Loading...</>;
    }

    if (response) {
      console.log(response);    
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
      <Login setLoggedIn={setIsLoggedIn} />
      {isLoggedIn ? <CharacterList /> : userNotLoggedIn}
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