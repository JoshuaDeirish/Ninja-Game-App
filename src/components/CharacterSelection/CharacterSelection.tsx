import React from "react";
import { Text, Checkbox, CheckboxGroup, Stack, Flex, Button, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const CharacterSelection = ({ characters, setBattleCharacters, }) => {
  const [ninjaSelected, setNinjaSelected] = useState<Array<string>>([]);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const navigate = useNavigate();

  const onNinjaChanged = (event) => {
    const ninja = event.target.value
    if (ninjaSelected.includes(ninja)) {
      setNinjaSelected(ninjaSelected.filter(n => n !== ninja));
    } else {
      setNinjaSelected([...ninjaSelected, ninja]);
    }
  };

  const onFightStart = (e) => {
    if (ninjaSelected.length !== 2) {
      setIsAlertVisible(true);
      return;
    }
    setIsAlertVisible(false);
    setBattleCharacters(
      characters.filter((character) => ninjaSelected.includes(character.name))
    );
    navigate("/battleground")
  };

  const alert = (
    <Alert status="error">
      <AlertIcon />
      Please select only two heroes!
    </Alert>
  );
    return (
    <Flex justify={"center"} align={"center"} direction={"column"}>
      <Text fontSize={"4xl"}>Select your Ninja!</Text>
      <CheckboxGroup colorScheme="red">
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          {characters.map((character: any) => (
            <Checkbox 
            isChecked={ninjaSelected.includes(character.name)}
            onChange={onNinjaChanged}
            value={character.name} 
            key={character.name}>
              {character.name}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      <Button mt={"3%"} mb={"3%"} colorScheme="red"
      variant="solid"
      onClick={onFightStart}
      >
        Start the battle!
      </Button>
      {isAlertVisible && alert}
    </Flex>
  );
}; 