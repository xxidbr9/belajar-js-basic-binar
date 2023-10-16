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
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        if (req.provider === "google-one-tap") {
          console.log({ req });
          // PROSES MENGAMBIL DATA DARI BACKEND
          const newUser = getFromGoogleOneTap(req.access_token);
          return newUser;
        } else {
          return user;
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
