import React from "react";
import { CharacterSelection } from "../components/CharacterSelection/CharacterSelection";
import { CharacterList } from "../components/CharacterList/CharactersList";
import { useNavigate } from "react-router-dom";

export const CharactersScreen = ({
  characters,
  isLoggedIn,
  setBattleCharacters,
}) => {
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate("/");
  }
  return (
    <>
      <CharacterList characters={characters} />
      <CharacterSelection
        characters={characters}
        setBattleCharacters={setBattleCharacters}
      />
    </>
  );
};