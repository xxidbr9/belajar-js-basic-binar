import React from "react";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";

const GOOGLE_CLIENT_ID =
  "78643481616-6nkg9a6mljeiu25mlm4j0mehbn04o963.apps.googleusercontent.com";
const App = () => {
  React.useEffect(() => {
    const start = () => {
      /* 
      GOOGLE_SECRET_ID=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
      GOOGLE_CLIENT_ID=78643481616-6nkg9a6mljeiu25mlm4j0mehbn04o963.apps.googleusercontent.com
      */
      gapi.client.init({
        clientId: GOOGLE_CLIENT_ID,
        scope: "email"
      });
    };

    gapi.load("client:auth2", start);
  }, []);

  const responseGoogle = async response => {
    const {
      profileObj: { email },
      accessToken
    } = response;

    const resp = await fetch(
      `http://localhost:9000/callback/google?access_token=${accessToken}`
    );

    const json = await resp.json();
    console.log({ json });
    // tembak ke api kita
  };

  return (
    <div>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        render={renderProps => (
          <button
            variant='secondary'
            className='w-full'
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}>
            <span className='flex gap-x-4 items-center'>
              Continue With Google
            </span>
          </button>
        )}
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default App;
