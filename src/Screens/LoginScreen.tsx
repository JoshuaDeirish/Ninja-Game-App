import React, { useState, useRef, useEffect } from "react";
import { Input, Flex, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const adminCredentials = { 
  userName: "admin", 
  password: "admin" 
};

interface LoginProps {
  setLoggedIn: (isLoggedIn: boolean) => void;
}
export const LoginScreen = ({ setLoggedIn }: LoginProps) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const countRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

 
  useEffect(() => {
    if (inputRef.current)
    inputRef.current.focus();
  }, []);
  const usernameHandler = (event: any) => {
    countRef.current++
    setUserName(event.target.value);
  };

  const loginHandler = (event: any) => {
    if (
      userName === adminCredentials.userName &&
      password === adminCredentials.password
    ){
      setLoggedIn(true);
      navigate("/characters");
    }
    else {
      setLoggedIn(false);
    }
  };
  
  return (
    <Flex justify={"center"} direction="column" align={"center"}>
      <Text size={"lg"} mb="1%">
        User name:{" "}
        </Text>
      <Input 
        mb="2%"
        ref={inputRef} 
        type="text" 
        value={userName} 
        width="50%"
        onChange={usernameHandler} 
      />
      <Text size={"lg"} mb="1%">
        Password:{" "}
        </Text>
      <Input
        mb="2%"
        type="password"
        value={password}
        width="50%"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button colorScheme={"red"} onClick={loginHandler}>
        Login
      </Button>
    </Flex>
  );
};