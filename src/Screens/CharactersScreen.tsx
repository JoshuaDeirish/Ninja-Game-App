import React from "react";
import { CharacterSelection } from "../components/CharacterSelection/CharacterSelection";
import { CharacterList } from "../components/CharacterList/CharactersList";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const CharactersScreen = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((store: any) => store.login.isLoggedIn)

  if (!isLoggedIn) {
    navigate("/");
  }
  return (
    <>
      <CharacterList />
      <CharacterSelection
      />
    </>
  );
};