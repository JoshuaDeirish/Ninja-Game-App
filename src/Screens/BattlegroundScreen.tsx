import React, { useRef, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useInterval } from "../hooks/useInterval";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const BattlegroundScreen = ({ isLoggedIn, setWinner, winner }) => {
  const battleCharacters = useSelector((store: any) => store.characters.battleCharacters);

  const [ninjaOne, ninjaTwo] = battleCharacters;
  const [firstAttacks, setFirstAttacks] = useState(false);
  const [secondAttacks, setSecondAttacks] = useState(false);
  const attacksByNinjaOne = useRef(0);
  const attacksByNinjaTwo = useRef(0);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/");
  }

  const handleNinjasClash = () => {
    const { name, dph } = ninjaOne;
    setSecondAttacks(false);
    setFirstAttacks(true);
    attacksByNinjaOne.current += 1;
    if (ninjaTwo.health - dph * attacksByNinjaOne.current <= 0) {
      setWinner(name);
      navigate("/winner");
      return;
    }
    setTimeout(() => handleSecondNinjaAttack(), 2000);
  };
  useInterval(() => handleNinjasClash(), winner ? null : 4000);

  const handleSecondNinjaAttack = () => {
    const { name, dph } = ninjaTwo;
    setFirstAttacks(false);
    setSecondAttacks(true);
    attacksByNinjaTwo.current += 1;
    if (ninjaOne.health - dph * attacksByNinjaTwo.current <= 0) {
      setWinner(name);
      navigate("/winner");
      return;
    }
  };
  return (
    <Flex justify={"center"} align={"center"} direction={"column"} h="90vh">
    <Text mt="2%" fontSize={"3xl"} fontWeight="700">
      Let's get ready to the fight
    </Text>
    <Text mt="2%" fontSize={"2xl"} fontWeight="600">
      {ninjaOne.name} health:{" "}
      {ninjaOne.health -
        ninjaTwo.dph * attacksByNinjaTwo.current}
    </Text>
    <Text mt="2%" fontSize={"2xl"} fontWeight="600">
      {ninjaTwo.name} health:{" "}
      {ninjaTwo.health -
        ninjaOne.dph * attacksByNinjaOne.current}
    </Text>
    <Box w="80%" h="100%" mt="3%" border="0.5rem dotted black">
      {firstAttacks ? (
        <Text mt="2%" fontSize={"2xl"} fontWeight="500">
          {ninjaOne.name} strikes {ninjaTwo.name} for{" "}
          {ninjaOne.dph}
        </Text>
      ) : null}
      {secondAttacks ? (
        <Text mt="35%" fontSize={"2xl"} fontWeight="500">
          {ninjaTwo.name} strikes {ninjaOne.name} for{" "}
          {ninjaTwo.dph}
        </Text>
      ) : null}
    </Box>
  </Flex>
  );
};