import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = credentials.email as string;
        const password = credentials.password as string;

        // Check Driver table first
        const driver = await prisma.driver.findUnique({
          where: { email },
        });

        if (driver) {
          const isValid = await compare(password, driver.passwordHash);
          if (!isValid) return null;
          if (!driver.emailVerified) {
            throw new Error("EMAIL_NOT_VERIFIED");
          }
          // Track login activity
          await prisma.driver.update({
            where: { id: driver.id },
            data: { lastLoginAt: new Date(), loginCount: { increment: 1 } },
          });
          return {
            id: driver.id,
            email: driver.email,
            name: driver.companyName || driver.firstName,
            role: "driver" as const,
            phone: driver.phone || "",
          };
        }

        // Check Organization table
        const org = await prisma.organization.findUnique({
          where: { email },
        });

        if (org) {
          const isValid = await compare(password, org.passwordHash);
          if (!isValid) return null;
          if (!org.emailVerified) {
            throw new Error("EMAIL_NOT_VERIFIED");
          }
          // Track login activity
          await prisma.organization.update({
            where: { id: org.id },
            data: { lastLoginAt: new Date(), loginCount: { increment: 1 } },
          });
          return {
            id: org.id,
            email: org.email,
            name: org.name,
            role: "organization" as const,
            orgType: org.type,
            phone: org.phone || "",
          };
        }

        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  useSecureCookies: process.env.NODE_ENV === "production",
  pages: {
    signIn: "/connexion",
  },
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.orgType = user.orgType;
        token.phone = user.phone;
      }
      if (trigger === "update" && token.id) {
        const role = (token.role as string) || "driver";
        if (role === "driver") {
          const driver = await prisma.driver.findUnique({
            where: { id: token.id as string },
            select: { firstName: true, lastName: true, companyName: true },
          });
          if (driver) {
            token.name = driver.companyName || driver.firstName;
          }
        } else if (role === "organization") {
          const org = await prisma.organization.findUnique({
            where: { id: token.id as string },
            select: { name: true },
          });
          if (org) {
            token.name = org.name;
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = (token.role as "driver" | "organization") || "driver";
        session.user.orgType = token.orgType;
        session.user.phone = (token.phone as string) || "";
        if (token.impersonatingFrom) {
          session.user.impersonatingFrom = token.impersonatingFrom;
        }
      }
      return session;
    },
  },
});
