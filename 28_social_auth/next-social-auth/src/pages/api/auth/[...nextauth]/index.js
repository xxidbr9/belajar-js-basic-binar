import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FecebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_ID
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID
    }),
    FecebookProvider({
      clientId: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_SECRET_ID
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(req) {
        console.log({ req });
        if (req.provider === "google-one-tap") {
          // PROSES MENGAMBIL DATA DARI BACKEND
          const newUser = await getFromGoogleOneTap(req.access_token);
          return newUser;
        } else if (req.provider === "form") {
          const { username, password } = req;
          const user = await getFromServer({ username, password });
          console.log({ user });
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      // post data access_token ke backend
      console.log({ account });
      return token;
    }
  }
};

export default NextAuth(authOptions);

// Get from Google One Tap
async function getFromGoogleOneTap(accessToken) {
  // const resp = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${accessToken}`)
  // const userInfo = resp.data
  const resp = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${accessToken}`
  );
  const userInfo = await resp.json();
  return {
    email: userInfo.email,
    id: userInfo.sub,
    name: userInfo.name,
    picture: userInfo.picture
  };
}

// Get from Google One Tap
async function getFromServer(data) {
  const resp = await fetch(`http://localhost:9000/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const userInfo = await resp.json();
  return {
    email: userInfo.data.email,
    id: userInfo.data.id,
    name: userInfo.data.fullname
  };
}
