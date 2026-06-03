import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(6, "Username wajib diisi")
    .regex(
      /^[a-zA-Z0-9]+$/,
      "Username hanya boleh berisi huruf dan angka tanpa spasi atau simbol",
    ),
  password: z
    .string()
    .min(6, "Password minimal 6 karakter")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password harus mengandung huruf besar, huruf kecil, dan angka",
    ),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 8,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.username = token.username as string;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const user = await prisma.user.findUnique({
          where: { username: parsed.data.username },
        });

        if (!user) return null;

        const passwordMatch = await bcrypt.compare(
          parsed.data.password,
          user.password,
        );

        if (!passwordMatch) return null;

        return {
          id: String(user.id),
          username: user.username,
          role: String(user.role),
        };
      },
    }),
  ],
});
