import React from "react";
import { CharacterListItem } from './CharacterListItem/CharacterListitem';
const Characters = [
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
        dph: 80
    },
  ];

export const CharacterList = () => {
    return (
        <ul>
        {Characters.map((character) => (
        <CharacterListItem isChampion={Math.random() > 0.5} character={character} />
      ))}
    </ul>
    )
}