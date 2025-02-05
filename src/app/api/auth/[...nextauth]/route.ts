import NextAuth, { Profile as NextAuthProfile } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Google from "next-auth/providers/google"

interface Profile extends NextAuthProfile {
  picture: string;
  avatar_url: string;
}

const authOptions = NextAuth ({
  providers: [
    // Configure one or more authentication providers
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),

    Google({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
      authorization: {
        params: {
          scope: "openid profile email https://www.googleapis.com/auth/userinfo.profile",
        },
      },
    }),
    // ...add more providers here
  ],

  callbacks: {
    async session({ session, token }) {
      // Ensure image is set from token if missing
      if (session.user && !session.user.image) {
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, profile }) {
      // Store user profile image if available
      if (profile) {
        token.picture = (profile as Profile).picture || null;
      }
      return token;
    },
  },
  
})
export { authOptions as GET, authOptions as POST}
