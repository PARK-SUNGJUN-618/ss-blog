import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubAuthProvider from "next-auth/providers/github";

const authOptions: NextAuthOptions = {
  providers: [
    GitHubAuthProvider({
      clientId,
      clientSecret,
    }),
  ],
};

export default NextAuth(authOptions);
