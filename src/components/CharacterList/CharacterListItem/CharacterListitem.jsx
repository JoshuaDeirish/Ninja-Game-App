import React from "react";
import './CharacterListItem.css';
import { Td, Tr } from "@chakra-ui/react";

export const CharacterListItem = ({ character, isChamp }) => {
    const { name, health, faction, weapon, dph } = character;
   // console.log('Props', props)
    return (
        
        <Tr key={name}>
            <Td className="character-Name">
                {isChamp ? `Champ ${name}` : name}
                </Td>
            <Td isNumeric>{health}</Td>
            <Td>{faction}</Td>
            <Td>{weapon}</Td>
            <Td isNumeric>{dph}</Td>
        </Tr>
        
    );
}
    
  