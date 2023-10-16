import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GoogleOneTapLogin from "react-google-one-tap-login";

const OneTapLogin = props => {
  const router = useRouter();
  const _handleOneTapLogin = oneTapData => {
    const credentialsProvider = "google-one-tap";
    signIn("credentials", {
      access_token: oneTapData.credential,
      provider: credentialsProvider
    });
  };

  const session = useSession();

  const isOauthScreen =
    router.query?.from === "facebook" || router.query?.from === "google";

  const isOneTapShow =
    props.isLogin || isOauthScreen || session.status === "authenticated";

  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    setIsDisabled(isOneTapShow);
  }, [isOneTapShow]);

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <GoogleOneTapLogin
      disabled={isDisabled}
      googleAccountConfigs={{
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
        callback: _handleOneTapLogin
      }}
    />
  );
};

export default OneTapLogin;
