import React from "react"
import './CharacterListItem.css'

export const CharacterListItem = ({Characters, isChampion}) => {
    const {name, health, faction, weapon, dph} = Characters;
   // console.log('Props', props)
    return (
        <ul>
            <li key={name}>
            <span className="Character-Name">{isChampion ? `Champion ${name}` : name}</span>
            <span>{health}</span>
            <span>{faction}</span>
            <span>{weapon}</span>
            <span>{dph}</span>
            </li>
        </ul>
    );
}
    
  