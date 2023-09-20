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
      <button onClick={deleteJwt}>Hapus JWT</button>
      <UserInfo />
    </div>
  );
};

const UserInfo = () => {
  const [user, setUser, deleteUser] = useLocalStorage("user", {});

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleUserChangeChange = () => {
    setUser({ name, age });
  };
  return (
    <div>
      <div>
        User: <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
      <input
        type='text'
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        type='number'
        value={age}
        onChange={event => setAge(event.target.value)}
      />
      <button onClick={handleUserChangeChange}>Ganti User</button>
      <button onClick={deleteUser}>Hapus User</button>
    </div>
  );
};

export default App_useCustomHook;
