import React, { useState } from "react";
import './App.css';
import { Login } from './login/Login';
import { CharacterList } from './CharacterList/CharactersList.jsx';
//j
//React application can be represented as a tree of React components
//This is a react root component
//This type of components is called functional components
//Functional component should start with a capital letter,
 //return JSX and be exported from a file
 //try to abstain from default export

 //Let's create a functionality that only when user logged in as admin,
 //we can see the character list, otherwise we see the simple message like
 //"You are not logged in"

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const header = (
    //we can only use className in JSX, because class is a reserved word in JS
    //JSX can have only one parent element
   <div className="App">
     <h1 className="jsx-style">Hello, Sword Art Gamers</h1>
     <h3>Welcome</h3>
    </div>
  );

  const userNotLoggedIn = (
    <h3 className="not-logged-in">
      Please log in as admin to see character list
    </h3>
  );

  const   transformCharacterToListItem = (characters: any) => {
   return (
      
        <li key={characters.name}>
        <h3>{characters.name}</h3>
        <p>{characters.health}</p>
        <p>{characters.faction}</p>
        <p>{characters.weapon}</p>
        <p>{characters.dph}</p>
        </li>
   )
}



  const SwordArtHeader = React.createElement(
    'h1',
    {className: 'Sword-art-header'},
    'Hello, Sword Art Gamers'
  );
  return (
    <div className='App'>
      <Login setLoggedIn={setIsLoggedIn} />
      {isLoggedIn ? <CharacterList /> : userNotLoggedIn}
      
    </div>
  );
    
  
}


