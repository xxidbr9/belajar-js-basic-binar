import React, { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const App_useCustomHook = () => {
  // const [accessToken, setAccessToken] = useState("");

  // useEffect(() => {
  //   // local Access Token
  //   const lclAccessToken = localStorage.getItem("access_token");
  //   if (lclAccessToken) {
  //     setAccessToken(lclAccessToken);
  //   }
  // }, []);
  const [jwt, setJwt, deleteJwt] = useLocalStorage("access_token_jwt", "");

  const [inputValue, setInputValue] = useState("");

  const handleJwtChange = () => {
    setJwt(inputValue);
  };
  return (
    <div>
      <div>JWT: {jwt}</div>
      <input
        type='text'
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button onClick={handleJwtChange}>Ganti JWT</button>
    </div>
  );
};

export default App_useCustomHook;
