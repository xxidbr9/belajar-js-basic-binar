import React, { useState } from "react";

const App = () => {
  // return <div>App</div>;
  // return <Register />;
  return <Login />;
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [resp, setResp] = useState({});
  const handleRegister = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email,
      password,
      fullname
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:9000/api/v1/user/register", requestOptions)
      .then(response => response.json())
      .then(result => setResp(result))
      .catch(error => console.log("error", error));
  };

  return (
    <div>
      <input
        type='text'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type='text'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type='text'
        value={fullname}
        onChange={e => setFullname(e.target.value)}
      />
      <button onClick={handleRegister}>submit</button>
      <pre>{JSON.stringify(resp, null, 2)}</pre>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resp, setResp] = useState({});

  const handleLogin = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email,
      password
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:9000/api/v1/user/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        localStorage.setItem("accessToken", result.data.access_token);
        setResp(result)
      })
      .catch(error => console.log("error", error));
  };

  return (
    <div>
      <input
        type='text'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type='text'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>submit</button>
      <pre>{JSON.stringify(resp, null, 2)}</pre>
    </div>
  );
};

export default App;
