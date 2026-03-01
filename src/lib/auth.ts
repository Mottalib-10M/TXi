import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const driver = await prisma.driver.findUnique({
          where: { email: credentials.email as string },
        });

        if (!driver) return null;

        const isValid = await compare(
          credentials.password as string,
          driver.passwordHash
        );

        if (!isValid) return null;

        return {
          id: driver.id,
          email: driver.email,
          name: `${driver.firstName} ${driver.lastName}`,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/connexion",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
