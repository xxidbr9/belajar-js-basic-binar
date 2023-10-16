import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { useCallback, useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = useCallback(async () => {
    const credentialsProvider = "form";
    try {
      await signIn("credentials", {
        username,
        password,
        provider: credentialsProvider,
        callbackUrl: "/"
      });
    } catch (er) {}
  }, [username, password]);
  return (
    <div>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
};

export default LoginPage;
