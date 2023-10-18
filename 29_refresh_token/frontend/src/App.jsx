import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [resp, setResp] = useState({});
  const navigate = useNavigate();
  useAlreadyLogin(true);
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
      .then(result => {
        setResp(result);
        navigate("/sign-in");
      })
      .catch(error => console.log("error", error));
  };

  return (
    <div>
      <div>
        <Link to={"/sign-in"}>Login</Link>
      </div>
      <div>
        <input
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='email'
        />
        <input
          type='text'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='password'
        />
        <input
          type='text'
          value={fullname}
          onChange={e => setFullname(e.target.value)}
          placeholder='fullname'
        />
        <button onClick={handleRegister}>submit</button>
        <pre>{JSON.stringify(resp, null, 2)}</pre>
      </div>
    </div>
  );
};

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resp, setResp] = useState({});
  const navigate = useNavigate();
  useAlreadyLogin(true);
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
        localStorage.setItem("refreshToken", result.data.refresh_token);
        setResp(result);
        navigate("/");
      })
      .catch(error => console.log("error", error));
  };

  return (
    <div>
      <div>
        <Link to={"/sign-up"}>Register</Link>
      </div>
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
    </div>
  );
};

export const Profile = () => {
  const [resp, setResp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useAlreadyLogin();
  const navigate = useNavigate();

  const getUserProfile = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      setIsLoading(false);
      return;
    } // berhenti jika tidak ada accessToken

    const userProfile = await getUserProfileApi(accessToken);
    setResp(userProfile);
    setIsLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/sign-in");
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={handleLogout}>Logout</button>
      {isLoading && <div>Loading....</div>}
      {!isLoading && (
        <div>
          <pre>{JSON.stringify(resp, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

// hooks check is login
const useAlreadyLogin = (isAuthPage = false) => {
  const navigate = useNavigate();

  useEffect(() => {
    // if (isAuthPage) navigate("/");
    // const accessToken = localStorage.getItem("accessToken");
    // if (!accessToken) navigate("/sign-in");
  }, []);
};

// function call profile
const getUserProfileApi = async accessToken => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`); // tergantung di backend, Bearer hanya untuk standarisasi

  const requestOptions = {
    headers,
    method: "GET"
  };

  const resp = await fetch(
    "http://localhost:9000/api/v1/user/profile",
    requestOptions
  );
  return await resp.json();
};
