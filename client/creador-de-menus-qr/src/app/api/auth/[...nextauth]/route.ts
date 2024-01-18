import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { API_URL_LOGIN } from "@/common/API_URL";

type customUser = {
  id: string;
  name: string;
  email: string;
};

type customCredentials = {
  email: string;
  password: string;
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const response = await fetch(API_URL_LOGIN, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const user: customUser = await response.json();

        if (user && user.name) {
          const sessionUser: User = {
            id: user.id,
            name: user.name,
            email: user.email,
          };
          console.log("sessionUser - login exitoso", sessionUser);
          return sessionUser;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub; // sub es el id de google o el id de la base de datos
      }
      return session;
    },
  },
  pages: {
    // signIn: "/auth/login",
  },
});

export { handler as POST, handler as GET };
