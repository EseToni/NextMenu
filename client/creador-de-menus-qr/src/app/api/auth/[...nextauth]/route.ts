import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
        const user: customUser = await fetch(
          "http://localhost:3001/api/login",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        ).then(async (res) => {
          if (res.ok) {
            return await res.json();
          } else {
            return null;
          }
        });

        if (user && user.name) {
          const sessionUser: User = {
            id: user.id,
            name: user.name,
            email: user.email,
          };
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
  pages: {
    // signIn: "/auth/login",
  },
});

export { handler as POST, handler as GET };
