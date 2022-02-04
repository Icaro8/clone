import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
require("dotenv").config();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});
/*
 process.env.AUTH0_CLIENT_ID
 process.env.AUTH0_CLIENT_SECRET
  process.env.AUTH0_ISSUER
 */
